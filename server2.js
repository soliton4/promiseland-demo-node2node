(function(){
  var defineFun;
  var requireFun;
  
  if (typeof exports == "object" && typeof module == "object"){ // CommonJS
    requireFun = function(modulesAr, callback, errBack){
      try{
        var i = 0;
        var l = modulesAr.length;
        var args = [];
        for (i; i < l; ++i){
          args.push(require(modulesAr[i]));
        };
      }catch(e){
        errBack(e);
        return;
      };
      callback.apply(callback, args);
    };
    defineFun = function(requireAr, callback){
      requireFun(requireAr, function(){
        module.exports = callback.apply(callback, arguments);
      });
    };
    
  }else if (typeof define == "function" && define.amd){ // AMD
    var _define = define;
    requireFun = require;
    
    defineFun = function(par1, par2){
      if (par1 instanceof Array){
        par1.unshift("require");
      }else{
        par2 = par1;
        par1 = ["require"];
      };
      _define(par1, function(){
        requireFun = arguments[0];
        var args = [];
        for (var i = 1; i < arguments.length; ++i){
          args.push(arguments[i]);
        };
        return par2.apply(par2, args);
      });
    };
    
  }else{ // Plain browser env
    alert("not working out!");
    
  };
  defineFun(["promiseland"], function(promiseland){
var __require = requireFun;

var __Promise = promiseland.Promise;
var Promise = promiseland.Promise;
var __requireFun = function(parModule){
      var returnPromise = new __Promise();
      try{__require([parModule], function(m){
        if (promiseland.isPromiseLandPromisingModule(m)){
          m.then(function(realm){returnPromise.resolve(realm);}, function(e){returnPromise.reject(e);});
        }else{
          returnPromise.resolve(m);
        };
        }, function(err){ returnPromise.reject(err); });
      }catch(e){ returnPromise.reject(e); };
      return returnPromise.promise;};
    if (promiseland._hasModule({ hashStr: "70bf256c0f92289bb088530d45411868" })){ return promiseland._getModule("70bf256c0f92289bb088530d45411868"); };
var PL$1 = new __Promise();
promiseland._registerModule({ hashStr: "70bf256c0f92289bb088530d45411868", "module": PL$1, promising: true });
var PL$5/*promiseland*/;try{PL$5/*promiseland*/ = promiseland;}catch(e){};
var PL$11/*process*/;try{PL$11/*process*/ = process;}catch(e){};
var PL$2 = (function(){
"use strict";
var PL$3/*promiseland exception catcher*/ = function(code){
  return function(res){
    try{ code(res); }catch(e){
      PL$1.reject(e);
    };
  };
};
var PL$4/*catch rejected*/ = function(e){
  PL$1.reject(e);
};
var PL$6/*OtherServerFrame*/;
var PL$8/*otherServerFrame*/;
var PL$9/*connection*/;
var PL$12/*playGround*/;
PL$3/*promiseland exception catcher*/(function(){

  ;
  PL$5/*promiseland*/["addLocalFrameName"]("node.js");
  PL$5/*promiseland*/["addLocalFrameName"]("server");
  PL$5/*promiseland*/["addLocalFrameName"]("server2");
  PL$6/*OtherServerFrame*/ = (function(){var PL$7/*inherited*/ = {};
  var res = promiseland.createClass({
    "name": "server1"
  }, [PL$5/*promiseland*/["FrameBaseClass"]], PL$7/*inherited*/);
  return res; })();
  PL$8/*otherServerFrame*/ = new PL$6/*OtherServerFrame*/();
  PL$5/*promiseland*/["addFrame"](PL$8/*otherServerFrame*/);
  PL$9/*connection*/ = new PL$8/*otherServerFrame*/["ConnectionBaseClass"]();
  PL$9/*connection*/["send"] = (function(PL$10/*data*/){
  
    ;
    PL$11/*process*/["send"](PL$10/*data*/);
    ;});
  PL$8/*otherServerFrame*/["newConnection"](PL$9/*connection*/);
  PL$11/*process*/["on"]("message", (function(PL$10/*data*/){
  
    ;
    PL$9/*connection*/["data"](PL$10/*data*/);
    ;}));
  PL$11/*process*/["on"]("disconnect", (function(){
  
    ;
    PL$9/*connection*/["disconnect"]();
    ;}));
  __requireFun("./playGround").then(PL$3/*promiseland exception catcher*/(function(PL$13){PL$12/*playGround*/ = PL$13;
  PL$12/*playGround*/["start2"]();
  PL$1.resolve(); return;}), PL$4/*catch rejected*/);
  ;
})();return PL$1;
})();
;;
return PL$1});
})();