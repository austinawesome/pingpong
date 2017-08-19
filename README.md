# _{Ping Pong}_
https://github.com/austinawesome/pingpong.git
#### _{MathMatical Ping-Pong game}, {8/19/2017}_

#### By _**{Austin Cummings}**_

## Description

_{This appplication will allow user to input a number and will evaluate that number in summation of the runing total of previous submissions. Once a total has been reached the program will evaluate whther the number is divisible by 15 3 or 5 and if so give a ping pong or ping-pong result if not it will simply output the total}_

## Setup/Installation Requirements

* _Clone This repository
* _open simple http server in top level of cloned directory
* _open with atom or similiar tool
* _open web Browser of choice to local host 8000
*_ change scripts to scripts-2 for a more interactive game.
_{please feel free to read https://help.github.com/articles/cloning-a-repository/ for further cloning directions }_

## Known Bugs

_{None known as of this time, program seems to accept n*10^23 or greater total}_

## Support and contact details

_{Feel free to update this as seen fit. Send emails to Anonymous@stealth.net}_

## Technologies Used

_{HTML, CSS, JS, regex bootstrap}_
## specifications
Program accepts user input of a number on only accepts numbers.
program accepts number and then calls function upon it;
-- If first time submitting number program handles empty variables and bypassess functional comparisons.
Program records userInput and stores it as a running total;
using running total system evaluates if number
is divisible by "5 or 3" if yes, evaluates if divisible by "15"
did the 5 or 3 as first part of loop to lower the amount of processing required.
assigned output values to results of 3,5,15 divisibility;
returns output to front end front evaluates if it should reveal pictures, and does so accordingly after reporting the "score" to the user.
basic game
{input = 16, output =1,2} (just score)
{output = "ping" and a img} (when total equals 3)
{output = "pong" and a img} (when total equals 5)
{output = "ping-pong" and a img} (total equals 15)

alternate game
{input = 1, output =1} (initial entry)
{input = 2, output = "ping" and a img} (total equals 3)
{input = 2, output = "pong" and a img} (total equals 5)
{input = 2, output = 7} (total equals 7)
{input = 8, output = "ping-pong" and a img} (total equals 15)
### License

*{Determine the license under which this application can be used.  See below for more details on licensing.}*

Copyright (c) 2016 **_{Austin Cummings}_**
