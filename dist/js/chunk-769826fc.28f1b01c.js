(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-769826fc"],{"0cea":function(t,e,n){"use strict";n("54aa")},1148:function(t,e,n){"use strict";var i=n("5926"),r=n("577e"),a=n("1d80"),o=RangeError;t.exports=function(t){var e=r(a(this)),n="",c=i(t);if(c<0||c==1/0)throw o("Wrong number of repetitions");for(;c>0;(c>>>=1)&&(e+=e))1&c&&(n+=e);return n}},"14d9":function(t,e,n){"use strict";var i=n("23e7"),r=n("7b0b"),a=n("07fa"),o=n("3a34"),c=n("3511"),s=n("d039"),u=s((function(){return 4294967297!==[].push.call({length:4294967296},1)})),f=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(t){return t instanceof TypeError}},h=u||!f();i({target:"Array",proto:!0,arity:1,forced:h},{push:function(t){var e=r(this),n=a(e),i=arguments.length;c(n+i);for(var s=0;s<i;s++)e[n]=arguments[s],n++;return o(e,n),n}})},3511:function(t,e){var n=TypeError,i=9007199254740991;t.exports=function(t){if(t>i)throw n("Maximum allowed index exceeded");return t}},"3a34":function(t,e,n){"use strict";var i=n("83ab"),r=n("e8b5"),a=TypeError,o=Object.getOwnPropertyDescriptor,c=i&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(t){return t instanceof TypeError}}();t.exports=c?function(t,e){if(r(t)&&!o(t,"length").writable)throw a("Cannot set read only .length");return t.length=e}:function(t,e){return t.length=e}},"40db":function(t,e,n){},"414a":function(t,e,n){"use strict";n("68ef"),n("40db")},4598:function(t,e,n){"use strict";(function(t){n.d(e,"c",(function(){return u})),n.d(e,"b",(function(){return f})),n.d(e,"a",(function(){return h}));var i=n("a142"),r=Date.now();function a(t){var e=Date.now(),n=Math.max(0,16-(e-r)),i=setTimeout(t,n);return r=e+n,i}var o=i["g"]?t:window,c=o.requestAnimationFrame||a,s=o.cancelAnimationFrame||o.clearTimeout;function u(t){return c.call(o,t)}function f(t){u((function(){u(t)}))}function h(t){s.call(o,t)}}).call(this,n("c8ba"))},"54aa":function(t,e,n){},"7a82":function(t,e,n){"use strict";var i=n("d282"),r=n("a142"),a=n("4598"),o=n("68ed"),c=1e3,s=60*c,u=60*s,f=24*u;function h(t){var e=Math.floor(t/f),n=Math.floor(t%f/u),i=Math.floor(t%u/s),r=Math.floor(t%s/c),a=Math.floor(t%c);return{days:e,hours:n,minutes:i,seconds:r,milliseconds:a}}function d(t,e){var n=e.days,i=e.hours,r=e.minutes,a=e.seconds,c=e.milliseconds;if(-1===t.indexOf("DD")?i+=24*n:t=t.replace("DD",Object(o["b"])(n)),-1===t.indexOf("HH")?r+=60*i:t=t.replace("HH",Object(o["b"])(i)),-1===t.indexOf("mm")?a+=60*r:t=t.replace("mm",Object(o["b"])(r)),-1===t.indexOf("ss")?c+=1e3*a:t=t.replace("ss",Object(o["b"])(a)),-1!==t.indexOf("S")){var s=Object(o["b"])(c,3);t=-1!==t.indexOf("SSS")?t.replace("SSS",s):-1!==t.indexOf("SS")?t.replace("SS",s.slice(0,2)):t.replace("S",s.charAt(0))}return t}function l(t,e){return Math.floor(t/1e3)===Math.floor(e/1e3)}var m=Object(i["a"])("count-down"),p=m[0],b=m[1];e["a"]=p({props:{millisecond:Boolean,time:{type:[Number,String],default:0},format:{type:String,default:"HH:mm:ss"},autoStart:{type:Boolean,default:!0}},data:function(){return{remain:0}},computed:{timeData:function(){return h(this.remain)},formattedTime:function(){return d(this.format,this.timeData)}},watch:{time:{immediate:!0,handler:"reset"}},activated:function(){this.keepAlivePaused&&(this.counting=!0,this.keepAlivePaused=!1,this.tick())},deactivated:function(){this.counting&&(this.pause(),this.keepAlivePaused=!0)},beforeDestroy:function(){this.pause()},methods:{start:function(){this.counting||(this.counting=!0,this.endTime=Date.now()+this.remain,this.tick())},pause:function(){this.counting=!1,Object(a["a"])(this.rafId)},reset:function(){this.pause(),this.remain=+this.time,this.autoStart&&this.start()},tick:function(){r["b"]&&(this.millisecond?this.microTick():this.macroTick())},microTick:function(){var t=this;this.rafId=Object(a["c"])((function(){t.counting&&(t.setRemain(t.getRemain()),t.remain>0&&t.microTick())}))},macroTick:function(){var t=this;this.rafId=Object(a["c"])((function(){if(t.counting){var e=t.getRemain();l(e,t.remain)&&0!==e||t.setRemain(e),t.remain>0&&t.macroTick()}}))},getRemain:function(){return Math.max(this.endTime-Date.now(),0)},setRemain:function(t){this.remain=t,this.$emit("change",this.timeData),0===t&&(this.pause(),this.$emit("finish"))}},render:function(){var t=arguments[0];return t("div",{class:b()},[this.slots("default",this.timeData)||this.formattedTime])}})},"9ffe":function(t,e,n){"use strict";n.r(e);var i,r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"wrap"},[e("div",{staticStyle:{"text-align":"center","margin-top":"100px","background-color":"#7DB4A4",padding:"50px 0","font-size":"18px",color:"white"}},[e("van-icon",{attrs:{name:"passed"}}),t._v(" 订单已结束 ")],1)])},a=[],o=n("ade3"),c=(n("e7e5"),n("d399")),s=(n("c3a6"),n("ad06")),u=(n("414a"),n("7a82")),f=(n("c194"),n("7744")),h=(n("14d9"),n("b680"),{components:(i={},Object(o["a"])(i,f["a"].name,f["a"]),Object(o["a"])(i,u["a"].name,u["a"]),Object(o["a"])(i,s["a"].name,s["a"]),Object(o["a"])(i,c["a"].name,c["a"]),i),data:function(){return{orderInfo:{},sec:0,bankInfo:{}}},methods:{getData:function(){var t=this,e=this;e.$axios.post("index.php?s=OTCUser.pcode&time="+this.$route.query.time).then((function(e){"end"==e.data.data?t.$router.push({path:"end"}):(t.orderInfo=e.data.data,t.bankInfo=JSON.parse(e.data.data.pay_code),t.orderInfo.amount=(t.orderInfo.amount/100).toFixed(2),t.sec=t.orderInfo.time)})).catch((function(t){console.log(t)}))},onCopy:function(){c["a"].success("复制成功")},onError:function(){c["a"].fail("复制失败请重试！！")}},mounted:function(){this.getData()}}),d=h,l=(n("0cea"),n("2877")),m=Object(l["a"])(d,r,a,!1,null,"e133f1d0",null);e["default"]=m.exports},b680:function(t,e,n){"use strict";var i=n("23e7"),r=n("e330"),a=n("5926"),o=n("408a"),c=n("1148"),s=n("d039"),u=RangeError,f=String,h=Math.floor,d=r(c),l=r("".slice),m=r(1..toFixed),p=function(t,e,n){return 0===e?n:e%2===1?p(t,e-1,n*t):p(t*t,e/2,n)},b=function(t){var e=0,n=t;while(n>=4096)e+=12,n/=4096;while(n>=2)e+=1,n/=2;return e},g=function(t,e,n){var i=-1,r=n;while(++i<6)r+=e*t[i],t[i]=r%1e7,r=h(r/1e7)},v=function(t,e){var n=6,i=0;while(--n>=0)i+=t[n],t[n]=h(i/e),i=i%e*1e7},w=function(t){var e=6,n="";while(--e>=0)if(""!==n||0===e||0!==t[e]){var i=f(t[e]);n=""===n?i:n+d("0",7-i.length)+i}return n},O=s((function(){return"0.000"!==m(8e-5,3)||"1"!==m(.9,0)||"1.25"!==m(1.255,2)||"1000000000000000128"!==m(0xde0b6b3a7640080,0)}))||!s((function(){m({})}));i({target:"Number",proto:!0,forced:O},{toFixed:function(t){var e,n,i,r,c=o(this),s=a(t),h=[0,0,0,0,0,0],m="",O="0";if(s<0||s>20)throw u("Incorrect fraction digits");if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return f(c);if(c<0&&(m="-",c=-c),c>1e-21)if(e=b(c*p(2,69,1))-69,n=e<0?c*p(2,-e,1):c/p(2,e,1),n*=4503599627370496,e=52-e,e>0){g(h,0,n),i=s;while(i>=7)g(h,1e7,0),i-=7;g(h,p(10,i,1),0),i=e-1;while(i>=23)v(h,1<<23),i-=23;v(h,1<<i),g(h,1,1),v(h,2),O=w(h)}else g(h,0,n),g(h,1<<-e,0),O=w(h)+d("0",s);return s>0?(r=O.length,O=m+(r<=s?"0."+d("0",s-r)+O:l(O,0,r-s)+"."+l(O,r-s))):O=m+O,O}})},c194:function(t,e,n){"use strict";n("68ef"),n("9d70"),n("3743"),n("1a04")},c3a6:function(t,e,n){"use strict";n("68ef"),n("9d70"),n("3743")}}]);
//# sourceMappingURL=chunk-769826fc.28f1b01c.js.map