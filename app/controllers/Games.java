package controllers;

import play.mvc.Controller;
import play.mvc.Result;
import play.twirl.api.Html;
import views.html.basepage2;

public class Games extends Controller {

	public Result minecraft() {
		return ok(basepage2.render("Minecraft", Home.NAVBAR, new Html(""), new Html("")));
	}
	
}
