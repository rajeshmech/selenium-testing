Feature: To validte the signin functionlity of the amazon

Scenario: To validate the login with valid username and invalid password
Given  To launch the chrome browser and maximize the window
When  To launch the url of the amazon
And To click for go to signin page
And To pass valid email or phonenumber
|raj|dfjfj|nfjfjf|fjjff|rajeshmech216@gmail.com|dff|
And To click continue button
And  To pass invlaid password
|trt|tt  |ttt       |rttr|
|rr |fkf  |rajesh7639|4ttkkgf|
|kjg|kosm|ffk     |jffkf|
And To click signin button
And  To check whether navigate to home page or not
Then To close the   browser

