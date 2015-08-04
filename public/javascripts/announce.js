function validateForm() {
    var x = document.forms["announce"]["n"].value;
    if (x !== "MrabEzreb") {
        alert("ERROR: You do not have permission");
        return false;
    }
    var y = document.forms["announce"]["p2"].value;
    if (y !== "4edxz7yhbn") {
    	alert("ERROR: You do not have permission");
    	return false;
    }
    var z = document.getElementById("sub");
    z.style.display = "block";
}
document.getElementById("but").onclick = validateForm;