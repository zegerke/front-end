# Challenge: Console - RPG
|Challenge Parameters  |Challenge Details              |
|:---------------------|:------------------------------|
|Repository            |`8.console-rpg`                |
|Challenge type        |`Spooky learning challenge`    |
|Duration              |`1 mortal day`                 |
|Deadline              |`31st on witching hour...`     |
|Deployment method     |`Dracula's pages`              |
|Group composition     |`Like a sad single mummy`      |

## Welcome mortals
After all your hard work, I think its time to do something fun!  
Since it is almost Halloween, let's stick with that theme.

We are going to create a small console game.
Nothing toooo "BIG", just think straight and you will do just fine...  
As you can see there is a small template that you **have** to use.
In there you will find our friend **Sans**.

Sans will be your training dummy, you will have to create a system in which you can fight the poor soul.


## Exercise

ONLY use methods inside the objects to make the game functional.. You have to call these methods inside the console.log. Basically everything has to happen inside the console.

Create 2 objects which has the following properties:
- Race
- Type
- Moves
- Health

And ofcourse, all the methods...

### Stats


| NAME | RACE               | TYPE                   | MOVES                                                         | HEALTH                                           |
|------|--------------------|------------------------|---------------------------------------------------------------|--------------------------------------------------|
|YOU   |HUMAN...?           | YOUR CURRENT FEELING   |                          ----------                           |100                                               |
|SANS  |MONSTER             | SKELETON               |HEAL & ATTACK                                                  |1000                                              |

**NOTE:** None of these challenges are in order. You have to create a small step by step plan to execute this exercise.

**Challenge 1:**

Disable the song by making the `music:on` functional.  

**Challenge 2:**  

Everyone has one turn at a time. Who starts is up to you.

**Challenge 3:**

Both objects can heal, the player can heal between 8-20 HP, Sans between 40-80 HP;

**Challenge 4**

Both objects can attack, the player deals between 20-120 damage and sans 10-15 damage.

**Challenge 5**

Both objects have a critical strike chance of 1/4. (Doubles the damage).

**Challenge 666**

After each move by the player, Sans should say a pun, do this by calling the `randomPun(puns)` function.

**Challenge 7**

After each move by the player, Sans should make a move, but give him a tiny delay, he should not make a move directly.
His moves are randomly selected, he either heals or attacks.

**Challenge 8**

After each move display the important stats that we need to be aware of. If the player heals, show how much he/she healed and at what hp level the player is.

**Challenge 9**

The health info of the player should have a red color, Sans his health should be blue.

**Challenge 10**

When the player heals over 100 hp, make sans do the `randomPun(overHealReaction)` function.

**Challenge 11**

When someone drops below 1 health, the game should end.


**Challenge 12**

Make a function restart, that only works if the game has ended.

**Challenge 13**

Each move should have a sound effect. The provided effects are in the to folder `resources/sound`.


## Bonus

It does not end here! Make the game even better until the deadline is reached! Have fun!


## Goals

- [ ] Understand how to use objects.
- [ ] Avoid spaghetti code.
- [ ] Understand DOM manipulation.
- [ ] Have a deeper understanding of the console.
- [ ] Had fun!
 
![Sans](resources/readme/sleepy_sans.png)
