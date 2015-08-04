package controllers;

import objects.NavBar;
import objects.NavBar.NavDrop;
import objects.NavBar.NavElement;
import play.mvc.Controller;
import play.mvc.Result;
import play.twirl.api.Html;
import views.html.basepage2;
import views.html.content.index;
import views.html.content.social;

public class Home extends Controller {

	public static final NavBar NAVBAR = new NavBar(new NavBar.NavElement[]{
			new NavElement("Primary", "/"),
			new NavElement("Social", "/social"),
			new NavDrop("Games", new NavElement[] {
					new NavElement("Minecraft", "/games/minecraft"),
			})
	});
	public Result index() {
        return ok(basepage2.render("Home", NAVBAR.getWithSelected(0), new Html(""), index.render()));
    }
	
	public Result social() {
    	return ok(basepage2.render("Social Links", NAVBAR.getWithSelected(1), new Html(""), social.render()));
    }
}
