var h1 = "";
var p1 = "";
function setAnnouncement() {
    "use strict";
    document.getElementById("announcementh").innerHTML = h1;

    document.getElementById("announcementh").style.display = "in-line";
    document.getElementById("announcementh").style.backgroundColor = "green";
    document.getElementById("announcementh").style.color = "white";
    document.getElementById("announcementp").innerHTML = p1;
    document.getElementById("announcementp").style.display = "in-line";
    document.getElementById("announcementp").style.backgroundColor = "green";
    document.getElementById("announcementp").style.color = "white";
    document.getElementById("announcement").style.backgroundColor = "red";
    document.getElementById("announcement").style.textAlign = "center";
    document.getElementById("announcement").style.display = "block";
}
function loadAnnouncement() {
    "use strict";
    var announce, row, cols, h, p;
    announce = document.getElementsByTagName("announcement");
    announce[0].id = "announcement";
    row = document.createElement("div");
    cols = document.createElement("div");
    row.className = "row";
    cols.className = "col-sm-12";
    h = document.createElement("h1");
    p = document.createElement("p");
    h.id = "announcementh";
    p.id = "announcementp";
    cols.appendChild(h);
    cols.appendChild(p);
    row.appendChild(cols);
    announce[0].setAttribute("style", "background-color: red; text-align: center;");
    announce[0].appendChild(row);
    setAnnouncement();
}
function createAd() {
    "use strict";
    var ad2, script1, ins, script2, ad, div;
    ad2 = document.createElement("h3");
    script1 = document.createElement("script");
    script1.async = true;
    script1.src = "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
    ins = document.createElement("ins");
    ins.className = "adsbygoogle";
    ins.setAttribute("style", "display:inline-block;width:728px;height:90px");
    ins.setAttribute("data-ad-client", "ca-pub-9788687108483759");
    ins.setAttribute("data-ad-slot", "6432967222");
    script2 = document.createElement("script");
    script2.appendChild(document.createTextNode("(adsbygoogle = window.adsbygoogle || []).push({});"));
    ad = document.getElementById("ad23");
    div = document.createElement("div");
    div.id = "addiv";
    ad2.appendChild(document.createTextNode("Advertisement"));
    div.appendChild(ad2);
    div.appendChild(script1);
    div.appendChild(ins);
    div.appendChild(script2);
    ad.appendChild(div);
}
function loadAd() {
    "use strict";
    var ad;
    ad = document.getElementsByTagName("ad");
    ad[0].id = "ad";
}
//loadAnnouncement();
loadAd();
createAd();