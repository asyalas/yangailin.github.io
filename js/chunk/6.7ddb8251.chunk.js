webpackJsonp([6],{"5Xrf":function(e,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=t("Dd8w"),n=t.n(s),c=t("iO/v"),a=t("NYxO"),o={name:"phoneReset",components:{modal:c.l,iconInput:c.i,iconButton:c.h,checkCode:c.d,checkbox:c.e},data:function(){return{hasHeader:!0,email:"",check:"",sendEmail:!1,loading:!1,isActive:!1,isEmErr:!1,isEmMsg:"",isOk:!1,isCheckErr:!1,checkCodeTxt:this.$t("login.sendCheckCode"),second:60}},computed:n()({visiable:function(e){return"emailReset"===e.path}},Object(a.b)({path:"route/name",emailImgCode:"login/imgCode",showCheckBoxCode:"login/showCheckBoxCode",checkBoxErr:"login/checkBoxErr",isEmailErr:"login/isEmailErr",isEmailErrMsg:"login/emailErr"})),methods:{hideCheckEmailCodeHandler:function(){this.$store.commit("login/HIDE_CHECK_BOX_CODE")},sendCode:function(e){this.sendEmailCode({email:this.email,lang:"zh"===this.$i18n.locale?"CN":"EN",type:2,imgCode:e,captchaKey:this.emailImgCode.captchaKey})},resetImg:function(){this.$store.dispatch("login/getImgCode")},sendEmailCode:function(e){var i=this;this.$store.dispatch("login/emailCode",e).then(function(){if(60===i.second){i.isActive=!1;i.timer=setInterval(function e(){return i.second?(i.checkCodeTxt=i.$t("login.sendRepeat")+"("+i.second+"s)",i.second=i.second-1):(i.second=60,i.checkEmail(),i.checkCodeTxt=i.$t("login.sendCheckCode"),i.timer&&clearInterval(i.timer)),e}(),1e3)}})},send:function(){if(!this.email||!this.isActive)return!1;if(60===this.second){if(this.phoneSendTime>2)return this.$store.commit("login/SHOW_CHECK_PHONE_CODE");this.sendEmailCode({email:this.email,lang:"zh"===this.$i18n.locale?"CN":"EN",type:2})}},cancleHandler:function(){this.$router.push("/login")},checkEmail:function(){this.isEmErr=!this.email.match(/^[A-Za-z0-9]+([-_.][A-Za-z0-9]+)*@([A-Za-z0-9]+[-.])+[A-Za-z0-9]{2,5}$/),this.isEmMsg=this.$t("login.emailErr"),this.isActive=!this.isEmErr&&60===this.second,this.change()},change:function(){this.isOk=!!this.email&&!this.isEmErr&&!!this.check&&4===this.check.length},submit:function(){var e=this;this.loading=!0,this.isCheckErr=!1,this.$store.dispatch("login/emailReset",{email:this.email,type:this.$isPc?1:2,imgCode:this.check,isReSend:0}).catch(function(i){switch(Number(i.code)){case 2003:e.isCheckErr=!0;break;case 3521:e.isEmErr=!0,e.isEmMsg=e.$t("common.emailNotExist")}}).then(function(i){e.isEmErr||e.isCheckErr||e.$router.push("/login/reset?code="+i.data.code)}).finally(function(){e.loading=!1})}}},l={render:function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{staticClass:"container"},[t("modal",{attrs:{hasHeader:e.hasHeader,onlyClose:e.sendEmail,visiable:e.visiable},on:{cancleHandler:e.cancleHandler}},[e.sendEmail?e._e():t("div",{staticClass:"email-reset"},[t("div",{staticClass:"title"},[e._v(e._s(e.$t("login.emailReset")))]),e._v(" "),t("iconInput",{staticClass:"email-input",attrs:{placeholder:e.$t("login.enterEmail"),isErr:e.isEmErr,errMsg:e.isEmMsg},on:{"on-change":e.checkEmail},model:{value:e.email,callback:function(i){e.email=i},expression:"email"}}),e._v(" "),t("div",{staticClass:"check-wrap"},[t("iconInput",{staticClass:"input",attrs:{placeholder:e.$t("login.check"),isErr:e.isCheckErr,maxlength:Number(4),errMsg:e.$t("login.emailCheck"),isActive:e.isActive},on:{"on-change":e.change},model:{value:e.check,callback:function(i){e.check=i},expression:"check"}},[t("span",{attrs:{slot:"suffix"},on:{click:e.send},slot:"suffix"},[e._v(e._s(e.checkCodeTxt))])])],1),e._v(" "),t("iconButton",{staticClass:"button",attrs:{isShow:e.isOk,loading:e.loading},on:{click:e.submit}},[e._v("\n          "+e._s(e.$t("login.submit"))+"\n        ")])],1)]),e._v(" "),t("checkbox",{attrs:{url:e.emailImgCode.url,visiable:e.showCheckBoxCode,isErr:e.checkBoxErr},on:{cancleHandler:e.hideCheckEmailCodeHandler,checkCodeDone:e.sendCode,resetImg:e.resetImg}})],1)},staticRenderFns:[]};var r=t("VU/8")(o,l,!1,function(e){t("a7dW")},"data-v-9f64e9b0",null);i.default=r.exports},a7dW:function(e,i){e.exports={title:"title",primary:"primary","bg-primary":"bg-primary",green:"green",yellow:"yellow","light-yellow":"light-yellow","placeholder-text":"placeholder-text","bg-yellow":"bg-yellow",red:"red","bg-red":"bg-red",right:"right",center:"center","space-between":"space-between",container:"container","email-reset":"email-reset","email-input":"email-input",input:"input","media-wrap":"media-wrap"}}});