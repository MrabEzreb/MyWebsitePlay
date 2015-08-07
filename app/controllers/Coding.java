package controllers;

import objects.NavBar;
import objects.NavBar.NavElement;
import objects.NavBar.NavDrop;
import play.mvc.Controller;
import play.mvc.Result;
import play.twirl.api.Html;
import views.html.basepage2;

public class Coding extends Controller {

	NavBar NAVBAR = new NavBar(new NavBar.NavElement[] {
		new NavDrop("Ezreb Clan Website", new NavElement[] {
				new NavElement("Trello", "https://trello.com/b/NfTwv6mN")
		}),
		new NavElement("Home", "/")
	});
	public Result coding() {
		return ok(basepage2.render("Coding", NAVBAR, new Html(""), new Html("")));
	}
}
