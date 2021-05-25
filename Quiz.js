class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements

    //write code to change the background color here

    //write code to show a heading for showing the result of Quiz

    //call getContestantInfo( ) here

  Contestant.getPlayerInfo(); //MONA: You dint call this static function to display player info from Contestant class
  
  //MONA: order of below set of instructions have been corrected too
  fill("blue")
  textSize(20);
  text("Note: Contestant who answered correct are highlighted in green color!", 130, 230)

  if(allContestants !== undefined){ //MONA: Corrected the order of if condition
  var display_position = 270;
  for(var plr in allContestants){
    var correctAns = "2"; 
    if(correctAns === allContestants[plr].answer)
      fill("green")
    else
      fill("red");


      //MONA: Below code was missing 
      display_position+=20;
      textSize(15);
      text(allContestants[plr].name + ": " + allContestants[plr].answer, 130,display_position)
    
  }
}
}

    //write condition to check if contestantInfor is not undefined

    //write code to add a note here

    //write code to highlight contest who answered correctly
    

}
