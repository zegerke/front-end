    //just some variables
    let shpeed = 100;
    let increase = 2;
    let player;
    let changeDir = false;
    let canvas = document.getElementById('snekcanvas');
    let ctx = canvas.getContext("2d");
    let snake = [  {x: 150, y: 150},  {x: 140, y: 150},  {x: 130, y: 150},  {x: 120, y: 150},  {x: 110, y: 150},];
    let dx =  10;
    let dy = 0;
    color = "#7CFC00";
    let color2 ="white"
    //score
    let score = 0;
    let currentscore;
    let playername;
    let highscore = 0 ;
    document.getElementById('score').innerHTML = score;
    document.getElementById('highscore').innerHTML = highscore;
    //make snake and apple appear on load
    window.onload = function(){
        drawSnake();
        createFood();
        drawFood();
    }    
    //some eventlisteners
    document.getElementById("start").addEventListener("click", main);
    document.addEventListener("keydown", changeDirection);
    //difficulty
    document.getElementById("easy").addEventListener("click",easy);
    function easy(){
        shpeed = 150;
        increase = 1;
    }
    document.getElementById("normal").addEventListener("click",normal);
    function normal(){
        shpeed = 100;
        increase = 2;
    }
    document.getElementById("hard").addEventListener("click",hard);
    function hard(){
        shpeed = 60;
        increase = 3;
    }
    //music
    let musicbut = document.getElementById('music');
    let musicon = false;
    musicbut.onclick = togglemusic;

    function togglemusic(){
     if (musicon == true) {
      musicon = false;
      document.getElementById('themeSong').pause();
     }
     else {
     musicon = true;
     document.getElementById('themeSong').play();
     }
    };
    //color of the snake
    document.getElementById("colors").addEventListener('input',Color)
    
    function Color(){
       color = document.getElementById('colors').value;
       drawSnake();
       console.log(color);
               
    }
    //bg color
    document.getElementById("colors2").addEventListener('input',Color2)
    
    function Color2(){
       color2 = document.getElementById('colors2').value;
       clearCanvas();
       drawSnake();
       drawFood();
       console.log(color2);
               
    }
    //makes snake appear
    function drawSnakePart(snakePart) {
        let grd = ctx.createLinearGradient(snake[0].x,snake[0].y,snake[snake.length-1].x,snake[snake.length-1].y);
        grd.addColorStop(0, color);
        grd.addColorStop(1, color +"4D");
        ctx.fillStyle = grd;
        ctx.strokeStyle = "grey";
        ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
        ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
    }

    function drawSnake() {
        snake.forEach(drawSnakePart);
    }
    //determines snake position and if he ate or reaches a wall
    function advanceSnake() {  
        const head = {x: snake[0].x + dx, y: snake[0].y + dy};
        snake.unshift(head);
        const didEatFood = snake[0].x === foodX && snake[0].y === foodY;
        if (didEatFood) {
            score += 10;
            shpeed -= increase
            document.getElementById('score').innerHTML = score;
            createFood();
            document.getElementById("eatsound").play();
        }
        else {
            snake.pop();
            
        }
        snake.forEach(element => {
             if (element.x > 290) {
             element.x = 0;
             }
            });
        snake.forEach(element => {
             if (element.x < 0) {
             element.x = 290;
             }
            });
        snake.forEach(element => {
             if (element.y > 290) {
             element.y = 0;
             }
            });
        snake.forEach(element => {
             if (element.y < 0) {
             element.y = 290;
             }
            });
    }
        
    //clears canvas
    function clearCanvas() {
        ctx.fillStyle = color2;
        ctx.strokeStyle = "black";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.strokeRect(0, 0, canvas.width, canvas.height);
    }
    //makes snake move forward on a set interval
    

    
    function main() {
        document.getElementById("colors").removeEventListener('input',Color)
        document.getElementById("colors2").removeEventListener('input',Color2)
        document.getElementById("start").removeEventListener("click", main);
        document.getElementById("easy").removeEventListener("click",easy);
        document.getElementById("normal").removeEventListener("click",normal);
        document.getElementById("hard").removeEventListener("click",hard);
        if (didGameEnd()) {
            alert("Game 0ver!");
            currentscore = score
            playername = document.getElementById('playername').value;
            if (currentscore > highscore) {
                highscore = currentscore;
                if (playername == "") {
                    document.getElementById('highscore').innerHTML = "Anonymous, " + highscore;   
                }
                else{
                    document.getElementById('highscore').innerHTML = playername+", " + highscore;                    
                }
            }
            
            let bestscores = JSON.parse(localStorage.getItem("bestscores"));
            console.log(bestscores);
            
            if ((bestscores == 'undefined') || (bestscores == null)) {
                bestscores = [];
                localStorage.setItem("bestscores",JSON.stringify(bestscores));
                console.log("ja");
                
            };
            if (playername == "") {
                 player = {
                    name : "Anonymous",
                    playerscore: currentscore,
                }
                bestscores = JSON.parse(localStorage.getItem("bestscores"));
                bestscores.push(player);
                localStorage.setItem("bestscores",JSON.stringify(bestscores));
                
            }   
            else{
                 player = {
                    name : playername,
                    playerscore: currentscore,
                }
                bestscores = JSON.parse(localStorage.getItem("bestscores"));
                bestscores.push(player);
                localStorage.setItem("bestscores",JSON.stringify(bestscores));
            }
            if (JSON.parse(localStorage.getItem("bestscores")).length >2) {
                bestscores = JSON.parse(localStorage.getItem("bestscores"));
                bestscores.sort(function (x,y){
                    return y.playerscore - x.playerscore;
                })
                localStorage.setItem("bestscores",JSON.stringify(bestscores));
                document.getElementById("first").innerHTML =JSON.parse(localStorage.getItem("bestscores"))[0].name +", " + JSON.parse(localStorage.getItem("bestscores"))[0].playerscore;
                document.getElementById("second").innerHTML =JSON.parse(localStorage.getItem("bestscores"))[1].name +", " + JSON.parse(localStorage.getItem("bestscores"))[1].playerscore;
                document.getElementById("third").innerHTML =JSON.parse(localStorage.getItem("bestscores"))[2].name +", " + JSON.parse(localStorage.getItem("bestscores"))[2].playerscore;
                
            }      
            reset();
            return;
        }
      setTimeout(function onTick() {
        changeDir = false;
        clearCanvas();
        drawFood();
        advanceSnake();    
        drawSnake();
        main();
      }, shpeed)
    }
    //arrow keys functionality
    function changeDirection(event) {
      const LEFT_KEY = 37;
      const RIGHT_KEY = 39;
      const UP_KEY = 38;
      const DOWN_KEY = 40;
      const keyPressed = event.keyCode;
      const goingUp = dy === -10;
      const goingDown = dy === 10;
      const goingRight = dx === 10;
      const goingLeft = dx === -10;
      if (changeDir) {
          return;  
      }
      if (keyPressed === LEFT_KEY && !goingRight) {
            dx = -10;    dy = 0;
            changeDir = true;  
        }
      if (keyPressed === UP_KEY && !goingDown) {
            dx = 0;    dy = -10;
            changeDir = true;  
        }
      if (keyPressed === RIGHT_KEY && !goingLeft) {
            dx = 10;    dy = 0;
            changeDir = true;  
        }
      if (keyPressed === DOWN_KEY && !goingUp) {
            dx = 0;    dy = 10;
            changeDir = true;  
        }
    }
    //determines food position
    function randomTen(min, max) {
        return Math.round((Math.random() * (max-min) + min) / 10) * 10;
    }
    function createFood() {
      foodX = randomTen(0, canvas.width - 10);
      foodY = randomTen(0, canvas.height - 10);
      snake.forEach(function isFoodOnSnake(part) {
        const foodIsOnSnake = part.x == foodX && part.y == foodY;    
        if (foodIsOnSnake){
          createFood();  
        }
      }) 
    }
    //makes food appear
    function drawFood() {         
        ctx.fillStyle = 'red';
        ctx.strokestyle = 'darkred';
        ctx.fillRect(foodX, foodY, 10, 10);
        ctx.strokeRect(foodX, foodY, 10, 10);
    }   
    //makes game stop if it eats itself
    function didGameEnd() {
        for (let i = 4; i < snake.length; i++) {
            const didCollide = snake[i].x === snake[0].x && snake[i].y === snake[0].y;
            if (didCollide){
             return true;  
            }
        }
    }
    //resets playing field
    function reset(){
        snake = [  {x: 150, y: 150},  {x: 140, y: 150},  {x: 130, y: 150},  {x: 120, y: 150},  {x: 110, y: 150},];
        dx = 10;
        dy = 0
        shpeed = 100
        clearCanvas();
        drawSnake();
        createFood();
        drawFood();
        score = 0;
        document.getElementById('score').innerHTML = score;
        document.getElementById("colors").addEventListener('input',Color);
        document.getElementById("colors2").addEventListener('input',Color2)
        document.getElementById("start").addEventListener("click", main);
        document.getElementById("easy").addEventListener("click",easy);
        document.getElementById("normal").addEventListener("click",normal);
        document.getElementById("hard").addEventListener("click",hard);
    }        