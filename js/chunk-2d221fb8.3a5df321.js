(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d221fb8"],{cd56:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main"},[a("Dashboard")],1)},r=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"fill-height"},[t.cardFormLoading?a("v-row",{staticClass:"mt-5",attrs:{align:"center",justify:"center"}},[a("div",{staticClass:"text-center ma-12"},[a("v-progress-circular",{staticClass:"mx-3",attrs:{size:150,indeterminate:"",color:"primary"}})],1)]):t._e(),a("v-row",{staticClass:"mt-5",attrs:{align:"center",justify:"center"}},t._l(t.apps,(function(e,s){return a("v-col",{key:s,attrs:{cols:"12",lg:"4",md:"3",sm:"12"}},[t.cardFormLoading?t._e():a("v-card",{staticClass:"mx-auto d-flex align-center justify-center pa-3 elevation-12",staticStyle:{height:"200px"},attrs:{outlined:"",to:e.route,color:e.color,dark:""}},[a("v-list-item",{attrs:{"three-line":""}},[a("v-list-item-content",[a("div",{staticClass:"headline mb-1 text-center"},[t._v(t._s(e.title))]),a("v-list-item-subtitle",{staticClass:"text-center mt-4"},[a("v-icon",{staticClass:"mx-2",attrs:{large:""}},[t._v(t._s(e.icon))]),a("div",{staticClass:"headline mt-5 text--white",attrs:{light:""}},[t._v(" "+t._s(e.count)+" ")])],1)],1)],1)],1)],1)})),1)],1)},n=[],o=(a("96cf"),a("1da1")),c=a("5530"),l=a("2f62"),u={computed:Object(c["a"])({},Object(l["b"])(["cardFormLoading","eTriageEmployeesCount"])),data:function(){return{date:(new Date).toISOString().substr(0,10),apps:[{color:"#007bff",title:"Employee / Residents / Consultants",route:"/employees",icon:"fas fa-hospital-user",count:this.$store.state.eTriageEmployeesCount.length},{color:"#dc3545",title:"Visitors",route:"/visitors",icon:"fas fa-users",count:this.$store.state.eTriageVisitors.length},{color:"purple",title:"Third Party Contractor",route:"/tpc",icon:"fas fa-user-cog",count:this.$store.state.eTriageTPC.length}]}},mounted:function(){localStorage.isLoggedIn||this.$router.push("/"),this.getETriageTodayCount()},methods:{getETriageTodayCount:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("getETriageEmployees",t.date);case 2:return e.next=4,t.$store.dispatch("getETriageOtherUsers",t.date);case 4:case"end":return e.stop()}}),e)})))()}}},d=u,m=a("2877"),g=a("6544"),h=a.n(g),p=a("b0af"),f=a("62ad"),v=a("a523"),C=a("132d"),b=a("da13"),w=a("5d23"),x=a("490a"),y=a("0fd9"),_=Object(m["a"])(d,i,n,!1,null,null,null),T=_.exports;h()(_,{VCard:p["a"],VCol:f["a"],VContainer:v["a"],VIcon:C["a"],VListItem:b["a"],VListItemContent:w["b"],VListItemSubtitle:w["c"],VProgressCircular:x["a"],VRow:y["a"]});var V={name:"Main",components:{Dashboard:T}},E=V,j=Object(m["a"])(E,s,r,!1,null,null,null);e["default"]=j.exports}}]);
//# sourceMappingURL=chunk-2d221fb8.3a5df321.js.map