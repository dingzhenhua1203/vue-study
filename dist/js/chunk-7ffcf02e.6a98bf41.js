(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7ffcf02e"],{"10ca":function(s,t,e){"use strict";e.r(t);var n=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"wsTest"},[e("div",{staticClass:"online"},[s._v("当前在线用户数："+s._s(s.userCount))]),e("div",{staticClass:"user-id"},[s._v("当前分配的用户Id："+s._s(s.userUUid.split("-")[0]))]),e("div",{staticClass:"msg-box"},[e("ul",{directives:[{name:"show",rawName:"v-show",value:s.msgList.length,expression:"msgList.length"}],staticClass:"msg-list"},s._l(s.msgList,(function(t,n){return e("li",{key:n,staticClass:"msg-item",class:{"is-me":s.userUUid===t.userUUid}},[e("div",{staticClass:"name"},[s._v("用户："+s._s(t.userUUid.split("-")[0]))]),e("div",{staticClass:"msg-content"},[s._v(" "+s._s(t.msg)+" ")])])})),0)]),e("div",{staticClass:"input-box"},[e("el-input",{attrs:{type:"textarea",maxlength:"200",rows:2,placeholder:"请输入消息"},model:{value:s.sendMsg,callback:function(t){s.sendMsg=t},expression:"sendMsg"}}),e("el-button",{staticStyle:{"margin-top":"20px"},attrs:{type:"primary",size:"small"},on:{click:s.send}},[s._v("发送")])],1)])},i=[],r=(e("498a"),{name:"wsTest",components:{},data:function(){return{sendMsg:"",userNum:"",userCount:0,userUUid:"",msgList:[]}},methods:{send:function(){this.sendMsg.trim()&&this.ws.send(JSON.stringify({type:"msg",msg:this.sendMsg,userUUid:this.userUUid}))}},computed:{},created:function(){var s=this,t=arguments;this.ws=new WebSocket("ws://203.195.156.57:30002"),this.ws.addEventListener("open",(function(){s.ws.send(JSON.stringify({type:"connection"}))})),this.ws.addEventListener("message",(function(t){var e=JSON.parse(t.data),n=e.type,i=e.userUUid,r=e.msg;1===n?s.msgList.push({userUUid:i,msg:r}):3===n?s.userUUid=r:s.userCount=r})),this.ws.addEventListener("error",(function(s,e){alert(JSON.stringify(s,["message","arguments","type","name"])),console.log(t,"arg")})),window.addEventListener("error",(function(s,t){alert(JSON.stringify(s)),alert(JSON.stringify(t))}))}}),a=r,u=(e("8757"),e("2877")),o=Object(u["a"])(a,n,i,!1,null,null,null);t["default"]=o.exports},4944:function(s,t,e){},"498a":function(s,t,e){"use strict";var n=e("23e7"),i=e("58a8").trim,r=e("c8d2");n({target:"String",proto:!0,forced:r("trim")},{trim:function(){return i(this)}})},5899:function(s,t){s.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(s,t,e){var n=e("1d80"),i=e("5899"),r="["+i+"]",a=RegExp("^"+r+r+"*"),u=RegExp(r+r+"*$"),o=function(s){return function(t){var e=String(n(t));return 1&s&&(e=e.replace(a,"")),2&s&&(e=e.replace(u,"")),e}};s.exports={start:o(1),end:o(2),trim:o(3)}},8757:function(s,t,e){"use strict";var n=e("4944"),i=e.n(n);i.a},c8d2:function(s,t,e){var n=e("d039"),i=e("5899"),r="​᠎";s.exports=function(s){return n((function(){return!!i[s]()||r[s]()!=r||i[s].name!==s}))}}}]);
//# sourceMappingURL=chunk-7ffcf02e.6a98bf41.js.map