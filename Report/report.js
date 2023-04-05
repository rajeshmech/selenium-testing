$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/icic.feature");
formatter.feature({
  "name": "To validte the signin functionlity of the icic bank",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "To validate the postive and negative combination of login functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "user has to launch the chrome browser and maximize the window",
  "keyword": "Given "
});
formatter.step({
  "name": "user has to  launch the url of the icic bank",
  "keyword": "When "
});
formatter.step({
  "name": "user has to click for go to login page",
  "keyword": "And "
});
formatter.step({
  "name": "user has to  pass the data  \"\u003cemaildatas\u003e\" in email field",
  "keyword": "And "
});
formatter.step({
  "name": "user has to pass  data \"\u003cpassworddatas\u003e\" in password field",
  "keyword": "And "
});
formatter.step({
  "name": "user has to click login button",
  "keyword": "And "
});
formatter.step({
  "name": "user has to close the   browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "emaildatas",
        "passworddatas"
      ]
    },
    {
      "cells": [
        "rajesh@gmail.com",
        "1224"
      ]
    },
    {
      "cells": [
        "raj@gmail.com",
        "4555"
      ]
    },
    {
      "cells": [
        "abs@gmail.com",
        "7788"
      ]
    },
    {
      "cells": [
        "waran@gmail.com",
        "8888"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To validate the postive and negative combination of login functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "user has to launch the chrome browser and maximize the window",
  "keyword": "Given "
});
formatter.match({
  "location": "icicbank.user_has_to_launch_the_chrome_browser_and_maximize_the_window()"
});
formatter.result({
  "error_message": "java.lang.IllegalStateException: The path to the driver executable must be set by the webdriver.gecko.driver system property; for more information, see https://github.com/mozilla/geckodriver. The latest version can be downloaded from https://github.com/mozilla/geckodriver/releases\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:847)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:134)\r\n\tat org.openqa.selenium.firefox.GeckoDriverService.access$100(GeckoDriverService.java:44)\r\n\tat org.openqa.selenium.firefox.GeckoDriverService$Builder.findDefaultExecutable(GeckoDriverService.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:355)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.toExecutor(FirefoxDriver.java:190)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:147)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:125)\r\n\tat org.test.Baseclass.launchBrowser(Baseclass.java:34)\r\n\tat org.stepdefinition.icicbank.user_has_to_launch_the_chrome_browser_and_maximize_the_window(icicbank.java:17)\r\n\tat ✽.user has to launch the chrome browser and maximize the window(src/test/resources/icic.feature:14)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user has to  launch the url of the icic bank",
  "keyword": "When "
});
formatter.match({
  "location": "icicbank.user_has_to_launch_the_url_of_the_icic_bank()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user has to click for go to login page",
  "keyword": "And "
});
formatter.match({
  "location": "icicbank.user_has_to_click_for_go_to_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user has to  pass the data  \"rajesh@gmail.com\" in email field",
  "keyword": "And "
});
formatter.match({
  "location": "icicbank.user_has_to_pass_the_data_in_email_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user has to pass  data \"1224\" in password field",
  "keyword": "And "
});
formatter.match({
  "location": "icicbank.user_has_to_pass_data_in_password_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user has to click login button",
  "keyword": "And "
});
formatter.match({
  "location": "icicbank.user_has_to_click_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user has to close the   browser",
  "keyword": "Then "
});
formatter.match({
  "location": "icicbank.user_has_to_close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "To validate the postive and negative combination of login functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "user has to launch the chrome browser and maximize the window",
  "keyword": "Given "
});
formatter.match({
  "location": "icicbank.user_has_to_launch_the_chrome_browser_and_maximize_the_window()"
});
formatter.result({
  "error_message": "java.lang.IllegalStateException: The path to the driver executable must be set by the webdriver.gecko.driver system property; for more information, see https://github.com/mozilla/geckodriver. The latest version can be downloaded from https://github.com/mozilla/geckodriver/releases\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:847)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:134)\r\n\tat org.openqa.selenium.firefox.GeckoDriverService.access$100(GeckoDriverService.java:44)\r\n\tat org.openqa.selenium.firefox.GeckoDriverService$Builder.findDefaultExecutable(GeckoDriverService.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:355)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.toExecutor(FirefoxDriver.java:190)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:147)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:125)\r\n\tat org.test.Baseclass.launchBrowser(Baseclass.java:34)\r\n\tat org.stepdefinition.icicbank.user_has_to_launch_the_chrome_browser_and_maximize_the_window(icicbank.java:17)\r\n\tat ✽.user has to launch the chrome browser and maximize the window(src/test/resources/icic.feature:14)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user has to  launch the url of the icic bank",
  "keyword": "When "
});
formatter.match({
  "location": "icicbank.user_has_to_launch_the_url_of_the_icic_bank()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user has to click for go to login page",
  "keyword": "And "
});
formatter.match({
  "location": "icicbank.user_has_to_click_for_go_to_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user has to  pass the data  \"raj@gmail.com\" in email field",
  "keyword": "And "
});
formatter.match({
  "location": "icicbank.user_has_to_pass_the_data_in_email_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user has to pass  data \"4555\" in password field",
  "keyword": "And "
});
formatter.match({
  "location": "icicbank.user_has_to_pass_data_in_password_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user has to click login button",
  "keyword": "And "
});
formatter.match({
  "location": "icicbank.user_has_to_click_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user has to close the   browser",
  "keyword": "Then "
});
formatter.match({
  "location": "icicbank.user_has_to_close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "To validate the postive and negative combination of login functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "user has to launch the chrome browser and maximize the window",
  "keyword": "Given "
});
formatter.match({
  "location": "icicbank.user_has_to_launch_the_chrome_browser_and_maximize_the_window()"
});
formatter.result({
  "error_message": "java.lang.IllegalStateException: The path to the driver executable must be set by the webdriver.gecko.driver system property; for more information, see https://github.com/mozilla/geckodriver. The latest version can be downloaded from https://github.com/mozilla/geckodriver/releases\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:847)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:134)\r\n\tat org.openqa.selenium.firefox.GeckoDriverService.access$100(GeckoDriverService.java:44)\r\n\tat org.openqa.selenium.firefox.GeckoDriverService$Builder.findDefaultExecutable(GeckoDriverService.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:355)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.toExecutor(FirefoxDriver.java:190)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:147)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:125)\r\n\tat org.test.Baseclass.launchBrowser(Baseclass.java:34)\r\n\tat org.stepdefinition.icicbank.user_has_to_launch_the_chrome_browser_and_maximize_the_window(icicbank.java:17)\r\n\tat ✽.user has to launch the chrome browser and maximize the window(src/test/resources/icic.feature:14)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user has to  launch the url of the icic bank",
  "keyword": "When "
});
formatter.match({
  "location": "icicbank.user_has_to_launch_the_url_of_the_icic_bank()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user has to click for go to login page",
  "keyword": "And "
});
formatter.match({
  "location": "icicbank.user_has_to_click_for_go_to_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user has to  pass the data  \"abs@gmail.com\" in email field",
  "keyword": "And "
});
formatter.match({
  "location": "icicbank.user_has_to_pass_the_data_in_email_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user has to pass  data \"7788\" in password field",
  "keyword": "And "
});
formatter.match({
  "location": "icicbank.user_has_to_pass_data_in_password_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user has to click login button",
  "keyword": "And "
});
formatter.match({
  "location": "icicbank.user_has_to_click_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user has to close the   browser",
  "keyword": "Then "
});
formatter.match({
  "location": "icicbank.user_has_to_close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "To validate the postive and negative combination of login functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "user has to launch the chrome browser and maximize the window",
  "keyword": "Given "
});
formatter.match({
  "location": "icicbank.user_has_to_launch_the_chrome_browser_and_maximize_the_window()"
});
formatter.result({
  "error_message": "java.lang.IllegalStateException: The path to the driver executable must be set by the webdriver.gecko.driver system property; for more information, see https://github.com/mozilla/geckodriver. The latest version can be downloaded from https://github.com/mozilla/geckodriver/releases\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:847)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:134)\r\n\tat org.openqa.selenium.firefox.GeckoDriverService.access$100(GeckoDriverService.java:44)\r\n\tat org.openqa.selenium.firefox.GeckoDriverService$Builder.findDefaultExecutable(GeckoDriverService.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:355)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.toExecutor(FirefoxDriver.java:190)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:147)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:125)\r\n\tat org.test.Baseclass.launchBrowser(Baseclass.java:34)\r\n\tat org.stepdefinition.icicbank.user_has_to_launch_the_chrome_browser_and_maximize_the_window(icicbank.java:17)\r\n\tat ✽.user has to launch the chrome browser and maximize the window(src/test/resources/icic.feature:14)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user has to  launch the url of the icic bank",
  "keyword": "When "
});
formatter.match({
  "location": "icicbank.user_has_to_launch_the_url_of_the_icic_bank()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user has to click for go to login page",
  "keyword": "And "
});
formatter.match({
  "location": "icicbank.user_has_to_click_for_go_to_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user has to  pass the data  \"waran@gmail.com\" in email field",
  "keyword": "And "
});
formatter.match({
  "location": "icicbank.user_has_to_pass_the_data_in_email_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user has to pass  data \"8888\" in password field",
  "keyword": "And "
});
formatter.match({
  "location": "icicbank.user_has_to_pass_data_in_password_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user has to click login button",
  "keyword": "And "
});
formatter.match({
  "location": "icicbank.user_has_to_click_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user has to close the   browser",
  "keyword": "Then "
});
formatter.match({
  "location": "icicbank.user_has_to_close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});