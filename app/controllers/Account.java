package controllers;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import models.User;
import models.User.FormModel;
import models.User.LoginModel;
import play.mvc.Controller;
import play.mvc.Result;
import play.twirl.api.Html;
import views.html.basepage2;
import views.html.content.account.login;
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
	
	public Result loginPost() {
		return ok();
	}
	
	public Result loginPostRedir(String redir) {
		LoginModel model = User.LoginModel.loginForm.bindFromRequest().get();
		if(model.username.equals("FacebookLogin")) {
			return redirect(routes.Account.loginRedir(redir));
		}
		return ok(views.html.content.account.loginPost.render(model.username, "/"+redir));
	}
	
	public Result login() {
		return ok(/*basepage2.render("Login", Home.NAVBAR, new Html(""), login.render(User.FormModel.userForm))*/);
	}
	
	public Result loginRedir(String redir) {
		return ok(basepage2.render("Login", Home.NAVBAR, new Html(""), login.render(User.LoginModel.loginForm, redir)));
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
	
	public Result signupPostGoogle() {
		System.out.println(request().body().asFormUrlEncoded().get("loginType")[0]);
		System.out.println(request().body().asFormUrlEncoded().get("token")[0]);
		return ok();
	}
}
