!function(a,b){"use strict";function c(){function a(a,c){return b.extend(new(b.extend(function(){},{prototype:a})),c)}function c(a,b){var c=b.caseInsensitiveMatch,d={originalPath:a,regexp:a},e=d.keys=[];return a=a.replace(/([().])/g,"\\$1").replace(/(\/)?:(\w+)([\?\*])?/g,function(a,b,c,d){var f="?"===d?d:null,g="*"===d?d:null;return e.push({name:c,optional:!!f}),b=b||"",""+(f?"":b)+"(?:"+(f?b:"")+(g&&"(.+?)"||"([^/]+)")+(f||"")+")"+(f||"")}).replace(/([\/$\*])/g,"\\$1"),d.regexp=new RegExp("^"+a+"$",c?"i":""),d}var d={};this.when=function(a,e){if(d[a]=b.extend({reloadOnSearch:!0},e,a&&c(a,e)),a){var f="/"==a[a.length-1]?a.substr(0,a.length-1):a+"/";d[f]=b.extend({redirectTo:a},c(f,e))}return this},this.otherwise=function(a){return this.when(null,a),this},this.$get=["$rootScope","$location","$routeParams","$q","$injector","$http","$templateCache","$sce",function(c,e,f,g,h,i,j,k){function l(a,b){var c=b.keys,d={};if(!b.regexp)return null;var e=b.regexp.exec(a);if(!e)return null;for(var f=1,g=e.length;g>f;++f){var h=c[f-1],i=e[f];h&&i&&(d[h.name]=i)}return d}function m(){var a=n(),d=q.current;a&&d&&a.$$route===d.$$route&&b.equals(a.pathParams,d.pathParams)&&!a.reloadOnSearch&&!p?(d.params=a.params,b.copy(d.params,f),c.$broadcast("$routeUpdate",d)):(a||d)&&(p=!1,c.$broadcast("$routeChangeStart",a,d),q.current=a,a&&a.redirectTo&&(b.isString(a.redirectTo)?e.path(o(a.redirectTo,a.params)).search(a.params).replace():e.url(a.redirectTo(a.pathParams,e.path(),e.search())).replace()),g.when(a).then(function(){if(a){var c,d,e=b.extend({},a.resolve);return b.forEach(e,function(a,c){e[c]=b.isString(a)?h.get(a):h.invoke(a)}),b.isDefined(c=a.template)?b.isFunction(c)&&(c=c(a.params)):b.isDefined(d=a.templateUrl)&&(b.isFunction(d)&&(d=d(a.params)),d=k.getTrustedResourceUrl(d),b.isDefined(d)&&(a.loadedTemplateUrl=d,c=i.get(d,{cache:j}).then(function(a){return a.data}))),b.isDefined(c)&&(e.$template=c),g.all(e)}}).then(function(e){a==q.current&&(a&&(a.locals=e,b.copy(a.params,f)),c.$broadcast("$routeChangeSuccess",a,d))},function(b){a==q.current&&c.$broadcast("$routeChangeError",a,d,b)}))}function n(){var c,f;return b.forEach(d,function(d){!f&&(c=l(e.path(),d))&&(f=a(d,{params:b.extend({},e.search(),c),pathParams:c}),f.$$route=d)}),f||d[null]&&a(d[null],{params:{},pathParams:{}})}function o(a,c){var d=[];return b.forEach((a||"").split(":"),function(a,b){if(0===b)d.push(a);else{var e=a.match(/(\w+)(.*)/),f=e[1];d.push(c[f]),d.push(e[2]||""),delete c[f]}}),d.join("")}var p=!1,q={routes:d,reload:function(){p=!0,c.$evalAsync(m)}};return c.$on("$locationChangeSuccess",m),q}]}function d(){this.$get=function(){return{}}}function e(a,c,d){return{restrict:"ECA",terminal:!0,priority:400,transclude:"element",link:function(e,f,g,h,i){function j(){n&&(n.remove(),n=null),l&&(l.$destroy(),l=null),m&&(d.leave(m,function(){n=null}),n=m,m=null)}function k(){var g=a.current&&a.current.locals,h=g&&g.$template;if(b.isDefined(h)){var k=e.$new(),n=a.current,q=i(k,function(a){d.enter(a,null,m||f,function(){!b.isDefined(o)||o&&!e.$eval(o)||c()}),j()});m=q,l=n.scope=k,l.$emit("$viewContentLoaded"),l.$eval(p)}else j()}var l,m,n,o=g.autoscroll,p=g.onload||"";e.$on("$routeChangeSuccess",k),k()}}}function f(a,b,c){return{restrict:"ECA",priority:-400,link:function(d,e){var f=c.current,g=f.locals;e.html(g.$template);var h=a(e.contents());if(f.controller){g.$scope=d;var i=b(f.controller,g);f.controllerAs&&(d[f.controllerAs]=i),e.data("$ngControllerController",i),e.children().data("$ngControllerController",i)}h(d)}}}var g=b.module("ngRoute",["ng"]).provider("$route",c);g.provider("$routeParams",d),g.directive("ngView",e),g.directive("ngView",f),e.$inject=["$route","$anchorScroll","$animate"],f.$inject=["$compile","$controller","$route"]}(window,window.angular),function(){"use strict";var a=angular.module("LocalStorageModule",[]);a.provider("localStorageService",function(){this.prefix="ls",this.storageType="localStorage",this.cookie={expiry:30,path:"/"},this.notify={setItem:!0,removeItem:!1},this.setPrefix=function(a){this.prefix=a},this.setStorageType=function(a){this.storageType=a},this.setStorageCookie=function(a,b){this.cookie={expiry:a,path:b}},this.setStorageCookieDomain=function(a){this.cookie.domain=a},this.setNotify=function(a,b){this.notify={setItem:a,removeItem:b}},this.$get=["$rootScope","$window","$document",function(a,b,c){var d=this.prefix,e=this.cookie,f=this.notify,g=this.storageType,h=b[g];c||(c=document),"."!==d.substr(-1)&&(d=d?d+".":"");var i=function(){try{var c=g in b&&null!==b[g],e=d+"__"+Math.round(1e7*Math.random());return c&&(h.setItem(e,""),h.removeItem(e)),!0}catch(f){return g="cookie",a.$broadcast("LocalStorageModule.notification.error",f.message),!1}}(),j=function(b,c){if(!i)return a.$broadcast("LocalStorageModule.notification.warning","LOCAL_STORAGE_NOT_SUPPORTED"),f.setItem&&a.$broadcast("LocalStorageModule.notification.setitem",{key:b,newvalue:c,storageType:"cookie"}),p(b,c);"undefined"==typeof c&&(c=null);try{(angular.isObject(c)||angular.isArray(c))&&(c=angular.toJson(c)),h.setItem(d+b,c),f.setItem&&a.$broadcast("LocalStorageModule.notification.setitem",{key:b,newvalue:c,storageType:this.storageType})}catch(e){return a.$broadcast("LocalStorageModule.notification.error",e.message),p(b,c)}return!0},k=function(b){if(!i)return a.$broadcast("LocalStorageModule.notification.warning","LOCAL_STORAGE_NOT_SUPPORTED"),q(b);var c=h.getItem(d+b);return c&&"null"!==c?"{"===c.charAt(0)||"["===c.charAt(0)?angular.fromJson(c):c:null},l=function(b){if(!i)return a.$broadcast("LocalStorageModule.notification.warning","LOCAL_STORAGE_NOT_SUPPORTED"),f.removeItem&&a.$broadcast("LocalStorageModule.notification.removeitem",{key:b,storageType:"cookie"}),r(b);try{h.removeItem(d+b),f.removeItem&&a.$broadcast("LocalStorageModule.notification.removeitem",{key:b,storageType:this.storageType})}catch(c){return a.$broadcast("LocalStorageModule.notification.error",c.message),r(b)}return!0},m=function(){if(!i)return a.$broadcast("LocalStorageModule.notification.warning","LOCAL_STORAGE_NOT_SUPPORTED"),!1;var b=d.length,c=[];for(var e in h)if(e.substr(0,b)===d)try{c.push(e.substr(b))}catch(f){return a.$broadcast("LocalStorageModule.notification.error",f.Description),[]}return c},n=function(b){b=b||"";var c=d.slice(0,-1),e=new RegExp(c+"."+b);if(!i)return a.$broadcast("LocalStorageModule.notification.warning","LOCAL_STORAGE_NOT_SUPPORTED"),s();var f=d.length;for(var g in h)if(e.test(g))try{l(g.substr(f))}catch(j){return a.$broadcast("LocalStorageModule.notification.error",j.message),s()}return!0},o=function(){try{return navigator.cookieEnabled||"cookie"in c&&(c.cookie.length>0||(c.cookie="test").indexOf.call(c.cookie,"test")>-1)}catch(b){return a.$broadcast("LocalStorageModule.notification.error",b.message),!1}},p=function(b,f){if("undefined"==typeof f)return!1;if(!o())return a.$broadcast("LocalStorageModule.notification.error","COOKIES_NOT_SUPPORTED"),!1;try{var g="",h=new Date,i="";if(null===f?(h.setTime(h.getTime()+-864e5),g="; expires="+h.toGMTString(),f=""):0!==e.expiry&&(h.setTime(h.getTime()+24*e.expiry*60*60*1e3),g="; expires="+h.toGMTString()),b){var j="; path="+e.path;e.domain&&(i="; domain="+e.domain),c.cookie=d+b+"="+encodeURIComponent(f)+g+j+i}}catch(k){return a.$broadcast("LocalStorageModule.notification.error",k.message),!1}return!0},q=function(b){if(!o())return a.$broadcast("LocalStorageModule.notification.error","COOKIES_NOT_SUPPORTED"),!1;for(var e=c.cookie&&c.cookie.split(";")||[],f=0;f<e.length;f++){for(var g=e[f];" "===g.charAt(0);)g=g.substring(1,g.length);if(0===g.indexOf(d+b+"="))return decodeURIComponent(g.substring(d.length+b.length+1,g.length))}return null},r=function(a){p(a,null)},s=function(){for(var a=null,b=d.length,e=c.cookie.split(";"),f=0;f<e.length;f++){for(a=e[f];" "===a.charAt(0);)a=a.substring(1,a.length);var g=a.substring(b,a.indexOf("="));r(g)}},t=function(){return g};return{isSupported:i,getStorageType:t,set:j,add:j,get:k,keys:m,remove:l,clearAll:n,cookie:{set:p,add:p,get:q,remove:r,clearAll:s}}}]})}.call(this);var guardianApp=angular.module("guardianApp",["ngRoute","LocalStorageModule"]);guardianApp.config(["$routeProvider",function(a){a.when("/",{redirectTo:function(){return"section/football"}}).when("/story/:id*",{templateUrl:"views/story.html",controller:"StoryCtrl"}).when("/section/:sectionName",{templateUrl:"views/section.html",controller:"SectionCtrl"}).when("/section/:sectionName/:sectionRefined",{templateUrl:"views/section.html",controller:"SectionCtrl"})}]),guardianApp.run(["$rootScope",function(a){a.showfields="all",a.format="json",a.timeDiff="5"}]),guardianApp.directive("backButton",function(){return{restrict:"A",link:function(a,b){function c(){history.back(),a.$apply()}b.bind("click",c)}}}),guardianApp.filter("htmlToText",function(){return function(a){return String(a).replace(/<[^>]+>/gm,"")}}),guardianApp.filter("textToHtml",["$sce",function(a){return function(b){return a.trustAsHtml(b)}}]),guardianApp.factory("AjaxCall",["$http",function(a){return{get:function(b,c){return a.jsonp(b,{params:c})}}}]),guardianApp.factory("JsonCall",["$http",function(a){return{get:function(b,c){return a.get(b,{params:c})}}}]),guardianApp.controller("SectionCtrl",["$scope","AjaxCall","$rootScope","$routeParams","localStorageService",function(a,b,c,d,e){function f(){var a=new Date(i.storedTime),b=Math.abs(a-j);return void 0!==i.storedTime&&b>6e4*c.timeDiff?!0:void 0}function g(){b.get("query.php",{format:c.format,type:"section","show-fields":c.showfields,section:h,callback:"JSON_CALLBACK"}).then(function(b){a.data=b.data.response;for(var c=0;c<a.data.results.length;c+=1)void 0!==a.data.results[c].fields.body&&a.data.results[c].fields.body.length>100&&(a.data.results[c].fullStory="true");a.data.storedTime=new Date,e.add(h,a.data)})}var h,i,j=new Date;h=c.currentSection?c.currentSection:"football",i=e.get(h),i?f()?g():a.data=i:g()}]),guardianApp.controller("StoryCtrl",["$scope","AjaxCall","$routeParams","$rootScope",function(a,b,c,d){function e(){a.refreshOn=!1,b.get("query.php?"+c.id+"?",{format:d.format,type:"story","show-fields":d.showfields,callback:"JSON_CALLBACK"}).then(function(b){a.data=b.data.response.content,"true"===a.data.fields.liveBloggingNow&&(a.refreshOn=!0,f())})}function f(){a.refreshOn===!0&&setTimeout(function(){e()},6e4)}e()}]),guardianApp.controller("HeaderCtrl",["$scope","$location","$route","$rootScope","$element","JsonCall",function(a,b,c,d,e,f){f.get("scripts/sectionConfig.json",{}).then(function(b){d.sections=b.data,a.section=d.sections}),a.isActive=function(c){return c.path===b.path().substring(9)?(a.pageTitle=c.title,d.currentSection=c.path,!0):!1}}]);