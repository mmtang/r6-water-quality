import fnmatch
import os
import pandas as pd
from scipy import stats
import json

path = '../data/' 
data_files = fnmatch.filter(os.listdir(path), '*_Data.csv')

# *** import data ***
site_dict = {}
for file in data_files:
    target_path = path + file
    site_code = file.split('_')[0]
    df_site = pd.read_csv(target_path, 
        usecols = ['SampleDate', 'Analyte', 'DataValue'],
        parse_dates = ['SampleDate'])
    # convert date to numeric, required for scipy
    df_site.SampleDate = pd.to_numeric(df_site.SampleDate)
    # filter data by analyte
    analyte_dict = {}
    for analyte in df_site.Analyte.unique():
        df_analyte = df_site[df_site['Analyte'] == analyte]
        analyte_dict[analyte] = df_analyte.filter(items = ['SampleDate', 'DataValue'])
    # add dictionary to site dictionary
    site_dict[site_code] = analyte_dict

# *** calculate correlation ***
# new site dictionary to hold analyte dictionary
corr_site_dict = {}
# iterate through existing site dictionary
for site in site_dict:
    # get set of analytes (and data) for current site
    analyte_set = site_dict[site]
    # create new analyte dictionary for calculations
    corr_analyte_dict = {}
    for analyte in analyte_set:
        # line below is using pandas to calculate kendall's tau, 
        # df = analyte_dict[analyte].corr(method='kendall')
        # changed this - now using scipy instead because it calculates p-value
        data = analyte_set[analyte]
        count = len(data)
        tau, p_value = stats.kendalltau(data.SampleDate, data.DataValue)
        corr_analyte_dict[analyte] = {'n': count, 'tau': tau, 'p_value': p_value}
    corr_site_dict[site] = corr_analyte_dict

# *** write to json files ***
for site in corr_site_dict:
    output_file = site + '_Trends.json'
    with open(output_file, 'w') as f:
        json.dump(corr_site_dict[site], f)

