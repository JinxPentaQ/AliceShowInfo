(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-06ace336"],{"0778":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAB3klEQVRIS9WUy0sbURSHf2cmk9b6WIjoRpeCRRqUpE3amk6zkNKFG6HZuVIzkL9AF/4RLgQzqBt32q66EgthbE0T2mBfQsCt0CLiQutzJnNkfECiEyfOKOjdXebc77vncYdwy4tumY87JaDEYrDByljtzW8D4GqyryqDRDrYxJC6BEKNBTUZ+wT9hxrLbzpJHAWJj8FHXC/JAuArhZmAQTu6pvbl966SOAvSwQ4iqd0OwqyvqbF8wZNgUAt1+9jXagcxyFiflr+veBIoWrgdTB22EOJCSs6teRK8m+v0NzbXyQA9LAfxwdbGf20+vnrkSWAdHlgI1D7w1zwhcJO1Z9Dm4dH+79k3v3Y9T1EZgCGc7AmmE/j8u+MUlYKS6dd1B5JOMz3LOzciSGpP2wxBGiTmtwAFAJz34RDAHyZeJMmcSUUqN7piBsrS81GAxoDT13vF0gEe3/r3dWQ+juLFOFuBokUmQEKy2jKcxb1PRTNxUPk/6pJA+fKyHyZ/uCb8JJxhDquvslOlZy8LPr/4BkbIjQCMQkrOPK4oGPoUbhH84l+yBtHlKhaLbVOx3LrtmA4thQMixJ8u2adlIjOiRrO5iu9AST8LmaJY60Yigo3JaDZT2mjXpaj2AvdfcAwOUZIZLqn2BAAAAABJRU5ErkJggg=="},"0a51":function(t,e,a){"use strict";a("da75")},1148:function(t,e,a){"use strict";var r=a("5926"),n=a("577e"),i=a("1d80"),o=RangeError;t.exports=function(t){var e=n(i(this)),a="",s=r(t);if(s<0||s==1/0)throw o("Wrong number of repetitions");for(;s>0;(s>>>=1)&&(e+=e))1&s&&(a+=e);return a}},"14d9":function(t,e,a){"use strict";var r=a("23e7"),n=a("7b0b"),i=a("07fa"),o=a("3a34"),s=a("3511"),c=a("d039"),u=c((function(){return 4294967297!==[].push.call({length:4294967296},1)})),l=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(t){return t instanceof TypeError}},d=u||!l();r({target:"Array",proto:!0,arity:1,forced:d},{push:function(t){var e=n(this),a=i(e),r=arguments.length;s(a+r);for(var c=0;c<r;c++)e[a]=arguments[c],a++;return o(e,a),a}})},"1a48":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABiklEQVRIS9WVy0pCURSGv+Wlu1GkUIOwSWA06SF6BgdBQXTCCIkGNa9xg0CosEIaNOoRmjSJ8AGkBtEkKoJwIKVZeFxxFC8pgiePg/bswD7/t9f/r7W30OUlXdanc8CBDtFDAJMx3rljW7L1h7YPiGkv/QRQ/AgBhL6qoMktEXmwB7hQN2nGcBMA/IAPV4vKlTdWJdkacKpbCJtQPZVVoQfatFL4pMguhhxWIDWL4jqBhyfA1VHwSgETPxHJWDo1wJnOYpLqSLzys5cgS/L47wAvKElcpZZdYFUsux2z6AQfUcLy3WixExnc42OmJPxBkBwZopJu7qK/hqwcYcg6cQ3hZhrF5JlLdqTgjEXKOYYsktBJisyhZDG4QkSdAUAGFyGW5ZU9HSRInrCYzllUVkqhrGFwwymj5MiyIV9OVVDfOFYXefEy1TxoxzqL26FJLhAk0jjJ+zrCMM/AQIfXhZXJOMuS/22R9ZXQ+ZKXtdvUHkvIocRYkevmkO1Jtb3b/ovWtnR54/8H/AB87IcZeeiwXwAAAABJRU5ErkJggg=="},"2e61":function(t,e,a){"use strict";a.r(e);var r,n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"wrap"},[e("div",{staticClass:"order_amount",staticStyle:{"font-weight":"400"}},[e("p",{staticClass:"wechat_title"},[t._v("微信转手机号码支付")]),e("p",{staticStyle:{"font-weight":"600"}},[e("span",{staticClass:"amount"},[t._v("￥"+t._s(t.orderInfo.amount))])])]),e("van-cell",{staticClass:"bankInfo"},[[e("img",{staticClass:"fornt_icon",attrs:{src:a("1a48"),alt:""}}),e("span",{staticClass:"bank_title"},[t._v("转账金额："+t._s(t.orderInfo.amount))]),e("img",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.orderInfo.amount,expression:"orderInfo.amount",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:t.onError,expression:"onError",arg:"error"}],staticClass:"copy",attrs:{src:a("78a3"),alt:""}})]],2),e("van-cell",{staticClass:"bankInfo"},[[e("img",{staticClass:"fornt_icon",attrs:{src:a("a374"),alt:""}}),e("span",{staticClass:"bank_title"},[t._v("转账号码："+t._s(t.orderInfo.pay_code))]),e("img",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.orderInfo.pay_code,expression:"orderInfo.pay_code",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:t.onError,expression:"onError",arg:"error"}],staticClass:"copy",attrs:{src:a("78a3"),alt:""}})]],2),e("van-cell",{staticClass:"bankInfo"},[[e("img",{staticClass:"fornt_icon",attrs:{src:a("0778"),alt:""}}),e("span",{staticClass:"bank_title"},[t._v("收款人姓名："+t._s(t.orderInfo.code_name))]),e("img",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.orderInfo.code_name,expression:"orderInfo.code_name",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:t.onError,expression:"onError",arg:"error"}],staticClass:"copy",attrs:{src:a("78a3"),alt:""}})]],2),e("van-cell",{staticClass:"bankInfo"},[[e("img",{staticClass:"fornt_icon",attrs:{src:a("f2d9"),alt:""}}),e("span",{staticClass:"bank_title"},[t._v("备注："+t._s(t.orderInfo.remark_id))]),e("img",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.orderInfo.remark_id,expression:"orderInfo.remark_id",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:t.onError,expression:"onError",arg:"error"}],staticClass:"copy",attrs:{src:a("78a3"),alt:""}})]],2),e("div",{staticStyle:{"font-size":"14px",color:"#ff976a",margin:"8px 10px"}},[e("van-icon",{staticStyle:{"padding-top":"5px"},attrs:{name:"warning"}}),e("span",{staticStyle:{"vertical-align":"bottom","padding-left":"5px"}},[t._v("转账备注必填，否则不能及时到账")])],1),t._m(0),e("div",[e("van-cell",{attrs:{title:"剩余时间"}},[[e("span",[e("van-count-down",{staticStyle:{display:"inline-block",color:"#F56C6C"},attrs:{time:t.sec,format:" mm 分 ss 秒"},on:{finish:t.finish}})],1)]],2),e("van-cell",{staticStyle:{"font-size":"12px"},attrs:{title:"订单编号",value:t.orderInfo.order_no}}),e("van-cell",{staticStyle:{"font-size":"12px"},attrs:{title:"订单类型",value:"微信手机号转账"}})],1)],1)},i=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"tips"},[e("p",[t._v("1.点击“复制打开微信首页”")]),e("p",[t._v('2.在微信首页，点击右上角+号-→"收付款"→下拉到底部"向银行卡或机号转账"')]),e("p",[t._v('3.点击"向手机号转账"- +分别粘贴"号码"、"金额"、"说明"→点击确认钮完成付款')])])}],o=a("ade3"),s=(a("e7e5"),a("d399")),c=(a("c3a6"),a("ad06")),u=(a("414a"),a("7a82")),l=(a("c194"),a("7744")),d=(a("14d9"),a("b680"),{components:(r={},Object(o["a"])(r,l["a"].name,l["a"]),Object(o["a"])(r,u["a"].name,u["a"]),Object(o["a"])(r,c["a"].name,c["a"]),Object(o["a"])(r,s["a"].name,s["a"]),r),data:function(){return{orderInfo:{},sec:0,bankInfo:{}}},methods:{getData:function(){var t=this,e=this;e.$axios.post("index.php?s=OTCUser.pcode&time="+this.$route.query.time).then((function(e){"end"==e.data.data?t.$router.push({path:"end"}):(t.orderInfo=e.data.data,t.bankInfo=JSON.parse(e.data.data.pay_code),t.orderInfo.amount=(t.orderInfo.amount/100).toFixed(2),t.sec=1e3*t.orderInfo.time)})).catch((function(t){console.log(t)}))},onCopy:function(){s["a"].success("复制成功")},onError:function(){s["a"].fail("复制失败")},finish:function(){this.$router.push({path:"end"})}},mounted:function(){this.getData(),this.sec=3e5}}),f=d,A=(a("0a51"),a("2877")),p=Object(A["a"])(f,n,i,!1,null,"13547b86",null);e["default"]=p.exports},3511:function(t,e){var a=TypeError,r=9007199254740991;t.exports=function(t){if(t>r)throw a("Maximum allowed index exceeded");return t}},"3a34":function(t,e,a){"use strict";var r=a("83ab"),n=a("e8b5"),i=TypeError,o=Object.getOwnPropertyDescriptor,s=r&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(t){return t instanceof TypeError}}();t.exports=s?function(t,e){if(n(t)&&!o(t,"length").writable)throw i("Cannot set read only .length");return t.length=e}:function(t,e){return t.length=e}},"40db":function(t,e,a){},"414a":function(t,e,a){"use strict";a("68ef"),a("40db")},4598:function(t,e,a){"use strict";(function(t){a.d(e,"c",(function(){return u})),a.d(e,"b",(function(){return l})),a.d(e,"a",(function(){return d}));var r=a("a142"),n=Date.now();function i(t){var e=Date.now(),a=Math.max(0,16-(e-n)),r=setTimeout(t,a);return n=e+a,r}var o=r["g"]?t:window,s=o.requestAnimationFrame||i,c=o.cancelAnimationFrame||o.clearTimeout;function u(t){return s.call(o,t)}function l(t){u((function(){u(t)}))}function d(t){c.call(o,t)}}).call(this,a("c8ba"))},"78a3":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAABfElEQVQ4T+WUPU8CQRCGZ3Y5CKKlhZWNRkuRj0Tk+GjpLC2xkUJNjBJN/AlaaQOJIXb+Aik9D/BiPFBjbWJPY4wfeBy3Y64AFU4KpHPLnXeefTMzOwhDOjgkDnRAiqK4UBpdR2AzRML5AYYGY3ASWwjedBvoJFxU9E0S2GiNwCk8Ofv0epnPJFHw8OZSJBJpfFd1QGqllhMMDpKRwIMtKFWrE9aL6elGMskdFibdNxr1x1QqZbTjX47Kep4427dB52W9gAjvQPjq5A0BEUEEQEA2Hg/d2poeEHfTm/VBe8loaK1fI5TL6zkkXElEQxuOIDCaLXBJmaQc3O0L0mpTaIlsQg6t/heQUtGPiPgxtoznP9WopOlhEngoEHMgaHbgYtuV1zTNa4B7Ei1MJ+TATr+uqerVtODSVjIayPzoWjupWCx6fGPjZ4LRNiB3HEhmmkjctcyA1WPR+ZwjyL5UVd1PHNJA0PNF7DghIw54Jy/684hIv4IGWS1D20ef1urKE8vZtygAAAAASUVORK5CYII="},"7a82":function(t,e,a){"use strict";var r=a("d282"),n=a("a142"),i=a("4598"),o=a("68ed"),s=1e3,c=60*s,u=60*c,l=24*u;function d(t){var e=Math.floor(t/l),a=Math.floor(t%l/u),r=Math.floor(t%u/c),n=Math.floor(t%c/s),i=Math.floor(t%s);return{days:e,hours:a,minutes:r,seconds:n,milliseconds:i}}function f(t,e){var a=e.days,r=e.hours,n=e.minutes,i=e.seconds,s=e.milliseconds;if(-1===t.indexOf("DD")?r+=24*a:t=t.replace("DD",Object(o["b"])(a)),-1===t.indexOf("HH")?n+=60*r:t=t.replace("HH",Object(o["b"])(r)),-1===t.indexOf("mm")?i+=60*n:t=t.replace("mm",Object(o["b"])(n)),-1===t.indexOf("ss")?s+=1e3*i:t=t.replace("ss",Object(o["b"])(i)),-1!==t.indexOf("S")){var c=Object(o["b"])(s,3);t=-1!==t.indexOf("SSS")?t.replace("SSS",c):-1!==t.indexOf("SS")?t.replace("SS",c.slice(0,2)):t.replace("S",c.charAt(0))}return t}function A(t,e){return Math.floor(t/1e3)===Math.floor(e/1e3)}var p=Object(r["a"])("count-down"),m=p[0],h=p[1];e["a"]=m({props:{millisecond:Boolean,time:{type:[Number,String],default:0},format:{type:String,default:"HH:mm:ss"},autoStart:{type:Boolean,default:!0}},data:function(){return{remain:0}},computed:{timeData:function(){return d(this.remain)},formattedTime:function(){return f(this.format,this.timeData)}},watch:{time:{immediate:!0,handler:"reset"}},activated:function(){this.keepAlivePaused&&(this.counting=!0,this.keepAlivePaused=!1,this.tick())},deactivated:function(){this.counting&&(this.pause(),this.keepAlivePaused=!0)},beforeDestroy:function(){this.pause()},methods:{start:function(){this.counting||(this.counting=!0,this.endTime=Date.now()+this.remain,this.tick())},pause:function(){this.counting=!1,Object(i["a"])(this.rafId)},reset:function(){this.pause(),this.remain=+this.time,this.autoStart&&this.start()},tick:function(){n["b"]&&(this.millisecond?this.microTick():this.macroTick())},microTick:function(){var t=this;this.rafId=Object(i["c"])((function(){t.counting&&(t.setRemain(t.getRemain()),t.remain>0&&t.microTick())}))},macroTick:function(){var t=this;this.rafId=Object(i["c"])((function(){if(t.counting){var e=t.getRemain();A(e,t.remain)&&0!==e||t.setRemain(e),t.remain>0&&t.macroTick()}}))},getRemain:function(){return Math.max(this.endTime-Date.now(),0)},setRemain:function(t){this.remain=t,this.$emit("change",this.timeData),0===t&&(this.pause(),this.$emit("finish"))}},render:function(){var t=arguments[0];return t("div",{class:h()},[this.slots("default",this.timeData)||this.formattedTime])}})},a374:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABEklEQVRIS+2WsUoDURBF751XSOzsTGKKlBaKISAY7PUnRGJjYeEv5BcsLGwM4k/EXhSEENHCcgtNTJfOYPFmwhaCbt4uKm4jO/W8e4ZhZu4jcg5m6VsHMqxvLjm/IKE87961Gt1N2IGm6aQCRpfbuzScG1DOKoLAqxEHlb3rXigvCBidNRdRKg3N7AliVzTZB1BPCERGvYByB+Qqp9Nq5bD/loQEAePu1po692DAMYAIsAYMtS+PiWeAgxhM4ES8X19u3z5+C/DSbW2IkwEFR6qxUHqIoGaKU/XaWGnf3BeAuV4VLSqmCMFNLhbt87L80xbNn+tMX/35uU4aDowWRND4K8OJxXK1zI9qczX9v/rNzAAt1Coob5Dy2QAAAABJRU5ErkJggg=="},b680:function(t,e,a){"use strict";var r=a("23e7"),n=a("e330"),i=a("5926"),o=a("408a"),s=a("1148"),c=a("d039"),u=RangeError,l=String,d=Math.floor,f=n(s),A=n("".slice),p=n(1..toFixed),m=function(t,e,a){return 0===e?a:e%2===1?m(t,e-1,a*t):m(t*t,e/2,a)},h=function(t){var e=0,a=t;while(a>=4096)e+=12,a/=4096;while(a>=2)e+=1,a/=2;return e},g=function(t,e,a){var r=-1,n=a;while(++r<6)n+=e*t[r],t[r]=n%1e7,n=d(n/1e7)},v=function(t,e){var a=6,r=0;while(--a>=0)r+=t[a],t[a]=d(r/e),r=r%e*1e7},b=function(t){var e=6,a="";while(--e>=0)if(""!==a||0===e||0!==t[e]){var r=l(t[e]);a=""===a?r:a+f("0",7-r.length)+r}return a},w=c((function(){return"0.000"!==p(8e-5,3)||"1"!==p(.9,0)||"1.25"!==p(1.255,2)||"1000000000000000128"!==p(0xde0b6b3a7640080,0)}))||!c((function(){p({})}));r({target:"Number",proto:!0,forced:w},{toFixed:function(t){var e,a,r,n,s=o(this),c=i(t),d=[0,0,0,0,0,0],p="",w="0";if(c<0||c>20)throw u("Incorrect fraction digits");if(s!=s)return"NaN";if(s<=-1e21||s>=1e21)return l(s);if(s<0&&(p="-",s=-s),s>1e-21)if(e=h(s*m(2,69,1))-69,a=e<0?s*m(2,-e,1):s/m(2,e,1),a*=4503599627370496,e=52-e,e>0){g(d,0,a),r=c;while(r>=7)g(d,1e7,0),r-=7;g(d,m(10,r,1),0),r=e-1;while(r>=23)v(d,1<<23),r-=23;v(d,1<<r),g(d,1,1),v(d,2),w=b(d)}else g(d,0,a),g(d,1<<-e,0),w=b(d)+f("0",c);return c>0?(n=w.length,w=p+(n<=c?"0."+f("0",c-n)+w:A(w,0,n-c)+"."+A(w,n-c))):w=p+w,w}})},c194:function(t,e,a){"use strict";a("68ef"),a("9d70"),a("3743"),a("1a04")},c3a6:function(t,e,a){"use strict";a("68ef"),a("9d70"),a("3743")},da75:function(t,e,a){},f2d9:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACVUlEQVRIS8WVz0sUYRjHP8/MbixpCR06qBn90mOghyC3HPwDugRChyBdS4kQOnTysifP0W01jTwFHoKCDkHuTOqhwwYFBYoQRHYJIjXLnJl9YqXV1X1nXRek5zQ888z3877P88zzCAdscsD6GAHOI034eeImeNzCd3tlvdqD7QB0ZLShzua8QEOUQJhHV5bJvr8na4WYi5N6PO5zJ694M/3yavd3WwAnrYmgGceGeB6+q2I8pRVj4/ULPjIlYee4NsYgK0IrSoBy3e2XJ6WQLUByVFtti7ZAWJhLyfxeKeh+rE1hwPSmeNGUQKHHS8nTomsLcCmj7ZZN0/ovvDdDslIJ4IxpMzbTwLmyOGXOTUmyDJAc0w5baAwEdy4lq1GAf+JZ4KwhRhUGvT4ZrQlweUJPWFAQP2M6gAjD2V4ZMddgjxskM9pix8kKnDaJqzLipWQ4sosqpSg5qS12EC2Oct9NyV3jrYrOKED3Qz0ZymYrnoqoS8btk8Gomm23aUSKuiY0J9BuTAtMer3cQEQ7Mhqvt3BE+OT2y2LVRXYmNADs3QCFKa+ea/RIWHjXOa5HYooTKl9nb0quOkBaLaeFTYFSU3j+0+dqbkD8or8mQGHoofzeIS68XFrlyuKQ/Cn11wQo5LXuELclxBeLDeDHt888+5CWwvMO2xOwn1FhKviFB3o0cZiufMjSzIC8La/BPoed4QZtMaU1zDM/e0sWygDVjuuIEZGw4FgIfuwLrpveXkj7XjhRP5TC8lrIu9yALBtnUamz0so0ASqt0f+z9KPSUIv/L1zxMij/TO9lAAAAAElFTkSuQmCC"}}]);
//# sourceMappingURL=chunk-06ace336.dfb8f5e4.js.map