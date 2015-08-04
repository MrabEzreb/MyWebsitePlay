package controllers;

import play.mvc.Controller;
import play.mvc.Result;

public class Application extends Controller {

    
    public Result four04(String four04) {
    	return notFound("Error 404\nPage "+four04+" does not exist.\nIf you are seeing this page, then this page is not even in the plan.\nA page that isn't done will display a TODO page.");
    }
    
    
    
    public Result five00() {
    	return internalServerError("IOException\nWhat does this mean?\nIt means that a file couldn't be found, couldn't be accessed, or was corrupted.\nException Message (For Developers)\n\n");
    }

}
