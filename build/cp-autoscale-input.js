/*!
 * cp-autoscale-input
 * author: Bret Little
 * copyright: 2015
 * license: MIT
 * version: 1.0.4
 */
!function(t){function e(r){if(n[r])return n[r].exports;var a=n[r]={exports:{},id:r,loaded:!1};return t[r].call(a.exports,a,a.exports,e),a.loaded=!0,a.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";var r=angular.module("cp-autoscale-input",[]);r.directive("cpAutoscaleInput",[function(){var t=function(t,e,n){return'<div style="position: absolute;"><span style="font-family:'+n+";font-size:"+e+'; font-weight:400;">'+t+"</span></div>"};return{require:"ngModel",restrict:"A",link:function(e,n,r,a){var l=function(e){e=e.length<3?"hello":e,e=e.replace(/\s/g,"_"),r.maxLength&&(e=e.substring(0,r.maxLength));var a=$(t(e,n.css("font-size"),n.css("font-family").replace(/\"/g,"'")));n.after(a),n.width(a.width()||"50px"),a.remove()};n.keyup(function(t){var e=n.val();l(e&&e.length?e:n.attr("placeholder")||"hello dawg")}),l(n.val()||n.attr("placeholder")||"hello dawg"),e.$watch(function(){return a.$modelValue},function(t){l(n.val()||n.attr("placeholder")||"hello dawg")})}}}])}]);