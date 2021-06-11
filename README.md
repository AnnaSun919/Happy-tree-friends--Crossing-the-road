Project's name -- 
Happy Tree Friend - crossing the road 


Descriptio
-------------------------------
Happy Tree Friend - crossing the road/  is a game about cuddle(the character) is crossing the road , and u need to move cuddle vertically (up and down), from bottom to the top, to cross the road and avoid to be crashed by the car. when finish crossing the road , cuddle is safe and the game will pass to next level.  


MVP
------------------------------

- three level game 
1. in first level :

there is one road and one car on the road 
the car move from right to left 
when the car on the road is gone , another car will apear
cuddle is going to cross the road, it moves vertically up and down 
cuddle get crashed will end the game 
if cuddle finished crossing the road and he is in the safe area then pass to the next level

2. in second level :

two road and a few car on the road, 
the other settings are same as level 1 

3. in third level :

three road and a few more cars and a little bit faster 
the other settings are same as level 1 and level 2.
Just when cuddle finsihed this level, u win the game!



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
clearCanvas () {}
updateCanvas () {}
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

Additional Links
Trello


Slides
