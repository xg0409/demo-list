!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="http://cdn.domain.com/public/biz_activities",t(0)}({0:function(e,t,n){"use strict";window.app=angular.module("angular_jfwebapp",["ui.router"]),"function"==typeof FastClick&&app.run(function(){FastClick.attach(document.body)}),n(58),n(60),n(58),n(61),n(63),n(65),n(67)},58:function(e,t,n){n(59)},59:function(e,t){"use strict";app.service("moduleEnvConfig",["$log","EnvConfigBase",function(e,t){var n=t.extend({});return new n}])},60:function(e,t){!function(){var e="";app.config(["$httpProvider","$stateProvider","$urlRouterProvider","$logProvider","$sceDelegateProvider",function(t,n,o,r,i){i.resourceUrlWhitelist(["self","http*://**"]),r.debugEnabled(e),n.state("invest",{url:"",controller:"IndexCtrl",templateUrl:"./views/index.html"}),o.otherwise("")}])}()},61:function(e,t,n){n(62)},62:function(e,t){e.exports="<div> hello bank_cbc </div> "},63:function(e,t,n){n(64)},64:function(e,t){"use strict";function n(e){return e}const o=function(e,t){return t.extend({serviceName:"IndexService",getDemo:function(){var e=this.getRequestData({});return this.request({data:e},n)}})};app.service("IndexService",["$log","WebApi",o])},65:function(e,t,n){n(66)},66:function(e,t){},67:function(e,t,n){n(68),n(69)},68:function(e,t){"use strict";app.controller("IndexCtrl2",["$scope","IndexService","modalDialog",function(e,t,n){e.setPageSpinner(!1),console.log("IndexCtrl2.js")}])},69:function(e,t){"use strict";app.controller("IndexCtrl",["$scope","IndexService","modalDialog",function(e,t,n){e.setPageSpinner(!1),n.show()}])}});