$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("loginCustomer/depositCustomer.feature");
formatter.feature({
  "line": 1,
  "name": "Deposit",
  "description": "In order to user can log in, I want to see my profile so I can log in easily",
  "id": "deposit",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "User can deposit",
  "description": "",
  "id": "deposit;user-can-deposit",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I login successfully with account as \u003cname\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click on Deposit button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I type amount to be Deposited as \u003camount\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on the Deposit button to submit deposit",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I verify user deposit successfully with amount as \u003camount\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "deposit;user-can-deposit;",
  "rows": [
    {
      "cells": [
        "name",
        "amount"
      ],
      "line": 15,
      "id": "deposit;user-can-deposit;;1"
    },
    {
      "cells": [
        "Harry Potter",
        "2000"
      ],
      "line": 16,
      "id": "deposit;user-can-deposit;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Open website https://www.way2automation.com/angularjs-protractor/banking/#/login",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.way2automation.com/angularjs-protractor/banking/#/login",
      "offset": 13
    }
  ],
  "location": "CommonTest.user_already_on_home_page(String)"
});
formatter.result({
  "duration": 5008844000,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "User can deposit",
  "description": "",
  "id": "deposit;user-can-deposit;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I login successfully with account as Harry Potter",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click on Deposit button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I type amount to be Deposited as 2000",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on the Deposit button to submit deposit",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I verify user deposit successfully with amount as 2000",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Harry Potter",
      "offset": 37
    }
  ],
  "location": "DepositTest.loginSuccess(String)"
});
formatter.result({
  "duration": 20254324701,
  "status": "passed"
});
formatter.match({
  "location": "DepositTest.btnDeposit()"
});
formatter.result({
  "duration": 10254457600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2000",
      "offset": 33
    }
  ],
  "location": "DepositTest.inputDeposit(String)"
});
formatter.result({
  "duration": 7068863100,
  "status": "passed"
});
formatter.match({
  "location": "DepositTest.btnSubmitDeposit()"
});
formatter.result({
  "duration": 5241535600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2000",
      "offset": 50
    }
  ],
  "location": "DepositTest.depositSuccess(String)"
});
formatter.result({
  "duration": 14064661800,
  "status": "passed"
});
formatter.uri("loginCustomer/loginCustomer.feature");
formatter.feature({
  "line": 1,
  "name": "Customer login",
  "description": "In order to user can log in, I want to see my profile so I can log in easily",
  "id": "customer-login",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "User can login website",
  "description": "",
  "id": "customer-login;user-can-login-website",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I click on Login Customer button to login",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I choose account of user as \u003cname\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click button Login",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Verify information of user logged correctly with account as \u003cname\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "customer-login;user-can-login-website;",
  "rows": [
    {
      "cells": [
        "name"
      ],
      "line": 14,
      "id": "customer-login;user-can-login-website;;1"
    },
    {
      "cells": [
        "Harry Potter"
      ],
      "line": 15,
      "id": "customer-login;user-can-login-website;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Open website https://www.way2automation.com/angularjs-protractor/banking/#/login",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.way2automation.com/angularjs-protractor/banking/#/login",
      "offset": 13
    }
  ],
  "location": "CommonTest.user_already_on_home_page(String)"
});
formatter.result({
  "duration": 4927344100,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "User can login website",
  "description": "",
  "id": "customer-login;user-can-login-website;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I click on Login Customer button to login",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I choose account of user as Harry Potter",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click button Login",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Verify information of user logged correctly with account as Harry Potter",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.clickCustomerLogin()"
});
formatter.result({
  "duration": 5309268100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harry Potter",
      "offset": 28
    }
  ],
  "location": "LoginTest.chooseAccount(String)"
});
formatter.result({
  "duration": 6564644999,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.clickSubmit()"
});
formatter.result({
  "duration": 5276893300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harry Potter",
      "offset": 60
    }
  ],
  "location": "LoginTest.verifyInfoCorrect(String)"
});
formatter.result({
  "duration": 5042060300,
  "status": "passed"
});
formatter.uri("loginCustomer/transactionsCustomer.feature");
formatter.feature({
  "line": 1,
  "name": "Customer transactions",
  "description": "In order to user can log in, I want to see my profile so I can log in easily",
  "id": "customer-transactions",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "User can see transactions table",
  "description": "",
  "id": "customer-transactions;user-can-see-transactions-table",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I can login successfully with the account as \u003cname\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I deposited into account \u003cdeposit\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I deposited extra into account \u003cdeposit\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I withdrawal into account \u003cwithdrawal\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on Transactions button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I verify table is appeared and show deposit success as \u003cdeposit\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I click button Reset to delete all transactions",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I verify reset table successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I click button Back to back Account page",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I verify balance amount and reset successfully",
  "keyword": "And "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "customer-transactions;user-can-see-transactions-table;",
  "rows": [
    {
      "cells": [
        "name",
        "deposit",
        "withdrawal"
      ],
      "line": 20,
      "id": "customer-transactions;user-can-see-transactions-table;;1"
    },
    {
      "cells": [
        "Harry Potter",
        "3000",
        "2000"
      ],
      "line": 21,
      "id": "customer-transactions;user-can-see-transactions-table;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Open website https://www.way2automation.com/angularjs-protractor/banking/#/login",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.way2automation.com/angularjs-protractor/banking/#/login",
      "offset": 13
    }
  ],
  "location": "CommonTest.user_already_on_home_page(String)"
});
formatter.result({
  "duration": 4892152099,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "User can see transactions table",
  "description": "",
  "id": "customer-transactions;user-can-see-transactions-table;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I can login successfully with the account as Harry Potter",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I deposited into account 3000",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I deposited extra into account 3000",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I withdrawal into account 2000",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on Transactions button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I verify table is appeared and show deposit success as 3000",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I click button Reset to delete all transactions",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I verify reset table successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I click button Back to back Account page",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I verify balance amount and reset successfully",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Harry Potter",
      "offset": 45
    }
  ],
  "location": "TransactionsTest.loginCustomer(String)"
});
formatter.result({
  "duration": 20154026901,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3000",
      "offset": 25
    }
  ],
  "location": "TransactionsTest.deposit(String)"
});
formatter.result({
  "duration": 42711796199,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3000",
      "offset": 31
    }
  ],
  "location": "TransactionsTest.extraDeposit(String)"
});
formatter.result({
  "duration": 24434152300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2000",
      "offset": 26
    }
  ],
  "location": "TransactionsTest.setWithdrawal(String)"
});
formatter.result({
  "duration": 18569016900,
  "status": "passed"
});
formatter.match({
  "location": "TransactionsTest.clickBtnTransactions()"
});
formatter.result({
  "duration": 5735361800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3000",
      "offset": 55
    }
  ],
  "location": "TransactionsTest.checkTable(String)"
});
formatter.result({
  "duration": 10208909501,
  "status": "passed"
});
formatter.match({
  "location": "TransactionsTest.clickBtnReset()"
});
formatter.result({
  "duration": 5726354000,
  "status": "passed"
});
formatter.match({
  "location": "TransactionsTest.verifyTableAfterReset()"
});
formatter.result({
  "duration": 5058052400,
  "status": "passed"
});
formatter.match({
  "location": "TransactionsTest.setClickBtnBack()"
});
formatter.result({
  "duration": 5084378900,
  "status": "passed"
});
formatter.match({
  "location": "TransactionsTest.balance()"
});
formatter.result({
  "duration": 5027831699,
  "status": "passed"
});
formatter.uri("loginCustomer/withdrawalCustomer.feature");
formatter.feature({
  "line": 1,
  "name": "Customer Withdrawal Successfully",
  "description": "",
  "id": "customer-withdrawal-successfully",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Customer Withdrawal Successfully",
  "description": "",
  "id": "customer-withdrawal-successfully;customer-withdrawal-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I login successfully with the account as \u003cname\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I deposited into my account \u003cdeposit\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on Withdrawal button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I type amount to be Withdrawal as \u003cwithdrawal\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on the Withdrawal button to submit withdrawal",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I verify user withdrawal successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "customer-withdrawal-successfully;customer-withdrawal-successfully;",
  "rows": [
    {
      "cells": [
        "name",
        "deposit",
        "withdrawal"
      ],
      "line": 15,
      "id": "customer-withdrawal-successfully;customer-withdrawal-successfully;;1"
    },
    {
      "cells": [
        "Harry Potter",
        "3000",
        "1000"
      ],
      "line": 16,
      "id": "customer-withdrawal-successfully;customer-withdrawal-successfully;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Open website https://www.way2automation.com/angularjs-protractor/banking/#/login",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.way2automation.com/angularjs-protractor/banking/#/login",
      "offset": 13
    }
  ],
  "location": "CommonTest.user_already_on_home_page(String)"
});
formatter.result({
  "duration": 4812358200,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Customer Withdrawal Successfully",
  "description": "",
  "id": "customer-withdrawal-successfully;customer-withdrawal-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I login successfully with the account as Harry Potter",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I deposited into my account 3000",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on Withdrawal button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I type amount to be Withdrawal as 1000",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on the Withdrawal button to submit withdrawal",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I verify user withdrawal successfully",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Harry Potter",
      "offset": 41
    }
  ],
  "location": "WithdrawalTest.loginSuccess(String)"
});
formatter.result({
  "duration": 19162719000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3000",
      "offset": 28
    }
  ],
  "location": "WithdrawalTest.depositAmount(String)"
});
formatter.result({
  "duration": 36606317900,
  "status": "passed"
});
formatter.match({
  "location": "WithdrawalTest.btnWithdrawal()"
});
formatter.result({
  "duration": 5733391401,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1000",
      "offset": 34
    }
  ],
  "location": "WithdrawalTest.inputWithdrawal(String)"
});
formatter.result({
  "duration": 7070975401,
  "status": "passed"
});
formatter.match({
  "location": "WithdrawalTest.btnSubmitWithdrawal()"
});
formatter.result({
  "duration": 5724518700,
  "status": "passed"
});
formatter.match({
  "location": "WithdrawalTest.withdrawalSuccess()"
});
formatter.result({
  "duration": 5075792301,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 19,
  "name": "Customer Withdrawal Unsuccessfully",
  "description": "",
  "id": "customer-withdrawal-successfully;customer-withdrawal-unsuccessfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "I login successfully with the account as \u003cname\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I deposited into my account \u003cdeposit\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on Withdrawal button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I type amount to be Withdrawal as \u003cwithdrawal\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click on the Withdrawal button to submit withdrawal",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I verify user withdrawal unsuccessfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 27,
  "name": "",
  "description": "",
  "id": "customer-withdrawal-successfully;customer-withdrawal-unsuccessfully;",
  "rows": [
    {
      "cells": [
        "name",
        "deposit",
        "withdrawal"
      ],
      "line": 28,
      "id": "customer-withdrawal-successfully;customer-withdrawal-unsuccessfully;;1"
    },
    {
      "cells": [
        "Harry Potter",
        "1000",
        "3000"
      ],
      "line": 29,
      "id": "customer-withdrawal-successfully;customer-withdrawal-unsuccessfully;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Open website https://www.way2automation.com/angularjs-protractor/banking/#/login",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.way2automation.com/angularjs-protractor/banking/#/login",
      "offset": 13
    }
  ],
  "location": "CommonTest.user_already_on_home_page(String)"
});
formatter.result({
  "duration": 3046809100,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Customer Withdrawal Unsuccessfully",
  "description": "",
  "id": "customer-withdrawal-successfully;customer-withdrawal-unsuccessfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "I login successfully with the account as Harry Potter",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I deposited into my account 1000",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on Withdrawal button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I type amount to be Withdrawal as 3000",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click on the Withdrawal button to submit withdrawal",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I verify user withdrawal unsuccessfully",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Harry Potter",
      "offset": 41
    }
  ],
  "location": "WithdrawalTest.loginSuccess(String)"
});
formatter.result({
  "duration": 18729209800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1000",
      "offset": 28
    }
  ],
  "location": "WithdrawalTest.depositAmount(String)"
});
formatter.result({
  "duration": 37055389100,
  "status": "passed"
});
formatter.match({
  "location": "WithdrawalTest.btnWithdrawal()"
});
formatter.result({
  "duration": 5727627900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3000",
      "offset": 34
    }
  ],
  "location": "WithdrawalTest.inputWithdrawal(String)"
});
formatter.result({
  "duration": 7055256201,
  "status": "passed"
});
formatter.match({
  "location": "WithdrawalTest.btnSubmitWithdrawal()"
});
formatter.result({
  "duration": 5727911401,
  "status": "passed"
});
formatter.match({
  "location": "WithdrawalTest.withdrawalUnsuccessful()"
});
formatter.result({
  "duration": 5096006400,
  "status": "passed"
});
formatter.uri("managerCustomer/addCustomer.feature");
formatter.feature({
  "line": 2,
  "name": "Add customer",
  "description": "",
  "id": "add-customer",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Add customer successfully",
  "description": "",
  "id": "add-customer;add-customer-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I type first name as \u003cfirstname\u003e, last name as \u003clastname\u003e, post code as \u003cpostcode\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click submit",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I verify that system is already added customer as \u003cfullname\u003e successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "add-customer;add-customer-successfully;",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname",
        "postcode",
        "fullname"
      ],
      "line": 13,
      "id": "add-customer;add-customer-successfully;;1"
    },
    {
      "cells": [
        "ho",
        "thieu",
        "55000",
        "ho thieu"
      ],
      "line": 14,
      "id": "add-customer;add-customer-successfully;;2"
    },
    {
      "cells": [
        "hoang",
        "thuong",
        "55000",
        "hoang thuong"
      ],
      "line": 15,
      "id": "add-customer;add-customer-successfully;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Open website http://www.way2automation.com/angularjs-protractor/banking/#/manager/addCust",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.way2automation.com/angularjs-protractor/banking/#/manager/addCust",
      "offset": 13
    }
  ],
  "location": "CommonTest.user_already_on_home_page(String)"
});
formatter.result({
  "duration": 5368041299,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Add customer successfully",
  "description": "",
  "id": "add-customer;add-customer-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I type first name as ho, last name as thieu, post code as 55000",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click submit",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I verify that system is already added customer as ho thieu successfully",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "ho",
      "offset": 21
    },
    {
      "val": "thieu",
      "offset": 38
    },
    {
      "val": "55000",
      "offset": 58
    }
  ],
  "location": "AddCustomerTest.inputUserInformation(String,String,String)"
});
formatter.result({
  "duration": 6338100700,
  "status": "passed"
});
formatter.match({
  "location": "AddCustomerTest.clickSubmit()"
});
formatter.result({
  "duration": 108421399,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ho thieu",
      "offset": 50
    }
  ],
  "location": "AddCustomerTest.verifyCustomerAddSuccessfully(String)"
});
formatter.result({
  "duration": 28906866800,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Open website http://www.way2automation.com/angularjs-protractor/banking/#/manager/addCust",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.way2automation.com/angularjs-protractor/banking/#/manager/addCust",
      "offset": 13
    }
  ],
  "location": "CommonTest.user_already_on_home_page(String)"
});
formatter.result({
  "duration": 3034511201,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Add customer successfully",
  "description": "",
  "id": "add-customer;add-customer-successfully;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I type first name as hoang, last name as thuong, post code as 55000",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click submit",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I verify that system is already added customer as hoang thuong successfully",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "hoang",
      "offset": 21
    },
    {
      "val": "thuong",
      "offset": 41
    },
    {
      "val": "55000",
      "offset": 62
    }
  ],
  "location": "AddCustomerTest.inputUserInformation(String,String,String)"
});
formatter.result({
  "duration": 6142801200,
  "status": "passed"
});
formatter.match({
  "location": "AddCustomerTest.clickSubmit()"
});
formatter.result({
  "duration": 33700399,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "hoang thuong",
      "offset": 50
    }
  ],
  "location": "AddCustomerTest.verifyCustomerAddSuccessfully(String)"
});
formatter.result({
  "duration": 28796596300,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "Add Customer unsuccessfully",
  "description": "",
  "id": "add-customer;add-customer-unsuccessfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "I type first name as \u003cfirstname\u003e, last name as \u003clastname\u003e, post code as \u003cpostcode\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I click submit",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I verify that system is already added customer as \u003cfullname\u003e unsuccessfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "add-customer;add-customer-unsuccessfully;",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname",
        "postcode",
        "fullname"
      ],
      "line": 22,
      "id": "add-customer;add-customer-unsuccessfully;;1"
    },
    {
      "cells": [
        "hoang",
        "",
        "55000",
        "hoang"
      ],
      "line": 23,
      "id": "add-customer;add-customer-unsuccessfully;;2"
    },
    {
      "cells": [
        "",
        "thuong",
        "55000",
        "thuong"
      ],
      "line": 24,
      "id": "add-customer;add-customer-unsuccessfully;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Open website http://www.way2automation.com/angularjs-protractor/banking/#/manager/addCust",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.way2automation.com/angularjs-protractor/banking/#/manager/addCust",
      "offset": 13
    }
  ],
  "location": "CommonTest.user_already_on_home_page(String)"
});
formatter.result({
  "duration": 3033270099,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Add Customer unsuccessfully",
  "description": "",
  "id": "add-customer;add-customer-unsuccessfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "I type first name as hoang, last name as , post code as 55000",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I click submit",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I verify that system is already added customer as hoang unsuccessfully",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "hoang",
      "offset": 21
    },
    {
      "val": "",
      "offset": 41
    },
    {
      "val": "55000",
      "offset": 56
    }
  ],
  "location": "AddCustomerTest.inputUserInformation(String,String,String)"
});
formatter.result({
  "duration": 6130612600,
  "status": "passed"
});
formatter.match({
  "location": "AddCustomerTest.clickSubmit()"
});
formatter.result({
  "duration": 233581299,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "hoang",
      "offset": 50
    }
  ],
  "location": "AddCustomerTest.verifyCustomerAddUnSuccessfully(String)"
});
formatter.result({
  "duration": 20392627300,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Open website http://www.way2automation.com/angularjs-protractor/banking/#/manager/addCust",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.way2automation.com/angularjs-protractor/banking/#/manager/addCust",
      "offset": 13
    }
  ],
  "location": "CommonTest.user_already_on_home_page(String)"
});
formatter.result({
  "duration": 3063705300,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Add Customer unsuccessfully",
  "description": "",
  "id": "add-customer;add-customer-unsuccessfully;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "I type first name as , last name as thuong, post code as 55000",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I click submit",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I verify that system is already added customer as thuong unsuccessfully",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 21
    },
    {
      "val": "thuong",
      "offset": 36
    },
    {
      "val": "55000",
      "offset": 57
    }
  ],
  "location": "AddCustomerTest.inputUserInformation(String,String,String)"
});
formatter.result({
  "duration": 6204874100,
  "status": "passed"
});
formatter.match({
  "location": "AddCustomerTest.clickSubmit()"
});
formatter.result({
  "duration": 229434101,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "thuong",
      "offset": 50
    }
  ],
  "location": "AddCustomerTest.verifyCustomerAddUnSuccessfully(String)"
});
formatter.result({
  "duration": 20434051600,
  "status": "passed"
});
formatter.uri("managerCustomer/deleteCustomer.feature");
formatter.feature({
  "line": 1,
  "name": "Delete customer",
  "description": "",
  "id": "delete-customer",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Delete customer successfully",
  "description": "",
  "id": "delete-customer;delete-customer-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I click delete button with first name as \u003cfirstName\u003e, last name as \u003clastName\u003e, post code as \u003cpostCode\u003e and account number as \u003caccountNumber\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I verify customer delete successfully with first name as \u003cfirstName\u003e, last name as \u003clastName\u003e, post code as \u003cpostCode\u003e and account number as \u003caccountNumber\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "delete-customer;delete-customer-successfully;",
  "rows": [
    {
      "cells": [
        "firstName",
        "lastName",
        "postCode",
        "accountNumber"
      ],
      "line": 10,
      "id": "delete-customer;delete-customer-successfully;;1"
    },
    {
      "cells": [
        "Harry",
        "Potter",
        "E725JB",
        "1004"
      ],
      "line": 11,
      "id": "delete-customer;delete-customer-successfully;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 2,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "Open website https://www.way2automation.com/angularjs-protractor/banking/#/manager/list",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.way2automation.com/angularjs-protractor/banking/#/manager/list",
      "offset": 13
    }
  ],
  "location": "CommonTest.user_already_on_home_page(String)"
});
formatter.result({
  "duration": 4834144999,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Delete customer successfully",
  "description": "",
  "id": "delete-customer;delete-customer-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I click delete button with first name as Harry, last name as Potter, post code as E725JB and account number as 1004",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I verify customer delete successfully with first name as Harry, last name as Potter, post code as E725JB and account number as 1004",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Harry",
      "offset": 41
    },
    {
      "val": "Potter",
      "offset": 61
    },
    {
      "val": "E725JB",
      "offset": 82
    },
    {
      "val": "1004",
      "offset": 111
    }
  ],
  "location": "DeleteCustomer.clickDelete(String,String,String,String)"
});
formatter.result({
  "duration": 7405648300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harry",
      "offset": 57
    },
    {
      "val": "Potter",
      "offset": 77
    },
    {
      "val": "E725JB",
      "offset": 98
    },
    {
      "val": "1004",
      "offset": 127
    }
  ],
  "location": "DeleteCustomer.verifyDeleteSuccess(String,String,String,String)"
});
formatter.result({
  "duration": 5106896700,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 13,
  "name": "Delete customer unsuccessfully",
  "description": "",
  "id": "delete-customer;delete-customer-unsuccessfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "I click delete button with first name as \u003cfirstName\u003e, last name as \u003clastName\u003e, post code as \u003cpostCode\u003e and account number as \u003caccountNumber\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I verify customer delete unsuccessfully with first name as \u003cfirstName\u003e, last name as \u003clastName\u003e, post code as \u003cpostCode\u003e and account number as \u003caccountNumber\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "delete-customer;delete-customer-unsuccessfully;",
  "rows": [
    {
      "cells": [
        "firstName",
        "lastName",
        "postCode",
        "accountNumber"
      ],
      "line": 18,
      "id": "delete-customer;delete-customer-unsuccessfully;;1"
    },
    {
      "cells": [
        "Thuong",
        "Potter",
        "E725JB",
        "1004"
      ],
      "line": 19,
      "id": "delete-customer;delete-customer-unsuccessfully;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 2,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "Open website https://www.way2automation.com/angularjs-protractor/banking/#/manager/list",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.way2automation.com/angularjs-protractor/banking/#/manager/list",
      "offset": 13
    }
  ],
  "location": "CommonTest.user_already_on_home_page(String)"
});
formatter.result({
  "duration": 3023188300,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Delete customer unsuccessfully",
  "description": "",
  "id": "delete-customer;delete-customer-unsuccessfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "I click delete button with first name as Thuong, last name as Potter, post code as E725JB and account number as 1004",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I verify customer delete unsuccessfully with first name as Thuong, last name as Potter, post code as E725JB and account number as 1004",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Thuong",
      "offset": 41
    },
    {
      "val": "Potter",
      "offset": 62
    },
    {
      "val": "E725JB",
      "offset": 83
    },
    {
      "val": "1004",
      "offset": 112
    }
  ],
  "location": "DeleteCustomer.clickDelete(String,String,String,String)"
});
formatter.result({
  "duration": 7075532700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Thuong",
      "offset": 59
    },
    {
      "val": "Potter",
      "offset": 80
    },
    {
      "val": "E725JB",
      "offset": 101
    },
    {
      "val": "1004",
      "offset": 130
    }
  ],
  "location": "DeleteCustomer.verifyDeleteUnsuccessful(String,String,String,String)"
});
formatter.result({
  "duration": 5082556200,
  "status": "passed"
});
formatter.uri("managerCustomer/openCustomer.feature");
formatter.feature({
  "line": 1,
  "name": "Open Account",
  "description": "",
  "id": "open-account",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Open Account successfully",
  "description": "",
  "id": "open-account;open-account-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I choose account as \u003cfullname\u003e and currency as \u003ccurrency\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click process button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I verify that user is already opened with first name as \u003cfirstname\u003e and last name as \u003clastname\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "open-account;open-account-successfully;",
  "rows": [
    {
      "cells": [
        "fullname",
        "currency",
        "firstname",
        "lastname"
      ],
      "line": 12,
      "id": "open-account;open-account-successfully;;1"
    },
    {
      "cells": [
        "Albus Dumbledore",
        "Pound",
        "Albus",
        "Dumbledore"
      ],
      "line": 13,
      "id": "open-account;open-account-successfully;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Open website http://www.way2automation.com/angularjs-protractor/banking/#/manager/openAccount",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.way2automation.com/angularjs-protractor/banking/#/manager/openAccount",
      "offset": 13
    }
  ],
  "location": "CommonTest.user_already_on_home_page(String)"
});
formatter.result({
  "duration": 5689947799,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Open Account successfully",
  "description": "",
  "id": "open-account;open-account-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I choose account as Albus Dumbledore and currency as Pound",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click process button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I verify that user is already opened with first name as Albus and last name as Dumbledore",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Albus Dumbledore",
      "offset": 20
    },
    {
      "val": "Pound",
      "offset": 53
    }
  ],
  "location": "OpenAccountTest.openAccount(String,String)"
});
formatter.result({
  "duration": 16095394500,
  "status": "passed"
});
formatter.match({
  "location": "OpenAccountTest.click_process_button()"
});
formatter.result({
  "duration": 18067001200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Albus",
      "offset": 56
    },
    {
      "val": "Dumbledore",
      "offset": 79
    }
  ],
  "location": "OpenAccountTest.verifyOpenAccountSuccessfully(String,String)"
});
formatter.result({
  "duration": 25417866899,
  "status": "passed"
});
formatter.uri("managerCustomer/searchCustomer.feature");
formatter.feature({
  "line": 1,
  "name": "Search customer",
  "description": "",
  "id": "search-customer",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Search customer successfully",
  "description": "",
  "id": "search-customer;search-customer-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I click customer tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I type value as \u003ckeySearch\u003e on search box",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I verify search success with keyword as \u003ckeySearch\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "search-customer;search-customer-successfully;",
  "rows": [
    {
      "cells": [
        "keySearch"
      ],
      "line": 12,
      "id": "search-customer;search-customer-successfully;;1"
    },
    {
      "cells": [
        "v"
      ],
      "line": 13,
      "id": "search-customer;search-customer-successfully;;2"
    },
    {
      "cells": [
        "p"
      ],
      "line": 14,
      "id": "search-customer;search-customer-successfully;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Open website https://www.way2automation.com/angularjs-protractor/banking/#/manager",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.way2automation.com/angularjs-protractor/banking/#/manager",
      "offset": 13
    }
  ],
  "location": "CommonTest.user_already_on_home_page(String)"
});
formatter.result({
  "duration": 3427425401,
  "error_message": "org.openqa.selenium.WebDriverException: Failed to decode response from marionette\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027PNVD046\u0027, ip: \u0027192.168.2.157\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 77.0.1, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20200602222727, moz:geckodriverVersion: 0.26.0, moz:headless: false, moz:processID: 14788, moz:profile: C:\\Users\\admin\\AppData\\Loca..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 10.0, rotatable: false, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: bc42275c-cacf-48de-b9c9-9fc0e55a15fe\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:273)\r\n\tat tests.CommonTest.user_already_on_home_page(CommonTest.java:15)\r\n\tat ✽.Given Open website https://www.way2automation.com/angularjs-protractor/banking/#/manager(managerCustomer/searchCustomer.feature:4)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 13,
  "name": "Search customer successfully",
  "description": "",
  "id": "search-customer;search-customer-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I click customer tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I type value as v on search box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I verify search success with keyword as v",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SearchTest.clickCustomerTab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "v",
      "offset": 16
    }
  ],
  "location": "SearchTest.getKeySearch(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "v",
      "offset": 40
    }
  ],
  "location": "SearchTest.verify(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Open website https://www.way2automation.com/angularjs-protractor/banking/#/manager",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.way2automation.com/angularjs-protractor/banking/#/manager",
      "offset": 13
    }
  ],
  "location": "CommonTest.user_already_on_home_page(String)"
});
formatter.result({
  "duration": 3020295200,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Tried to run command without establishing a connection\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027PNVD046\u0027, ip: \u0027192.168.2.157\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 77.0.1, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20200602222727, moz:geckodriverVersion: 0.26.0, moz:headless: false, moz:processID: 14788, moz:profile: C:\\Users\\admin\\AppData\\Loca..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 10.0, rotatable: false, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: bc42275c-cacf-48de-b9c9-9fc0e55a15fe\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:273)\r\n\tat tests.CommonTest.user_already_on_home_page(CommonTest.java:15)\r\n\tat ✽.Given Open website https://www.way2automation.com/angularjs-protractor/banking/#/manager(managerCustomer/searchCustomer.feature:4)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 14,
  "name": "Search customer successfully",
  "description": "",
  "id": "search-customer;search-customer-successfully;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I click customer tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I type value as p on search box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I verify search success with keyword as p",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SearchTest.clickCustomerTab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "p",
      "offset": 16
    }
  ],
  "location": "SearchTest.getKeySearch(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "p",
      "offset": 40
    }
  ],
  "location": "SearchTest.verify(String)"
});
formatter.result({
  "status": "skipped"
});
});