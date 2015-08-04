function expand() {
    "use strict";
    var button;
    button = document.getElementsByTagName("support")[0];
    button.className = "expandSupport";
}
function generateSupport() {
    "use strict";
    var parent, div, p, text;
    parent = document.getElementsByTagName("support")[0];
    div = document.createElement("div");
    p = document.createElement("p");
    text = document.createTextNode("Test122222");
    p.appendChild(text);
    p.className = "collapsed";
    div.appendChild(p);
    parent.appendChild(div);
    parent.style.position = "fixed";
    parent.style.top = "50%";
    parent.style.width = "200px";
    parent.style.height = "42px";
    parent.style.bottom = "50%";
    parent.style.right = "0%";
    parent.style.zIndex = "6";
    div.style.height = "inherit";
    div.style.width = "auto";
    div.style.float = "right";
    div.style.right = "0%";
    div.style.position = "absolute";
    div.style.backgroundColor = "white";
    parent.onclick = expand;
}
window.onload = generateSupport;