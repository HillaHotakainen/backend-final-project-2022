# 4A00EZ62 Backend-kehitys

## Backend Development - Final Project

## How to use

### installing and making local database

First create a local database on a database software (please use mySQL) of your choise with these commands:
```
CREATE TABLE expenses(
id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
date DATE NOT NULL,
amount DECIMAL(8,2) NOT NULL,
shop VARCHAR(50) NOT NULL,
category VARCHAR(50) NOT NULL
);

INSERT INTO expenses (`date`,`amount`,`shop`,`category`) VALUES ('2022-10-20',55.67,"Lidl","groceries");
INSERT INTO expenses (`date`,`amount`,`shop`,`category`) VALUES ('2022-10-25',23.12,"Mardin","eating out");
INSERT INTO expenses (`date`,`amount`,`shop`,`category`) VALUES ('2022-11-10',150.10,"Lidl","groceries");
INSERT INTO expenses (`date`,`amount`,`shop`,`category`) VALUES ('2022-11-15',63.23,"Hook","eating out");
INSERT INTO expenses (`date`,`amount`,`shop`,`category`) VALUES ('2022-12-20',75.87,"VR","traveling");
INSERT INTO expenses (`date`,`amount`,`shop`,`category`) VALUES ('2022-12-27',94.87,"VR","traveling");
```
Next download this folder and unzip it where you want.
Navigate into folder called app and run these commands:
```
npm install
node index.js
```

Lastly make a .env file inside the app folder, in it fill in the information from your database :
```
HOST='your localhost address'
DBUSERNAME='your username here'
PASSWORD='your database password here'
DATABASE='name of your database here'
PORT=5000
```
### Running program in localhost

Navigate to localhost.rest file. You can see all the aviable requests there and by pressing Send Request you can run them one by one.

### Running the program in server

This project is deployed in Render.com
You can find all aviable requests in file server.rest and also run them by pressing Send Request.

### Running the program by using swagger.io

This project includes swagger.yaml file.
You can run this project via swagger by navigation to address: https://editor.swagger.io/
There, click on a dropdown menu at top called 'File'.
Choose 'Import file' and find the swagger.yaml file from your computer.
You can now run all the requests by using the 'Try it out' button.

### Running tests

There are some example tests in the '__tests__' folder.
you can run them with command: 
```
npm run test
```
PLEASE NOTICE: tests might fail if database is modified


### Self evaluation
Here is my self evaluation according to the given requirements:
```
A. 20
B. 30
C. 15 (missing some tests)
D. 20
E. 15
F. 0 (no extras done)
```
