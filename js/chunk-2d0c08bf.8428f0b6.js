(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c08bf"],{"41f2":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"analytics text-center"},[t._m(0),e("AnalyticsDashboard")],1)},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"display-1 text-center mt-5"},[t._v(" UERM E-Triage Dashboard "),e("b",[t._v("Analytics")])])}],n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",{staticClass:"fill-height"},[t.loading?e("v-row",{staticClass:"mt-5",attrs:{align:"center",justify:"center"}},[e("div",{staticClass:"text-center ma-12"},[e("v-progress-circular",{staticClass:"mx-3",attrs:{size:150,indeterminate:"",color:"primary"}})],1)]):t._e(),e("v-row",{staticClass:"mt-5",attrs:{align:"center",justify:"center"}},t._l(t.apps,(function(a,s){return e("v-col",{key:s,attrs:{cols:"12",lg:"4",md:"3",sm:"12"}},[t.loading?t._e():e("v-card",{staticClass:"mx-auto d-flex align-center justify-center pa-3 elevation-12",staticStyle:{height:"200px"},attrs:{outlined:"",to:a.route,color:a.color,dark:""}},[e("v-list-item",{attrs:{"three-line":""}},[e("v-list-item-content",[e("div",{staticClass:"headline mb-1 text-center"},[t._v(t._s(a.title))]),e("v-list-item-subtitle",{staticClass:"text-center mt-4"},[e("v-icon",{staticClass:"mx-2",attrs:{large:""}},[t._v(t._s(a.icon))])],1)],1)],1)],1)],1)})),1)],1)},r=[],l={data:function(){return{loading:null,apps:[{color:"#007bff",title:"Monthly Reports",route:"/monthly-reports",icon:"fas fa-chart-bar"},{color:"#dc3545",title:"Classification Reports",route:"/classification-reports",icon:"fas fa-chart-line"}]}},mounted:function(){this.loading=!0,localStorage.isLoggedIn||this.$router.push("/"),this.loading=!1}},c=l,o=e("2877"),u=e("6544"),d=e.n(u),f=e("b0af"),m=e("62ad"),v=e("a523"),h=e("132d"),p=e("da13"),g=e("5d23"),C=e("490a"),b=e("0fd9"),_=Object(o["a"])(c,n,r,!1,null,null,null),y=_.exports;d()(_,{VCard:f["a"],VCol:m["a"],VContainer:v["a"],VIcon:h["a"],VListItem:p["a"],VListItemContent:g["b"],VListItemSubtitle:g["c"],VProgressCircular:C["a"],VRow:b["a"]});var x={name:"Analytics",components:{AnalyticsDashboard:y}},w=x,V=Object(o["a"])(w,s,i,!1,null,null,null);a["default"]=V.exports}}]);
//# sourceMappingURL=chunk-2d0c08bf.8428f0b6.js.map