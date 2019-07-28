#OnlineBanking

Java Project Spring Boot and Angular 6,7 
Description
1-UserFrontPage:
              -user if new user can signup or already user can login.
              -user have two accounts(primary account,savings account).
              -two accounts of user any transactions made in it recorded in each account .
              -user can make transactions such as :
                                             a-deposit.
                                             b-withdraw.
                                             c-transfer between accounts primary account and savings account.
                                             d-transfer to any person by aacount number. 
                                             e-add/edit recipient.
                                             f- profile have primary account number,savings account number and also 
                                               change username, first name ,last name and your password.
              -user can schedule an appointment to do any thing .                                 
 2-AdminFrontPage 
             -admin has only authority to login if any user try to login can not login because dont have  authority
             -admin can:
             a-activated user and deactivated 
             b- have all informations about users and thier accounts
             b-confirm appoointments
             
             
 How to import source code?

For angular , you will need to import the dependencies using => npm install. You will need to run "npm update" or "npm install" to get those dependencies. Internet connection is required and depending on your hardware, it might take several mins to import. After importing, you can run "ng serve --port 4200" to start the app. You can replace the port number and if you don't specify, the default port is 4200.

For Spring Framework, you need to have Spring plugins installed and then you can import the source code as maven. The IDE should recognize the source code. If you are using intellij, dependency will fix auto if you have internet access to device.
