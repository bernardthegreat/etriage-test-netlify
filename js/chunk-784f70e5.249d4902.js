(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-784f70e5"],{"0798":function(e,t,r){"use strict";r("0c18");var s=r("10d2"),a=r("afdd"),i=r("9d26"),o=r("f2e7"),n=r("7560"),c=r("2b0e"),l=c["a"].extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),d=r("58df"),u=r("d9bd");t["a"]=Object(d["a"])(s["a"],o["a"],l).extend({name:"v-alert",props:{border:{type:String,validator(e){return["top","right","bottom","left"].includes(e)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,closeIcon:{type:String,default:"$cancel"},icon:{default:"",type:[Boolean,String],validator(e){return"string"===typeof e||!1===e}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator(e){return["info","error","success","warning"].includes(e)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder(){if(!this.border)return null;let e={staticClass:"v-alert__border",class:{["v-alert__border--"+this.border]:!0}};return this.coloredBorder&&(e=this.setBackgroundColor(this.computedColor,e),e.class["v-alert__border--has-color"]=!0),this.$createElement("div",e)},__cachedDismissible(){if(!this.dismissible)return null;const e=this.iconColor;return this.$createElement(a["a"],{staticClass:"v-alert__dismissible",props:{color:e,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:()=>this.isActive=!1}},[this.$createElement(i["a"],{props:{color:e}},this.closeIcon)])},__cachedIcon(){return this.computedIcon?this.$createElement(i["a"],{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes(){const e={...s["a"].options.computed.classes.call(this),"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text};return this.border&&(e["v-alert--border-"+this.border]=!0),e},computedColor(){return this.color||this.type},computedIcon(){return!1!==this.icon&&("string"===typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&"$"+this.type)},hasColoredIcon(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText(){return this.text||this.outlined},iconColor(){return this.hasColoredIcon?this.computedColor:void 0},isDark(){return!(!this.type||this.coloredBorder||this.outlined)||n["a"].options.computed.isDark.call(this)}},created(){this.$attrs.hasOwnProperty("outline")&&Object(u["a"])("outline","outlined",this)},methods:{genWrapper(){const e=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible],t={staticClass:"v-alert__wrapper"};return this.$createElement("div",t,e)},genContent(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert(){let e={staticClass:"v-alert",attrs:{role:"alert"},class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};if(!this.coloredBorder){const t=this.hasText?this.setTextColor:this.setBackgroundColor;e=t(this.computedColor,e)}return this.$createElement("div",e,[this.genWrapper()])},toggle(){this.isActive=!this.isActive}},render(e){const t=this.genAlert();return this.transition?e("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[t]):t}})},"0c18":function(e,t,r){},fced:function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"main"},[r("InfirmaryDashboard")],1)},a=[],i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("div",{staticClass:"display-1 text-center mt-5"},[e._v(" ETriage Infirmary ")]),r("div",{staticClass:"text-center ma-12"},[e.formLoading?r("v-progress-circular",{staticClass:"mx-3",attrs:{size:150,indeterminate:"",color:"primary"}}):e._e()],1),this.accessRightsForClearing||e.formLoading||e.cardFomrLoading?e._e():r("v-alert",{staticClass:"text-center",attrs:{type:"error"}},[r("span",{staticClass:"text-h5"},[e._v(" "+e._s(e.formMessage)+" ")])]),this.accessRightsForClearing?r("div",[this.accessRightsForClearing&&!e.formLoading?r("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,"return-value":e.date,transition:"scale-transition","offset-y":"","min-width":"290px"},on:{"update:returnValue":function(t){e.date=t},"update:return-value":function(t){e.date=t}},scopedSlots:e._u([{key:"activator",fn:function(t){var s=t.on,a=t.attrs;return[r("v-text-field",e._g(e._b({attrs:{label:"Date","prepend-icon":"fas fa-calendar",readonly:""},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}},"v-text-field",a,!1),s))]}}],null,!1,2641782597),model:{value:e.menu,callback:function(t){e.menu=t},expression:"menu"}},[r("v-date-picker",{attrs:{"no-title":"",scrollable:""},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}},[r("v-spacer"),r("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){e.menu=!1}}},[e._v("Cancel")]),r("v-btn",{attrs:{text:"",color:"primary"},on:{click:e.changeDate}},[e._v("OK")])],1)],1):e._e(),r("div",{staticClass:"d-flex flex-wrap mt-5"},[r("v-row",[e.formLoading?e._e():r("v-col",[r("Card",{staticClass:"error",attrs:{header:"Employees For Covid ER Report",employees:e.eTriageEREmployees,date:e.date,userType:"employees"}})],1),e.formLoading?e._e():r("v-col",[r("Card",{staticClass:"error",attrs:{header:"Visitors For Covid ER Report",employees:e.eTriageERVisitors,date:e.date,userType:"visitors"}})],1),e.formLoading?e._e():r("v-col",[r("Card",{staticClass:"error",attrs:{header:"TPCs For Covid ER Report",employees:e.eTriageERTPC,date:e.date,userType:"tpc"}})],1)],1)],1)],1):e._e()],1)},o=[],n=(r("96cf"),r("1da1")),c=r("5530"),l=r("ba02"),d=r("2f62"),u={components:{Card:l["a"]},data:function(){return{date:(new Date).toISOString().substr(0,10),menu:!1}},mounted:function(){localStorage.isLoggedIn||this.$router.push("/")},computed:Object(c["a"])({},Object(d["b"])(["accessRightsForClearing","formLoading","cardFormLoading","allETriageEREmployees","eTriageEREmployees","eTriageERVisitors","eTriageERTPC","userDetails","accessRightsForClearing","formMessage"])),created:function(){this.checkAccessRightsForClearing(),this.getETriageToday(),this.getAllTriageEREmployees(),this.getETriageOtherUsersToday()},methods:{changeDate:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.$refs.menu.save(e.date),t.next=3,e.getETriageToday();case 3:return t.next=5,e.getETriageOtherUsersToday();case 5:case"end":return t.stop()}}),t)})))()},checkAccessRightsForClearing:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("checkAccessRightsForClearing",e.userDetails.userCode);case 2:case"end":return t.stop()}}),t)})))()},getAllTriageEREmployees:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("getAllTriageEREmployees");case 2:case"end":return t.stop()}}),t)})))()},getETriageToday:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("getETriageEmployees",e.date);case 2:case"end":return t.stop()}}),t)})))()},getETriageOtherUsersToday:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("getETriageOtherUsers",e.date);case 2:case"end":return t.stop()}}),t)})))()}}},h=u,p=r("2877"),g=r("6544"),m=r.n(g),v=r("0798"),f=r("8336"),C=r("62ad"),b=r("a523"),y=r("2e4b"),_=r("e449"),E=r("490a"),x=r("0fd9"),T=r("2fa4"),R=r("8654"),w=Object(p["a"])(h,i,o,!1,null,"1cd60627",null),k=w.exports;m()(w,{VAlert:v["a"],VBtn:f["a"],VCol:C["a"],VContainer:b["a"],VDatePicker:y["a"],VMenu:_["a"],VProgressCircular:E["a"],VRow:x["a"],VSpacer:T["a"],VTextField:R["a"]});var $={name:"Infirmary",components:{InfirmaryDashboard:k}},B=$,O=Object(p["a"])(B,s,a,!1,null,null,null);t["default"]=O.exports}}]);
//# sourceMappingURL=chunk-784f70e5.249d4902.js.map