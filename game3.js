var slaying = true;
var youHit = Math.floor(Math.random() * 2);
var damageThisRound =Math.floor(Math.random()*5 + 1);
var totalDamage = 0;
while(slaying){
    if(youHit){
        totalDamage+=damageThisRound;
        if(totalDamage>=4){
            console.log("Dragon Hitted!");
            slaying=false;
            }
        console.log("Dragon Hitted!");
        }
    else{
        console.log("Dragon Defeatme :(");
        }
    slaying=false;
    }
