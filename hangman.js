
window.addEventListener("load",()=>{

    class gameState{
      constructor (){
         this.wrongGuess =0;
         this.rightGuess=0;
         this.question_counter = 0;
         this.difficulty=1;
         this.coopMode = false;
         this.level;
         this.questions;
         this.answers;
         this.missing;
         this.completeMode= false;
         this.music = false;
        
      }
    }
    var game = new gameState();
  
    class player{
      constructor (name){
        this.name = name;
        this.mistakes= 0;
        this.rights =0;
        this.score=0;
        this.won=0;
        this.lost=0;
        this.active= false;
            
      }

    }
    var background =document.createElement("audio");
    background.src="sound/background.mp3";
    background.loop=true;
  var player1 = new player("player 1");
  var player2 = new player("player 2");
  player1.active=true;
  var questions;
  var answers;
  
  function setQuestions(){
    switch (game.level) {
            
      case "Spain":
        questions =["What's the capital of Spain ?",
        "From which city does the Paella originate?",
        "Which Spanish painter dedicated himself to the Surrealist trend?",
        "What's the second largest city in Spain ?",
        "What's the largest spanish island ?",
        "Which is the national animal of Spain?",
        "What currency was used in Spain before the euro?",
        "What's the name of the spanish king ?",
        "Which is the largest spanish church ?",
        "Where was the capital of Spain before Madrid ?",
        "What is the main religion in Spain ?",
        "Which liquid does Spain produce the most in the world of ?",
        "Which popular musical instrument originated in Spain ?",
        "Which traditional Spanish dance originated in Andalusia ?",
        "Which tiny country is located between Spain and France ?",
        "Which spice produced in Spain is worth more than its weight in gold?",
        "What strait separates Spain from Africa?",
        "Who was the dictator who ruled Spain for 40 years?"

        ];
        answers=["MADRID","VALENCIA","PICASO","BARCELONA","MALLORCA","BULL","PESETA","FELIPE VI","SAGRADA FAMILIA","TOLEDO","CATHOLICISM","OLIVE OIL","GUITAR","FLAMENCO","ANDORRA","SAFFRON","GIBRALTAR","FRANCISCO FRANCO"];
        break;
      case "Mexico":
        questions=["What's the capital of Mexico ?",
        "What is the national animal of Mexico ? ",
        "What is Mexico's currency ?",
        "What is the most common surname in Mexico ?",
        "who was the father of the mexican independence ?",
        "Which color of the mexican flag represents independence ?",
        "What's the longest river in Mexico ?",
        "Which 2 countries limit Mexico from the south ?",
        "What is the National dish of Mexico ?",
        "What is Mexico’s national flower?",
        "What is the national drink in Mexico?",
        "What's Mexico's national football team called ?",
        "What common household invention was created in Mexico?",
        "Which Mexican state has the same name as a small breed of dog ?",
        "Who was the most famous mexican artist ?",
        "What was Mexico’s first known society?"
        ];
        answers=["MEXICO","GOLDEN EAGLE","PESO","HERNANDEZ","MIGUEL HIDALGO","GREEN","RIO GRANDE","GUATEMALA   BELIZE","MOLE SAUCE","DAHLIA","TEQUILA","EL TRICOLOR","COLOR TV","CHIHUAHUA","FRIDA KAHLO","THE OLMECS"]
        break;
      case "Egypt":
        questions=["What's the capital of Egypt ?",
        "What is the oldest known monumental sculpture in Egypt?",
        "which is the longest river running through Egypt ?",
        "Which is the largest dam in Egypt ?",
        "Which egyptian city was founded by Alexander the Great ?",
        "Which is the oldest egyptian university ?",
        "On which moutain in Egypt did Moses receive the ten commandments ?",
        "What is the unesco natural world heritage site in Egypt ?",
        "Which color of the Egyptian flag represents the dark period of occupation ?",
        "What's Egypt's national dish ?",
        "Which city was the capital of Egypt during the middle and new kingdoms ?",
        "Which country limits Egypt from the West ?",
        "What's the main religion in Egypt ?"

      ];
        answers=["CAIRO","THE SPHINX","THE NILE","ASWAN","ALEXANDRIA","AL AZHAR","MOUNT SINAI","WHALE VALLEY","BLACK","KOCHARI","THEBES","LIBYA","ISLAM"];
        break;
      case "Greece":
        questions=["What's the capital of Greece ?",
        "Which is the national animal of Greece ?",
        "Which branch of Christianity is traditionally followed in Greece?",
        "Which is the tallest mountain in Greece?",
        "Which curency was used in Greece prior to the Euro?",
        "Which is the largest island in Greece?",
        "Who was the enemy of Athens in the Peloponnesian War?",
        "Which poet wrote “Odyssey”?",
        "Which Greek Philosopher was the founder of Lyceum?",
        "In honour of which god were the ancient Olympic Games held?",
        "What is the most visited landmark in Greece?",
        "On which Greek island would you find the Acropolis of Lindos?"
      ];
        answers=["ATHENS","DOLPHIN","ORTHODOX","SMOLIKAS","DRACHMA","CRETE","SPARTA","HOMER","ARISTOTLE","ZEUS","THE ACROPOLIS","RHODES"]
        break;
      case "South korea":
        questions=["What's the capital of South korea ?",
        "What is the name of the traditional Korean costume ?",
        "What's South korea's National dish ?",
        "What is South korea's martial art ?",
        "What is the second most populous city in South Korea ?",
        "What is South Korea's currency ?",
        "What is the name of the Korean alphabet ?",
        "What's the most famous korean company ?",
        "What is the name of the tallest mountain in Korea ?",
        "What is the name of the largest Korean island ?",
        "What is the most common surname in Korea ?",
        "What is the tallest building in Korea ?",
        "Which sea borders South Korea to the west ?"
      ];
        answers=["SEOUL","HANBOK","KIMCHI","TAEKWONDO","BUSAN","WON","HANGUL","SAMSUNG","HALLASAN","JEJU","KIM", "LOTTE WORLD TOWER","YELLOW SEA"]
        break;
      case "India":
        questions=["What's the capital of India ?",
        "Whats the national animal of India ?",
        " Which indian monument was constructed as a tomb for a Mughal emperor's wife ?",
        "What was founded by Siddharta Gautama ?",
        "Who's considered as the father of the Indian nation ?",
        "Which animal is considered sacred in India ?",
        "Which precious stone was first mined in India ?",
        "What's the popular Hindu festival of colors called ?",
        "Located in India , what's the tallest statue in the world called ?",
        "What everyday condiment was first refined in India ?",
        "Which Indian civilazation first developed a standardized system of weight managment ?",
        "During which empire did India live its Golden Age ?",
        "Which religious belief does the famous Golden Temple serve ?",
        "What is the mark Indian woman put on their forhead to indicate they are married called ?"
      ];
        answers=["NEW DELHI","BENGAL TIGER","TAJ MAHAL","BUDDHISM","MUHATMA GHANDHI","COW","DIAMOND","HOLI","STATUE OF UNITY","SUGAR","INDUS VALLEY","GUPTA EMPIRE","SIKHISM","BINDI"]
        break;
        
        
            
        
    
      default:
        break;
    }
  }  
  function generateAnswers(array){
   setQuestions();
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < questions.length; j++) {
        if (array[i]==questions[j])
        game.answers[i]=answers[j];
        
      }
    }

  }
  function compeleteWord(time){
    const unique = (value, index, self) => {
      return self.indexOf(value) === index
    }
    let count =0;
    game.completeMode = true ;
    game.missing = game.missing.filter(unique);
    let n= game.missing.length;

    while (game.missing.length > 0) {
      let el = game.missing.shift();
      setTimeout(()=>right(el),time*count/n);
      count++;
    }
   
   
  }
  
    createMenu();
    
   
    ///////////////////////// question creation /////////
    function questGen(string){
      let n=string.length;
      let l=n.toString();
      document.documentElement.style.setProperty("--number_text_steps",l);
      n=n+10;
      l =n.toString()+"ch";
      document.documentElement.style.setProperty("--width_text_steps",l)

      let container =  document.querySelector("header");
      let div = document.createElement("div");
      div.classList.add("question");
      div.innerText = string ;
      container.appendChild(div);
    }
    ////////////////////////////////////////////deleting nodelist ///////////////////////////////////////////////
    function deleteNodes(nodeList){
      nodeList.forEach(item=>{
        item.remove();
      })
    }
    //////////////////////////////////////////// shuffle array to randomize//////////////////////////////////////////////////////////
    function shuffle(array) {
      array.sort(() => Math.random() - 0.5);
    }
    /////////////////////////////////////adding letters//////////////////////////////////////////////////
    function createLetters(){
      let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
      for (let i = 0; i < 26; i++) {
        let div = document.createElement("div");
        div.classList.add("letter");
        div.innerText= alphabet[i];
        document.querySelector(".letters").appendChild(div);
        
      }
    }
    //////////////////////////////////////////////////////////////////////////////////////////////////////
    
    //////////////////creating dashes based on number of characters of string////////////////////////////
    function dashGen(word){
        let wordToGuess = document.querySelector(".wordToGuess");
        for (let i = 0; i < word.length; i++) {
            
            let div = document.createElement("div");
            div.classList.add("guess");
            if (word[i]==" "){
              div.style.border="none";
            }
            wordToGuess.appendChild(div);

            
        }
        
    }
    /////////////////////////////////////////////////////////////////////////////////////////////////////
    //clear function
    function clear(){
      document.getElementById('canvas').getContext('2d').clearRect(0,0,canvas.width,canvas.height);
    }
    
    ////////////////////////////// drawing functions //////////////////////////////////
    function drawPole1(time){
      
        for (let i = 1; i <= 60; i++) {
            setTimeout(()=>{
              document.getElementById('canvas').getContext('2d').fillRect(100,200-150,10,500*i/60);
                },time/60*i);
            }
    }
    function drawPole2(time){
        for (let i = 1; i <= 60; i++) {
            setTimeout(()=>{
                document.getElementById('canvas').getContext('2d').fillRect(100,200-150,300*i/60,10);  
                },time/60*i);
        } 
    }
    function drawNoose(time){
        for (let i = 1; i <= 60; i++) {
            setTimeout(()=>{
                document.getElementById('canvas').getContext('2d').fillRect(350,200-150,5,100*i/60);   
                },time/60*i);
        }
    }
    function drawHead(time){
        for (let i = 1; i <= 60; i++) {
            setTimeout(()=>{
                document.getElementById('canvas').getContext('2d').beginPath();
                document.getElementById('canvas').getContext('2d').arc(353,325-150,25,0,Math.PI *2*i/60, false);
                document.getElementById('canvas').getContext('2d').lineWidth = 5;
                document.getElementById('canvas').getContext('2d').stroke();
                },time/60*i);
        }        
    }
    function drawTrunc(time){
        for (let i = 0; i < 60; i++) {
            setTimeout(()=>{
                document.getElementById('canvas').getContext('2d').fillRect(350,350-150,10,125/60*i);
                },time/60*i);
        }
    }
    function drawArm1(time){
        for (let i = 0; i < 60; i++) {
            setTimeout(()=>{
                document.getElementById('canvas').getContext('2d').moveTo(355,375-150);
                document.getElementById('canvas').getContext('2d').lineTo(355+i*45/60,375-150+i*100/60);
                document.getElementById('canvas').getContext('2d').stroke();
                },time/60*i);
        }
    }
    function drawArm2(time){
        for (let i = 0; i < 60; i++) {
            setTimeout(()=>{
                document.getElementById('canvas').getContext('2d').moveTo(355,375-150);
                document.getElementById('canvas').getContext('2d').lineTo(355-i*45/60,375-150+i*100/60);
                document.getElementById('canvas').getContext('2d').stroke();
                },time/60*i);
        }
    }
    function drawLeg2(time){
        for (let i = 0; i < 60; i++) {
            setTimeout(()=>{
                document.getElementById('canvas').getContext('2d').moveTo(355,450-150);
                document.getElementById('canvas').getContext('2d').lineTo(355+i*45/60,455-150+i*125/60);
                document.getElementById('canvas').getContext('2d').stroke();
                },time/60*i);
            }
        }
    function drawLeg1(time){
            for (let i = 0; i < 60; i++) {
                setTimeout(()=>{
                    document.getElementById('canvas').getContext('2d').moveTo(355,450-150);
                    document.getElementById('canvas').getContext('2d').lineTo(355-i*45/60,455-150+i*125/60);
                    document.getElementById('canvas').getContext('2d').stroke();
                    },time/60*i);
            }
        }
    //////////////////////////////////////////////////////////////////////////////////////////////
     function wrong(){
      document.getElementById("canvas").getContext('2d').fillStyle="black";
      let audio =document.createElement("audio");
      audio.src="sound/pen.wav";
    game.wrongGuess+=1;
    switch (game.wrongGuess) {
        case 1:
            drawPole1(1000);
          
            break;
        case 2:
            drawPole2(1000);
            break;
        case 3:
            drawNoose(1000);
            break;
        case 4:
            drawHead(1000);
            break;
        case 5:
            drawTrunc(1000);
            break;
        case 6:
            drawArm1(1000);
            break;
        case 7:
            drawArm2(1000);
            break;
        case 8:
            drawLeg1(1000);
            break;
        case 9:
            drawLeg2(1000);
            compeleteWord(1500);
            setTimeout(GameLost,2500);
            break;

    }
    audio.volume=0.5;
    if (game.music)
    audio.play();
   }
   
   
   //right guess
   function right(char){
     let counter = 0;
     let audio =document.createElement("audio");
     audio.src="sound/coin.wav";
    
    let toGuess= document.querySelectorAll(".guess");
    for (let i = 0; i < toGuess.length; i++) {
        if (char.toUpperCase()===game.answers[game.question_counter].split("")[i]) {
            if (!(game.completeMode)){
              let index = game.missing.indexOf(char);
              game.missing.splice(index,1);
              if (game.music)
              audio.play();
            }
          
            let spaces = game.answers[game.question_counter].split(" ").length -1 ;
            let letter_cont = document.createElement("div");
            letter_cont.classList.add("letter-container");
            letter_cont.innerText=char.toUpperCase();
            setTimeout(()=>{
              toGuess[i].appendChild(letter_cont);
            },150*counter);
            counter+=1;

            // toGuess[i].innerText= char.toUpperCase();
            game.rightGuess+=1;
          
            if (game.rightGuess==game.answers[game.question_counter].length -spaces) {
               setTimeout(correct,500);
            }
            
        } 
    }
   }
   //input 
   function input(node,string){
    node.style.display="none";
    if (!(node.classList.contains("clicked")))/*so once a button is clicked it wont draw again*/{
        if (string.includes(node.innerText))
        right(node.innerText);
        else{
         for (let i = 0; i < game.difficulty; i++) {
           setTimeout(wrong,i*1000/game.difficulty);
           
         }
        }
        
        node.classList.add("clicked");
    }
        
       
   }
   //reset
   function reset(){
    game.wrongGuess=0;
    game.rightGuess=0;
    document.querySelector(".modal").remove();
    let modal = document.createElement("div");
    modal.classList.add("modal");
    document.body.prepend(modal);
   }

    //GameLost
    function GameLost(){
        reset();
        createModal()
      document.querySelector(".modal-container").style.background="url('images/dead.png')";
      document.querySelector(".modal-container").style.backgroundRepeat="no-repeat";
      document.querySelector(".modal-container").style.backgroundColor="white";
      game.question_counter=0;

        document.querySelector(".modal-btn").addEventListener("click",()=>{
            let modal = document.querySelector(".modal");
          modal.style.display="none";
          document.querySelector(".game").remove();
          createMenu();
          })

    }
    // Correct solo
    function correct(){
      if (!(game.completeMode)){
        if (game.question_counter< game.questions.length -1){
          reset();
          game.question_counter+=1;
          document.querySelector(".game").remove();
          createGame(game.questions[game.question_counter],game.answers[game.question_counter]);
         
          
  
        }
        else{
         
          game.question_counter=0;
            reset();
          createModal();
          document.querySelector(".message").style.fontFamily="arcade";
          document.querySelector(".message").style.color="green";
          document.querySelector(".message").innerHTML= "<h2>YOU &nbsp;&nbsp; WON</h2>";
          document.querySelector(".modal-container").style.background="url('images/happy.png')";
          document.querySelector(".modal-container").style.backgroundRepeat="no-repeat";
          document.querySelector(".modal-container").style.backgroundColor="white";
     
          document.querySelector(".modal-btn").addEventListener("click",()=>{
            let modal = document.querySelector(".modal");
          modal.style.display="none";
          document.querySelector(".game").remove();
          createMenu();
          })
   
        }
          
       
      }
     
     

    }
    
    function transition(player,time){
      let ctx = document.getElementById('canvas').getContext('2d');
      let color = player.name== "player 1" ? `rgba(0, 97, 176)` : `rgba(227, 40, 0)`;
      // fade in
      for (let i = 0; i < time/2; i++) {
        setTimeout(()=>{
      clear();
      ctx.globalAlpha=i*2/time;
      ctx.fillStyle = color;
      ctx.fillRect(100,200,600,200);
      ctx.fillStyle= "white";
      ctx.font ='108px arcade';
      
      ctx.fillText(`${player.name}`,200,320);
      
      ctx.fillStyle= "black";
      
        },i);
      }
      // // fadeout
      // for (let i = time/2; i < time; i++) {
      //   setTimeout(()=>{
      // clear();
      // ctx.globalAlpha=(time-i)*2/time;
      // console.log(ctx.globalAlpha);
      // ctx.fillStyle = `rgba(0, 97, 176)`;
      // ctx.fillRect(100,200,600,200);
      // ctx.fillStyle= "white";
      // ctx.font ='108px serif';
      
      // ctx.fillText(`${player.name}`,250,320);
      // ctx.globalAlpha=1;
      
      // ctx.fillStyle= "black";
      //   },i);
      // }
      
      // ctx.fillStyle = "rgba(0, 97, 176, 0.3)";
      // ctx.fillRect(100,200,600,200);
      // ctx.fillStyle= "white";
      // ctx.font ='108px serif';
      // ctx.fillText(`${player.name}`,250,320);
    }
    function rightCoop(player,char){
      let audio =document.createElement("audio");
      audio.src="sound/coin.wav";
      let counter = 0;
      let toGuess= document.querySelectorAll(".guess");
      for (let i = 0; i < toGuess.length; i++) {
          if (char.toUpperCase()===game.answers[game.question_counter].split("")[i]) {
            let spaces = game.answers[game.question_counter].split(" ").length -1 ;

              let letter_cont = document.createElement("div");
              letter_cont.classList.add("letter-container");
              letter_cont.innerText=char.toUpperCase();
              setTimeout(()=>{
                toGuess[i].appendChild(letter_cont);
              },150*counter);
              counter+=1;
              if (!(game.completeMode)){
                let index = game.missing.indexOf(char);
                game.missing.splice(index,1);
                if (game.music)
                audio.play();
              }
              
              game.rightGuess+=1;
              player.rights+=1;
              player.score+=100;

              
              if (game.rightGuess==game.answers[game.question_counter].length -spaces) {
                player.won+=1;
                player.score+=150;
                setTimeout(()=>{correctCoop(player);},500);
               
              }
              
          } 
      }


    }
    function correctCoop(player){
      
      if (game.question_counter< game.questions.length -1){
        reset();
        game.question_counter+=1;
        document.querySelector(".game").remove();
        createGame(game.questions[game.question_counter],game.answers[game.question_counter]);
        player1.mistakes=0;
        player2.mistakes=0;
        drawPlayer(player);

      }
      else{
        gameDecision();
      }
    }
    function decision(time){
      window.removeEventListener("keydown",keyboardInput,true);
      let playerActive = player1.active ? player1 : player2;
      let playerNonActive =  !(player1.active) ? player1 : player2;
      if (playerNonActive.mistakes<9){
        playerActive.active= false;
        playerNonActive.active= true;
        clear();
        transition(playerNonActive,time);
        setTimeout(()=>{
          clear();
          drawPlayer(playerNonActive);
        },time);
        
      }
      else{
        if (playerActive.mistakes==9){
          playerActive.active= false;
          playerNonActive.active= true;
          playerActive.mistakes=0;
          playerNonActive.mistakes=0;
          compeleteWord(1000);
          setTimeout(()=>{
            if (game.question_counter< game.questions.length -1){
              reset();
              game.question_counter+=1;
              document.querySelector(".game").remove();
              createGame(game.questions[game.question_counter],game.answers[game.question_counter]);
              transition(playerNonActive,time);
              
              setTimeout(()=>{ 
                drawPlayer(playerNonActive);
                window.addEventListener("keydown", keyboardInput,true);
              },time+500)
            }
            else
              gameDecision();
          },1500);

           
        }
      }
        
  
    }
    function resetPlayer(player){
      player.mistakes=0;
      player.lost=0;
      player.rights=0;
      player.won=0;
      player.score=0;
      
    }
    function drawPlayer(player){
      let canavas = document.getElementById('canvas');
     let ctx = canavas.getContext('2d');
     let color = player.name== "player 1" ? `rgba(0, 97, 176)` : `rgba(227, 40, 0)`;
     
    
     clear();
     ctx.font = '38px arcade';
     
     ctx.fillText(`round: ${game.question_counter + 1}/10`,700,70);
     ctx.font = '48px arcade';
     ctx.fillStyle=color;
     ctx.fillText(`${player.name}`, 700, 120);
     ctx.font = '36px arcade';
     ctx.fillText(`rounds won : ${player.won}`,700,150);
     ctx.font = '38px arcade';
     ctx.fillText(`score : ${player.score}`,700,180);
     
     ctx.fillStyle = "black";


    switch (player.mistakes) {
        
        case 1:
            ctx.fillRect(100,200-150,10,500);
            
            break;
        case 2:
            ctx.fillRect(100,200-150,10,500);
            ctx.fillRect(100,200-150,300,10);
            
            break;
        case 3:
            ctx.fillRect(100,200-150,10,500);
            ctx.fillRect(100,200-150,300,10);
            ctx.fillRect(350,200-150,5,100);
          
            break;
        case 4:
            ctx.fillRect(100,200-150,10,500);
            ctx.fillRect(100,200-150,300,10);
            ctx.fillRect(350,200-150,5,100);
            ctx.beginPath();
            ctx.arc(353,325-150,25,0,Math.PI *2, false);
            ctx.lineWidth = 5;
            ctx.stroke();
            
            
            break;
        case 5:
            ctx.fillRect(100,200-150,10,500);
            ctx.fillRect(100,200-150,300,10);
            ctx.fillRect(350,200-150,5,100);
            ctx.beginPath();
            ctx.arc(353,325-150,25,0,Math.PI *2, false);
            ctx.lineWidth = 5;
            ctx.stroke();
            ctx.fillRect(350,350-150,10,125);
          
            break;
        case 6:
            ctx.fillRect(100,200-150,10,500);
            ctx.fillRect(100,200-150,300,10);
            ctx.fillRect(350,200-150,5,100);
            ctx.beginPath();
            ctx.arc(353,325-150,25,0,Math.PI *2, false);
            ctx.lineWidth = 5;
            ctx.stroke();
            ctx.fillRect(350,350-150,10,125);
            ctx.moveTo(355,375-150);
            ctx.lineTo(400,475-150);
            ctx.stroke();
          
            break;
        case 7:
            ctx.fillRect(100,200-150,10,500);
            ctx.fillRect(100,200-150,300,10);
            ctx.fillRect(350,200-150,5,100);
            ctx.beginPath();
            ctx.arc(353,325-150,25,0,Math.PI *2, false);
            ctx.lineWidth = 5;
            ctx.stroke();
            ctx.fillRect(350,350-150,10,125);
            ctx.moveTo(355,375-150);
            ctx.lineTo(400,475-150);
            ctx.stroke();
            ctx.moveTo(355,375-150);
            ctx.lineTo(310,475-150);
            ctx.stroke();
           
            
          
            break;
        case 8:
            ctx.fillRect(100,200-150,10,500);
            ctx.fillRect(100,200-150,300,10);
            ctx.fillRect(350,200-150,5,100);
            ctx.beginPath();
            ctx.arc(353,325-150,25,0,Math.PI *2, false);
            ctx.lineWidth = 5;
            ctx.stroke();
            ctx.fillRect(350,350-150,10,125);
            ctx.moveTo(355,375-150);
            ctx.lineTo(400,475-150);
            ctx.stroke();
            ctx.moveTo(355,375-150);
            ctx.lineTo(310,475-150);
            ctx.stroke();
            ctx.lineWidth= 7;
            ctx.moveTo(355,450-150);
            ctx.lineTo(310,575-150);
            ctx.stroke();
            
          
           
            break;

    }
    
    }
    function gameDecision(){
      let winningPlayer;
      let tie = false;
      if (player1.score > player2.score){
        winningPlayer= player1;
      }
      else{
        if (player1.score<player2.score)
          winningPlayer= player2;
        else{
          if (player1.won==player2.won)
            tie=true;
          else
            winningPlayer = player1.won>player2.won ? player1 : player2;
        }
    }
    game.question_counter=0;
    reset();
    resetPlayer(player1);
    resetPlayer(player2);
    
    createModal();
    
    if (tie){
      document.querySelector(".message").style.fontFamily="arcade";
      document.querySelector(".message").style.color="green";
      document.querySelector(".message").innerHTML= `<h2>game &nbsp;&nbsp; tied</h2>`
      document.querySelector(".modal-container").style.background="url('images/coop tie.png')";
    }
    else{
      
      document.querySelector(".message").innerHTML= `<h2>${winningPlayer.name} WON</h2>`
      document.querySelector(".modal-container").style.background="url('images/coop win.png')";
    }

  
    
    document.querySelector(".modal-btn").addEventListener("click",()=>{
      let modal = document.querySelector(".modal");
    modal.style.display="none";
    document.querySelector(".game").remove();
    createMenu();
    })
    
    
  }
    function inputCoop(node,string){
      let player = player1.active ? player1 : player2;
      let ctx =document.getElementById('canvas').getContext('2d');
     let color = player.name== "player 1" ? `rgba(0, 97, 176)` : `rgba(227, 40, 0)`;
      node.style.display="none";
      if (!(node.classList.contains("clicked"))){
          if (string.includes(node.innerText)){
            let previousScore = player.score;
            rightCoop(player,node.innerText);
            //drawing score annimation
            for (let i = previousScore; i < player.score; i++) {
              setTimeout(()=>{
                clear();
                drawPlayer(player);
                ctx.clearRect(700,0,300,300);
                ctx.font = '38px arcade';
                ctx.fillText(`round: ${game.question_counter+1}/10`,700,70);
                ctx.font = '48px arcade';
                ctx.fillStyle=color;
                ctx.fillText(`${player.name}`, 700, 120);
                ctx.font = '36px arcade';
                ctx.fillText(`rounds won : ${player.won}`,700,150);
                ctx.font = '38px arcade';
                ctx.fillText(`score : ${i+1}`,700,180);
                ctx.fillStyle="black";
              },1000*(i-previousScore)/player.score);
              
            }
           
          }
         
          
          else{
            
            drawPlayer(player);
           for (let i = 0; i < game.difficulty; i++) {
             
             setTimeout(()=>{
                 wrongCoop(player,1100);

                },i*1000/game.difficulty);

            
             
           }
           setTimeout(()=>{decision(900);
            ctx.fillStyle ="black";   
            },1100);
           
           
           
          }
          
          node.classList.add("clicked");
      }
     
         
    }
    //wrong coop
   function wrongCoop(player,transitionTime){
    window.removeEventListener("keydown",keyboardInput,true);
    setTimeout(()=>{window.addEventListener("keydown", keyboardInput,true);},transitionTime+500);
    let audio =document.createElement("audio");
    audio.src="sound/pen.wav";
    if (game.music)
    audio.play();

    player.mistakes+=1; 
    switch (player.mistakes) {
        case 1:
            drawPole1(1000/game.difficulty);
          
            break;
        case 2:
            drawPole2(1000/game.difficulty);
            break;
        case 3:
            drawNoose(1000/game.difficulty);
            break;
        case 4:
            drawHead(1000/game.difficulty);
            break;
        case 5:
            
            drawTrunc(1000/game.difficulty);
            break;
        case 6:
            drawArm1(1000/game.difficulty);
            break;
        case 7:
            drawArm2(1000/game.difficulty);
            break;
        case 8:
           drawLeg1(1000/game.difficulty);
            break;
        case 9:
            
            drawLeg2(1000/game.difficulty);
            player.lost+=1;
            break;

    }

   }

    //create game function
    function createGame(quest,ans){
     
      game.completeMode = false ;
      let Game= document.createElement("div");
      Game.classList.add("game");
      let header= document.createElement("header");
      Game.appendChild(header);
      let canvas = document.createElement("canvas");
      canvas.setAttribute("id","canvas");
      canvas.setAttribute("height","600px");
      canvas.setAttribute("width","1200px");
      Game.appendChild(canvas);
      let wordToGuess = document.createElement("div");
      wordToGuess.classList.add("wordToGuess");
      Game.appendChild(wordToGuess);
      let letters = document.createElement("div");
      letters.classList.add("letters");
      Game.appendChild(letters);
      document.body.appendChild(Game);
      canvas.getContext('2d').translate(200,0);
      canvas.getContext('2d').save();
      window.addEventListener("keydown", function escG (event) {
        let x = document.querySelector(".modal-container");
      
        switch (event.key) {
          case "Escape":
            if (x)
            x.remove();
            escapeGame();
            
           break;
          default:
            return;
        }
        event.preventDefault();
      }, true);
      
      if (game.coopMode && (game.question_counter==0)){
        console.log(game.coopMode && (game.question_counter==0));
        transition(player1,1000);
        setTimeout(()=>{
          clear();
          questGen(quest);
          dashGen(ans);
          createLetters();
          drawPlayer(player1);
          drawPlayer(player1);
          document.querySelectorAll(".letter").forEach(item=>{
            item.addEventListener("click",e=>{
              console.log("clicked");
                inputCoop(e.target,game.answers[game.question_counter]);
              })
            })
        },1000);
      }
      else{
        questGen(quest);
        dashGen(ans);
        createLetters();
      }
      
      game.missing=ans.split("");
      window.addEventListener("keydown", keyboardInput,true); 
      
      
     if (!(game.coopMode)){
      ctx = document.getElementById("canvas").getContext('2d');
      ctx.font = '1px arcade';
      ctx.fillText('',700,70);
       setTimeout(()=>{
        clear();
        ctx = document.getElementById("canvas").getContext('2d');
      ctx.font = '48px arcade';
      ctx.fillStyle="green";
      ctx.fillText(`round: ${game.question_counter + 1}/10`,700,70);
       },1)
      
                  
                    document.querySelectorAll(".letter").forEach(item=>{
                    item.addEventListener("click",e=>{
                        input(e.target,game.answers[game.question_counter]);
                      })
                    })
       
              
                } 
      
//getting letters and deleting them based on mouse click
     

   }
   function keyboardInput(e){
    if (e.defaultPrevented) {
      return;
    }
    let letter = document.querySelectorAll(".letter")
    switch (e.key) { 
      case "A","a": 
      if (!(game.coopMode))
        input(letter[0],game.answers[game.question_counter]);
      else
        inputCoop(letter[0],game.answers[game.question_counter]);

        break;
      case "B","b":
        if (!game.coopMode)
        input(letter[1],game.answers[game.question_counter]);
        else 
        inputCoop(letter[1],game.answers[game.question_counter]);

        break;
      case "C","c":
        if (!game.coopMode)
        input(letter[2],game.answers[game.question_counter]);
        else 
        inputCoop(letter[2],game.answers[game.question_counter]);

        break;
      case "D","d":
        if (!game.coopMode)
        input(letter[3],game.answers[game.question_counter]);
        else 
        inputCoop(letter[3],game.answers[game.question_counter]);

        break;
      case "E","e":
        if (!game.coopMode)
        input(letter[4],game.answers[game.question_counter]);
        else 
        inputCoop(letter[4],game.answers[game.question_counter]);

        break;
      case "F","f":
        if (!game.coopMode)
        input(letter[5],game.answers[game.question_counter]);
        else 
        inputCoop(letter[5],game.answers[game.question_counter]);

        break;
      case "G","g":
        if (!game.coopMode)
        input(letter[6],game.answers[game.question_counter]);
        else 
        inputCoop(letter[6],game.answers[game.question_counter]);

        break;
      case "H","h":
        if (!game.coopMode)
        input(letter[7],game.answers[game.question_counter]);
        else 
        inputCoop(letter[7],game.answers[game.question_counter]);

        break;
      case "I","i":
        if (!game.coopMode)
        input(letter[8],game.answers[game.question_counter]);
        else 
        inputCoop(letter[8],game.answers[game.question_counter]);

        break;
      case "J","j":
        if (!game.coopMode)
        input(letter[9],game.answers[game.question_counter]);
        else 
        inputCoop(letter[9],game.answers[game.question_counter]);

        break;
      case "K","k":
        if (!game.coopMode)
        input(letter[10],game.answers[game.question_counter]);
        else 
        inputCoop(letter[10],game.answers[game.question_counter]);

        break;
      case "L","l":
        if (!game.coopMode)
        input(letter[11],game.answers[game.question_counter]);
        else 
        inputCoop(letter[11],game.answers[game.question_counter]);

        break;
      case "M","m":
        if (!game.coopMode)
        input(letter[12],game.answers[game.question_counter]);
        else 
        inputCoop(letter[12],game.answers[game.question_counter]);

        break;
      case "N","n":
        if (!game.coopMode)
        input(letter[13],game.answers[game.question_counter]);
        else 
        inputCoop(letter[13],game.answers[game.question_counter]);

        break;
      case "O","o":
        if (!game.coopMode)
        input(letter[14],game.answers[game.question_counter]);
        else 
        inputCoop(letter[14],game.answers[game.question_counter]);

        break;
      case "P","p":
        if (!game.coopMode)
        input(letter[15],game.answers[game.question_counter]);
        else 
        inputCoop(letter[15],game.answers[game.question_counter]);

        break;
      case "Q","q":
        if (!game.coopMode)
        input(letter[16],game.answers[game.question_counter]);
        else 
        inputCoop(letter[16],game.answers[game.question_counter]);

        break;
      case "R","r":
        if (!game.coopMode)
        input(letter[17],game.answers[game.question_counter]);
        else 
        inputCoop(letter[17],game.answers[game.question_counter]);

        break;
      case "S","s":
        if (!game.coopMode)
        input(letter[18],game.answers[game.question_counter]);
        else 
        inputCoop(letter[18],game.answers[game.question_counter]);

        break;
      case "T","t":
        if (!game.coopMode)
        input(letter[19],game.answers[game.question_counter]);
        else 
        inputCoop(letter[19],game.answers[game.question_counter]);

        break;
      case "U","u":
        if (!game.coopMode)
        input(letter[20],game.answers[game.question_counter]);
        else 
        inputCoop(letter[20],game.answers[game.question_counter]);

        break;
      case "V","v":
        if (!game.coopMode)
        input(letter[21],game.answers[game.question_counter]);
        else 
        inputCoop(letter[21],game.answers[game.question_counter]);

        break;
      case "W","w":
        if (!game.coopMode)
        input(letter[22],game.answers[game.question_counter]);
        else 
        inputCoop(letter[22],game.answers[game.question_counter]);

        break;
      case "X","x":
        if (!game.coopMode)
        input(letter[23],game.answers[game.question_counter]);
        else 
        inputCoop(letter[23],game.answers[game.question_counter]);

        break;
      case "Y","y":
        if (!game.coopMode)
        input(letter[24],game.answers[game.question_counter]);
        else 
        inputCoop(letter[24],game.answers[game.question_counter]);

        break;
      case "Z","z":
        if (!game.coopMode)
        input(letter[25],game.answers[game.question_counter]);
        else 
        inputCoop(letter[25],game.answers[game.question_counter]);

        break;
    
    
      default:
        return; 
    }
  
    e.preventDefault();
   }
   // create main menu
   function createMenu(){
    document.querySelector(".modal").innerHTML="";
     
     let main = document.createElement("div");
     main.classList.add("main-menu");
     
     let container = document.createElement("div");
     container.classList.add("btn-container");
     let newGame = document.createElement("div");
     newGame.classList.add("menu-btn");
     newGame.setAttribute("id","new-game");
     newGame.innerHTML="<h2>Play Alone </h2>"
     let coop = document.createElement("div");
     coop.classList.add("menu-btn");
     coop.setAttribute("id","coop");
     coop.innerHTML="<h2>Play With a Friend </h2>";
     let music = document.createElement("div");
     music.classList.add("menu-btn");
     music.setAttribute("id","music");
     let musicState = game.music ? "On" : "Off";
     music.innerHTML=`<h2>Music : ${musicState} </h2>`;
     container.appendChild(newGame);
     container.appendChild(coop);
     container.appendChild(music);
     main.appendChild(container);
     document.body.appendChild(main);
     document.querySelector("#new-game").addEventListener("click",()=>{
      game.coopMode = false;
      createLevelMenu();
     });
     
     document.querySelector("#coop").addEventListener("click",()=>{
       game.coopMode = true;
       
       createLevelMenu();
     });
     document.querySelector("#music").addEventListener("click",musicSwitch)
     
     
    }
    function musicSwitch(){
      
      if (game.music){
        game.music= false;
        document.getElementById("music").innerHTML="<h2>Music : Off </h2>"
        background.pause();
      }
      else{
        game.music = true;
        document.getElementById("music").innerHTML="<h2>Music : On </h2>"
        background.play();

      }
    }
    //level buttons
    function levelButton(name,node){
      let Name = name.charAt(0).toUpperCase() + name.slice(1);
      Name = Name.replace('-',' ');
      
      let menu_btn = document.createElement("div");
      menu_btn.classList.add("level");
      menu_btn.classList.add("menu-btn");
      let img = document.createElement('img');
      img.setAttribute("src",`flags/${name}.png`);
      let h4 = document.createElement("h4");
      h4.innerText= Name;
      menu_btn.appendChild(img);
      menu_btn.appendChild(h4);
      menu_btn.setAttribute("id",name);
      node.appendChild(menu_btn);



    }
    function escLevel (event) {
      let x= document.querySelector(".level-container");
      let y=document.querySelector(".modal-container");
     
      
      switch (event.key) {
        case "Escape":
          if (x)
          x.remove();
          if (y){
          y.remove();
          document.querySelector(".modal").style.display="none";

          }
          if(document.querySelector(".main-menu"))
          document.querySelector(".main-menu").remove();

          
          createMenu();
          break;
        default:
          return;
      }
      event.preventDefault();
    }
    function escapeGame(){
      createModal();
      let mdl_cont= document.querySelector(".modal-container");
      mdl_cont.style.justifyContent="center";
      mdl_cont.style.backgroundColor="#97b1c9";
      mdl_cont.innerHTML="";
      let cont = document.createElement("div");
      cont.innerText="Are you sure you want to quit ?";
      cont.style.fontSize="58px";
      mdl_cont.appendChild(cont);
      let cont2= document.createElement("div");
      let yes = document.createElement("div");
      yes.innerText="YES";
      let no = document.createElement("div");
      no.innerText="NO";
      yes.classList.add("diff-btn");
      no.classList.add("diff-btn");
      cont2.style.display='flex';
      cont2.style.width="100%"
      cont2.style.margin='100px';
      if (document.querySelector(".main-menu"))
      document.querySelector(".main-menu").remove();

      cont2.style.justifyContent="space-evenly";
      console.log(document.querySelector(".game"));
    
      cont2.appendChild(yes);
      cont2.appendChild(no);
      mdl_cont.appendChild(cont2);
      no.addEventListener("click",()=>{
        mdl_cont.remove();
        document.querySelector(".modal").style.display="none";
        document.querySelector(".modal").innerHTML="";
      })
      yes.addEventListener("click",()=>{
        mdl_cont.remove();
        document.querySelector(".modal").style.display="none";
        document.querySelector(".modal").innerHTML="";
        if(document.querySelector(".game"))
        document.querySelector(".game").remove();
        createMenu();
        reset();
        game.question_counter=0;
        resetPlayer(player1);
        resetPlayer(player2);
      })



    }
    // create level menu
    function createLevelMenu(){
      document.querySelector(".modal").innerHTML="";
      document.querySelector(".main-menu").remove();
      let title = document.createElement("div");
      title.classList.add("title");
      title.innerText="Select Level";
      let level_container = document.createElement("div");
      level_container.classList.add("level-container");
      let levels1 = document.createElement("div");
      levels1.classList.add("levels");
      levels1.setAttribute("id","levels1");
      let levels2 = document.createElement("div");
      levels2.classList.add("levels");
      levels2.setAttribute("id","levels2");
      levelButton("spain",levels1);
      levelButton("greece",levels1);
      levelButton("south-korea",levels1);
      levelButton("india",levels2);
      levelButton("egypt",levels2);
      levelButton("mexico",levels2);

      level_container.appendChild(title);
      level_container.appendChild(levels1);
      level_container.appendChild(levels2);

      document.body.appendChild(level_container);
      window.addEventListener("keydown",escLevel, {once : true});
      document.querySelectorAll(".level").forEach(item=>{
        item.addEventListener("click",e=>{
          let level = e.target.parentNode.querySelector("h4").innerText;
          game.level=level;
          setQuestions();
          game.questions=questions;
          game.answers=answers;
          shuffle(game.questions);
          generateAnswers(game.questions);
          game.questions = game.questions.slice(0,10);
          document.querySelector(".level-container").remove();
          createDifficulty();
        })
      })
    } 
    //creating modal
    function createModal(){
      document.querySelector(".modal").innerHTML="";
      let modal = document.querySelector(".modal");
      modal.style.display="flex";
      // modal.classList.add("modal");
      let modal_container = document.createElement("div");
      modal_container.classList.add("modal-container");
      let message = document.createElement("div");
      message.classList.add('message');
      message.innerHTML= "<h3>GAME OVER</h3>";
      let score = document.createElement("div");
      score.classList.add("score");
      score.innerText=`You made it to round ${game.question_counter + 1} `;
      message.appendChild(score);
      modal_container.appendChild(message);
      let modal_btns = document.createElement("div");
      modal_btns.classList.add("modal-btns");
      let modal_btn = document.createElement("div");
      modal_btn.classList.add("modal-btn");
      modal_btn.innerText = "Go Back To Main Menu";
      modal_btns.appendChild(modal_btn);
      modal_container.appendChild(modal_btns);
      modal.appendChild(modal_container);
      // document.body.appendChild(modal);
      // document.querySelector(".modal-container").style.background="url('dead.png')";
      // document.querySelector(".modal-container").style.backgroundRepeat="no-repeat";
      // document.querySelector(".modal-container").style.backgroundColor="white";
      }
      // game.difficulty 
      function createDifficulty(){
        createModal();
        document.querySelector(".modal-btn").remove();
        document.querySelector(".modal-container").innerHTML="";
        document.querySelector(".modal-container").style.backgroundColor ="#97b1c9";
        let btn_cont = document.createElement("div");
        btn_cont.classList.add("btn-cont");
        let easy = document.createElement("div");
        easy.classList.add("diff-btn");
        easy.innerText="easy";
        btn_cont.appendChild(easy);
        let medium = document.createElement("div");
        medium.classList.add("diff-btn");
        medium.innerText="medium";
        
        btn_cont.appendChild(medium);
        let hard = document.createElement("div");
        hard.classList.add("diff-btn");
        hard.innerText="hardcore";
        
        btn_cont.appendChild(hard);
        window.addEventListener("keydown", function (event) {
          let x = document.querySelector(".modal-container");
        
          switch (event.key) {
            case "Escape":
             document.querySelector(".modal").style.display="none";
             document.querySelector(".modal").innerHTML="";
             if(document.querySelector(".main-menu"))
             document.querySelector(".main-menu").remove();

             createMenu();
              if(x)
              x.remove;
              
              
              break;
            default:
              return;
          }
          event.preventDefault();
        }, {once : true});
        

        document.querySelector(".modal-container").appendChild(btn_cont);
        easy.addEventListener("click",()=>{
          game.difficulty=1;
          document.querySelector(".modal").innerHTML="";
          document.querySelector(".modal").style.display="none";
          createGame(game.questions[game.question_counter],game.answers[game.question_counter]);
          document.querySelector(".modal").innerHTML="";

          
        })
        medium.addEventListener("click",()=>{
          game.difficulty=3;
          document.querySelector(".modal").innerHTML="";
          document.querySelector(".modal").style.display="none";
          createGame(game.questions[game.question_counter],game.answers[game.question_counter]);
          document.querySelector(".modal").innerHTML="";

        })
        hard.addEventListener("click",()=>{
          game.difficulty=9;
          document.querySelector(".modal").innerHTML="";
          document.querySelector(".modal").style.display="none";
          createGame(game.questions[game.question_counter],game.answers[game.question_counter]);
          document.querySelector(".modal").innerHTML="";

        })
        
        



      }
    
    

})
// window.addEventListener("resize",()=>{
//     //resizing canvas on window resize
//     canvas.height= window.innerHeight *0.7;
//     canvas.width=window.innerWidth *0.5;  
// })
// const canvas = document.getElementById('canvas');
//     const ctx = canvas.getContext('2d');
//  //pole1
//     ctx.fillRect(100,200,10,500);
//     // pole2
//     ctx.fillRect(100,200,300,10);
//     //noose
//     ctx.fillRect(350,200,5,100);
//     //head
//     ctx.beginPath();
//     ctx.arc(353,325,25,0,Math.PI *2, false);
//     ctx.lineWidth = 5;
//     ctx.stroke();
//     //draw trunc
//     ctx.fillRect(350,350,10,125);
//     //draw arm1
//     ctx.moveTo(355,375);
//     ctx.lineTo(400,475);
//     ctx.stroke();
//     //draw arm2
//     ctx.moveTo(355,375);
//     ctx.lineTo(310,475);
//     ctx.stroke();
//     //leg1
//     ctx.lineWidth= 7;
//     ctx.moveTo(355,450);
//     ctx.lineTo(310,575);
//     ctx.stroke();
//     //leg2
//     ctx.moveTo(355,450);
//     ctx.lineTo(400,575);
//     ctx.stroke();
//     ctx.clearRect(0,0,canvas.width,canvas.height);
