(window["webpackJsonpr6-wq-dashboard"]=window["webpackJsonpr6-wq-dashboard"]||[]).push([[0],{157:function(e,t,a){e.exports=a.p+"static/media/r6_boundary.8eb17952.geojson"},159:function(e,t,a){e.exports=a(383)},164:function(e,t,a){},381:function(e,t,a){},383:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(156),l=a.n(o),c=(a(164),a(57)),i=a(8),s=a(9),d=a(11),u=a(10),m=a(12),p=(a(165),{"Phosphorus as P, Total":"PhosphorusAsP","Phosphorus, Total":"Phosphorus","Total Dissolved Solids":"TDS","Boron, Dissolved":"BoronD","Boron, Total":"BoronT","Chloride, Dissolved":"Chloride","Sulfate, Dissolved":"Sulfate","Nitrogen, Total (Calculated)":"NitrogenCalc","Turbidity, Total":"Turbidity",Temperature:"Temperature","Oxygen, Dissolved, Total":"OxygenDissolved","Alkalinity as CaCO3, Total":"Alkalinity","Oxygen, Saturation, Total":"OxygenSaturation","Coliform, Fecal (Single Sample)":"ColiformFecalSingle","E. coli (Single Sample)":"EcoliSingle","E. coli (Geometric Mean)":"EcoliGM","Fluoride, Dissolved":"Fluoride",pH:"pH","Total Suspended Solids":"TSS","Specific Conductivity":"SConductivity","Electrical Conductivity":"EConductivity","Sodium, Dissolved":"Sodium","Potassium, Dissolved":"Potassium","Nitrogen, Total":"Nitrogen","Magnesium, Dissolved":"Magnesium","Calcium, Dissolved":"Calcium",Salinity:"Salinity","OrthoPhosphate as P, Dissolved":"Orthophosphate","Kjeldahl Nitrogen, Total":"KjeldahlN","Nitrate as Nitrogen":"NitrateAsNitrogen","Nitrate + Nitrite as N, Dissolved":"NitrateNitrite","Nitrogen, Total, Total":"Nitrogen"}),h={0:[0,16],1:[1,15],2:[2,16],3:[3,15],4:[4,16],5:[5,16],6:[6,16],7:[7,16],8:[8,16],9:[9,16],10:[10,16],11:[11,16]},f=function(e,t){var a=e.getFullYear();if("Annual Average"===t)return new Date(a,1,1);if("Monthly Mean"===t){var n=h[e.getMonth()];return new Date(a,n[0],n[1])}return e},g=function(e,t){var a=e.getFullYear();if("Annual Average"===t)return new Date(a,1,1);if("Monthly Mean"===t){var n=h[e.getMonth()];return new Date(a,n[0],n[1])}return e},v=function(e){return e.p_value>.05?"No Significant Trend":e.tau<0?"Decreasing":e.tau>0?"Increasing":"No Significant Trend"},y=function(e){(new Image).src=e},b=function(e){return+(Math.round(e+"e+2")+"e-2")},E=function(e){return e.sort((function(e,t){return(e=e.toLowerCase())===(t=t.toLowerCase())?0:e<t?-1:1}))},j=a(88),w=function(e){function t(){return Object(i.a)(this,t),Object(d.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return this.props.sites.map((function(e){return r.a.createElement(r.a.Fragment,{key:e.id},r.a.createElement("option",{value:e.code},e.name))}))}}]),t}(n.Component),N=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).handleChange=a.handleChange.bind(Object(j.a)(a)),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"handleChange",value:function(e){this.props.changeActiveSite(e.target.value)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{className:"form-inline"},r.a.createElement("select",{id:"site-select",className:"form-control form-control-sm",value:this.props.selected.code,onChange:this.handleChange},r.a.createElement(w,{sites:this.props.sites}))))}}]),t}(n.Component),O=a(157),x=a.n(O),D=a(89),C=a.n(D),S=a(5),k=a(1),T=a.n(k),M=(a(377),function(e){function t(){return Object(i.a)(this,t),Object(d.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"activeStyle",value:function(){return{color:"#fff",fillColor:"#d34a37",fillOpacity:.9,weight:1,radius:9}}},{key:"boundaryStyle",value:function(){return{weight:2,fillColor:"#e0ddd0",fillOpacity:0,color:"#877968"}}},{key:"defaultStyle",value:function(){return{color:"#fff",fillColor:"#046b99",fillOpacity:.9,weight:1,radius:9}}},{key:"drawBoundary",value:function(){var e=this;S.f(x.a).then((function(t){var a=t.features[0];T.a.geoJson(a,{pane:"boundaryPane",style:e.boundaryStyle}).addTo(e.map)}))}},{key:"drawMarkers",value:function(){var e=this;this.siteLayer=T.a.featureGroup().addTo(this.map),S.c(C.a).then((function(t){t.forEach((function(e){e.id=+e.id,e.lat=+e.lat,e.long=+e.long})),t.forEach((function(t){var a='<div class="pic-container">'+t.name+"<br />("+t.code+")<br/ ></div>",n=T.a.circleMarker([t.lat,t.long],{pane:"circlePane",style:e.defaultStyle});n.code=t.code,n.on("click",(function(t){e.props.changeActiveSite(t.target.code)})).addTo(e.siteLayer).bindTooltip(a,{className:"map-tooltip"})})),e.map.fitBounds(e.siteLayer.getBounds())}))}},{key:"componentDidMount",value:function(){this.map=T.a.map("map",{center:[39.4068,-119.7824],zoom:8,preferCanvas:!0}),a(382).basemapLayer("Topographic").addTo(this.map),this.map.createPane("boundaryPane"),this.map.createPane("circlePane"),this.drawBoundary(),this.drawMarkers()}},{key:"componentDidUpdate",value:function(){var e=this;Object.keys(this.siteLayer._layers).forEach((function(t){e.siteLayer._layers[t].code===e.props.selected.code?e.siteLayer._layers[t].setStyle(e.activeStyle()):e.siteLayer._layers[t].setStyle(e.defaultStyle())}))}},{key:"render",value:function(){return r.a.createElement("div",{id:"map"})}}]),t}(n.Component)),A=function(e){function t(){return Object(i.a)(this,t),Object(d.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("img",{id:"site-pic",className:"card-img",src:"./images/"+this.props.site.image,alt:"Photo of "+this.props.site.name})}}]),t}(n.Component),V=function(e){function t(){return Object(i.a)(this,t),Object(d.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{id:"site-info-card",className:"card mb-3"},r.a.createElement("div",{className:"row no-gutters"},r.a.createElement("div",{className:"col-md-9"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h2",{className:"card-title site-title"},this.props.selected.display),r.a.createElement("p",{className:"card-text"},this.props.selected.desc))),r.a.createElement("div",{className:"col-md-3"},r.a.createElement(A,{site:this.props.selected})))))}}]),t}(n.Component),L=function(e){function t(){return Object(i.a)(this,t),Object(d.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=new Set;this.props.data.forEach((function(e){t.add(e.SampleDate.getFullYear())}));var a=[];return t.forEach((function(t){var n=e.props.data.filter((function(e){return e.SampleDate.getFullYear()===t}));a.push({year:t,data:n,analyte:e.props.data[0].Analyte})})),a.sort((function(e,t){return t.year-e.year})).map((function(t){return r.a.createElement(r.a.Fragment,{key:t.year},r.a.createElement("tr",{className:p[t.analyte]+" collapse out"},r.a.createElement("td",null,"\xa0\xa0\xa0\xa0\xa0\xa0\xa0",t.year),r.a.createElement("td",{className:"text-right"},r.a.createElement("ion-icon",{name:"remove",alt:"No objective displayed for year"})),r.a.createElement("td",{className:"text-right"},e.props.getCount(t.data)),r.a.createElement("td",{className:"text-right"},b(e.props.getMean(t.data))),r.a.createElement("td",{className:"text-right"},b(e.props.getMedian(t.data))),r.a.createElement("td",{className:"text-right"},b(e.props.getMin(t.data))),r.a.createElement("td",{className:"text-right"},b(e.props.getMax(t.data))),r.a.createElement("td",{className:"text-right"},r.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.props.objectiveValue}}))))}))}}]),t}(n.Component),I=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).getCount=function(e){return e.length},a.getMin=function(e){var t=e.map((function(e){return e.DataValue}));return S.j(t)},a.getMax=function(e){var t=e.map((function(e){return e.DataValue}));return S.g(t)},a.getMedian=function(e){var t=e.map((function(e){return e.DataValue}));return S.i(t)},a.getMean=function(e){var t=e.map((function(e){return e.DataValue}));return S.h(t)},a.getObjective=function(e,t){if("pH"===e)return"6.5-8.5";var a=t.filter((function(t){return t.Analyte===e}));return a.length>0?a[0].Value:'<ion-icon name="remove" alt="No objective"></ion-icon>'},a.getTrendIcon=function(e){switch(v(e)){case"No Significant Trend":return'<ion-icon name="remove" alt="No significant trend"></ion-icon>';case"Decreasing":return'<ion-icon name="arrow-round-down" alt="Decreasing trend"></ion-icon>';case"Increasing":return'<ion-icon name="arrow-round-up" alt="Increasing trend"></ion-icon>';default:return'<ion-icon name="help" alt="Error"></ion-icon>'}},a.handleClick=function(e){a.toggleArrow(e.target)},a.toggleArrow=function(e){var t=e.closest("tr").childNodes[0].childNodes[0];t.name="arrow-dropright"===t.name?"arrow-dropdown":"arrow-dropdown"===t.name?"arrow-dropright":"help"},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return this.props.analytes.sort((function(e,t){var a=e.name.toLowerCase(),n=t.name.toLowerCase();return a>n?1:n>a?-1:0})).map((function(t){return r.a.createElement(r.a.Fragment,{key:p[t.name]},r.a.createElement("tr",{"data-toggle":"collapse","data-target":"."+p[t.name],className:"clickable",onClick:e.handleClick},r.a.createElement("td",null,r.a.createElement("ion-icon",{name:"arrow-dropright",alt:"Click to expand/contract table row"}),"\xa0\xa0",t.name),r.a.createElement("td",{className:"text-right"},r.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.getTrendIcon(e.props.trends[t.name])}})),r.a.createElement("td",{className:"text-right"},e.getCount(t.data)),r.a.createElement("td",{className:"text-right"},b(e.getMean(t.data))),r.a.createElement("td",{className:"text-right"},b(e.getMedian(t.data))),r.a.createElement("td",{className:"text-right"},b(e.getMin(t.data))),r.a.createElement("td",{className:"text-right"},b(e.getMax(t.data))),r.a.createElement("td",{className:"text-right"},r.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.getObjective(t.name,e.props.objectives)}}))),r.a.createElement(L,{data:t.data,getCount:e.getCount,getMin:e.getMin,getMax:e.getMax,getMedian:e.getMedian,getMean:e.getMean,objectiveValue:e.getObjective(t.name,e.props.objectives)}))}))}}]),t}(n.Component),_=function(e){function t(){return Object(i.a)(this,t),Object(d.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{id:"table-card",className:"card"},r.a.createElement("div",{className:"card-header"},"Summary Table"),r.a.createElement("div",{className:"card-body table-responsive table-wrapper"},r.a.createElement("table",{className:"table table-sm table-hover"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col",className:"column-analyte"},"Analyte"),r.a.createElement("th",{scope:"col",className:"text-right col"},"Trend"),r.a.createElement("th",{scope:"col",className:"text-right col"},"Count"),r.a.createElement("th",{scope:"col",className:"text-right col"},"Mean"),r.a.createElement("th",{scope:"col",className:"text-right col"},"Median"),r.a.createElement("th",{scope:"col",className:"text-right col"},"Min"),r.a.createElement("th",{scope:"col",className:"text-right col"},"Max"),r.a.createElement("th",{scope:"col",className:"text-right col"},"Objective"))),r.a.createElement("tbody",null,r.a.createElement(I,{analytes:this.props.analytes,objectives:this.props.objectives,trends:this.props.trends}))))))}}]),t}(n.Component),R=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).downloadCSV=function(e){var t="R6_Download_"+Date.now()+".csv",n=a.formatData(e),r=a.convertToCSV(n);if(a.checkEdge()){var o=new Blob([r],{type:"data:text/csv;charset=utf-8;"}),l=document.createElement("a"),c=URL.createObjectURL(o);l.setAttribute("href",c),l.setAttribute("download",t);var i=new MouseEvent("click",{view:window,bubbles:!0,cancelable:!1});l.dispatchEvent(i)}else{var s=document.createElement("a");s.href="data:text/csv;charset=utf-8,"+encodeURIComponent(r),s.target="_blank",s.download=t,document.body.appendChild(s),s.click()}},a.formatData=function(e){var t=S.q("%Y-%m-%d");return e.map((function(e){return{SiteCode:'"'+e.SiteCode+'"',SampleDate:t(e.SampleDate),Analyte:'"'+e.Analyte+'"',Unit:'"'+e.Unit+'"',Result:e.DataValue,MDL:e.MDL,RL:e.RL,ResQualCode:'"'+e.ResQualCode+'"',QACode:'"'+e.QACode+'"',Compliance:'"'+e.Compliance+'"'}}))},a.convertToCSV=function(e){var t="";return t+=Object.keys(e[0])+"\r\n"+e.map((function(e){return Object.keys(e).map((function(t){return e[t]})).join(",")})).join("\r\n")},a.checkEdge=function(){console.log("test");var e=window.navigator.userAgent;return!!/edge|msie\s|trident\//i.test(e)},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("button",{type:"button",className:"btn btn-secondary btn-sm",onClick:function(){e.downloadCSV(e.props.data)}},r.a.createElement("ion-icon",{name:"download",style:{fontSize:"16px",color:"#fff"},alt:"Download icon"}),"\xa0\xa0",this.props.label,"\xa0")}}]),t}(n.Component),P=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).bufferX=function(e,t){var a=e[0].getTime(),n=e[1].getTime();t&&t.forEach((function(e){var t=g(e.Date,e.DataType).getTime();t<a&&(a=t)}));var r=n-a,o=n+.05*r;return[new Date(a-.05*r),new Date(o)]},a.drawChart=function(){var e=30,t=20,n=30,r=60,o=495+r+t,l=275+e+n,c=p[a.props.analyte.name],i=a.props.analyte.data,s=a.props.analyte.average,d=a.props.analyte.objective,u=c+"-chart",m=S.m("#"+c).append("svg").attr("id",u).attr("className","chart").attr("width",o).attr("height",l).call((function(){a.responsive(u)}));m.append("clipPath").attr("id","clip-range").append("rect").attr("x",r+1).attr("y",0).attr("width",o-r-t).attr("height",l-n+8),m.append("clipPath").attr("id","clip").append("rect").attr("x",r-4).attr("y",0).attr("width",o-r-t+8).attr("height",l-n+4),m.append("clipPath").attr("id","clean-clip").append("rect").attr("x",r).attr("y",0).attr("width",o-r-t).attr("height",l-n);var h=S.m("body").append("div").attr("id",c+"-tooltip").attr("class","tooltip").style("opacity",0);m.append("g").attr("class","x axis").attr("transform","translate(0,"+(l-n)+")"),m.append("g").attr("class","y axis").attr("transform","translate("+r+", 0)");var f=S.d(i,(function(e){return e.SampleDate})),g=a.bufferX(f,s),v=S.g(i,(function(e){return e.DataValue}));d.length>0&&d[0].Value>v&&(v=d[0].Value);var y=S.l().domain(g).range([r,o-t]),b=S.k().domain([0,v]).range([l-n,e]),E=S.a().scale(y).ticks(5),j=S.b().scale(b).ticks(5);if(d.length>0&&"Range"===d[0].ObjClass){var w=m.append("g").attr("className","range-g").attr("clip-path","url(#clip-range)");w.append("rect").attr("visibility","visible").attr("x",0).attr("y",b(d[0].Upper)).attr("width",o).attr("height",b(d[0].Lower)-b(d[0].Upper)).attr("fill","#d6d6d6").style("opacity",.5),w.append("text").attr("class","range-label").attr("x",r+"px").attr("y",b(d[0].Upper)).attr("transform","translate(5, -5)").attr("text-anchor","left").text("Range: "+d[0].Lower+" \u2014 "+d[0].Upper+" "+d[0].Unit)}var N=m.append("g").attr("clip-path","url(#clip)");N.selectAll(".circle").data(i).enter().append("circle").attr("className","circle").attr("r",4).attr("cx",(function(e){return y(e.SampleDate)})).attr("cy",(function(e){return b(e.DataValue)})).attr("fill",(function(e){return a.getColor(e,d)})).on("mouseover",(function(e){var t=S.q("%b %e, %Y");return h.style("opacity",1).html(t(e.SampleDate)+"<br>"+e.DataValue+" "+e.Unit+"<br>"+e.Label)})).on("mousemove",(function(){return h.style("top",window.event.pageY-20+"px").style("left",window.event.pageX+10+"px")})).on("mouseout",(function(){return h.style("opacity",0)})).merge(N).attr("cx",(function(e){return y(e.SampleDate)})).attr("cy",(function(e){return b(e.DataValue)})),N.exit().remove();var O=S.o().type(S.p).size(64),x=m.append("g").attr("clip-path","url(#clean-clip)");if(x.selectAll(".diamond").data(s).enter().append("path").attr("class","diamond").attr("d",O).attr("transform",(function(e){return"translate("+y(e.AdjustedDate)+","+b(e.DataValue)+")"})).style("fill",(function(e){return a.getColor(e,d)})).on("mouseover",(function(e){var t,a=S.e(".2f");return"Annual Average"===e.DataType?t=S.q("%Y"):"Monthly Mean"===e.DataType&&(t=S.q("%b %Y")),h.style("opacity",1).html(e.DataType+": "+t(e.AdjustedDate)+"<br>"+a(e.DataValue)+" "+e.Unit)})).on("mousemove",(function(){return h.style("top",window.event.pageY-20+"px").style("left",window.event.pageX+10+"px")})).on("mouseout",(function(){return h.style("opacity",0)})),x.exit().remove(),d.length>0&&("Max"===d[0].Type||"Min"===d[0].Type)){var D=m.append("g").datum(d[0]).attr("clip-path","url(#clean-clip)");D.append("line").attr("className","objective").style("stroke","#e74c3c").style("stroke-width","2px").attr("x1",0).attr("x2",o).attr("y1",(function(e){return b(e.Value)})).attr("y2",(function(e){return b(e.Value)})),D.append("text").attr("class","line-label").attr("x",r+"px").attr("y",(function(e){return b(e.Value)})).attr("transform","translate(5, -5)").attr("text-anchor","left").text((function(e){return e.Label+": "+e.Value+" "+e.Unit}))}m.select(".x.axis").call(E),m.select(".y.axis").call(j),m.append("text").attr("class","axis-label").attr("text-anchor","middle").attr("transform","translate(12,"+l/2+") rotate(-90)").text(i[0].Unit)},a.getColor=function(e,t){var a="#e84141";if(!(t.length>0))return"#4d5e6b";switch(t[0].Type){case"Max":return e.DataValue>t[0].Value?a:"#147554";case"Min":return e.DataValue<t[0].Value?a:"#147554";case"Range":return e.DataValue>=t[0].Lower&&e.DataValue<=t[0].Upper?"#147554":a;default:return"#4d5e6b"}},a.responsive=function(e){var t=S.m("#"+e),a=t.node().parentNode,n=parseInt(t.style("width")),r=parseInt(t.style("height")),o=n/r;function l(){var e=parseInt(a.offsetWidth);t.attr("width",e),t.attr("height",Math.round(e/o))}t.attr("viewBox","0 0 "+n+" "+r).attr("perserveAspectRatio","xMinYMid").call(l),S.m(window).on("resize."+a.id,l)},a.componentDidMount=function(){a.drawChart()},a.componentDidUpdate=function(){a.drawChart()},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null)}}]),t}(n.Component),U=function(e){function t(){return Object(i.a)(this,t),Object(d.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"getIcon",value:function(e){switch(e){case"No Significant Trend":return"remove";case"Decreasing":return"trending-down";case"Increasing":return"trending-up";default:return"help"}}},{key:"render",value:function(){var e=v(this.props.trend),t=this.getIcon(e),a=S.e(".2f");return r.a.createElement("div",{className:"p-2 bd-highlight"},r.a.createElement("div",{className:"trend-card card"},r.a.createElement("div",{className:"card-header"},"Trend"),r.a.createElement("div",{className:"card-body"},r.a.createElement("ion-icon",{name:t,style:{fontSize:"72px"},alt:e}),r.a.createElement("h6",{className:"card-title"},e),r.a.createElement("p",{className:"small-text mb-2"},r.a.createElement("small",null,"Kendall's tau-b: ",a(this.props.trend.tau)),r.a.createElement("br",null),r.a.createElement("small",null,"p-value: ",a(this.props.trend.p_value)),r.a.createElement("br",null),r.a.createElement("small",null,"n = ",this.props.trend.n)))))}}]),t}(n.Component),B=function(e){function t(){return Object(i.a)(this,t),Object(d.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return this.props.analytes.map((function(t){return r.a.createElement("div",{key:p[t.name]},r.a.createElement("h4",{className:"analyte-title"},t.name),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 col-md-12 col-lg-8 col-xl-9"},r.a.createElement("div",{id:p[t.name],className:"graph-wrapper"})),r.a.createElement("div",{className:"trend-box col-12 col-md-12 col-lg-4 col-xl-3"},r.a.createElement(U,{analyte:t.name,trend:e.props.trends[t.name]}),r.a.createElement("div",{className:"download-wrapper float-right"},r.a.createElement(R,{data:t.data,label:"Download data"})))),r.a.createElement(P,{analyte:t}),r.a.createElement("hr",null))}))}}]),t}(n.Component),F=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).sortByRank=function(){var e=new Set,t=new Set,n=new Set;a.props.data.forEach((function(a){switch(a.Rank){case 1:e.add(a.Analyte);break;case 2:t.add(a.Analyte);break;case 3:n.add(a.Analyte);break;default:console.log("Error. Missing Rank value.")}}));var r=E(Array.from(e)),o=E(Array.from(t)),l=E(Array.from(n)),i=[].concat(Object(c.a)(r),Object(c.a)(o),Object(c.a)(l)),s=[];return i.forEach((function(e){var t=a.props.data.filter((function(t){return t.Analyte===e})),n=a.props.averages.filter((function(t){return t.Analyte===e})),r=a.props.objectives.filter((function(t){return t.Analyte===e}));s.push({name:e,data:t,average:n,objective:r})})),s},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.sortByRank();return S.n("svg").remove(),S.n(".tooltip").remove(),r.a.createElement("div",{id:"graph-card",className:"card"},r.a.createElement("div",{className:"card-header"},r.a.createElement("div",{className:"d-flex flex-row justify-content-between align-items-center card-header-wrapper"},r.a.createElement("div",null,"Water Quality Data"),r.a.createElement("div",{className:"download-wrapper"},r.a.createElement(R,{data:this.props.data,label:"Download all data"})))),r.a.createElement("div",{className:"card-body"},r.a.createElement(B,{analytes:e,trends:this.props.trends})))}}]),t}(n.Component),W=a(38),Y=a.n(W),H=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).handleClick=function(){a.scrollToTop()},a.scrollToTop=function(){Y()("body, html, #right").animate({scrollTop:0},"slow")},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("button",{onClick:this.handleClick},r.a.createElement("a",{id:"return-to-top"},r.a.createElement("ion-icon",{name:"ios-arrow-up",id:"return-icon",alt:"Return to the top of the page"})))}}]),t}(n.Component),Q=function(e){function t(){return Object(i.a)(this,t),Object(d.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){Y()(window).on("load",(function(){Y()("#welcome-modal").modal({backdrop:"static",keyboard:!1}),Y()("#welcome-modal").modal("show")}))}},{key:"render",value:function(){return r.a.createElement("div",{id:"welcome-modal",className:"modal",tabIndex:"-1",role:"dialog"},r.a.createElement("div",{className:"modal-dialog modal-dialog-centered",role:"document"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-header"},r.a.createElement("h5",{className:"modal-title"},r.a.createElement("ion-icon",{id:"alert-icon",name:"alert",alt:"Attention icon"}),"\xa0\xa0Disclaimer")),r.a.createElement("div",{className:"modal-body"},r.a.createElement("div",{className:"text-center"},r.a.createElement("a",{href:"https://github.com/CAWaterBoardDataCenter",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{id:"data-center-logo",className:"img-fluid",src:"images/data_center_logo.png",alt:"Water Boards Data Center logo"}))),r.a.createElement("p",null,r.a.createElement("strong",null,"This application is in early development.")," It may change at any time without prior notification. All data provided are provisional and should not be used for any particular purpose other than general reference. "),r.a.createElement("p",null,"This application is best viewed in Firefox, Chrome, or Safari. Internet Explorer is not supported.")),r.a.createElement("div",{className:"modal-footer"},r.a.createElement("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal"},"Close")))))}}]),t}(n.Component),q=(a(378),a(379),a(381),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={selected:{},data:[],averages:[],objectives:[],analytes:[],sites:[]},a.changeActiveSite=function(e){if(e!==a.state.selected.code){var t=a.state.sites[a.state.sites.findIndex((function(t){return t.code===e}))];a.loadData(t)}},a.loadData=function(e){var t=S.r("%-m/%-d/%y"),n="./data/"+e.code+"_Data.csv",r="./data/"+e.code+"_Averages.csv",o="./data/"+e.code+"_Objectives.csv",l="./trend/"+e.code+"_Trends.json";Promise.all([S.c(n),S.c(r),S.c(o),S.f(l)]).then((function(n){var r=n[0],o=n[1],l=n[2],i=n[3];r.forEach((function(e){e.SampleDate=t(e.SampleDate),e.DataValue=+e.DataValue,e.Rank=+e.Rank})),o.forEach((function(e){e.Date=t(e.Date),e.AdjustedDate=f(e.Date,e.DataType),e.DataValue=+e.DataValue})),l.forEach((function(e){e.Value=+e.Value,e.Upper=+e.Upper,e.Lower=+e.Lower}));var s=r.map((function(e){return e.Analyte})),d=Object(c.a)(new Set(s)),u=[];d.forEach((function(e){var t=r.filter((function(t){return t.Analyte===e})),a=o.filter((function(t){return t.Analyte===e})),n=l.filter((function(t){return t.Analyte===e}));u.push({name:e,data:t,average:a,objective:n})})),a.setState({selected:e,data:r,averages:o,objectives:l,analytes:u,trends:i})}))},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;S.c(C.a).then((function(t){t.forEach((function(e){e.id=+e.id,e.lat=+e.lat,e.long=+e.long})),e.setState({sites:t}),y("./images/630EWK001.jpg"),y("./images/631WWK001.jpg"),y("./images/632ECR005.jpg"),y("./images/633WCR002.jpg"),y("./images/635TRK002.jpg"),y("./images/637SUS001.jpg"),Y()("body, html, #right").scrollTop();var a=t[t.findIndex((function(e){return"637SUS001"===e.code}))];e.loadData(a)}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("nav",{className:"navbar fixed-top navbar-dark bg-dark"},r.a.createElement("a",{className:"navbar-brand",href:"https://www.waterboards.ca.gov/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{className:"nav-logo",src:"./images/wb_logo.png",alt:"Water Boards Logo"}),r.a.createElement("div",{className:"nav-text"},"Lahontan Regional Board - Water Quality Monitoring Dashboard")),r.a.createElement(N,{sites:this.state.sites,selected:this.state.selected,changeActiveSite:this.changeActiveSite})),r.a.createElement("div",{id:"app-wrapper",className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{id:"map-container",className:"col-md-4"},r.a.createElement(M,{sites:this.state.sites,selected:this.state.selected,changeActiveSite:this.changeActiveSite,style:{height:"100vh - 68px"}})),r.a.createElement("div",{id:"right",className:"col-md-8"},r.a.createElement("main",null,r.a.createElement("section",null,r.a.createElement("div",{id:"info-container",style:{maxWidth:"823px"}},r.a.createElement(V,{selected:this.state.selected}))),r.a.createElement("section",null,r.a.createElement("div",{id:"table-container",style:{maxWidth:"823px"}},r.a.createElement(_,{selected:this.state.selected,analytes:this.state.analytes,objectives:this.state.objectives,trends:this.state.trends}))),r.a.createElement("section",null,r.a.createElement("div",{id:"graph-container",style:{maxWidth:"823px"}},r.a.createElement(F,{data:this.state.data,averages:this.state.averages,objectives:this.state.objectives,trends:this.state.trends}))))),r.a.createElement(H,null))),r.a.createElement(Q,null))}}]),t}(n.Component));if(function(){var e=navigator.userAgent;return e.indexOf("MSIE ")>-1||e.indexOf("Trident/")>-1}()){document.getElementById("root").innerHTML="<p class='text-center'><strong>Internet Explorer is not supported.</strong><br>Please try opening the application using the latest version of FireFox, Chrome, or Safari.</p><p class='text-center'><a href='mailto:swamp@waterboards.ca.gov'>Questions?</a></p>"}else l.a.render(r.a.createElement(q,null),document.getElementById("root"))},89:function(e,t,a){e.exports=a.p+"static/media/sites.a27f406d.csv"}},[[159,1,2]]]);
//# sourceMappingURL=main.127c6fb9.chunk.js.map