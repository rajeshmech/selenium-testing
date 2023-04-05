package org.stepdefinition;

import org.test.Baseclass;
import org.test.FbLoginPojo;
import org.test.GmailLoginPojo;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class GmailLogin extends Baseclass {

@Given("To launch the chrome browser and maximize the window")
public void to_launch_the_chrome_browser_and_maximize_the_window() {
	launchBrowser();
	windowMaximize();
	
    
}

@When("To launch the url of te flipkart")
public void to_launch_the_url_of_te_flipkart() {
	launchUrl("https://en-gb.facebook.com/");
}

@When("To pass valid user name")
public void to_pass_valid_user_name() {
	FbLoginPojo g = new FbLoginPojo();
	
	passText("rajeshmech216@gmail.com",g.getEmail());
	
	
	
	
  
}

@When("To pass invlaid password")
public void to_pass_invlaid_password() {
	
	FbLoginPojo g = new FbLoginPojo();
	passText(" ", g.getPassword());
    
}

@When("To click login button")
public void to_click_login_button() {
	FbLoginPojo g = new FbLoginPojo();
	clickBtn(g.getLogin());
	

}

@When("To check whether navigate to home page or not")
public void to_check_whether_navigate_to_home_page_or_not() {
	System.out.println("To check your login credentils");
   
}

@Then("To close the browser")
public void to_close_the_browser() {
	closeEntireBrowser();
   
}



}
