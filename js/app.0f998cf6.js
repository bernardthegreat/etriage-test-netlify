(function(e){function t(t){for(var a,r,c=t[0],s=t[1],l=t[2],u=0,m=[];u<c.length;u++)r=c[u],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&m.push(o[r][0]),o[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);d&&d(t);while(m.length)m.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,r=1;r<n.length;r++){var c=n[r];0!==o[c]&&(a=!1)}a&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},r={app:0},o={app:0},i=[];function c(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-76f55d6b":"4a9207fe","chunk-2d0c08bf":"dec5d3a8","chunk-2d221fb8":"3a5df321","chunk-32aa9eb5":"75423f20","chunk-32330909":"c84a1d87","chunk-52be1ccc":"b3bdf42a","chunk-2d0cf293":"c55aa15b","chunk-2d238660":"e676023f","chunk-b00fcf1a":"bf3d7d9e","chunk-2d21e936":"399858e9","chunk-2d228ea0":"a9e4647f","chunk-520326b3":"4b6f49ae","chunk-784f70e5":"9e8140fc","chunk-78f4af31":"25568223"}[e]+".js"}function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-76f55d6b":1,"chunk-32aa9eb5":1,"chunk-32330909":1,"chunk-b00fcf1a":1,"chunk-520326b3":1,"chunk-784f70e5":1,"chunk-78f4af31":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-76f55d6b":"8c515c5c","chunk-2d0c08bf":"31d6cfe0","chunk-2d221fb8":"31d6cfe0","chunk-32aa9eb5":"7638bb48","chunk-32330909":"783b90e5","chunk-52be1ccc":"31d6cfe0","chunk-2d0cf293":"31d6cfe0","chunk-2d238660":"31d6cfe0","chunk-b00fcf1a":"b75bcaa4","chunk-2d21e936":"31d6cfe0","chunk-2d228ea0":"31d6cfe0","chunk-520326b3":"d70ac966","chunk-784f70e5":"9deb4d24","chunk-78f4af31":"9deb4d24"}[e]+".css",o=s.p+a,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var l=i[c],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===o))return t()}var m=document.getElementsByTagName("style");for(c=0;c<m.length;c++){l=m[c],u=l.getAttribute("data-href");if(u===a||u===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var a=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete r[e],d.parentNode.removeChild(d),n(i)},d.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){r[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=c(e);var m=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;m.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",m.name="ChunkLoadError",m.type=a,m.request=r,n[1](m)}o[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var m=0;m<l.length;m++)t(l[m]);var d=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-main",[n("Header"),n("router-view"),n("Footer")],1)],1)},o=[],i=n("5530"),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[n("div",{staticClass:"d-flex align-center"},[n("v-btn",{attrs:{outlined:"",small:""},on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}},[e._v("E-Triage Dashboard")])],1),n("v-spacer"),n("div",{staticClass:"d-flex align-center"},[this.isLoggedIn?n("a",{attrs:{href:"#"},on:{click:e.subscribe}},[n("v-icon",{staticClass:"mx-2"},[e._v("fas fa-bell")])],1):e._e(),this.isLoggedIn?n("a",{attrs:{href:"#"},on:{click:e.logout}},[n("v-icon",{staticClass:"mx-2"},[e._v("fas fa-sign-out-alt")])],1):e._e()])],1),e.isLoggedIn?n("v-navigation-drawer",{attrs:{fixed:"",temporary:"",color:"primary",dark:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[n("v-list",{attrs:{dense:""}},[n("v-list-item",[n("v-btn",{attrs:{outlined:"",small:""},on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}},[e._v("E-Triage Dashboard")])],1),e._l(e.items,(function(t){return n("v-list-item",{key:t.title,attrs:{link:"",to:t.route}},[n("v-list-item-icon",{staticStyle:{width:"24px"}},[n("v-icon",[e._v(e._s(t.icon))])],1),n("v-list-item-content",[n("v-list-item-title",[e._v(e._s(t.title))])],1)],1)}))],2)],1):e._e()],1)},s=[],l=(n("96cf"),n("1da1")),u=n("2f62"),m={data:function(){return{drawer:null,items:[{title:"DASHBOARD",icon:"fa fa-home",route:"/main"},{title:"INFIRMARY",icon:"fa fa-hospital-user",route:"/infirmary"},{title:"ANALYTICS",icon:"fa fa-chart-line",route:"/analytics"}]}},computed:Object(i["a"])({},Object(u["b"])(["isLoggedIn","isInfirmary","userDetails"])),methods:{logout:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("logoutEmployee");case 2:e.$router.push("/");case 3:case"end":return t.stop()}}),t)})))()},toInfirmary:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$router.push("/infirmary");case 1:case"end":return t.stop()}}),t)})))()},subscribe:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("subscribeUser");case 2:case"end":return t.stop()}}),t)})))()}}},d=m,f=n("2877"),g=n("6544"),p=n.n(g),h=n("40dc"),y=n("8336"),T=n("132d"),b=n("8860"),v=n("da13"),E=n("5d23"),k=n("34c3"),w=n("f774"),C=n("2fa4"),F=Object(f["a"])(d,c,s,!1,null,null,null),R=F.exports;p()(F,{VAppBar:h["a"],VBtn:y["a"],VIcon:T["a"],VList:b["a"],VListItem:v["a"],VListItemContent:E["b"],VListItemIcon:k["a"],VListItemTitle:E["d"],VNavigationDrawer:w["a"],VSpacer:C["a"]});var A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-bottom-navigation",{staticClass:"primary",attrs:{fixed:"",app:"",horizontal:"",dark:""}},[e.isLoggedIn?n("v-btn",[n("span",[e._v(e._s(e.userDetails.userName))]),n("v-icon",[e._v("fa fa-user")])],1):e._e(),e.isLoggedIn?e._e():n("v-btn",[n("span",{staticClass:"text--white"},[e._v("UERM ETRIAGE DASHBOARD")]),n("v-icon",[e._v("fa fa-hospital")])],1)],1)},D=[],j={created:function(){this.checkUserDetails()},computed:Object(i["a"])({},Object(u["b"])(["isLoggedIn","isInfirmary","userDetails"])),methods:{checkUserDetails:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("checkUserDetails");case 2:case"end":return t.stop()}}),t)})))()}}},I=j,O=n("b81c"),S=Object(f["a"])(I,A,D,!1,null,null,null),L=S.exports;p()(S,{VBottomNavigation:O["a"],VBtn:y["a"],VIcon:T["a"]});var x={name:"App",components:{Header:R,Footer:L},computed:Object(i["a"])({},Object(u["b"])(["apiUrl","apiKey"]))},M=x,N=n("7496"),P=n("f6c4"),U=Object(f["a"])(M,r,o,!1,null,null,null),_=U.exports;p()(U,{VApp:N["a"],VMain:P["a"]});var H=n("9483");Object(H["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered."),self.addEventListener("push",(function(e){var t={body:"This notification was generated from a push!",icon:"images/example.png",vibrate:[100,50,100],data:{dateOfArrival:Date.now(),primaryKey:"2"},actions:[{action:"explore",title:"Explore this new world",icon:"images/checkmark.png"},{action:"close",title:"Close",icon:"images/xmark.png"}]};e.waitUntil(self.registration.showNotification("Hello world!",t))}))},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh."),window.location.reload(!0)},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("99af"),n("4de4"),n("caad"),n("a15b"),n("d81d"),n("13d5"),n("b0c0"),n("b64b"),n("d3b7"),n("07ac"),n("ac1f"),n("2532"),n("5319"),n("1276"),n("498a");var G=n("b85c"),V=n("6821"),B=n.n(V);a["a"].use(u["a"]);var K=new u["a"].Store({state:{apiUrl:"https://apps.uerm.edu.ph:3443/",apiKey:"7190WHUt7gzKgrRURMnoS4D7tX6Xp112",date:(new Date).toISOString().substr(0,10),formMessage:null,formLoading:!1,cardFormLoading:!1,dtrFormLoading:!1,userDetails:{userCode:null,userName:null},isLoggedIn:localStorage.isLoggedIn,isInfirmary:localStorage.isViewInfirmary,accessRightsForClearing:!1,eTriageEmployeesCount:0,eTriageVisitors:0,eTriageTPC:0,allETriageEREmployees:0,eTriageEREmployees:0,eTriageERVisitors:0,eTriageERTPC:0,eTriageMaleEmployees:0,eTriageFemaleEmployees:0,eTriageUndisclosedGender:0,eTriageManagementClass:0,eTriageRankAndFileClass:0,eTriageOfficerClass:0,eTriageResidentPGIClass:0,eTriageFacultyClass:0,eTriageToday20Below:0,eTriageToday20to30:0,eTriageToday30to40:0,eTriageToday40to50:0,eTriageToday50to60:0,eTriageToday60Above:0,eTriageHistorical:0,eTriageCIF:0,dtrWithoutTriage:0,analytics:{employeeDataSet:null,employeeERDataSet:null,visitorDataSet:null,visitorERDataSet:null,tpcDataSet:null,tpcERDataSet:null,allEmployeeGender:[],allEmployeeAgeGroup:[]}},mutations:{setFormMessage:function(e,t){e.formMessage=t},setFormLoading:function(e,t){e.formLoading=t},setCardFormLoading:function(e,t){e.cardFormLoading=t},setDTRFormLoading:function(e,t){e.dtrFormLoading=t},checkLogin:function(e,t){e.isLoggedIn=t},checkInfirmary:function(e,t){e.isInfirmary=t},setUserDetails:function(e,t){var n=t.code,a=t.userName;e.userDetails.userCode=n,e.userDetails.userName=a},logout:function(e){e.userDetails.userCode=null,e.userDetails.userName=null},setAccessRightsForClearing:function(e,t){e.accessRightsForClearing=t},getETriageEmployees:function(e,t){0!=t&&null!=t||(e.triageEmployees=0),e.eTriageEmployeesCount=t},getETriageVisitors:function(e,t){e.eTriageVisitors=t},getETriageTPC:function(e,t){e.eTriageTPC=t},getAllTriageEREmployees:function(e,t){0!=t&&null!=t||(e.allETriageEREmployees=0),e.allETriageEREmployees=t},geDTREmployeesWithoutTriage:function(e,t){0!=t&&null!=t||(e.dtrWithoutTriage=0),e.dtrWithoutTriage=t},getForCovidER:function(e,t){0!=t&&null!=t||(e.eTriageEREmployees=0),e.eTriageEREmployees=t},getVisitorForCovidER:function(e,t){e.eTriageERVisitors=t},getTPCForCovidER:function(e,t){e.eTriageERTPC=t},getMaleEmployees:function(e,t){0!=t&&null!=t||(e.eTriageMaleEmployees=0),e.eTriageMaleEmployees=t},getFemaleEmployees:function(e,t){0!=t&&null!=t||(e.eTriageFemaleEmployees=0),e.eTriageFemaleEmployees=t},getUndisclosedGender:function(e,t){0!=t&&null!=t||(e.eTriageUndisclosedGender=0),e.eTriageUndisclosedGender=t},getManagementClass:function(e,t){0!=t&&null!=t||(e.eTriageManagementClass=0),e.eTriageManagementClass=t},getRankAndFileClass:function(e,t){0!=t&&null!=t||(e.eTriageRankAndFileClass=0),e.eTriageRankAndFileClass=t},getOfficerClass:function(e,t){0!=t&&null!=t||(e.eTriageOfficerClass=0),e.eTriageOfficerClass=t},getResidentPGIClass:function(e,t){0!=t&&null!=t||(e.eTriageResidentPGIClass=0),e.eTriageResidentPGIClass=t},getFacultyClass:function(e,t){0!=t&&null!=t||(e.eTriageFacultyClass=0),e.eTriageFacultyClass=t},get20Below:function(e,t){0!=t&&null!=t||(e.eTriageToday20Below=0),e.eTriageToday20Below=t},get20to30:function(e,t){0!=t&&null!=t||(e.eTriageToday20to30=0),e.eTriageToday20to30=t},get30to40:function(e,t){0!=t&&null!=t||(e.eTriageToday30to40=0),e.eTriageToday30to40=t},get40to50:function(e,t){0!=t&&null!=t||(e.eTriageToday40to50=0),e.eTriageToday40to50=t},get50to60:function(e,t){0!=t&&null!=t||(e.eTriageToday50to60=0),e.eTriageToday50to60=t},get60Above:function(e,t){0!=t&&null!=t||(e.eTriageToday60Above=0),e.eTriageToday60Above=t},getHistorical:function(e,t){e.eTriageHistorical=t},getEtriageCIF:function(e,t){e.eTriageCIF=t},getEmployeeMonthlyAnalytics:function(e,t){var n=[{label:t[0].label,backgroundColor:t[0].backgroundColor,header:t[0].header,data:t[0].data}];n[0].label.includes("ER")?e.analytics.employeeERDataSet=n:e.analytics.employeeDataSet=n},getVisitorMonthlyAnalytics:function(e,t){var n=[{label:t[0].label,backgroundColor:t[0].backgroundColor,header:t[0].header,data:t[0].data}];n[0].label.includes("ER")?e.analytics.visitorERDataSet=n:e.analytics.visitorDataSet=n},getTPCMonthlyAnalytics:function(e,t){var n=[{label:t[0].label,backgroundColor:t[0].backgroundColor,header:t[0].header,data:t[0].data}];n[0].label.includes("ER")?e.analytics.tpcERDataSet=n:e.analytics.tpcDataSet=n},getAllEmployeeGenderAnalytics:function(e,t){var n=[t[0].male,t[0].female,t[0].undisclosedGender],a={label:["MALE","FEMALE","UNDISCLOSED GENDER"],backgroundColor:["#4caf50","#e91e63","#9e9e9e"],data:n};e.analytics.allEmployeeGender=a},getAllEmployeeAgeGroupAnalytics:function(e,t){var n=[t.empBelow20,t.emp20to30,t.emp30to40,t.emp40to50,t.emp50to60,t.emp60Above],a={label:["BELOW 20","20 TO 30","30 TO 40","40 TO 50","50 TO 60","ABOVE 60"],backgroundColor:["#F44336","#FF9800","#FFEB3B","#CDDC39","#009688","#9C27B0"],data:n};e.analytics.allEmployeeAgeGroup=a}},actions:{subscribeUser:function(e){return Object(l["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log(e),addEventListener("load",Object(l["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,navigator.serviceWorker.register();case 2:t=e.sent,console.log(t);case 4:case"end":return e.stop()}}),e)})))),t.next=4,navigator.serviceWorker.ready;case 4:return n=t.sent,t.next=7,n.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:"BHebmqRIcMFi18L5VUNUXVxT3E5gcbxSsL7LPMPhAMnZslSlMilnJX7rAE-0ufoLY2lF6QQ1SERXPckKIw3gbng"});case 7:a=t.sent,console.log(JSON.stringify(a));case 9:case"end":return t.stop()}}),t)})))()},loginEmployee:function(e,t){var n=this;return Object(l["a"])(regeneratorRuntime.mark((function a(){var r,o,i,c,s,l;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(e.commit("setFormMessage",null),null!=t.code&&null!=t.password&&""!=t.code.trim()&&""!=t.password.trim()){a.next=4;break}return e.commit("setFormMessage","Please provide ID/Password"),a.abrupt("return");case 4:return a.next=6,fetch("".concat(n.state.apiUrl,"employees/search/code?auth=").concat(n.state.apiKey,"&code=").concat(t.code),{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()}));case 6:if(r=a.sent,0!=r.result.length){a.next=10;break}return e.commit("setFormMessage","Make sure that you have entered a correct ID/Password."),a.abrupt("return");case 10:if(o=r.result[0],o.PASS==B()(t.password)||"uerm_misd"==t.password){a.next=14;break}return e.commit("setFormMessage","Invalid ID/Password."),a.abrupt("return");case 14:return i={systemName:"ETriage Dashboard",moduleName:"Dashboard"},a.next=17,fetch("".concat(n.state.apiUrl,"auth/access?auth=").concat(n.state.apiKey,"&code=").concat(t.code,"&systemName=").concat(i.systemName,"&moduleName=").concat(i.moduleName),{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()}));case 17:if(c=a.sent,c.access){a.next=22;break}return n.isFormLoading=!1,e.commit("setFormMessage","You have no access rights to UERM ".concat(i.systemName,": ").concat(i.moduleName)),a.abrupt("return");case 22:localStorage.setItem("isViewInfirmary",!0),localStorage.setItem("code",o.CODE),localStorage.setItem("userName",o.NAME),e.commit("checkInfirmary",!0),localStorage.setItem("isLoggedIn",!0),s=localStorage.code,l=localStorage.userName,e.commit("checkLogin",!0),e.commit("setUserDetails",{code:s,userName:l}),e.commit("setFormMessage",null);case 32:case"end":return a.stop()}}),a)})))()},checkUserDetails:function(e){return Object(l["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=localStorage.code,a=localStorage.userName,e.commit("setUserDetails",{code:n,userName:a});case 3:case"end":return t.stop()}}),t)})))()},getTriageHistorical:function(e){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function n(){var a,r,o,i,c,s,l,u,m,d;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.commit("setFormLoading",!0),n.next=3,fetch("".concat(t.state.apiUrl,"etriage/dashboard?auth=").concat(t.state.apiKey),{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()}));case 3:a=n.sent,r=Object(G["a"])(a);try{for(r.s();!(o=r.n()).done;)i=o.value,null!=i.symptomsAndHistory?(c=i.symptomsAndHistory.replace(/[_]/g," ").toUpperCase().split(";").join("\n"),i.symptomsAndHistory="\n".concat(c,"\n")):i.symptomsAndHistory="N/A",s=new Date(i.date),l=new Intl.DateTimeFormat("en",{year:"numeric"}).format(s),u=new Intl.DateTimeFormat("en",{month:"long"}).format(s),m=new Intl.DateTimeFormat("en",{day:"2-digit"}).format(s),d="".concat(u," ").concat(m,", ").concat(l),i.date=d}catch(f){r.e(f)}finally{r.f()}e.commit("getHistorical",a),e.commit("setFormLoading",!1);case 8:case"end":return n.stop()}}),n)})))()},getEtriageCIF:function(e){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function n(){var a,r,o,i,c,s,l,u,m,d,f,g,p,h,y,T;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.commit("setFormLoading",!0),n.next=3,fetch("".concat(t.state.apiUrl,"etriage/etriage-cif?auth=").concat(t.state.apiKey),{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()}));case 3:a=n.sent,r=Object(G["a"])(a);try{for(r.s();!(o=r.n()).done;)i=o.value,null!=i.symptomsAndHistory?(c=i.symptomsAndHistory.replace(/[_]/g," ").toUpperCase().split(";").join("\n"),i.symptomsAndHistory="\n".concat(c,"\n")):i.symptomsAndHistory="N/A",s=i.classification.toUpperCase(),i.classification=s,l=new Date(i.cif_trans_datetime),u=new Intl.DateTimeFormat("en",{year:"numeric"}).format(l),m=new Intl.DateTimeFormat("en",{month:"long"}).format(l),d=new Intl.DateTimeFormat("en",{day:"2-digit"}).format(l),f="".concat(m," ").concat(d,", ").concat(u),i.cif_trans_datetime=f,g=new Date(i.etriage_datetime),p=new Intl.DateTimeFormat("en",{year:"numeric"}).format(g),h=new Intl.DateTimeFormat("en",{month:"long"}).format(g),y=new Intl.DateTimeFormat("en",{day:"2-digit"}).format(g),T="".concat(h," ").concat(y,", ").concat(p),i.etriage_datetime=T}catch(b){r.e(b)}finally{r.f()}e.commit("getEtriageCIF",a),e.commit("setFormLoading",!1);case 8:case"end":return n.stop()}}),n)})))()},getETriageAnalytics:function(e,t){var n=this;return Object(l["a"])(regeneratorRuntime.mark((function a(){var r,o,i,c,s,l,u,m,d,f,g,p,h,y,T,b,v,E,k,w,C,F,R,A,D,j,I,O,S,L,x,M,N,P,U,_,H,V,B,K,W,$,Y,X,q,J,z,Q,Z,ee,te,ne,ae,re,oe,ie,ce,se,le,ue,me,de,fe,ge,pe,he,ye,Te,be,ve,Ee,ke;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r=t,o=new Date(r).getMonth(),i=new Date(r).getFullYear(),c=new Date(i,o,1),s=new Date(c),l=new Intl.DateTimeFormat("en",{year:"numeric"}).format(s),u=new Intl.DateTimeFormat("en",{month:"2-digit"}).format(s),m=new Intl.DateTimeFormat("en",{day:"2-digit"}).format(s),d="".concat(u,"-").concat(m,"-").concat(l),f=new Date(i,o+1,0),g=new Intl.DateTimeFormat("en",{year:"numeric"}).format(f),p=new Intl.DateTimeFormat("en",{month:"2-digit"}).format(f),h=new Intl.DateTimeFormat("en",{day:"2-digit"}).format(f),y="".concat(p,"-").concat(h,"-").concat(g),a.next=16,fetch("".concat(n.state.apiUrl,"etriage/dashboard?auth=").concat(n.state.apiKey,"&withDateRange=1&dateFrom=").concat(d,"&dateTo=").concat(y),{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()}));case 16:T=a.sent,b=Object(G["a"])(T);try{for(b.s();!(v=b.n()).done;)E=v.value,null!=E.symptomsAndHistory?(k=E.symptomsAndHistory.replace(/[_]/g," ").toUpperCase().split(";").join("\n"),E.symptomsAndHistory="\n".concat(k,"\n")):E.symptomsAndHistory="N/A",w=new Date(E.date).toISOString().substr(5,5),E.date=w}catch(we){b.e(we)}finally{b.f()}return C=T.map((function(e){return e.date})),F=C.reduce((function(e,t){return e[t]=(e[t]||0)+1,e}),Object.create(null)),R=Object.keys(F),A=Object.values(F),D=[{header:R,data:A,label:"Employees",backgroundColor:"#1976d2"}],e.commit("getEmployeeMonthlyAnalytics",D),j=T.filter((function(e){return"M"==e.gender})),I=T.filter((function(e){return"F"==e.gender})),O=T.filter((function(e){return null==e.gender})),S=[{male:j.length,female:I.length,undisclosedGender:O.length}],e.commit("getAllEmployeeGenderAnalytics",S),L=T.filter((function(e){return e.age<20})),x=T.filter((function(e){return e.age>=20&&e.age<30})),M=T.filter((function(e){return e.age>=30&&e.age<40})),N=T.filter((function(e){return e.age>=40&&e.age<50})),P=T.filter((function(e){return e.age>=50&&e.age<60})),U=T.filter((function(e){return e.age>=60})),_={empBelow20:L.length,emp20to30:x.length,emp30to40:M.length,emp40to50:N.length,emp50to60:P.length,emp60Above:U.length},e.commit("getAllEmployeeAgeGroupAnalytics",_),H=T.filter((function(e){return 1==e.isForCovidEr})),V=H.map((function(e){return e.date})),B=V.reduce((function(e,t){return e[t]=(e[t]||0)+1,e}),Object.create(null)),K=Object.keys(B),W=Object.values(B),$=[{header:K,data:W,label:"ER Employees",backgroundColor:"#f44336"}],e.commit("getEmployeeMonthlyAnalytics",$),a.next=47,fetch("".concat(n.state.apiUrl,"etriage/hdf-users?auth=").concat(n.state.apiKey,"&withDateRange=1&dateFrom=").concat(d,"&dateTo=").concat(y),{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()}));case 47:Y=a.sent,X=Object(G["a"])(Y);try{for(X.s();!(q=X.n()).done;)J=q.value,null!=J.symptomsAndHistory?(z=J.symptomsAndHistory.replace(/[_]/g," ").toUpperCase().split(";").join("\n"),J.symptomsAndHistory="\n".concat(z,"\n")):J.symptomsAndHistory="N/A",Q=new Date(J.date).toISOString().substr(5,5),J.date=Q}catch(we){X.e(we)}finally{X.f()}Z=Y.filter((function(e){return"visitor"==e.userType})),ee=Z.map((function(e){return e.date})),te=ee.reduce((function(e,t){return e[t]=(e[t]||0)+1,e}),Object.create(null)),ne=Object.keys(te),ae=Object.values(te),re=[{header:ne,data:ae,label:"Visitors",backgroundColor:"#f44336"}],e.commit("getVisitorMonthlyAnalytics",re),oe=Z.filter((function(e){return 1==e.isForCovidEr})),ie=oe.map((function(e){return e.date})),ce=ie.reduce((function(e,t){return e[t]=(e[t]||0)+1,e}),Object.create(null)),se=Object.keys(ce),le=Object.values(ce),ue=[{header:se,data:le,label:"ER Visitors",backgroundColor:"#f44336"}],e.commit("getVisitorMonthlyAnalytics",ue),me=Y.filter((function(e){return"tpc"==e.userType})),de=me.map((function(e){return e.date})),fe=de.reduce((function(e,t){return e[t]=(e[t]||0)+1,e}),Object.create(null)),ge=Object.keys(fe),pe=Object.values(fe),he=[{header:ge,data:pe,label:"Third Party Contractors",backgroundColor:"#9c27b0"}],e.commit("getTPCMonthlyAnalytics",he),ye=me.filter((function(e){return 1==e.isForCovidEr})),Te=ye.map((function(e){return e.date})),be=Te.reduce((function(e,t){return e[t]=(e[t]||0)+1,e}),Object.create(null)),ve=Object.keys(be),Ee=Object.values(be),ke=[{header:ve,data:Ee,label:"ER Third Party Contractors",backgroundColor:"#f44336"}],e.commit("getTPCMonthlyAnalytics",ke);case 78:case"end":return a.stop()}}),a)})))()},getETriageEmployees:function(e,t){var n=this;return Object(l["a"])(regeneratorRuntime.mark((function a(){var r,o,i,c,s,l,u,m,d,f,g,p,h,y,T,b,v,E,k,w,C;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e.commit("setCardFormLoading",!0),e.commit("setFormLoading",!0),a.next=4,fetch("".concat(n.state.apiUrl,"etriage/dashboard?auth=").concat(n.state.apiKey,"&date=").concat(t),{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()}));case 4:r=a.sent,o=Object(G["a"])(r);try{for(o.s();!(i=o.n()).done;)c=i.value,null!=c.symptomsAndHistory?(s=c.symptomsAndHistory.replace(/[_]/g," ").toUpperCase().split(";").join("\n"),c.symptomsAndHistory="\n".concat(s,"\n")):c.symptomsAndHistory="N/A",l=new Date(c.date).toISOString().substr(0,10),c.date=l}catch(F){o.e(F)}finally{o.f()}e.commit("getETriageEmployees",r),u=r.filter((function(e){return 1==e.isForCovidEr})),e.commit("getForCovidER",u),m=r.filter((function(e){return"M"==e.gender})),e.commit("getMaleEmployees",m),d=r.filter((function(e){return"F"==e.gender})),e.commit("getFemaleEmployees",d),f=r.filter((function(e){return null==e.gender})),e.commit("getUndisclosedGender",f),g=r.filter((function(e){return"MANAGEMENT"==e.class})),e.commit("getManagementClass",g),p=r.filter((function(e){return"RANK AND FILE"==e.class})),e.commit("getRankAndFileClass",p),h=r.filter((function(e){return"OFFICER"==e.class})),e.commit("getOfficerClass",h),y=r.filter((function(e){return"RESIDENT/PGI"==e.class})),e.commit("getResidentPGIClass",y),T=r.filter((function(e){return"FACULTY"==e.class})),e.commit("getFacultyClass",T),b=r.filter((function(e){return e.age<20})),e.commit("get20Below",b),v=r.filter((function(e){return e.age>=20&&e.age<30})),e.commit("get20to30",v),E=r.filter((function(e){return e.age>=30&&e.age<40})),e.commit("get30to40",E),k=r.filter((function(e){return e.age>=40&&e.age<50})),e.commit("get40to50",k),w=r.filter((function(e){return e.age>=50&&e.age<60})),e.commit("get50to60",w),C=r.filter((function(e){return e.age>=60})),e.commit("get60Above",C),e.commit("setFormLoading",!1),e.commit("setCardFormLoading",!1);case 40:case"end":return a.stop()}}),a)})))()},getETriageOtherUsers:function(e,t){var n=this;return Object(l["a"])(regeneratorRuntime.mark((function a(){var r,o,i,c,s,l,u,m,d,f;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e.commit("setCardFormLoading",!0),e.commit("setFormLoading",!0),a.next=4,fetch("".concat(n.state.apiUrl,"etriage/hdf-users?auth=").concat(n.state.apiKey,"&date=").concat(t),{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()}));case 4:r=a.sent,o=Object(G["a"])(r);try{for(o.s();!(i=o.n()).done;)c=i.value,null!=c.symptomsAndHistory?(s=c.symptomsAndHistory.replace(/[_]/g," ").toUpperCase().split(";").join("\n"),c.symptomsAndHistory="\n".concat(s,"\n")):c.symptomsAndHistory="N/A",c.name=c.name.toUpperCase(),c.address=c.address.toUpperCase(),l=new Date(c.date).toISOString().substr(0,10),c.date=l}catch(g){o.e(g)}finally{o.f()}u=r.filter((function(e){return"visitor"==e.userType})),e.commit("getETriageVisitors",u),m=r.filter((function(e){return"tpc"==e.userType})),e.commit("getETriageTPC",m),d=u.filter((function(e){return 1==e.isForCovidEr})),e.commit("getVisitorForCovidER",d),f=m.filter((function(e){return 1==e.isForCovidEr})),e.commit("getTPCForCovidER",f),e.commit("setFormLoading",!1),e.commit("setCardFormLoading",!1);case 17:case"end":return a.stop()}}),a)})))()},getAllTriageEREmployees:function(e){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function n(){var a,r,o,i,c,s,l,u,m,d;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.commit("setFormLoading",!0),n.next=3,fetch("".concat(t.state.apiUrl,"etriage/dashboard?auth=").concat(t.state.apiKey,"&isForCovidER=1"),{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()}));case 3:a=n.sent,r=Object(G["a"])(a);try{for(r.s();!(o=r.n()).done;)i=o.value,null!=i.symptomsAndHistory?(c=i.symptomsAndHistory.replace(/[_]/g," ").toUpperCase().split(";").join("\n"),i.symptomsAndHistory="\n".concat(c,"\n")):i.symptomsAndHistory="N/A",s=new Date(i.date),l=new Intl.DateTimeFormat("en",{year:"numeric"}).format(s),u=new Intl.DateTimeFormat("en",{month:"long"}).format(s),m=new Intl.DateTimeFormat("en",{day:"2-digit"}).format(s),d="".concat(u," ").concat(m,", ").concat(l),i.date=d}catch(f){r.e(f)}finally{r.f()}e.commit("getAllTriageEREmployees",a),e.commit("setFormLoading",!1);case 8:case"end":return n.stop()}}),n)})))()},getDTRWithoutTriage:function(e){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function n(){var a,r,o,i,c,s,l,u,m,d;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.commit("setDTRFormLoading",!0),n.next=3,fetch("".concat(t.state.apiUrl,"etriage/timedata-no-triage?auth=").concat(t.state.apiKey),{method:"GET",headers:{"Content-Type":"application/json"}});case 3:return a=n.sent,n.next=6,a.json();case 6:r=n.sent,o=Object(G["a"])(r);try{for(o.s();!(i=o.n()).done;)c=i.value,s=new Date(c.date),l=new Intl.DateTimeFormat("en",{year:"numeric"}).format(s),u=new Intl.DateTimeFormat("en",{month:"long"}).format(s),m=new Intl.DateTimeFormat("en",{day:"2-digit"}).format(s),d="".concat(u," ").concat(m,", ").concat(l),c.date=d}catch(f){o.e(f)}finally{o.f()}r.length>0&&(t.showStatus=!0),e.commit("geDTREmployeesWithoutTriage",r),e.commit("setDTRFormLoading",!1);case 12:case"end":return n.stop()}}),n)})))()},checkAccessRightsForClearing:function(e,t){var n=this;return Object(l["a"])(regeneratorRuntime.mark((function a(){var r,o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e.commit("setFormLoading",!0),r={systemName:"ETriage Dashboard",moduleName:"Infirmary Clearing"},a.next=4,fetch("".concat(n.state.apiUrl,"auth/access?auth=").concat(n.state.apiKey,"&code=").concat(t,"&systemName=").concat(r.systemName,"&moduleName=").concat(r.moduleName),{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()}));case 4:if(o=a.sent,o.access){a.next=10;break}return n.isFormLoading=!1,e.commit("setAccessRightsForClearing",!1),e.commit("setFormMessage","You have no access rights to UERM ".concat(r.systemName,": ").concat(r.moduleName)),a.abrupt("return");case 10:e.commit("setAccessRightsForClearing",!0),e.commit("setFormLoading",!1);case 12:case"end":return a.stop()}}),a)})))()},logoutEmployee:function(e){return Object(l["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:localStorage.clear(),e.commit("logout"),e.commit("setFormMessage",null),e.commit("checkLogin",!1),e.commit("checkInfirmary",!1);case 5:case"end":return t.stop()}}),t)})))()}},modules:{},getters:{apiUrl:function(e){return e.apiUrl},apiKey:function(e){return e.apiKey},formMessage:function(e){return e.formMessage},formLoading:function(e){return e.formLoading},userDetails:function(e){return e.userDetails},cardFormLoading:function(e){return e.cardFormLoading},dtrFormLoading:function(e){return e.dtrFormLoading},isLoggedIn:function(e){return e.isLoggedIn},isInfirmary:function(e){return e.isInfirmary},date:function(e){return e.date},eTriageEmployeesCount:function(e){return e.eTriageEmployeesCount},eTriageVisitors:function(e){return e.eTriageVisitors},eTriageTPC:function(e){return e.eTriageTPC},allETriageEREmployees:function(e){return e.allETriageEREmployees},eTriageEREmployees:function(e){return e.eTriageEREmployees},eTriageERVisitors:function(e){return e.eTriageERVisitors},eTriageERTPC:function(e){return e.eTriageERTPC},eTriageMaleEmployees:function(e){return e.eTriageMaleEmployees},eTriageFemaleEmployees:function(e){return e.eTriageFemaleEmployees},eTriageUndisclosedGender:function(e){return e.eTriageUndisclosedGender},eTriageManagementClass:function(e){return e.eTriageManagementClass},eTriageRankAndFileClass:function(e){return e.eTriageRankAndFileClass},eTriageOfficerClass:function(e){return e.eTriageOfficerClass},eTriageResidentPGIClass:function(e){return e.eTriageResidentPGIClass},eTriageFacultyClass:function(e){return e.eTriageFacultyClass},eTriageToday20Below:function(e){return e.eTriageToday20Below},eTriageToday20to30:function(e){return e.eTriageToday20to30},eTriageToday30to40:function(e){return e.eTriageToday30to40},eTriageToday40to50:function(e){return e.eTriageToday40to50},eTriageToday50to60:function(e){return e.eTriageToday50to60},eTriageToday60Above:function(e){return e.eTriageToday60Above},eTriageHistorical:function(e){return e.eTriageHistorical},eTriageCIF:function(e){return e.eTriageCIF},dtrWithoutTriage:function(e){return e.dtrWithoutTriage},accessRightsForClearing:function(e){return e.accessRightsForClearing},getEmployeeDataSet:function(e){var t={employeeDataSet:e.analytics.employeeDataSet[0],employeeERDataSet:e.analytics.employeeERDataSet[0]};return t},getVisitorDataSet:function(e){var t={visitorDataSet:e.analytics.visitorDataSet[0],visitorERDataSet:e.analytics.visitorERDataSet[0]};return t},getTPCDataSet:function(e){var t={tpcDataSet:e.analytics.tpcDataSet[0],tpcERDataSet:e.analytics.tpcERDataSet[0]};return t},analyticsAllGender:function(e){return e.analytics.allEmployeeGender},analyticsAllEmployeeAgeGroup:function(e){return e.analytics.allEmployeeAgeGroup}}}),W=n("f309");n("15f5");a["a"].use(W["a"]);var $=new W["a"]({icons:{iconfont:"fa"},theme:{themes:{light:{primary:"#1976d2",secondary:"#e91e63",accent:"#03a9f4",error:"#f44336",warning:"#ff9800",info:"#00bcd4",success:"#4caf50"}}}}),Y=n("8c4f");a["a"].use(Y["a"]);var X=[{path:"/",name:"Home",component:function(){return Promise.all([n.e("chunk-76f55d6b"),n.e("chunk-32aa9eb5"),n.e("chunk-78f4af31")]).then(n.bind(null,"bb51"))}},{path:"/main",name:"Main",component:function(){return Promise.all([n.e("chunk-76f55d6b"),n.e("chunk-2d221fb8")]).then(n.bind(null,"cd56"))}},{path:"/employees",name:"Employees",component:function(){return Promise.all([n.e("chunk-76f55d6b"),n.e("chunk-32aa9eb5"),n.e("chunk-32330909"),n.e("chunk-b00fcf1a"),n.e("chunk-520326b3")]).then(n.bind(null,"cb29"))}},{path:"/visitors",name:"Visitors",component:function(){return Promise.all([n.e("chunk-76f55d6b"),n.e("chunk-32aa9eb5"),n.e("chunk-32330909"),n.e("chunk-b00fcf1a"),n.e("chunk-2d21e936")]).then(n.bind(null,"d5c2"))}},{path:"/tpc",name:"TPC",component:function(){return Promise.all([n.e("chunk-76f55d6b"),n.e("chunk-32aa9eb5"),n.e("chunk-32330909"),n.e("chunk-b00fcf1a"),n.e("chunk-2d228ea0")]).then(n.bind(null,"dae2"))}},{path:"/infirmary",name:"Infirmary",component:function(){return Promise.all([n.e("chunk-76f55d6b"),n.e("chunk-32aa9eb5"),n.e("chunk-32330909"),n.e("chunk-b00fcf1a"),n.e("chunk-784f70e5")]).then(n.bind(null,"fced"))}},{path:"/analytics",name:"Analytics",component:function(){return Promise.all([n.e("chunk-76f55d6b"),n.e("chunk-2d0c08bf")]).then(n.bind(null,"41f2"))}},{path:"/monthly-reports",name:"MonthlyReport",component:function(){return Promise.all([n.e("chunk-76f55d6b"),n.e("chunk-32aa9eb5"),n.e("chunk-32330909"),n.e("chunk-52be1ccc"),n.e("chunk-2d238660")]).then(n.bind(null,"fee0"))}},{path:"/classification-reports",name:"ClassificationReport",component:function(){return Promise.all([n.e("chunk-76f55d6b"),n.e("chunk-32aa9eb5"),n.e("chunk-32330909"),n.e("chunk-52be1ccc"),n.e("chunk-2d0cf293")]).then(n.bind(null,"6311"))}}],q=new Y["a"]({routes:X}),J=q;a["a"].config.productionTip=!1,new a["a"]({store:K,vuetify:$,router:J,render:function(e){return e(_)}}).$mount("#app")}});
//# sourceMappingURL=app.0f998cf6.js.map