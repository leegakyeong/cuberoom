// Compiled by ClojureScript 1.10.773 {}
goog.provide('oops.helpers');
goog.require('cljs.core');
oops.helpers.is_prototype_QMARK_ = (function oops$helpers$is_prototype_QMARK_(o){
return (o.constructor.prototype === o);
});
oops.helpers.get_constructor = (function oops$helpers$get_constructor(o){
return (o["constructor"]);
});
oops.helpers.cljs_type_QMARK_ = (function oops$helpers$cljs_type_QMARK_(f){
var and__4115__auto__ = goog.isObject(f);
if(cljs.core.truth_(and__4115__auto__)){
if((!(oops.helpers.is_prototype_QMARK_.call(null,f)))){
return (f["cljs$lang$type"]);
} else {
return false;
}
} else {
return and__4115__auto__;
}
});
oops.helpers.cljs_instance_QMARK_ = (function oops$helpers$cljs_instance_QMARK_(value){
var and__4115__auto__ = goog.isObject(value);
if(cljs.core.truth_(and__4115__auto__)){
return oops.helpers.cljs_type_QMARK_.call(null,oops.helpers.get_constructor.call(null,value));
} else {
return and__4115__auto__;
}
});
oops.helpers.to_native_array = (function oops$helpers$to_native_array(coll){
if(cljs.core.array_QMARK_.call(null,coll)){
return coll;
} else {
var arr = [];
var items = cljs.core.seq.call(null,coll);
while(true){
if((!((items == null)))){
var item = cljs.core._first.call(null,items);
arr.push(item);

var G__6356 = cljs.core.next.call(null,items);
items = G__6356;
continue;
} else {
return arr;
}
break;
}
}
});
oops.helpers.repurpose_error = (function oops$helpers$repurpose_error(error,msg,info){


(error.message = msg);

var x6357 = error;
(x6357.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(x6357.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_obj,writer,opts){
var _obj__$1 = this;
cljs.core._write.call(null,writer,msg);

if((!((info == null)))){
cljs.core._write.call(null,writer," ");

return cljs.core.pr_writer.call(null,info,writer,opts);
} else {
return null;
}
}));

return x6357;
});
oops.helpers.get_property_descriptor = (function oops$helpers$get_property_descriptor(obj,property){
var o = obj;
while(true){
if((!((o == null)))){
var temp__5737__auto__ = Object.getOwnPropertyDescriptor(o,property);
if((temp__5737__auto__ == null)){
var G__6358 = Object.getPrototypeOf(o);
o = G__6358;
continue;
} else {
var descriptor = temp__5737__auto__;
return descriptor;
}
} else {
return null;
}
break;
}
});
oops.helpers.determine_property_non_writable_reason = (function oops$helpers$determine_property_non_writable_reason(property_descriptor){
if(cljs.core.truth_(property_descriptor.hasOwnProperty("writable"))){
if(property_descriptor.writable === false){
return "data property descriptor has writable=false";
} else {
return null;
}
} else {
if((property_descriptor.set == null)){
return "accessor property descriptor has neither writable flag nor a setter function";
} else {
return null;
}
}
});
oops.helpers.is_object_sealed_QMARK_ = (function oops$helpers$is_object_sealed_QMARK_(obj){
return Object.isSealed(obj);
});
oops.helpers.is_object_frozen_QMARK_ = (function oops$helpers$is_object_frozen_QMARK_(obj){
return Object.isFrozen(obj);
});
oops.helpers.wrap_data_in_enveloper_if_possible = (function oops$helpers$wrap_data_in_enveloper_if_possible(wrap_QMARK_,data){
var or__4126__auto__ = (cljs.core.truth_(wrap_QMARK_)?(function (){var temp__5739__auto__ = (goog.global["devtools"]);
if((temp__5739__auto__ == null)){
return null;
} else {
var devtools = temp__5739__auto__;
var temp__5739__auto____$1 = (devtools["toolbox"]);
if((temp__5739__auto____$1 == null)){
return null;
} else {
var toolbox = temp__5739__auto____$1;
var temp__5739__auto____$2 = (toolbox["envelope"]);
if((temp__5739__auto____$2 == null)){
return null;
} else {
var envelope = temp__5739__auto____$2;
if(cljs.core.fn_QMARK_.call(null,envelope)){
return envelope.call(null,data,"details");
} else {
return null;
}
}
}
}
})():null);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return data;
}
});