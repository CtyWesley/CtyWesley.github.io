"use strict";

var reqobject = "";
var gename = "";
var wikiname = "";
var gestate = "waiting";
var currenttab = 0;
var boxloaded = [false, false, false, false];

var imageorigin = "https://runescape.wiki/w/";
var allowedorigins = ["https://runescape.wiki"];

window.onpopstate = start;

function start() {
	a1lib.identifyUrl("appconfig.json");
	decodeURI(document.location.search).replace(/(\?|&)object=([^&]+?)(&|$)/,function(a,b,c){loadobject(c,true);});
}

function openWiki() { 
	window.open("https://runescape.wiki/w/" + encodeURIComponent(wikiname));
}

function loadobject(name, ignorehist) {
	var title = htmlentities(startcaps(name)).replace(/_/g, " ");
	//elid("itemname").innerHTML = title;
	document.title = title;
	reqobject = wikiname = gename = name;
//	elid("gecontent").style.display = "none";
	elid("wikicontent").innerHTML = "";
//	settab(0);
//	elid("contenttab1").style.display = "none"; elid("tabcontent1").innerHTML = "";
	//elid("contenttab2").style.display = "none"; elid("tabcontent2").innerHTML = "";
//	elid("contenttab3").style.display = "none"; elid("tabcontent3").innerHTML = "";
//	//elid("contenttab4").style.display = "none"; elid("tabcontent4").innerHTML = "";
	loadwiki(name);
	if (!ignorehist) { history.pushState(undefined, name, "?object=" + name); }
}

function loadwiki(name) {
	dlpage("https://runeapps.org/data/rswiki.php?page=" + encodeURIComponent(name), function (t) {
		wikiloaded(jsonDecode(t), name);
	}, function () {
		wikiloaded(null, name);
	});
}

function wikiloaded(t, name) {
	if (name != wikiname) { return; }//object changed while loading
	var error = function () {
		elid("wikicontent").innerHTML = "No information found";
	}

	if (!t || !t.parse || !t.parse.text) { error(); return; }
	wikiname = t.parse.title;
	elid("itemname").innerHTML = wikiname;
	document.title = wikiname;
	var page = t.parse.text["*"];
	if (gestate == "failed" && gename != wikiname) { gename = wikiname; loadge(gename); }//make ge retry if failed and wiki had a redirect
	boxloaded = [false, false, false, false];
	parsewiki(page, elid("wikicontent"));
}

function settab(tabnr) {
	var tabs = elcl("contenttab");
	for (var a = 0; a < tabs.length; a++) { tabs[a].classList.remove("activetab"); }
	elid("contenttab" + tabnr).classList.add("activetab");

	var contenttabs = elcl("tabcontent");
	for (var a = 0; a < contenttabs.length; a++) { contenttabs[a].style.display = "none"; }
	elid("tabcontent" + tabnr).style.display = "block";
}














