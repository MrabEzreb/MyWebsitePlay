package objects;

import play.twirl.api.Html;

public class NavBar {

	public NavBar(NavElement[] elements) {
		this.elements = elements;
	}
	public NavBar getWithSelected(int selected) {
		NavBar ret = new NavBar(elements);
		ret.selected = selected;
		return ret;
	}
	public int selected;
	public NavElement[] elements;
	public Html toHtml() {
		String elems = "";
		for (int i = 0; i < elements.length; i++) {
			if(i == selected) {
				elems += elements[i].toHtml(true);
			} else {
				elems += elements[i].toHtml(false);
			}
		}
		return new Html("<nav><div style=\"margin-left: 0px; margin-right: 0px;\" class=\"row\"><div class=\"col-sm-12\"><ul id=\"navlist2\" class=\"nav nav-pills nav-justified\" role=\"tablist\">"+elems+"</ul></div></div></nav>");
	}
	public static class NavElement {
		public NavElement(String name, String link) {
			this.name = name;
			this.link = link;
		}
		public String name;
		public String link;
		public Html toHtml(boolean sel) {
			if(sel) {
				return new Html("<li class=\"active\" hide=\"true\"><a role=\"menuitem\" href=\""+link+"\">"+name+"</a></li>");
			} else {
				return new Html("<li hide=\"true\"><a role=\"menuitem\" href=\""+link+"\">"+name+"</a></li>");
			}
		}
	}
	public static class NavDrop extends NavElement {
		public NavDrop(String name, NavElement[] elements) {
			super(name, "#");
			this.elements = elements;
		}
		public NavElement[] elements;
		@Override
		public Html toHtml(boolean sel) {
			String elems = "";
			for (NavElement navElement : elements) {
				elems += navElement.toHtml(false);
			}
			return new Html("<li hide=\"true\" id="+name+"><a role=\"menuitem\" href=\""+link+"\" onclick=\"navClicked(\'"+name+"\')\">"+name+"&#9660</a><ul id=\"dropdown-menu\" class=\"dropdown-menu\" role=\"navigation\" style=\"width: 100%;\">"+elems+"</ul></li>");
		}
	}
}