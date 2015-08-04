var $, loader;
$ = window.$;

function getLoader() {
	"use strict";
	return document.getElementsByTagName("head")[0];
}
function fillInLink2(link) {
	"use strict";
	var text, linkTo, subLink, thisLink, baseLink, homeLink, oldLink;
	linkTo = link;
	thisLink = document.URL;
	oldLink = thisLink;
	thisLink = thisLink.toLowerCase();
	subLink = oldLink.substring(thisLink.indexOf("ezrebclan"));
	baseLink = oldLink.substring(0, thisLink.indexOf("ezrebclan"));
	homeLink = baseLink + subLink.substring(0, subLink.indexOf("/"));
	return homeLink + linkTo;
}
function addScript(src) {
	"use strict";
	var src2, scrElem, head;
	src2 = fillInLink2(src);
	scrElem = document.createElement("script");
	scrElem.setAttribute("src", src2);
    scrElem.setAttribute("type", "text/javascript");
	loader.appendChild(scrElem);
}
function addStyle(src) {
	"use strict";
	var src2, scrElem, head;
	src2 = fillInLink2(src);
	scrElem = document.createElement("link");
	scrElem.setAttribute("href", src2);
	scrElem.setAttribute("rel", "stylesheet");
	loader.appendChild(scrElem);
}
function loadScripts() {
	"use strict";
	addScript("/javascripts/1jquery.js");
	//addScript("/javascripts/3link.js");
	addScript("/javascripts/4navBar.js");
	addScript("/javascripts/5user.js");
	addScript("/javascripts/announcement.js");
	addScript("/javascripts/dropdown.js");
	addStyle("/stylesheets/bootstrap.css");
	addStyle("/stylesheets/bootstrap-theme.css");
	addStyle("/stylesheets/index.css");
	addStyle("/stylesheets/animations.css");
}
loader = getLoader();
loadScripts();