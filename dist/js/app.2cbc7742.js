(function(t){function e(e){for(var s,n,r=e[0],l=e[1],c=e[2],u=0,f=[];u<r.length;u++)n=r[u],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&f.push(i[n][0]),i[n]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);d&&d(e);while(f.length)f.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],s=!0,r=1;r<a.length;r++){var l=a[r];0!==i[l]&&(s=!1)}s&&(o.splice(e--,1),t=n(n.s=a[0]))}return t}var s={},i={app:0},o=[];function n(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=s,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(a,s,function(e){return t[e]}.bind(null,s));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var d=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"22bd":function(t,e,a){"use strict";a("9a0f")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("router-view")],1)},o=[],n=a("4d5c"),r=a.n(n),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("div",{staticClass:"navbar-fixed"},[a("nav",{staticClass:"blue center "},[a("div",{staticClass:"flow-text"},[t._v(" Things to do "+t._s(t.listOfTodos.length)+" ")])])]),a("div",{staticClass:"container"},[a("div",{staticClass:"row"},t._l(t.listOfTodos,(function(e,s){return a("div",{key:s},[a("div",{staticClass:" col s12 m6 l4"},[a("div",{staticClass:"card small hoverable"},[a("div",{staticClass:"card-content "},[a("span",{staticClass:"card-title"},[t._v(t._s(e.title))]),a("p",{staticClass:"test"},[t._v(t._s(e.content))])]),a("div",{staticClass:"card-action"},[a("a",{staticClass:" blue  btn-floating modal-trigger",attrs:{href:"#modal1"},on:{click:function(a){return t.test200([e.title,e.content])}}},[a("i",{staticClass:"far fa-eye"})]),a("a",{staticClass:"btn-floating  test2 right ",attrs:{href:"#"},on:{click:function(a){return t.test(e.id)}}},[a("i",{staticClass:"far fa-check-circle"})]),a("a",{staticClass:"btn-floating red test2 right  ",attrs:{href:"#"},on:{click:function(a){return t.test2([e.id,e.title,e.content])}}},[a("i",{staticClass:"far fa-edit"})])])])])])})),0)]),a("div",{staticClass:"container"},[a("div",{staticClass:"fixed-action-btn "},[a("router-link",{staticClass:"btn-floating  btn-large hoverable blue",attrs:{to:"addtodo"}},[a("i",{staticClass:"large material-icons"},[t._v("add")])])],1)]),a("div",{staticClass:"modal",attrs:{id:"modal1"}},[a("div",{staticClass:"modal-content"},[a("h4",[t._v(t._s(t.testList[0]))]),a("p",[t._v(t._s(t.testList[1]))])])])])},c=[],d=(a("4de4"),a("4160"),a("159b"),a("2591")),u=(a("e71f"),{apiKey:"AIzaSyChw5rpWuHN3VF6ygB_na6DjbkCxRwOpjA",authDomain:"todoapp2-262fb.firebaseapp.com",databaseURL:"https://todoapp2-262fb.firebaseio.com",projectId:"todoapp2-262fb",storageBucket:"todoapp2-262fb.appspot.com",messagingSenderId:"392764618011",appId:"1:392764618011:web:a7f8f53129c32907504fbe"}),f=d["a"].initializeApp(u);f.firestore().settings({timestampsInSnapshots:!0});var m=f.firestore(),v={name:"Home",components:{},data:function(){return{listOfTodos:[],testList:[]}},created:function(){var t=this;$(document).ready((function(){$(".modal").modal()}));var e=m.collection("todolist");e.onSnapshot((function(e){e.docChanges().forEach((function(e){if("added"==e.type){var a=e.doc;t.listOfTodos.push({id:a.id,content:a.data().content,title:a.data().title})}}))}))},methods:{test:function(t){var e=this,a=this.listOfTodos,s=a.filter((function(e){return e.id==t}));m.collection("todolist").doc(t)["delete"]().then((function(){e.listOfTodos=e.listOfTodos.filter((function(e){return e.id!=t}))})).then((function(){r.a.toast({html:"Todo '".concat(s[0].title,"' was completed/deleted"),classes:"white black-text"})}))["catch"]((function(t){console.log(t)}))},test2:function(t){this.$router.push({name:"edit",params:{todoid:t}})},test3:function(t){this.$router.push({name:"look",params:{info:t}})},test200:function(t){this.testList=t}}},p=v,h=(a("b9a0"),a("2877")),g=Object(h["a"])(p,l,c,!1,null,"26a71321",null),b=g.exports,C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._m(0),a("div",{staticClass:"container"},[a("form",{on:{submit:t.edit}},[a("div",{staticClass:"input-field "},[a("i",{staticClass:"material-icons prefix"},[t._v("title")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text",id:"email",autocomplete:"off"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),a("label",{attrs:{for:"email"}},[t._v("Your Title")])]),a("div",{staticClass:"input-field"},[a("i",{staticClass:"material-icons prefix"},[t._v("message")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],staticClass:"materialize-textarea",attrs:{id:"message","data-length":"120"},domProps:{value:t.message},on:{input:function(e){e.target.composing||(t.message=e.target.value)}}}),a("label",{attrs:{for:"message"}},[t._v("Your Message")])]),a("a",{staticClass:"btn hoverable waves-effect waves-light right",on:{click:t.edit}},[t._v(" Edit Todo ")])])]),a("div",{staticClass:"container"},[a("div",{staticClass:"fixed-action-btn"},[a("router-link",{staticClass:"btn-floating waves-effect waves-light btn-large hoverable blue",attrs:{to:"/"}},[a("i",{staticClass:"large material-icons"},[t._v("keyboard_backspace")])])],1)])])},_=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"navbar-fixed"},[a("nav",{staticClass:"blue center "},[a("div",{staticClass:"flow-text"},[t._v(" Edit Todo ")])])])}],w={data:function(){return{title:this.$route.params.todoid[1],message:this.$route.params.todoid[2],todoId:this.$route.params.todoid[0]}},mounted:function(){var t=document.querySelector("#email"),e=document.querySelector("#message");t.focus(),e.focus()},methods:{edit:function(){var t=this;m.collection("todolist").doc(this.todoId).update({title:this.title,content:this.message}).then((function(){M.toast({html:"Todo '".concat(t.title,"' was edited"),classes:"white black-text"}),t.$router.push("/")}))["catch"]((function(t){console.log(t)}))}}},x=w,y=(a("99f1"),Object(h["a"])(x,C,_,!1,null,"a1a9f7a2",null)),O=y.exports,T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"navbar-fixed"},[a("nav",{staticClass:"blue center "},[a("div",{staticClass:"flow-text"},[t._v(" Things to do "+t._s(this.$store.state.count)+" ")])])])},k=[],j={data:function(){return{listOfTodos:[]}},created:function(){var t=this;m.collection("todolist").get().then((function(e){e.forEach((function(e){var a=e.data();a.id=e.id,t.listOfTodos.push(a)}))}));var e=m.collection("collectofcalclus");this.$store.commit("test3",this.listOfTodos.length+1),e.onSnapshot((function(e){e.docChanges().forEach((function(e){if("added"==e.type){var a=e.doc;t.listOfTodos.push({id:a.id,content:a.data().content,title:a.data().title})}}))})),this.$store.commit("test3",this.listOfTodos.length+1)},beforeUpdate:function(){this.count=this.listOfTodos.length},computed:{test:function(){return this.listOfTodos.length}},methods:{}},S=j,E=Object(h["a"])(S,T,k,!1,null,null,null),P=E.exports,I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._m(0),a("div",{staticClass:"container"},[a("form",{on:{submit:t.send}},[a("div",{staticClass:"input-field "},[a("i",{staticClass:"material-icons prefix"},[t._v("title")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text",id:"email",autocomplete:"off"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),a("label",{attrs:{for:"email"}},[t._v("Your Title")])]),a("div",{staticClass:"input-field"},[a("i",{staticClass:"material-icons prefix"},[t._v("message")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],staticClass:"materialize-textarea",attrs:{id:"message"},domProps:{value:t.message},on:{input:function(e){e.target.composing||(t.message=e.target.value)}}}),a("label",{attrs:{for:"message"}},[t._v("Your Message")])]),a("div",{staticClass:"input-field "},[a("i",{staticClass:"material-icons prefix"},[t._v("event")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.data,expression:"data"}],attrs:{type:"date",id:"data",autocomplete:"off"},domProps:{value:t.data},on:{input:function(e){e.target.composing||(t.data=e.target.value)}}}),a("label",{attrs:{for:"data"}},[t._v("Choose Date")])]),a("div",{staticClass:"input-field "},[a("i",{staticClass:"material-icons prefix"},[t._v("alarm")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.time,expression:"time"}],attrs:{type:"time",id:"time",autocomplete:"off"},domProps:{value:t.time},on:{input:function(e){e.target.composing||(t.time=e.target.value)}}}),a("label",{attrs:{for:"time"}},[t._v("Choose Time")])]),a("a",{staticClass:"btn hoverable waves-effect waves-light right",on:{click:t.send}},[t._v(" Add Todo ")])])]),a("div",{staticClass:"container"},[a("div",{staticClass:"fixed-action-btn"},[a("router-link",{staticClass:"btn-floating waves-effect waves-light btn-large hoverable blue",attrs:{to:"/"}},[a("i",{staticClass:"large material-icons"},[t._v("keyboard_backspace")])])],1)])])},L=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"navbar-fixed"},[a("nav",{staticClass:"blue center "},[a("div",{staticClass:"flow-text"},[t._v(" Add Todo ")])])])}],D=(a("99af"),a("0d03"),a("d3b7"),a("25f0"),a("96cf"),a("1da1")),N=a("81c3"),A=N["a"].LocalNotifications,q={data:function(){return{title:"",message:"",x:null,time:"",data:""}},created:function(){$(document).ready((function(){$(".materialize-textarea").characterCounter()})),document.addEventListener("DOMContentLoaded",(function(){var t=document.querySelectorAll(".datepicker");M.Datepicker.init(t,{parse:!0})})),document.addEventListener("DOMContentLoaded",(function(){var t=document.querySelectorAll(".timepicker");M.Timepicker.init(t)}))},mounted:function(){var t=document.querySelector("#email");document.querySelector("#message");t.focus()},methods:{send:function(){var t=this;return Object(D["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log(t.data,t.time,t.time.substring(0,2)),console.log(new Date("".concat(t.data," ").concat(t.time))),m.collection("todolist").add({title:t.title.toString(),content:t.message}).then((function(){return M.toast({html:"Todo '".concat(t.title,"' was added"),classes:"white black-text"})}))["catch"]((function(t){console.log(t)})),t.$router.push("/"),e.next=6,A.schedule({notifications:[{title:t.title,body:t.message,id:1,schedule:{at:new Date("".concat(t.data," ").concat(t.time)),repeats:!0,every:"second",count:2},sound:"beep.wav",attachments:null,actionTypeId:"",extra:null}]});case 6:a=e.sent,console.log("scheduled notifications",a);case 8:case"end":return e.stop()}}),e)})))()}}},z=q,R=Object(h["a"])(z,I,L,!1,null,"0572c300",null),H=R.exports,Y={components:{Home:b,NAV:P,addTodo:H,editTodo:O}},B=Y,J=Object(h["a"])(B,i,o,!1,null,null,null),U=J.exports,V=a("8c4f"),F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._m(0),a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col s12 m12 l12"},[a("div",{staticClass:"card hoverable large"},[a("div",{staticClass:"card-content "},[a("span",{staticClass:"card-title"},[t._v(t._s(t.title))]),a("div",{},[a("p",{},[t._v(" "+t._s(t.message))])])]),a("div",{staticClass:"card-action"},[a("a",{staticClass:"btn-floating red test2 left waves-effect waves-light  ",attrs:{href:"#"},on:{click:function(e){return t.test2([t.todoId,t.title,t.message])}}},[a("i",{staticClass:"far fa-edit"})])])])])])]),a("div",{staticClass:"container"},[a("div",{staticClass:"fixed-action-btn"},[a("router-link",{staticClass:"btn-floating waves-effect waves-light btn-large hoverable blue",attrs:{to:"/"}},[a("i",{staticClass:"large material-icons"},[t._v("keyboard_backspace")])])],1)])])},K=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"navbar-fixed"},[a("nav",{staticClass:"blue center "},[a("div",{staticClass:"flow-text"},[t._v(" Read Todo ")])])])}],W={data:function(){return{title:this.$route.params.info[1],message:this.$route.params.info[2],todoId:this.$route.params.info[0]}},methods:{test2:function(t){this.$router.push({name:"edit",params:{todoid:t}})}}},G=W,Q=(a("22bd"),Object(h["a"])(G,F,K,!1,null,null,null)),X=Q.exports;s["a"].use(V["a"]);var Z=[{path:"/",name:"Home",component:b},{path:"/addtodo",name:"TODO",component:H},{path:"/edittodo/:todoid",name:"edit",component:O},{path:"/looktodo/:info",name:"look",component:X}],tt=new V["a"]({routes:Z}),et=tt,at=a("2f62");s["a"].use(at["a"]);var st=new at["a"].Store({state:{},mutations:{},actions:{},modules:{}});s["a"].config.productionTip=!1,new s["a"]({router:et,store:st,render:function(t){return t(U)}}).$mount("#app")},"99f1":function(t,e,a){"use strict";a("f3d5")},"9a0f":function(t,e,a){},ad6f:function(t,e,a){},b9a0:function(t,e,a){"use strict";a("ad6f")},f3d5:function(t,e,a){}});
//# sourceMappingURL=app.2cbc7742.js.map