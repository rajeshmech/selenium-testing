package org.stepdefinition;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class pojomynthra extends Baseclass{
	public pojomynthra() {
		PageFactory.initElements(driver, this);
	}
	
	
	@FindBy(xpath="//input[@placeholder='Search for products, brands and more']")
	private WebElement searchbox1;
		@FindBy(xpath="//a[@class='desktop-submit']")
	private WebElement searchbtn1;
		@FindBy(xpath="//li[@class='product-base'][1]")
	private WebElement tshirtclk1;
		@FindBy(xpath="//p[text()='M']")
		private WebElement size1;
			@FindBy(xpath="//div[text()='ADD TO BAG']")
		private WebElement addtobag1;
			@FindBy(xpath="//span[text()='GO TO BAG']")
		private WebElement gotobag1;
			public WebElement getSearchbox1() {
				return searchbox1;
			}
			public WebElement getSearchbtn1() {
				return searchbtn1;
			}
			public WebElement getTshirtclk1() {
				return tshirtclk1;
			}
			public WebElement getSize1() {
				return size1;
			}
			public WebElement getAddtobag1() {
				return addtobag1;
			}
			public WebElement getGotobag1() {
				return gotobag1;
			}
			
		

}
//https://www.myntra.com/