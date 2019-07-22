# FriendFinder
Friend Finder - Node and Express Servers Week 8
Author: Reginald D. Thorpe Sr. Bootcamp: George Washington University during the 8th week of coding BootCamp.
Date: July 24, 2019
Purpose:
Build a Node – Express Server app called "FriendFinder" (a dating application). 
This full-stack site shall take in results from a survey filled out online by the user and then, based on their answers and their combined score, the application will compare the user’s answers with those from other users. The app will then display the name and picture of the user with the best overall match. The actual pictures are not included in this application on purpose.

Technologies used: Node, Express, Heroku 

a.	Node handles the “Routing” 

b.	Heroku used to publish the website.

You can visit the site at

How it works:

1.)	The user is presented with a survey html page with 10 questions. 

2.)	Each answer should is scored on a scale from 1 to 5 based on how much the user agrees or disagrees with a question.

3.)	To determine the user's most compatible friend

a.	Each user's results are put into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 1]) and then their score is compared against 

other user scores to get the difference between current user's scores and from other users, question by question. 

b.	Then the difference is added up to calculate the totalDifference. For example:

-	User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
-	User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]

Total Difference: 2 + 1 + 2 = 5

4.)	The closest match will be the user with the least amount of difference.
5.)	A modal pop up box will notify the user of their match.
