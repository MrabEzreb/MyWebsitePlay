var $, thisURL;
$ = window.$;
thisURL = document.URL;
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
function generateUser() {
    "use strict";
    var user, pic, frame;
    window.sessionStorage.setItem("profileImSrc", "http://ochumanesociety.com/clients/3697/images/kittens.jpg");
    user = document.getElementsByTagName("user");
    pic = window.sessionStorage.getItem("profileImSrc");
    frame = document.createElement("img");
    frame.src = pic;
    user[0].appendChild(frame);
}
function addTo() {
    "use strict";
    generateUser();
}
function testingData() {
    "use strict";
    window.sessionStorage.setItem("profileImSrc", "http://ochumanesociety.com/clients/3697/images/kittens.jpg");
    window.sessionStorage.setItem("username", "AdamPlaysVideoGames");
    window.sessionStorage.setItem("HomeLink", "/EzrebClan/adam.html");
    window.sessionStorage.setItem("YTLink", "https://youtube.com/c/MrabEzreb");
}
function grabData() {
	"use strict";
	if (window.localStorage.getItem("username") !== null) {
	    window.sessionStorage.setItem("profileImSrc", window.localStorage.getItem("profileImSrc"));
	    window.sessionStorage.setItem("username", window.localStorage.getItem("username"));
	    window.sessionStorage.setItem("HomeLink", "/Profiles/" + window.localStorage.getItem("username"));
    } else if (window.sessionStorage.getItem("username") === null) {
	    window.sessionStorage.setItem("profileImSrc", "");
	    window.sessionStorage.setItem("username", "Guest");
	    window.sessionStorage.setItem("HomeLink", "/");
	} else if (window.sessionStorage.getItem("username") === "Guest") {
	    window.sessionStorage.setItem("profileImSrc", "");
	    window.sessionStorage.setItem("username", "Guest");
	    window.sessionStorage.setItem("HomeLink", "/");
	} else {
	    window.sessionStorage.setItem("HomeLink", "/Profiles/" + window.sessionStorage.getItem("username"));
    }
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
function getNavElement(name, link) {
    "use strict";
    var elem, link2;
    elem = document.createElement("li");
    link2 = document.createElement("a");
    link2.setAttribute("role", "menuitem");
    link2.href = link;
    link2.appendChild(document.createTextNode(name));
    elem.appendChild(link2);
    elem.setAttribute("hide", "true");
    return elem;
}
function getUserElement() {
    "use strict";
    var link2, elem, elem2, user, profileImSrc, homeLink, navElements, i, nav;
    user = window.sessionStorage.getItem("username");
    profileImSrc = window.sessionStorage.getItem("profileImSrc");
    homeLink = window.sessionStorage.getItem("HomeLink");
    elem = document.createElement("li");
    elem.style.backgroundImage = "/Profiles/" + user + "/profileIm.png";
    elem.setAttribute("class", "dropdown");
    elem.setAttribute("id", "user");
    link2 = document.createElement("a");
    link2.href = "#";
    link2.onclick = function () { clicked(user); };
    link2.appendChild(document.createTextNode(user));
    elem.appendChild(link2);
    elem2 = document.createElement("ul");
    elem2.className = "dropdown-menu";
    elem2.setAttribute("role", "navigation");
    elem2.setAttribute("id", "dropdown-menu");
    navElements = [
        getNavElement("User Home", homeLink),
        getNavElement("Account Settings", "/Account/Settings"),
        getNavElement("Signout", "/Account/Signout")
    ];
    for (i = 0; i < navElements.length; i = i + 1) {
        navElements[i].setAttribute("role", "presentation");
//        navElements[i].style.width = "inherit";
        elem2.appendChild(navElements[i]);
    }
    elem.appendChild(elem2);
    elem2.style.width = "100%";
    nav = document.getElementById("navList2");
    nav.appendChild(elem);
}
function getNoUserElement() {
    "use strict";
    var link2, elem, elem2, navElements, i, nav;
    elem = document.createElement("li");
    elem.setAttribute("class", "dropdown");
    elem.setAttribute("id", "user");
    link2 = document.createElement("a");
    link2.href = "#";
    link2.onclick = function () { clicked("user"); };
    link2.appendChild(document.createTextNode("Login/Signup"));
    elem.appendChild(link2);
    elem2 = document.createElement("ul");
    elem2.className = "dropdown-menu";
    elem2.setAttribute("role", "navigation");
    elem2.setAttribute("id", "dropdown-menu");
    navElements = [
        getNavElement("Login", "/Account/Login"),
        getNavElement("Signup", "/Account/Signup")
    ];
    for (i = 0; i < navElements.length; i = i + 1) {
        navElements[i].setAttribute("role", "presentation");
//        navElements[i].style.width = "inherit";
        elem2.appendChild(navElements[i]);
    }
    elem.appendChild(elem2);
    elem2.style.width = "100%";
    nav = document.getElementById("navList2");
    nav.appendChild(elem);
}
grabData();
if (window.sessionStorage.getItem("username") === "Guest") {
    getNoUserElement();
} else {
    getUserElement();
}