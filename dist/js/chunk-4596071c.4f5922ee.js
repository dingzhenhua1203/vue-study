(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4596071c"],{"0239":function(t,e,n){},"0538":function(t,e,n){"use strict";var r=n("1c0b"),o=n("861d"),i=[].slice,c={},a=function(t,e,n){if(!(e in c)){for(var r=[],o=0;o<e;o++)r[o]="a["+o+"]";c[e]=Function("C,a","return new C("+r.join(",")+")")}return c[e](t,n)};t.exports=Function.bind||function(t){var e=r(this),n=i.call(arguments,1),c=function(){var r=n.concat(i.call(arguments));return this instanceof c?a(e,r.length,r):e.apply(t,r)};return o(e.prototype)&&(c.prototype=e.prototype),c}},"057f":function(t,e,n){var r=n("fc6a"),o=n("241c").f,i={}.toString,c="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(t){try{return o(t)}catch(e){return c.slice()}};t.exports.f=function(t){return c&&"[object Window]"==i.call(t)?a(t):o(r(t))}},1986:function(t,e,n){"use strict";var r=n("0239"),o=n.n(r);o.a},"1dde":function(t,e,n){var r=n("d039"),o=n("b622"),i=n("2d00"),c=o("species");t.exports=function(t){return i>=51||!r((function(){var e=[],n=e.constructor={};return n[c]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},3410:function(t,e,n){var r=n("23e7"),o=n("d039"),i=n("7b0b"),c=n("e163"),a=n("e177"),u=o((function(){c(1)}));r({target:"Object",stat:!0,forced:u,sham:!a},{getPrototypeOf:function(t){return c(i(t))}})},"3ca3":function(t,e,n){"use strict";var r=n("6547").charAt,o=n("69f3"),i=n("7dd0"),c="String Iterator",a=o.set,u=o.getterFor(c);i(String,"String",(function(t){a(this,{type:c,string:String(t),index:0})}),(function(){var t,e=u(this),n=e.string,o=e.index;return o>=n.length?{value:void 0,done:!0}:(t=r(n,o),e.index+=t.length,{value:t,done:!1})}))},"4ae1":function(t,e,n){var r=n("23e7"),o=n("d066"),i=n("1c0b"),c=n("825a"),a=n("861d"),u=n("7c73"),f=n("0538"),s=n("d039"),l=o("Reflect","construct"),p=s((function(){function t(){}return!(l((function(){}),[],t)instanceof t)})),h=!s((function(){l((function(){}))})),v=p||h;r({target:"Reflect",stat:!0,forced:v,sham:v},{construct:function(t,e){i(t),c(e);var n=arguments.length<3?t:i(arguments[2]);if(h&&!p)return l(t,e,n);if(t==n){switch(e.length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3])}var r=[null];return r.push.apply(r,e),new(f.apply(t,r))}var o=n.prototype,s=u(a(o)?o:Object.prototype),v=Function.apply.call(t,s,e);return a(v)?v:s}})},"53ca":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));n("a4d3"),n("e01a"),n("d28b"),n("e260"),n("d3b7"),n("3ca3"),n("ddb0");function r(t){return r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}},"5d41":function(t,e,n){var r=n("23e7"),o=n("861d"),i=n("825a"),c=n("5135"),a=n("06cf"),u=n("e163");function f(t,e){var n,r,s=arguments.length<3?t:arguments[2];return i(t)===s?t[e]:(n=a.f(t,e))?c(n,"value")?n.value:void 0===n.get?void 0:n.get.call(s):o(r=u(t))?f(r,e,s):void 0}r({target:"Reflect",stat:!0},{get:f})},"746f":function(t,e,n){var r=n("428f"),o=n("5135"),i=n("e538"),c=n("9bf2").f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});o(e,t)||c(e,t,{value:i.f(t)})}},8418:function(t,e,n){"use strict";var r=n("c04e"),o=n("9bf2"),i=n("5c6c");t.exports=function(t,e,n){var c=r(e);c in t?o.f(t,c,i(0,n)):t[c]=n}},"99af":function(t,e,n){"use strict";var r=n("23e7"),o=n("d039"),i=n("e8b5"),c=n("861d"),a=n("7b0b"),u=n("50c4"),f=n("8418"),s=n("65f0"),l=n("1dde"),p=n("b622"),h=n("2d00"),v=p("isConcatSpreadable"),g=9007199254740991,y="Maximum allowed index exceeded",d=h>=51||!o((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),b=l("concat"),m=function(t){if(!c(t))return!1;var e=t[v];return void 0!==e?!!e:i(t)},w=!d||!b;r({target:"Array",proto:!0,forced:w},{concat:function(t){var e,n,r,o,i,c=a(this),l=s(c,0),p=0;for(e=-1,r=arguments.length;e<r;e++)if(i=-1===e?c:arguments[e],m(i)){if(o=u(i.length),p+o>g)throw TypeError(y);for(n=0;n<o;n++,p++)n in i&&f(l,p,i[n])}else{if(p>=g)throw TypeError(y);f(l,p++,i)}return l.length=p,l}})},a4d3:function(t,e,n){"use strict";var r=n("23e7"),o=n("da84"),i=n("d066"),c=n("c430"),a=n("83ab"),u=n("4930"),f=n("fdbf"),s=n("d039"),l=n("5135"),p=n("e8b5"),h=n("861d"),v=n("825a"),g=n("7b0b"),y=n("fc6a"),d=n("c04e"),b=n("5c6c"),m=n("7c73"),w=n("df75"),O=n("241c"),S=n("057f"),P=n("7418"),j=n("06cf"),_=n("9bf2"),k=n("d1e7"),T=n("9112"),x=n("6eeb"),F=n("5692"),L=n("f772"),E=n("d012"),R=n("90e3"),N=n("b622"),C=n("e538"),I=n("746f"),$=n("d44e"),z=n("69f3"),D=n("b727").forEach,J=L("hidden"),M="Symbol",W="prototype",A=N("toPrimitive"),B=z.set,Q=z.getterFor(M),q=Object[W],G=o.Symbol,H=i("JSON","stringify"),K=j.f,U=_.f,V=S.f,X=k.f,Y=F("symbols"),Z=F("op-symbols"),tt=F("string-to-symbol-registry"),et=F("symbol-to-string-registry"),nt=F("wks"),rt=o.QObject,ot=!rt||!rt[W]||!rt[W].findChild,it=a&&s((function(){return 7!=m(U({},"a",{get:function(){return U(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=K(q,e);r&&delete q[e],U(t,e,n),r&&t!==q&&U(q,e,r)}:U,ct=function(t,e){var n=Y[t]=m(G[W]);return B(n,{type:M,tag:t,description:e}),a||(n.description=e),n},at=f?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof G},ut=function(t,e,n){t===q&&ut(Z,e,n),v(t);var r=d(e,!0);return v(n),l(Y,r)?(n.enumerable?(l(t,J)&&t[J][r]&&(t[J][r]=!1),n=m(n,{enumerable:b(0,!1)})):(l(t,J)||U(t,J,b(1,{})),t[J][r]=!0),it(t,r,n)):U(t,r,n)},ft=function(t,e){v(t);var n=y(e),r=w(n).concat(vt(n));return D(r,(function(e){a&&!lt.call(n,e)||ut(t,e,n[e])})),t},st=function(t,e){return void 0===e?m(t):ft(m(t),e)},lt=function(t){var e=d(t,!0),n=X.call(this,e);return!(this===q&&l(Y,e)&&!l(Z,e))&&(!(n||!l(this,e)||!l(Y,e)||l(this,J)&&this[J][e])||n)},pt=function(t,e){var n=y(t),r=d(e,!0);if(n!==q||!l(Y,r)||l(Z,r)){var o=K(n,r);return!o||!l(Y,r)||l(n,J)&&n[J][r]||(o.enumerable=!0),o}},ht=function(t){var e=V(y(t)),n=[];return D(e,(function(t){l(Y,t)||l(E,t)||n.push(t)})),n},vt=function(t){var e=t===q,n=V(e?Z:y(t)),r=[];return D(n,(function(t){!l(Y,t)||e&&!l(q,t)||r.push(Y[t])})),r};if(u||(G=function(){if(this instanceof G)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=R(t),n=function(t){this===q&&n.call(Z,t),l(this,J)&&l(this[J],e)&&(this[J][e]=!1),it(this,e,b(1,t))};return a&&ot&&it(q,e,{configurable:!0,set:n}),ct(e,t)},x(G[W],"toString",(function(){return Q(this).tag})),x(G,"withoutSetter",(function(t){return ct(R(t),t)})),k.f=lt,_.f=ut,j.f=pt,O.f=S.f=ht,P.f=vt,C.f=function(t){return ct(N(t),t)},a&&(U(G[W],"description",{configurable:!0,get:function(){return Q(this).description}}),c||x(q,"propertyIsEnumerable",lt,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!u,sham:!u},{Symbol:G}),D(w(nt),(function(t){I(t)})),r({target:M,stat:!0,forced:!u},{for:function(t){var e=String(t);if(l(tt,e))return tt[e];var n=G(e);return tt[e]=n,et[n]=e,n},keyFor:function(t){if(!at(t))throw TypeError(t+" is not a symbol");if(l(et,t))return et[t]},useSetter:function(){ot=!0},useSimple:function(){ot=!1}}),r({target:"Object",stat:!0,forced:!u,sham:!a},{create:st,defineProperty:ut,defineProperties:ft,getOwnPropertyDescriptor:pt}),r({target:"Object",stat:!0,forced:!u},{getOwnPropertyNames:ht,getOwnPropertySymbols:vt}),r({target:"Object",stat:!0,forced:s((function(){P.f(1)}))},{getOwnPropertySymbols:function(t){return P.f(g(t))}}),H){var gt=!u||s((function(){var t=G();return"[null]"!=H([t])||"{}"!=H({a:t})||"{}"!=H(Object(t))}));r({target:"JSON",stat:!0,forced:gt},{stringify:function(t,e,n){var r,o=[t],i=1;while(arguments.length>i)o.push(arguments[i++]);if(r=e,(h(e)||void 0!==t)&&!at(t))return p(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!at(e))return e}),o[1]=e,H.apply(null,o)}})}G[W][A]||T(G[W],A,G[W].valueOf),$(G,M),E[J]=!0},b0c0:function(t,e,n){var r=n("83ab"),o=n("9bf2").f,i=Function.prototype,c=i.toString,a=/^\s*function ([^ (]*)/,u="name";r&&!(u in i)&&o(i,u,{configurable:!0,get:function(){try{return c.call(this).match(a)[1]}catch(t){return""}}})},d28b:function(t,e,n){var r=n("746f");r("iterator")},d4ec:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return r}))},ddb0:function(t,e,n){var r=n("da84"),o=n("fdbc"),i=n("e260"),c=n("9112"),a=n("b622"),u=a("iterator"),f=a("toStringTag"),s=i.values;for(var l in o){var p=r[l],h=p&&p.prototype;if(h){if(h[u]!==s)try{c(h,u,s)}catch(g){h[u]=s}if(h[f]||c(h,f,l),o[l])for(var v in i)if(h[v]!==i[v])try{c(h,v,i[v])}catch(g){h[v]=i[v]}}}},e01a:function(t,e,n){"use strict";var r=n("23e7"),o=n("83ab"),i=n("da84"),c=n("5135"),a=n("861d"),u=n("9bf2").f,f=n("e893"),s=i.Symbol;if(o&&"function"==typeof s&&(!("description"in s.prototype)||void 0!==s().description)){var l={},p=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof p?new s(t):void 0===t?s():s(t);return""===t&&(l[e]=!0),e};f(p,s);var h=p.prototype=s.prototype;h.constructor=p;var v=h.toString,g="Symbol(test)"==String(s("test")),y=/^Symbol\((.*)\)[^)]+$/;u(h,"description",{configurable:!0,get:function(){var t=a(this)?this.valueOf():this,e=v.call(t);if(c(l,t))return"";var n=g?e.slice(7,-1):e.replace(y,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:p})}},e439:function(t,e,n){var r=n("23e7"),o=n("d039"),i=n("fc6a"),c=n("06cf").f,a=n("83ab"),u=o((function(){c(1)})),f=!a||u;r({target:"Object",stat:!0,forced:f,sham:!a},{getOwnPropertyDescriptor:function(t,e){return c(i(t),e)}})},e538:function(t,e,n){var r=n("b622");e.f=r},ec46:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"es6Test"},[n("h1",[t._v("es6学习笔记")]),n("section",[n("h3",[t._v("1.剪头函数")]),n("ol",[n("li",[t._v("1.剪头函数没有arguments对象")]),n("li",[t._v("2.剪头函数没有prototype属性，不能用构造函数(不能用new关键字实例化)")]),n("li",[t._v("3.箭头函数没有this，它的this对象指向引用它的对象。")])])]),n("section",[n("h3",[t._v("2.es6 class理解与使用")]),n("h5",[t._v("关于class的基本用法")]),n("p",[t._v("以前的JavaScript没有类的概念，他是基于原型的面相对象的语言。原型对象的特点就是讲自身属性共享给新对象。我们先看一下下面的代码实现：")]),n("code",[t._v(" //常规写法 function Person(name,age) { this.name = name; this.age = age; } Person.prototype.sayInfo = function () { console.log(`${this.name}是${this.age}岁`) } const liLei = new Person('LiLei',20) liLei.sayInfo() //LiLei是20岁 ")]),n("p",[t._v("这种实现跟java比，实现类的方案太特别了，下面我们看一下es6的类的实现方式：")]),n("code",[t._v(" class Person{ //定义了一个名字为Person的类 constructor(name,age){ //constructor是一个构造方法，用来接收参数 this.name = name; //this代表的是实例对象 this.age = age; } sayInfo(){ console.log(`${this.name}是${this.age}岁`) } } const liLei = new Person('LiLei',21) liLei.sayInfo() ")]),n("p",[t._v("由下面代码可以看出类实质上就是一个函数。类自身指向的就是构造函数。所以可以认为ES6中的类其实就是构造函数的另外一种写法！")]),n("code",[t._v(" console.log(typeof Person);//function console.log(Person===Person.prototype.constructor);//true ")]),n("h5",[t._v("class的")])])])}];n("99af"),n("b0c0"),n("3410");function i(t){return i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},i(t)}n("e439"),n("5d41");function c(t,e){while(!Object.prototype.hasOwnProperty.call(t,e))if(t=i(t),null===t)break;return t}function a(t,e,n){return a="undefined"!==typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=c(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(n):o.value}},a(t,e,n||t)}function u(t,e){return u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},u(t,e)}function f(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e)}n("4ae1"),n("d3b7"),n("25f0");function s(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var l=n("53ca");function p(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function h(t,e){return!e||"object"!==Object(l["a"])(e)&&"function"!==typeof e?p(t):e}function v(t){return function(){var e,n=i(t);if(s()){var r=i(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return h(this,e)}}var g=n("d4ec");function y(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function d(t,e,n){return e&&y(t.prototype,e),n&&y(t,n),t}var b=n("b2d8"),m=(n("64e1"),{name:"es6Test",data:function(){return{config:{mode:1},arrowContent:""}},methods:{arrowFun:function(){},esClassTest:function(){var t=function(){function t(t,e){this.name=t,this.age=e}t.prototype.sayInfo=function(){console.log("".concat(this.name,"是").concat(this.age,"岁"))};var e=new t("LiLei",20);e.sayInfo()};t();var e=function(){var t=function(){function t(e,n){Object(g["a"])(this,t),this.name=e,this.age=n}return d(t,[{key:"sayInfo",value:function(){console.log("".concat(this.name,"是").concat(this.age,"岁"))}}]),t}(),e=new t("LiLei",21);e.sayInfo()};e();var n=function(){var t=function(){function t(e){Object(g["a"])(this,t),this.name=e}return d(t,[{key:"sayName",value:function(){console.log(this.name)}},{key:"testFn",value:function(){console.log("我是父类的函数！")}}]),t}(),e=function(t){f(n,t);var e=v(n);function n(){return Object(g["a"])(this,n),e.apply(this,arguments)}return d(n,[{key:"sayWork",value:function(){console.log(this.name)}},{key:"testFn",value:function(){console.log("我是子类的函数！")}}]),n}(t),n=new e("liLei");n.sayName(),n.sayWork(),n.testFn()};n();var r=function(){var t=function(){function t(e){Object(g["a"])(this,t),this.name=e}return d(t,[{key:"testFn",value:function(){console.log("我是父类的函数！")}}]),t}(),e=function(t){f(n,t);var e=v(n);function n(t,r,o){var i;return Object(g["a"])(this,n),i=e.call(this,t),i.age=r,i.sex=o,i}return d(n,[{key:"testFn",value:function(){a(i(n.prototype),"testFn",this).call(this),console.log(a(i(n.prototype),"name",this)),console.log("年龄"+this.age),console.log("性别"+this.sex),console.log("我是子类的函数！")}}]),n}(t),n=new e("liLei","20");n.testFn()};r();var o=function(){var t=function(){function t(){Object(g["a"])(this,t)}return d(t,null,[{key:"sayName",value:function(){console.log("我是static函数")}}]),t}(),e=function(t){f(n,t);var e=v(n);function n(){return Object(g["a"])(this,n),e.apply(this,arguments)}return n}(t);new e;t.sayName(),e.sayName()};o();var c=function(){var t=function(){function t(e,n,r){Object(g["a"])(this,t),this.pageNo=e,this.pageSize=n,this.total=r,this.currentPage=0,this.pageTotal=Math.ceil(this.total/this.pageSize)}return d(t,[{key:"nextPage",value:function(){this.currentPage<this.pageTotal&&this.currentPage++}},{key:"beforePage",value:function(){this.currentPage>1&&this.currentPage--}},{key:"jumpPage",value:function(t){this.currentPage=t}},{key:"changePageSize",value:function(t){this.pageSize=t,this.pageTotal=Math.ceil(this.total/this.pageSize)}},{key:"getTotalPage",value:function(){return Math.ceil(this.total/this.pageSize)}}]),t}(),e=function(t){f(n,t);var e=v(n);function n(t,r,o,i){var c;return Object(g["a"])(this,n),c=e.call(this,t,r,o),c.pageTotal=i,c}return d(n,[{key:"getTotalPage",value:function(){return this.pageTotal||a(i(n.prototype),"getTotalPage",this).call(this)}}]),n}(t),n=new t(1,10,100);n.getTotalPage();var r=new e(1,10,100,10);r.getTotalPage()};c()},getEditContent:function(){console.log(arguments,"234")}},computed:{},components:{mavonEditor:b["mavonEditor"]},created:function(){this.arrowFun(),this.esClassTest()}}),w=m,O=(n("1986"),n("2877")),S=Object(O["a"])(w,r,o,!1,null,null,null);e["default"]=S.exports}}]);
//# sourceMappingURL=chunk-4596071c.4f5922ee.js.map