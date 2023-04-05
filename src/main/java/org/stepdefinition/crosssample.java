package org.stepdefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.testng.annotations.Parameters;
import org.testng.annotations.Test;

import io.github.bonigarcia.wdm.WebDriverManager;

public class crosssample {
	@Parameters("browser")
	@Test
	private void tc1(String browserName) throws InterruptedException {
		WebDriver driver;
		if (browserName.equals("chromebrowser")) {
			WebDriverManager.chromedriver().setup();
			driver = new ChromeDriver();
			}
		else if (browserName.equals("firefoxbrowser")) {
			WebDriverManager.firefoxdriver().setup();
			driver = new FirefoxDriver();
			
		}
		else {
			WebDriverManager.iedriver().setup();
			driver = new InternetExplorerDriver();
		
	
			
		}
	   
		driver.get("https://www.amazon.in/");
		driver.manage().window().maximize();
		WebElement sign = driver.findElement(By.id("nav-link-accountList"));
		sign.click();
		WebElement gmail = driver.findElement(By.name("email"));
	    gmail.sendKeys("rajeshmech216@gmail.com");
	    WebElement btn = driver.findElement(By.id("continue"));
		btn.click();
		Thread.sleep(3000);
		WebElement pass = driver.findElement(By.name("password"));
		pass.sendKeys("rajesh7639");
		
		WebElement signin = driver.findElement(By.id("signInSubmit"));
		signin.click();
	

		}}
