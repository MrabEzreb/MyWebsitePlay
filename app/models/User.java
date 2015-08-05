package models;

import javax.persistence.Entity;
import javax.persistence.Id;

import com.avaje.ebean.Model;

import play.data.Form;
import play.data.validation.Constraints.Required;
import play.twirl.api.Html;

@Entity
public class User extends Model {

	@Id
	public int id;
	public String name;
	public String email;
	public String username;
	public String password;
	public boolean isActive;
	public String uniqueId;
	
	public User(FormModel model) {
		name = model.name;
		email = model.email;
		username = model.username;
		password = model.password;
		isActive = false;
	}
	
	@Override
	public String toString() {
		return id+" "+name+" "+email+" "+username+" "+password;
	}
	
	public Html toHtmlRow() {
		return new Html("<td>"+id+"</td>"+"<td>"+name+"</td>"+"<td>"+email+"</td>"+"<td>"+username+"</td>"+"<td>"+password+"</td>");
	}
	
	public static class FormModel {

		public static final Form<User.FormModel> userForm = Form.form(User.FormModel.class);
		@Required
		public String name;
		@Required
		public String email;
		@Required
		public String username;
		@Required
		public String password;
	}
	
}
