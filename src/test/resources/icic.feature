Feature: To validte the signin functionlity of the icic bank

Scenario: To validate the login with valid username and invalid password
Given  To launch the chrome browser and maximize the window
When  To launch the url of the icic bank
And To click for go to login page
And To pass valid email or phonenumber
And  To pass valid password
And To click login button
Then To close the   browser

@Smoke
Scenario Outline: To validate the postive and negative combination of login functionality
Given user has to launch the chrome browser and maximize the window
When user has to  launch the url of the icic bank
And user has to click for go to login page
And user has to  pass the data  "<emaildatas>" in email field
And  user has to pass  data "<passworddatas>" in password field
And user has to click login button
Then user has to close the   browser

Examples:
|emaildatas             |passworddatas   |
|rajesh@gmail.com       |1224            |
|raj@gmail.com          |4555            |
|abs@gmail.com          |7788            |
|waran@gmail.com        |8888            |

