import './polyfills.server.mjs';
import{a as r,b as p,c as a,d as m,e as s,f as n,m as f,o as d,p as l,s as u,w as v,z as h}from"./chunk-FSOLM7EK.mjs";var C=(()=>{let e=class e{constructor(){this.title="prayer"}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=r({type:e,selectors:[["app-root"]],standalone:!0,features:[n],decls:1,vars:0,template:function(o,c){o&1&&m(0,"router-outlet")},dependencies:[v]});let t=e;return t})();var x=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=r({type:e,selectors:[["app-rosario"]],standalone:!0,features:[n],decls:2,vars:0,template:function(o,c){o&1&&(p(0,"p"),s(1,"rosario works!"),a())}});let t=e;return t})();var y=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=r({type:e,selectors:[["app-home"]],standalone:!0,features:[n],decls:3,vars:0,template:function(o,c){o&1&&(p(0,"p"),s(1,"home works!"),a(),m(2,"app-rosario"))},dependencies:[x]});let t=e;return t})();var M=[{path:"",redirectTo:"",pathMatch:"full"},{path:"",component:y,children:[{path:"**",redirectTo:"auth/login"}]}];var D={providers:[h(M),l()]};var S={providers:[u()]},F=f(D,S);var w=()=>d(C,F),P=w;export{P as a};
