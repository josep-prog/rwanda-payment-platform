Hello, my name is Joseph Nishimwe , 

I'm going to walk through this project 

Github link : https://github.com/josep-prog/rwanda-payment-platform.git

author : Joseph Nishimwe

Description: 
-----------
	- aim of this project is to integrate payment system into website , where clients can order and pay for service directly from the website 

	- while this project use flutterwave api , as it allows MTN momo payment as well as airtel , which mean in case you want to pay {if you have money on mtn moblie oney} you can pay easily .

	- you can enter your number in provided space, and enter the amount you are going to pay , and emidiately get promppted on your phone to proceed the payment



- PART 1 :
  ------
	How it is going to impact the society and including myself

- PART 2:
  ------
        How files are structure regardless to their corresponding directories

- PART 3:
  -----
	how you can run it 
 
--------------------------------EXPLANATION-------------------------------------

PART 1 : 
	- it will allow customer/client , not to make unnecessary calls as they will have to only enter their number on provided space and imediately get prompted on their phone to proceed the payment 

	- it will be much more secure , as client will be able to see , whether payment is complete , which means flatterwave is payment to provide historical payment to both website owner and to the client 

	- it quick and secure 

PART 2 :
	- Below  is directory and files strucuture : 

		. public directory : This folder contains the public-facing files of the platform.
		. index.js: the main JavaScript file handling the application's logic.


PART 3 : 
	- To run this , make sure node is installed , if not 
		npm install

	- initial node 
		npm init -y

	- run index.js
		node index.js
 
	- This will direct you to the page where you can enter you phone number and amount .

FIRST STEP : ENTER YOU NUMBER AND AMOUNT YOU WANT TO PAY 

	![Alt text](https://github.com/josep-prog/rwanda-payment-platform/raw/main/asset/PAGE1.png)

SECOND STEP : CLICK ON PAY ... RWF
	
	![Alt text](https://github.com/josep-prog/rwanda-payment-platform/raw/main/asset/PAGE2.png)

THIRD STEP : ENTER NUMBER OTP NUMBER YOU'VE RECIEVED VIA SMS
	
	![Alt text](https://github.com/josep-prog/rwanda-payment-platform/raw/main/asset/PAGE3.png)

FOURTH STEP : THANK YOU FOR COMPLETING PAYMENT
	
	![Alt text](https://github.com/josep-prog/rwanda-payment-platform/raw/main/asset/PAGE4.png)





NOTE :   
	- this flutterwave , api used is under testing mode  
	
	- To activate "live mode" . you need to enter documents required to make sure that money paid is sent to desired destination of the website owner
	
	- Documents required are : 
	
		- RRA {Rwanda Revenue Authority} document
		- RDB {Rwanda Development Board} document
		- account owner National  ID
	- this is all to make sure that businnes is authorised to make sure that it is not running under the scammer issues

