// JavaScript Document

var edress = 'libref_at_uncw_dot_edu';
function get_edress(){
var re= /_at_/gi;
edress = edress.replace(re,'@');
var re= /_dot_/gi;
edress = edress.replace(re,'.');
var the_link="mai" + "lto" +":"+edress;
window.location=the_link;
}
