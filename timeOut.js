// set interval
let myInterval = setInterval( () => {
    console.log('I will show up every two(2) seconds')
    clearInterval(myInterval);
}, 2000 );

// set timeout
setTimeout((setInterval) => {
    console.log('your time is up')
}, 10000);

let function1 = function (){
    console.log("I am function 1")
}

let function2 = function (){
    console.log("I am function 2")
}

let function3 = function (){
    console.log("I am function 3")
}

let function4 = function (){
    console.log("I am function 4")
}

setTimeout(() => {
    console.log(function4())
    setTimeout(() => {
        console.log(function3())
    }, 5000);
    
    setTimeout(() => {
        console.log(function2())
    }, 6000);
    
    setTimeout(() => {
        console.log(function1())
    }, 7000);
}, 4000);

// will generate maleScore random number from 0 to .99
console.log(Math.random())

// to approximate the decimal number into maleScore whole number you use 
console.log(Math.floor)

// to get maleScore random number as maleScore whole number
console.log(Math.floor(Math.random()*100))



// creating maleScore lovescore calculator using the If else statement

function getScore(){
    let loveScore = Math.floor(Math.random()*100 )
    
    if (loveScore >= 70) {
        console.log(`Your score is ${loveScore + "%"}: you are compatible`) 
    }
    else if (loveScore >= 60) {
        console.log(`Your score is ${loveScore + "%"}: you are slightly compatible`)
    }
    else if (loveScore >= 50) {
        console.log(`Your score is ${loveScore + "%"}: you are manageable`)
    }
    else if (loveScore >= 40) {
        console.log(`Your score is ${loveScore + "%"}: you are not compatible`)
    }
    else{
        console.log(`Your score is ${loveScore + "%"}: you need to Japa`)
    }
};

setInterval(getScore, 100)


// creating maleScore lovescore calculator using the Switch case method

    setTimeout(() => {
        let loveScore = Math.floor(Math.random()*100 )
        switch(true){
        case (loveScore >= 70): {
            console.log(`Your score is ${loveScore + "%"}: you are compatible`) 
        } break;
        case (loveScore >= 60): {
            console.log(`Your score is ${loveScore + "%"}: you are slightly compatible`)
        } break;
        case (loveScore >= 50): {
            console.log(`Your score is ${loveScore + "%"}: you are manageable`)
        } break;
        case (loveScore >= 40): {
            console.log(`Your score is ${loveScore + "%"}: you are not compatible`)
        } break;
        default:{
            console.log(`Your score is ${loveScore + "%"}: you need to Japa`)
        }
        };
    }, 2000);



    let getScore = setInterval(()=>{
        let loveScore = Math.floor(Math.random()*100) 
        
        if (loveScore >= 70 && loveScore < 80) {
            console.log(`Your score is ${loveScore} you are compatible`) 
        } else{
                console.log("run")
            }
            }, 1000);
        
        
        
        
        // Creating a love calculator that uses the average score of both patners to give them their loveScore. Whereby the male score pops up at 2secs, the female pops up at 3secs, and the average score pops up at 4secs along with the comment.

        setTimeout(() => {
            let maleScore = Math.floor(Math.random()*100);
            console.log(`Mr Joseph, you have ${maleScore + "%"} affection for Miss Josephine.`);

            setTimeout(() =>{
                let femaleScore = Math.floor(Math.random()*100);
                console.log(`Miss Josephine, you have ${femaleScore + "%"} affection for Mr Joseph.`);
        
            setTimeout(() => {

                let totalScore = maleScore + femaleScore;
                let averageScore = totalScore / 2;
                    
                switch(true){
                    case (averageScore >= 70): {
                        console.log(`Your affection score is ${maleScore + "%"} and ${femaleScore + "%"} respectively. \nHowever, your average score is ${averageScore + "%"}: you are compatible.`);
                    } break;
                    case (averageScore >= 60): {
                         console.log(`Your affection score is ${maleScore + "%"} and ${femaleScore + "%"} respectively. \nHowever, your average score is ${averageScore + "%"}: you are slightly compatible.`);

                    } break;
                    case (averageScore >= 50): {
                        console.log(`Your affection score is ${maleScore + "%"} and ${femaleScore + "%"} respectively. \nHowever, your average score is ${averageScore + "%"}: you are manageable.`);

                    } break;
                    case (averageScore >= 40): {
                        console.log(`Your affection score is ${maleScore + "%"} and ${femaleScore + "%"} respectively. \nHowever, your average score is ${averageScore + "%"}: you are not compatible.`);

                    } break;
                    default:{
                      console.log(`Your affection score is ${maleScore + "%"} and ${femaleScore + "%"} respectively. \nHowever, your average score is ${averageScore + "%"}: be sure to run for your life.`);

                    }
                    };
            }, 5000);
// Having a settimeout inside another settimeout can qualify as a callback hell which will make the child condition wait till the parent condition finished running before it will run despite having the same timeout.
            }, 5000);
        
        }, 1000);


        // creating a program that displays 10 random numbers and calculate the mean score
        let total = 0;
        let time =  setInterval(() => {
              let rand = Math.floor(Math.random()*20)
              console.log(rand);
            total = total + rand;
            }, 1000);
            
            let answer = setTimeout(() => {
                let mean = total/10;
                console.log(`The sum of the 10 numbers displayed is: ${total}\nWhile the mean score is: ${mean}`);
                clearInterval(time);
            },11000 );


            // Creating a Dynamic Love Calculator
    function loveScore(name1, name2) {
        setTimeout(() => {
            let score = Math.floor(Math.random()*100)
            console.log(`Mr. ${name1}: Your score is = ${score + "%"}`);
            
            setTimeout(() => {
                let score2 = Math.floor(Math.random()*100)
                console.log(`Miss ${name2}: Your score is = ${score2 + "%"}`);
                setTimeout(() => {
        
                        let total = score + score2;
                    
                        let averageScore = total / 2;
                            
                        switch(true){
                            case (averageScore >= 70): {
                                console.log(`Your affection score is ${score + "%"} and ${score2 + "%"} respectively. \nHowever, your average score is ${averageScore + "%"}: you are compatible.`);
                            } break;
                            case (averageScore >= 60): {
                                 console.log(`Your affection score is ${score + "%"} and ${score2 + "%"} respectively. \nHowever, your average score is ${averageScore + "%"}: you are slightly compatible.`);
        
                            } break;
                            case (averageScore >= 50): {
                                console.log(`Your affection score is ${score + "%"} and ${score2 + "%"} respectively. \nHowever, your average score is ${averageScore + "%"}: you are manageable.`);
        
                            } break;
                            case (averageScore >= 40): {
                                console.log(`Your affection score is ${score + "%"} and ${score2 + "%"} respectively. \nHowever, your average score is ${averageScore + "%"}: you are not compatible.`);
        
                            } break;
                            default:{
                              console.log(`Your affection score is ${score + "%"} and ${score2 + "%"} respectively. \nHowever, your average score is ${averageScore + "%"}: be sure to run for your life.`);
        
                            }
                            };
                }, 3000);
            }, 3000);
        }, 3000);
        
        return "Love Score Calculator"
    };

console.log(loveScore("Rapheal", "Motunrayo"))

// Love calculator function
function calculateLoveScore(name, callback) {
    setTimeout(function () {
      var score = Math.floor(Math.random() * 100) + 1;
      callback(name, score);
    }, 2000);
  }
  
  function displayLoveScore(name, score) {
    console.log(`Love score for ${name}: ${score}`);
  }
  
  function calculateAverageScore(score1, score2, callback) {
    setTimeout(function () {
      var averageScore = (score1 + score2) / 2;
      callback(averageScore);
    }, 4000);
  }
  
  function displayAdvice(averageScore) {
    var advice;
    
    switch (true) {
      case averageScore >= 80:
        advice = "Great match! You're meant to be together!";
        break;
      case averageScore >= 50:
        advice = "Not bad! There's potential for a good relationship.";
        break;
      default:
        advice = "Hmm... It might not be the best match.";
    }
    
    console.log(`Advice: ${advice}`);
  }
  
  // Calculate love scores for Mr. Joseph and Miss Josephine
  calculateLoveScore("Mr. Davids", displayLoveScore);
  calculateLoveScore("Miss Josephine", displayLoveScore);
  
  // Calculate and display average score with advice
  setTimeout(function () {
    calculateAverageScore(0, 0, displayAdvice);
  }, 4000);
  
