(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d238660"],{fee0:function(t,e,a){"use strict";a.r(e);var o,s,i,r,n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"analytics text-center"},[t._m(0),a("v-container",[a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,s=e.attrs;return[a("v-text-field",t._g(t._b({attrs:{label:"Month","prepend-icon":"fas fa-calendar",readonly:""},model:{value:t.month,callback:function(e){t.month=e},expression:"month"}},"v-text-field",s,!1),o))]}}]),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[a("v-date-picker",{attrs:{type:"month","no-title":"",scrollable:""},model:{value:t.month,callback:function(e){t.month=e},expression:"month"}},[a("v-spacer"),a("v-spacer"),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){t.menu=!1}}},[t._v("Cancel")]),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:t.changeDate}},[t._v("OK")])],1)],1)],1)],1),a("v-row",[a("v-col",[a("v-btn",{attrs:{large:"",outlined:"",color:"primary"},on:{click:t.changeDate}},[t._v("SUBMIT")])],1)],1)],1),a("v-container",[this.loading?a("div",{staticClass:"text-center ma-12"},[a("v-progress-circular",{staticClass:"mx-3",attrs:{size:150,indeterminate:"",color:"primary"}})],1):t._e(),this.loading||null==this.loading?t._e():a("div",[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-card",{staticClass:"mx-auto d-flex align-center justify-center pa-3",staticStyle:{"overflow-x":"auto"},attrs:{light:""}},[a("v-list-item",{attrs:{"three-line":""}},[a("v-list-item-content",[a("h3",[t._v("Employee Census for "+t._s(this.monthSelected))]),this.loading?t._e():a("line-chart",{attrs:{dataHeads:this.getEmployeeDataSet.employeeDataSet.header,dataSets:this.getEmployeeDataSet.employeeDataSet.data,label:this.getEmployeeDataSet.employeeDataSet.label,backgroundColor:this.getEmployeeDataSet.employeeDataSet.backgroundColor,loading:this.loading}})],1)],1)],1)],1)],1),a("v-row",[a("v-col",[a("v-card",{staticClass:"mx-auto d-flex align-center justify-center pa-3",staticStyle:{"overflow-x":"auto"},attrs:{light:""}},[a("v-list-item",{attrs:{"three-line":""}},[a("v-list-item-content",[a("h3",[t._v("Visitor Census for "+t._s(this.monthSelected))]),this.loading?t._e():a("bar-chart",{attrs:{dataHeads:this.getVisitorDataSet.visitorDataSet.header,dataSets:this.getVisitorDataSet.visitorDataSet.data,label:this.getVisitorDataSet.visitorDataSet.label,backgroundColor:this.getVisitorDataSet.visitorDataSet.backgroundColor,loading:this.loading}})],1)],1)],1)],1),a("v-col",[a("v-card",{staticClass:"mx-auto d-flex align-center justify-center pa-3",staticStyle:{"overflow-x":"auto"},attrs:{light:""}},[a("v-list-item",{attrs:{"three-line":""}},[a("v-list-item-content",[a("h3",[t._v("TPC Census for "+t._s(this.monthSelected))]),this.loading?t._e():a("bar-chart",{attrs:{dataHeads:this.getTPCDataSet.tpcDataSet.header,dataSets:this.getTPCDataSet.tpcDataSet.data,label:this.getTPCDataSet.tpcDataSet.label,backgroundColor:this.getTPCDataSet.tpcDataSet.backgroundColor,loading:this.loading}})],1)],1)],1)],1)],1),a("v-row",[a("v-col",[a("div",{staticClass:"display-1 text-center mt-5"},[t._v(" ETRIAGE "),a("b",[t._v("COVID ER REPORT")]),t._v(" FOR "),a("span",{staticClass:"text-uppercase"},[t._v(" "+t._s(this.monthSelected)+" ")])])])],1),a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-card",{staticClass:"mx-auto d-flex align-center justify-center pa-3",staticStyle:{"overflow-x":"auto"},attrs:{light:""}},[a("v-list-item",{attrs:{"three-line":""}},[a("v-list-item-content",[a("h3",[t._v("ER Employee Census for "+t._s(this.monthSelected))]),this.loading?t._e():a("bar-chart",{attrs:{dataHeads:this.getEmployeeDataSet.employeeERDataSet.header,dataSets:this.getEmployeeDataSet.employeeERDataSet.data,label:this.getEmployeeDataSet.employeeERDataSet.label,backgroundColor:this.getEmployeeDataSet.employeeERDataSet.backgroundColor,loading:this.loading}})],1)],1)],1)],1)],1),a("v-row",[a("v-col",[a("v-card",{staticClass:"mx-auto d-flex align-center justify-center pa-3",staticStyle:{"overflow-x":"auto"},attrs:{light:""}},[a("v-list-item",{attrs:{"three-line":""}},[a("v-list-item-content",[a("h3",[t._v("ER Visitor Census for "+t._s(this.monthSelected))]),this.loading?t._e():a("bar-chart",{attrs:{dataHeads:this.getVisitorDataSet.visitorERDataSet.header,dataSets:this.getVisitorDataSet.visitorERDataSet.data,label:this.getVisitorDataSet.visitorERDataSet.label,backgroundColor:this.getVisitorDataSet.visitorERDataSet.backgroundColor,loading:this.loading}})],1)],1)],1)],1),a("v-col",[a("v-card",{staticClass:"mx-auto d-flex align-center justify-center pa-3",staticStyle:{"overflow-x":"auto"},attrs:{light:""}},[a("v-list-item",{attrs:{"three-line":""}},[a("v-list-item-content",[a("h3",[t._v("ER TPC Census for "+t._s(this.monthSelected))]),this.loading?t._e():a("bar-chart",{attrs:{dataHeads:this.getTPCDataSet.tpcERDataSet.header,dataSets:this.getTPCDataSet.tpcERDataSet.data,label:this.getTPCDataSet.tpcERDataSet.label,backgroundColor:this.getTPCDataSet.tpcERDataSet.backgroundColor,loading:this.loading}})],1)],1)],1)],1)],1)],1)])],1)},l=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"display-1 text-center mt-5"},[t._v(" UERM E-Triage Dashboard "),a("b",[t._v("Monthly User Reports")])])}],c=(a("96cf"),a("1da1")),d=a("5530"),h=a("1fca"),u=a("a9be"),g={extends:h["c"],ChartDataLabels:u["ChartDataLabels"],props:["loading","dataSets","dataHeads","label","backgroundColor"],data:function(){return{chartdata:{labels:this.dataHeads,datasets:[{label:this.label,borderColor:this.backgroundColor,data:this.dataSets,datalabels:{align:"end",anchor:"end"},pointRadius:5,pointBackgroundColor:this.backgroundColor}]},options:{elements:{line:{tension:0}},layout:{padding:{left:10,right:10,top:0,bottom:0}},plugins:{datalabels:{borderRadius:4,backgroundColor:"white",color:"black",font:{weight:"bold"}}},scales:{yAxes:[{stacked:!0}]},responsive:!0,maintainAspectRatio:!1}}},mounted:function(){this.loading||null==this.loading||this.renderChart(this.chartdata,this.options)}},m=g,p=a("2877"),v=Object(p["a"])(m,o,s,!1,null,null,null),b=v.exports,S={extends:h["a"],ChartDataLabels:u["ChartDataLabels"],props:["loading","dataSets","dataHeads","label","backgroundColor"],data:function(){return{chartdata:{labels:this.dataHeads,datasets:[{label:this.label,backgroundColor:this.backgroundColor,data:this.dataSets}]},options:{plugins:{datalabels:{align:"end",anchor:"end",borderRadius:4,borderColor:"black",backgroundColor:"white",color:this.backgroundColor,font:{weight:"bold"}}},scales:{yAxes:[{stacked:!0}]},layout:{padding:{left:10,right:10,top:0,bottom:0}},responsive:!0,maintainAspectRatio:!1}}},mounted:function(){this.loading||null==this.loading||this.renderChart(this.chartdata,this.options)}},f=S,C=Object(p["a"])(f,i,r,!1,null,null,null),D=C.exports,y=a("2f62"),x={name:"MonthlyReport",components:{BarChart:D,LineChart:b},computed:Object(d["a"])({},Object(y["b"])(["getEmployeeDataSet","getVisitorDataSet","getTPCDataSet"])),data:function(){return{month:(new Date).toISOString().substr(0,7),monthSelected:null,menu:!1,loading:null}},mounted:function(){localStorage.isLoggedIn||this.$router.push("/")},methods:{changeDate:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var a,o,s,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$refs.menu.save(t.month),t.getETriageAnalytics(),a=new Date(t.month),o=["January","February","March","April","May","June","July","August","September","October","November","December"],s=o[a.getMonth()],i=new Intl.DateTimeFormat("en",{year:"numeric"}).format(a),t.monthSelected=s+" "+i;case 7:case"end":return e.stop()}}),e)})))()},getETriageAnalytics:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,t.$store.dispatch("getETriageAnalytics",t.month);case 3:t.loading=!1;case 4:case"end":return e.stop()}}),e)})))()}}},k=x,_=a("6544"),E=a.n(_),w=a("8336"),R=a("b0af"),V=a("62ad"),T=a("a523"),j=a("2e4b"),P=a("da13"),O=a("5d23"),A=a("e449"),H=a("490a"),M=a("0fd9"),I=a("2fa4"),L=a("8654"),J=Object(p["a"])(k,n,l,!1,null,null,null);e["default"]=J.exports;E()(J,{VBtn:w["a"],VCard:R["a"],VCol:V["a"],VContainer:T["a"],VDatePicker:j["a"],VListItem:P["a"],VListItemContent:O["b"],VMenu:A["a"],VProgressCircular:H["a"],VRow:M["a"],VSpacer:I["a"],VTextField:L["a"]})}}]);
//# sourceMappingURL=chunk-2d238660.8f0190b2.js.map