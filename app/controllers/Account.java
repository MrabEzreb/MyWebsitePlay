package controllers;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import javax.sql.DataSource;

import com.avaje.ebean.EbeanServer;

import models.User;
import models.User.FormModel;
import play.db.DB;
import play.mvc.Controller;
import play.mvc.Result;
import play.twirl.api.Html;
import views.html.basepage2;
import views.html.content.account.signup;
import views.html.content.admin.users;

public class Account extends Controller {

	public Result signup() {
		return ok(basepage2.render("Signup", Home.NAVBAR, new Html(""), signup.render(User.FormModel.userForm)));
	}
	
	public Result signupPost() {
		FormModel model = User.FormModel.userForm.bindFromRequest().get();
		User user = new User(model);
		user.insert();
		return ok(basepage2.render("Success", Home.NAVBAR, new Html(""), new Html("<h2>Thank you for signing up. Please check your email to complete the process</h2>")));
	}
	
	public Result getSignups() {
		String str = "";
		try {
			PreparedStatement ps = DatabaseController.ds.getConnection().prepareStatement("SELECT * FROM user");
			ResultSet rs = ps.executeQuery();
			rs.first();
			List<User> users2 = User.db().find(User.class).findList();
			rs.close();
			return ok(users.render(users2));
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return internalServerError();
	}
}
