// Check if the user is ready to play!
confirm("Ready to Play ?");
var age=prompt("What's your age");
if(age<13){
    console.log("You're not allowed to play,we not take any responsability ");
    }
else{
    console.log("You're ready to go!");
        }
console.log("You are at a Dark Vader concert, and you hear this lyric \'Lace my shoes off, start racing.\'")
console.log("Suddenly, Dark Vader stops and says, 'Who wants to race me?'");
var userAnswer=prompt("Do you want to race Dark Vader on stage?");
if(userAnswer==="yes"){
console.log("You and Dark Vader start racing. It's neck and neck! You win by a shoelace!");
    }
else{
    console.log("Oh no! Dark Vader shakes his head and sings 'I set a pace, so I can race without pacing.'");
    }
var feedback=prompt("How it Was in a range from 0 to 10");
console.log((feedback>8)?"Thank you! We should race at the next concert!":"I'll keep practicing coding and racing.");
