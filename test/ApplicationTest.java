import static org.junit.Assert.*;
import static play.test.Helpers.*;

import org.junit.Test;

import controllers.Home;
import objects.NavBar;
import play.twirl.api.Content;
import play.twirl.api.Html;
import views.html.basepage2;


/**
*
* Simple (JUnit) tests that can call all parts of a play app.
* If you are interested in mocking a whole application, see the wiki for more details.
*
*/
public class ApplicationTest {

    @Test
    public void simpleCheck() {
        int a = 1 + 1;
        assertEquals(2, a);
    }

    @Test
    public void renderTemplate() {
//        Content html = views.html.index.render("Your new application is ready.");
//        assertEquals("text/html", contentType(html));
//        assertTrue(contentAsString(html).contains("Your new application is ready."));
    	Content html = basepage2.render("Test", Home.NAVBAR, new Html(""), new Html("This is a test"));
    	assertTrue(contentAsString(html).contains("This is a test"));
    }


}
