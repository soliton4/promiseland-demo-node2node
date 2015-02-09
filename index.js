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
    var Callback = promiseland.Callback;
if (promiseland._hasModule({ hashStr: "657adaa9db8826edc5bee2c3079a0560" })){ return promiseland._getModule("657adaa9db8826edc5bee2c3079a0560"); };
var PL$1 = new __Promise();
promiseland._registerModule({ hashStr: "657adaa9db8826edc5bee2c3079a0560", "module": PL$1, promising: true });
var PL$9/*promiseland*/;try{PL$9/*promiseland*/ = promiseland;}catch(e){};
var PL$15/*__dirname*/;try{PL$15/*__dirname*/ = __dirname;}catch(e){};
var PL$19/*console*/;try{PL$19/*console*/ = console;}catch(e){};
var PL$23/*Callback*/;try{PL$23/*Callback*/ = Callback;}catch(e){};
var PL$24/*setTimeout*/;try{PL$24/*setTimeout*/ = setTimeout;}catch(e){};
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
var PL$10/*OtherServerFrame*/;
var PL$12/*cp*/;
var PL$14/*n*/;
var PL$16/*otherServerFrame*/;
var PL$17/*connection*/;
var PL$20/*playGround*/;
var PL$22/*cb*/;
PL$3/*promiseland exception catcher*/(function(){

  ;
  var PL$5 = new __Promise();
  var PL$6 = new __Promise();
  var PL$7/*try catch*/ = function(code){ return function(res){ try{code(res);}catch(e){ PL$6.resolve(e); }; }; };
  var PL$8 = function(e){ PL$6.resolve(e); };
  PL$7/*try catch*/(function(){
    PL$9/*promiseland*/["addLocalFrameName"]("node.js");
    PL$9/*promiseland*/["addLocalFrameName"]("server");
    PL$9/*promiseland*/["addLocalFrameName"]("server1");
    PL$10/*OtherServerFrame*/ = (function(){var PL$11/*inherited*/ = {};
    var res = promiseland.createClass({
      "name": "server2"
    }, [PL$9/*promiseland*/["FrameBaseClass"]], PL$11/*inherited*/);
    return res; })();
    __requireFun("child_process").then(PL$7/*try catch*/(function(PL$13){PL$12/*cp*/ = PL$13;
    PL$14/*n*/ = PL$12/*cp*/["fork"]((PL$15/*__dirname*/ + "/server2.js"));
    PL$16/*otherServerFrame*/ = new PL$10/*OtherServerFrame*/();
    PL$9/*promiseland*/["addFrame"](PL$16/*otherServerFrame*/);
    PL$17/*connection*/ = new PL$16/*otherServerFrame*/["ConnectionBaseClass"]();
    PL$17/*connection*/["send"] = (function(PL$18/*data*/){
    
      ;
      PL$14/*n*/["send"](PL$18/*data*/);
      ;});
    PL$16/*otherServerFrame*/["newConnection"](PL$17/*connection*/);
    PL$14/*n*/["on"]("message", (function(PL$18/*data*/){
    
      ;
      PL$19/*console*/["log"]("got data:");
      PL$19/*console*/["log"](PL$18/*data*/);
      PL$17/*connection*/["data"](PL$18/*data*/);
      ;}));
    PL$14/*n*/["on"]("disconnect", (function(){
    
      ;
      PL$17/*connection*/["disconnect"]();
      ;}));
    __requireFun("./playGround").then(PL$7/*try catch*/(function(PL$21){PL$20/*playGround*/ = PL$21;
    PL$22/*cb*/ = new PL$23/*Callback*/();
    PL$24/*setTimeout*/(PL$22/*cb*/, 1000);
    PL$22/*cb*/["promise"].then(PL$7/*try catch*/(function(PL$25){PL$25;
    PL$19/*console*/["log"]("calling start");
    PL$20/*playGround*/["start"]();
    PL$5.resolve();}), PL$8);
  ;}), PL$8);
  ;}), PL$8);
  ;})();
  PL$6.then(PL$3/*promiseland exception catcher*/(function(PL$26/*err*/){
    PL$19/*console*/["log"]("error");
    PL$19/*console*/["log"](PL$26/*err*/);
    PL$5.resolve();;}));
  PL$5.then(PL$3/*promiseland exception catcher*/(function(){;
  PL$1.resolve(); return;}), PL$4/*catch rejected*/)
})();return PL$1;
})();
;;
return PL$1});
})();