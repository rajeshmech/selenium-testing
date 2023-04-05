package org.stepdefinition;



import java.awt.Window;
import java.awt.event.WindowStateListener;
import java.io.File;
import java.io.IOException;
import java.util.Iterator;
import java.util.Set;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import gherkin.ast.Location;

public class mynthra extends Baseclass {
	@Given("To launch the chrome browser and maximize the window")
	public void to_launch_the_chrome_browser_and_maximize_the_window() {
		launchBrowser();
		windowMaximize();
	   
	}

	@When("To launch the url of the mynthra")
	public void to_launch_the_url_of_the_mynthra() {
		launchUrl("https://www.myntra.com/");
		
	}
	@When("To click searchbox")
	public void to_click_searchbox() {
		
	}
	

	@When("To enter Tshirt in searchbox")
	public void to_enter_Tshirt_in_searchbox() throws InterruptedException {
		Thread.sleep(3000);
		
		pojomynthra p = new pojomynthra();
		passText("Tshirt", p.getSearchbox1());
		
	    
	}

	@When("To click enter to search")
	public void to_click_enter_to_search() throws InterruptedException {
		Thread.sleep(3000);
		pojomynthra p = new pojomynthra();
		clickBtn(p.getSearchbtn1());
	   
	}

	@When("To select first product and select {string} size")
	public void to_select_first_product_and_select_size(String string) throws InterruptedException   {
		Thread.sleep(3000);
		pojomynthra p = new pojomynthra();
		clickBtn(p.getTshirtclk1());
		
		String parentWindowId = driver.getWindowHandle();
		Set<String> allWindowsId = driver.getWindowHandles();
		for (String winid : allWindowsId) {
			if (winid != parentWindowId ) {
				driver.switchTo().window(winid);
				
		
		}
			
		}
		
		Thread.sleep(3000);
		
		clickBtn(p.getSize1());
	   
	}

	@When("To click {string} Button")
	public void to_click_Button(String string) {
		pojomynthra p = new pojomynthra();
		clickBtn(p.getAddtobag1());
	   
	}

	@When("To close the current tab")
	public void to_close_the_current_tab() {
		
		   
	}

	@When("To click the bag icon")
	public void to_click_the_bag_icon() throws InterruptedException {
		
		Thread.sleep(3000);
		pojomynthra p = new pojomynthra();
		clickBtn(p.getGotobag1());
	    }

	@When("To take the scrrenshot selected bag")
	public void to_take_the_scrrenshot_selected_bag() throws IOException {
		TakesScreenshot ts = (TakesScreenshot) driver;
		File Image = ts.getScreenshotAs(OutputType.FILE);
		File f = new File("C:\\Users\\ELCOT\\eclipse-workspace\\cucumberproject\\screenshot\\addtobag.png");
		FileUtils.copyFile(Image, f);		

	    
	}

	@Then("To close the   browser")
	public void to_close_the_browser() {
		closeEntireBrowser();
	    
	}



}
