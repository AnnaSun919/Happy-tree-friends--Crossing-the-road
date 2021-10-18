# Happy Tree Friend - crossing the road

## Description

A mini game consits of three levels.
The player can move Nutty(the character) by pressing the arrow keys.
In the first two levels, when nutty crossed the road safely without getting crashed by the car, the player will go to the next level.
In the third level, player also need to collect enough candies in order to win the game.

### MVP

- three levels game

1. The first level :

```
There is one road and one car
The car move from right to left
Nutty is going to cross the road
If Nutty get crashed will end the game
When Nutty finished crossing the road, the player will go to the next level
```

2. The second level :

```
Two roads and one car on each road
The other settings are same as level 1
```

3. The final:

```
Three road and one car on each road
Nutty has to collect enough candies.
The other settings are same as level 1 and level 2.
When Nutty collected enought candies and finished crossing, the player will win the game!
```

## Backlog

add music

## Data structure States y States Transitions

buildSplashScreen () {}
buildGameScreen () {}
buildGameOverScreen () {}

starLoop () {}  
checkCollisions () {}  
drawCanvas () {}  
GameOver () {}

car(){}  
checkScreenCollision () {}

cuddle()  
draw () {}  
move () {}  
checkScreenCollision () {}

candy()  
draw()  
move () {}  
checkScreenCollision () {}
