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
var classSystem = promiseland.classSystem;
if (promiseland._hasModule({ hashStr: "a9ca692e891bf6789613f94f7d54531a" })){ return promiseland._getModule("a9ca692e891bf6789613f94f7d54531a"); };
var PL$9/*console*/;try{PL$9/*console*/ = console;}catch(e){};
var PL$1 = (function(){
"use strict";
var PL$3/*s1Fun*/ = (function(f){
promiseland.registerRemote("server1", "a9ca692e891bf6789613f94f7d54531a", "PL$10", f, classSystem.getBuiltinType("var"));
if (promiseland.profileHas("server1")){
return function(){
var i = 0; var l = arguments.length; var newArgs = [undefined];
for(i = 0; i < l; ++i){ newArgs.push(arguments[i]); };
return f.apply(this, newArgs);
};
}else{
return function(){
return promiseland.remoteExec("a9ca692e891bf6789613f94f7d54531a", "PL$10", arguments);
}
};
})(function (PL$4/*session*/){
var PL$5 = new __Promise();
var PL$7/*promiseland exception catcher*/ = function(code){
  return function(res){
    try{ code(res); }catch(e){
      PL$5.reject(e);
    };
  };
};
var PL$8/*catch rejected*/ = function(e){
  PL$5.reject(e);
};
PL$7/*promiseland exception catcher*/(function(){

  ;
  PL$9/*console*/["log"](("running s1fun on " + PL$2/*servername*/));
  PL$5.resolve(); return;
})();return PL$5;
});
var PL$11/*s2Fun*/ = (function(f){
promiseland.registerRemote("server2", "a9ca692e891bf6789613f94f7d54531a", "PL$16", f, classSystem.getBuiltinType("var"));
if (promiseland.profileHas("server2")){
return function(){
var i = 0; var l = arguments.length; var newArgs = [undefined];
for(i = 0; i < l; ++i){ newArgs.push(arguments[i]); };
return f.apply(this, newArgs);
};
}else{
return function(){
return promiseland.remoteExec("a9ca692e891bf6789613f94f7d54531a", "PL$16", arguments);
}
};
})(function (PL$4/*session*/){
var PL$12 = new __Promise();
var PL$14/*promiseland exception catcher*/ = function(code){
  return function(res){
    try{ code(res); }catch(e){
      PL$12.reject(e);
    };
  };
};
var PL$15/*catch rejected*/ = function(e){
  PL$12.reject(e);
};
PL$14/*promiseland exception catcher*/(function(){

  ;
  PL$9/*console*/["log"](("running s2fun on " + PL$2/*servername*/));
  PL$12.resolve(); return;
})();return PL$12;
});

  ;
  var PL$2/*servername*/ = "server1";
  ;
  /* function s1Fun (){} - hoisted */;
  ;
  /* function s2Fun (){} - hoisted */;
  ;
  return {
    "start": (function(){
    var PL$17 = new __Promise();
    var PL$19/*promiseland exception catcher*/ = function(code){
      return function(res){
        try{ code(res); }catch(e){
          PL$17.reject(e);
        };
      };
    };
    var PL$20/*catch rejected*/ = function(e){
      PL$17.reject(e);
    };
    PL$19/*promiseland exception catcher*/(function(){
    
      ;
      PL$9/*console*/["log"]("running");
      PL$3/*s1Fun*/().then(PL$19/*promiseland exception catcher*/(function(PL$21){PL$21;
      PL$11/*s2Fun*/().then(PL$19/*promiseland exception catcher*/(function(PL$22){PL$22;
      PL$17.resolve(); return;}), PL$20/*catch rejected*/);
      ;}), PL$20/*catch rejected*/);
      ;
    })();return PL$17;
    }),
    "start2": (function(){
    
      ;
      PL$2/*servername*/ = "server2";
      ;})
  };
  ;})();
;return PL$1;
});
})();