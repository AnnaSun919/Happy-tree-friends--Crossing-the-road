Project's name -- 
Happy Tree Friend - crossing the road 


Description
-------------------------------
Happy Tree Friend - crossing the road is a game about Nutty(the character) is going to cross the road. You can move nutty vertically (up and down) and horizontally (right and left) to cross the road safely without getting crash by the cars. This game consists of three levels. in the first two levels, nutty only need to cross the road safely. when nutty finished crossing the road and go to the top , nutty is safe and the game will pass to next level.  In the third level, beside crossing the road, nutty also need to collect some candies. 


MVP
------------------------------

- three level game 
1. in first level :

there is one road and one car //
the car move from right to left //
when the car on the road is gone , another car will apear//
Nutty is going to cross the road, it moves vertically and horizontally //
Nutty get crashed will end the game //
if Nutty finished crossing the road then pass to the next level

2. in second level :

two road and one car on each road, //
the other settings are same as level 1// 

3. in third level :

three road and one car on each road 
nutty has to collect enough candies.
the other settings are same as level 1 and level 2.//
Just when Nutty finsihed this level, u win the game!//



Backlog
----------------------------

add sound and music (scream out loud when cuddle get crashed) peaceful song when cuddle is walking

Data structure
States y States Transitions
------------------------------------

buildSplashScreen () {}

buildGameScreen () {}

buildGameOverScreen () {}


Game.js 


starLoop () {}

checkCollisions () {}

drawCanvas () {}

GameOver () {}



car.js


draw()

move()

checkScreenCollision () {}


cuddle.js

draw () {}
move () {}
checkScreenCollision () {}


candy.js

draw()
move () {}
checkScreenCollision () {}


Additional Links
Trello


Slides
