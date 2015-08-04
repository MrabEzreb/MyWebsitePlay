var $, links, i;
$ = window.$;


function getLinks() {
	"use strict";
	var allLinks, correctLinks, i;
	correctLinks = [];
	allLinks = document.getElementsByTagName("goto");
	for (i = 0; i < allLinks.length; i += 1) {
        correctLinks.push(allLinks[i]);
	}
	return allLinks;
}
function test() {
	"use strict";
	var p, links;
	p = document.getElementById("p");
	links = getLinks();
	p.innerHTML = links.valueOf();
}
function checkIfFile(link) {
	"use strict";
	var fileStr, htmlStr, slash;
	fileStr = link.substring(0, 5);
	htmlStr = link.substring(link.length - 5);
	slash = link.substring(link.length - 1);
	if (fileStr === "file:" && htmlStr !== ".html") {
		if (slash === "/") {
			return link + "index.html";
		} else {
			return link + "/index.html";
		}
	}
	return link;
}
function checkHttp(link) {
	"use strict";
	var fileStr, htmlStr, slash;
	fileStr = link.substring(0, 4);
	if (fileStr === "http") {
		return true;
	}
	return false;
}
function fillInLink(link) {
	"use strict";
	var text, linkTo, a, textN, subLink, thisLink, baseLink, homeLink, oldLink;
	text = link.innerHTML + " added";
	linkTo = link.getAttribute("link");
	link.innerHTML = "";
	a = document.createElement("a");
	textN = document.createTextNode(text);
	a.appendChild(textN);
	thisLink = document.URL;
	oldLink = thisLink;
	thisLink = thisLink.toLowerCase();
	subLink = oldLink.substring(thisLink.indexOf("ezrebclan"));
	baseLink = oldLink.substring(0, thisLink.indexOf("ezrebclan"));
	homeLink = baseLink + subLink.substring(0, subLink.indexOf("/"));
	if (checkHttp(link) === true) {
		a.setAttribute("href", link);
	} else {
		a.setAttribute("href", checkIfFile(homeLink + linkTo));
	}
	link.appendChild(a);
	return a.getAttribute("href");
}
function fillInLinkStr(link) {
	"use strict";
	var text, linkTo, a, textN, subLink, thisLink, baseLink, homeLink, oldLink;
	linkTo = link;
	a = document.createElement("a");
	thisLink = document.URL;
	oldLink = thisLink;
	thisLink = thisLink.toLowerCase();
	subLink = oldLink.substring(thisLink.indexOf("ezrebclan"));
	baseLink = oldLink.substring(0, thisLink.indexOf("ezrebclan"));
	homeLink = baseLink + subLink.substring(0, subLink.indexOf("/"));
	if (checkHttp(link) === true) {
		a.setAttribute("href", link);
	} else {
		a.setAttribute("href", checkIfFile(homeLink + linkTo));
	}
	return a.getAttribute("href");
}
links = getLinks();
if (links.length > 0) {
	for (i = 0; i < links.length; i += 1) {
	    fillInLink(links[i]);
	}
}
var linksCreated = true;
function closeChildren(htmlObject) {
    "use strict";
    var children, i;
    children = htmlObject.children;
    if (children.length === 0) {
        return;
    } else {
        for (i = 0; i < children.length; i = i + 1) {
            closeChildren(children[i]);
            if (children[i].getAttribute("hide") === "false") {children[i].style.display = "none"; }
        }
        return;
    }
}
function clicked(id) {
	"use strict";
    var drop, children, i;
    drop = document.getElementById(id).getElementsByClassName("dropdown-menu")[0];
    if (drop.style.display === "block") {
        drop.style.display = "none";
        for (i = 0; i < drop.children.length; i = i + 1) {
            closeChildren(drop.children[i]);
        }
    } else if (drop.style.display === "none") {
        drop.style.display = "block";
    } else {
        drop.style.display = "block";
    }
}
function loadNav(name, link) {
    "use strict";
    var list2, elem, link2;
    list2 = document.getElementById("navList");
    elem = document.createElement("li");
    link2 = document.createElement("a");
    link2.href = fillInLinkStr(link);
    link2.appendChild(document.createTextNode(name));
    elem.appendChild(link2);
    list2.appendChild(elem);
    document.getElementById("demo").innerHTML = "completed";
}
function getNavElement(name, link) {
    "use strict";
    var elem, link2;
    elem = document.createElement("li");
    link2 = document.createElement("a");
    link2.setAttribute("role", "menuitem");
    link2.href = fillInLinkStr(link);
    link2.appendChild(document.createTextNode(name));
    elem.appendChild(link2);
    elem.setAttribute("hide", "true");
    return elem;
}
function getNavDrop(name, navElements) {
    "use strict";
    var elem1, elem2, i, a, arrow;
    elem1 = document.createElement("li");
    elem1.setAttribute("class", "dropdown");
    elem1.setAttribute("id", name);
    a = document.createElement("a");
    a.href = "#";
    a.onclick = function () { clicked(name); };
    a.appendChild(document.createTextNode(name));
    arrow = document.createElement("span");
    arrow.className = "caret";
    a.appendChild(arrow);
    elem1.appendChild(a);
    elem2 = document.createElement("ul");
    elem2.className = "dropdown-menu";
    elem2.setAttribute("role", "navigation");
    elem2.setAttribute("id", "dropdown-menu");
    for (i = 0; i < navElements.length; i = i + 1) {
        navElements[i].setAttribute("role", "presentation");
//        navElements[i].style.width = "inherit";
        elem2.appendChild(navElements[i]);
    }
    elem1.appendChild(elem2);
    elem2.style.width = "100%";
    return elem1;
}
function loadNavElem(navElement) {
    "use strict";
    var list;
    list = document.getElementById("navList");
    list.appendChild(navElement);
}
function loadFullNav(navArray, active) {
    "use strict";
    var i, list;
    list = document.getElementById("navList2");
    for (i = 0; i < navArray.length; i = i + 1) {
        if (i === active) {
            navArray[i].className = "active";
        }
        list.appendChild(navArray[i]);
    }
}
var account, mainNav, mainGamesDrop, ezrebPackNav, dndNav, ezrebClanNav, mainClanAdamSlide, mainClanDrop, mainClanMrabSlide, adamClan, mrabClan, profileBuilder, hostedDataMain, hostedDataTime;

ezrebClanNav = [getNavElement("Mrab Ezreb", "/EzrebClan/MrabEzreb"), getNavElement("AdamPlaysVideoGames", "/EzrebClan/AdamPlaysVideoGames"), getNavElement("Main Site", "/")];

ezrebPackNav = [getNavElement("EzrebPack", "/EzrebPack"), getNavElement("Download", "/EzrebPack/Downloads"), getNavElement("Main Site", "/")];

dndNav = [getNavElement("Dnd Toolkit", "/Dnd"), getNavElement("Download", "/Dnd/Downloads"), getNavElement("Main Site", "/")];

mainGamesDrop = [getNavElement("None ATM", "#")];

mainClanDrop = [getNavElement("Mrab Ezreb", "/EzrebClan/MrabEzreb"), getNavElement("AdamPlaysVideoGames", "/EzrebClan/AdamPlaysVideoGames")];

adamClan = [getNavElement("Home", "/EzrebClan/AdamPlaysVideoGames"), getNavElement("YouTube", "https://www.youtube.com/channel/UCA757FqRtwZlBzVPZ8ffLfA"), getNavElement("Main Site", "/")];

mrabClan = [getNavElement("Home", "/EzrebClan/MrabEzreb"), getNavElement("YouTube", "https://www.youtube.com/c/MrabEzreb"), getNavElement("Main Site", "/")];

profileBuilder = [getNavElement("Main Site", "/"), getNavElement("Save", "save.php")];

account = [getNavElement("Main Site", "/"), getNavElement("Login", "/Account/Login"), getNavElement("Signup", "/Account/Signup")];

hostedDataMain = [getNavElement("Main Site", "/"), getNavElement("Hosted Data Home", "/data"), getNavElement("Refrence Home", "/data/get")];

mainNav = [getNavElement("Primary", "/"), getNavElement("Social", "/Social"), getNavElement("Minecraft Minimap", "/map_rdir.html"), getNavDrop("Games", mainGamesDrop), getNavDrop("EzrebClan", mainClanDrop), getNavElement("Ezreb Clan Hosted Data", "/data")];
function getArray(navObject) {
    "use strict";
    var name, active;
    name = navObject.getAttribute("array");
    active = navObject.getAttribute("active");
    if (name === "main") {
        mainNav[active].className = "active";
        return mainNav;
    } else if (name === "ezrebpack") {
        ezrebPackNav[active].className = "active";
        return ezrebPackNav;
    } else if (name === "dnd") {
        dndNav[active].className = "active";
        return dndNav;
    } else if (name === "ezrebclan") {
        ezrebClanNav[active].className = "active";
        return ezrebClanNav;
    } else if (name === "AdamPlaysVideoGames") {
        adamClan[active].className = "active";
        return adamClan;
    } else if (name === "MrabEzreb") {
        mrabClan[active].className = "active";
        return mrabClan;
    } else if (name === "profileBuilder") {
        profileBuilder[active].className = "active";
        return profileBuilder;
    } else if (name === "account") {
        account[active].className = "active";
        return account;
    } else if (name === "data") {
        hostedDataMain[active].className = "active";
        return hostedDataMain;
    }
}
function insertToElem() {
    "use strict";
    var i, nav, row, cols, list, elem, navArray;
    nav = document.getElementsByTagName("nav")[0];
    navArray = getArray(nav);
    row = document.createElement("div");
    row.className = "row";
    cols = document.createElement("div");
    cols.className = "col-sm-12";
    list = document.createElement("ul");
    list.id = "navList2";
    list.className = "nav nav-pills nav-justified";
    list.setAttribute("role", "tablist");
    cols.appendChild(list);
    row.appendChild(cols);
    nav.appendChild(row);
    loadFullNav(navArray, nav.getAttribute("active"));
}
function run() {
    "use strict";
    insertToElem();
}
run();