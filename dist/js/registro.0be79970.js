(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["registro"],{"0d36":function(e,r,a){"use strict";a.r(r);var t=function(){var e=this,r=e.$createElement,a=e._self._c||r;return a("div",{staticClass:"registro container"},[a("div",{staticClass:"md-layout md-gutter"},[a("RegistroForm")],1)])},s=[],o=a("d225"),n=a("308d"),l=a("6bb5"),i=a("4e2b"),c=a("9ab4"),u=a("60a3"),d=function(){var e=this,r=e.$createElement,a=e._self._c||r;return a("div",[a("v-card",[a("v-card-title",{attrs:{"primary-title":""}},[a("div",[a("div",{staticClass:"headline"},[e._v("Inicia sesión")])])]),a("v-slide-y-transition",[a("v-card-text",[a("v-form",{ref:"form",attrs:{"lazy-validation":""}},[a("v-text-field",{attrs:{name:"nombre",rules:e.generalRules,required:"",label:"Nombre"},model:{value:e.user.nombre,callback:function(r){e.$set(e.user,"nombre",r)},expression:"user.nombre"}}),e.errores.nombre?a("span",{staticStyle:{color:"red"}},[e._v(e._s(e.errores.nombre[0]))]):e._e(),a("v-text-field",{attrs:{name:"apellido",rules:e.generalRules,required:"",label:"Apellido"},model:{value:e.user.apellido,callback:function(r){e.$set(e.user,"apellido",r)},expression:"user.apellido"}}),e.errores.apellido?a("span",{staticStyle:{color:"red"}},[e._v(e._s(e.errores.apellido[0]))]):e._e(),a("v-text-field",{attrs:{name:"carnet",rules:e.generalRules,label:"Carnet",required:""},model:{value:e.user.carnet,callback:function(r){e.$set(e.user,"carnet",r)},expression:"user.carnet"}}),e.errores.carnet?a("span",{staticStyle:{color:"red"}},[e._v(e._s(e.errores.carnet[0]))]):e._e(),a("v-text-field",{attrs:{name:"email",rules:e.emailRules,type:"email",label:"E-mail",required:""},model:{value:e.user.email,callback:function(r){e.$set(e.user,"email",r)},expression:"user.email"}}),e.errores.email?a("span",{staticStyle:{color:"red"}},[e._v(e._s(e.errores.email[0]))]):e._e(),a("v-text-field",{attrs:{type:"password",name:"name",rules:e.passwrodRules,label:"Password",required:""},model:{value:e.user.password,callback:function(r){e.$set(e.user,"password",r)},expression:"user.password"}}),e.errores.password?a("span",{staticStyle:{color:"red"}},[e._v(e._s(e.errores.password[0]))]):e._e(),a("v-text-field",{attrs:{rules:e.passwrodRules,type:"password",name:"password_confirmation",label:"Confirmar contraseña",required:""},model:{value:e.user.password_confirmation,callback:function(r){e.$set(e.user,"password_confirmation",r)},expression:"user.password_confirmation"}}),a("v-btn",{attrs:{disabled:e.proceso,color:"success"},on:{click:function(r){return e.enviarDatos(e.user)}}},[e._v("Registrarse")]),e.proceso?a("Procesando"):e._e()],1)],1)],1)],1)],1)},p=[],b=a("b0b4"),m=a("4bb5"),v=a("8d14"),f=a("c234"),_=function(e){function r(){return Object(o["a"])(this,r),Object(n["a"])(this,Object(l["a"])(r).apply(this,arguments))}return Object(i["a"])(r,e),Object(b["a"])(r,[{key:"data",value:function(){return{user:{nombre:"",apellido:"",carnet:"",email:"",password:"",password_confirmation:""},passwrodRules:[function(e){return!!e||"Password requerido"}],emailRules:[function(e){return!!e||"E-mail requerido"},function(e){return/.+@.+/.test(e)||"E-mail no válido"}],generalRules:[function(e){return!!e||"Esta campo necesita ser rellenado"}]}}},{key:"enviarDatos",value:function(e){this.registro(e)}}]),r}(u["b"]);c["a"]([Object(m["b"])("proceso")],_.prototype,"proceso",void 0),c["a"]([Object(m["b"])("authModule/ERROR")],_.prototype,"errores",void 0),c["a"]([Object(m["a"])("authModule/".concat(f["a"].actions.REGISTRO))],_.prototype,"registro",void 0),_=c["a"]([Object(u["a"])({name:"formularioLogin",components:{Procesando:v["a"]}})],_);var w=_,y=w,O=a("2877"),R=a("6544"),x=a.n(R),j=a("8336"),g=a("b0af"),h=a("99d9"),k=a("12b2"),q=a("4bd4"),C=a("0789"),E=a("2677"),$=Object(O["a"])(y,d,p,!1,null,null,null),S=$.exports;x()($,{VBtn:j["a"],VCard:g["a"],VCardText:h["b"],VCardTitle:k["a"],VForm:q["a"],VSlideYTransition:C["d"],VTextField:E["a"]});var V=function(e){function r(){return Object(o["a"])(this,r),Object(n["a"])(this,Object(l["a"])(r).apply(this,arguments))}return Object(i["a"])(r,e),r}(u["b"]);V=c["a"]([Object(u["a"])({name:"Registro",components:{RegistroForm:S}})],V);var T=V,F=T,P=(a("397d"),Object(O["a"])(F,t,s,!1,null,null,null));r["default"]=P.exports},"277e":function(e,r,a){},"397d":function(e,r,a){"use strict";var t=a("277e"),s=a.n(t);s.a}}]);
//# sourceMappingURL=registro.0be79970.js.map