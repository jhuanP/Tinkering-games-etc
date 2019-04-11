//query selector creation for front-end display
let myDiv = document.querySelector("#first");
//set style element for the div
myDiv.style.backgroundColor = "red";
let newDiv = document.querySelector("#second");
newDiv.style.backgroundColor = "white";
let divImage = document.querySelector("#third");


class People{
    constructor(firstName, lastName, age, job, gender){
      
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.job = job;
      this.gender = gender;
    }
        eatL(){
            newDiv.textContent = "Man that sure is alot of food!";
        return `${this.firstName} is eating Lunch`;
        //return `${this.firstName} is eating!`
    }//end eat method
        eatB(){ 
        newDiv.textContent = "Man that sure is alot of food!";
        return `${this.firstName} is eating Breakfast`;
        }//closes eatB
        pvG(){
            newDiv.textContent = "Take it easy on the online players for once!";
            return `${this.firstName} is playing video games`;
    }//ends pvg
         onSM(){
        newDiv.textContent = "You are in a Drama free zone, proceed with caution!";
        return `${this.firstName} is scrolling newsfeeds`;
    }//ends pvg
        hunting(){
            newDiv.textContent = "Its better to be the hunter than the prey";
            return `${this.firstName} is hunting for food`;
    }//ends hunting
        Driving(){
            newDiv.textContent = "Remember slow and steady wins the race";
            return `${this.firstName} is traveling`;
    }//ends driving
        pracCode(){
            newDiv.textContent = `${this.firstName} knows google is a friend`
            return `${this.firstName} working on coding skills`;
    }//ends barfight
        Church(){
            newDiv.textContent = "When you accept Jesus as your lord and savior heaven is your home";
            return `${this.firstName} is in church praising the lord`;
    }//ends church
        working(){
            newDiv.textContent = `Is ${this.firstName} working Hard or hardly working?`;
            return `${this.firstName} is being a ${this.job} for the day!`
    }//ends working
        sleeping(){
            newDiv.textContent = "Sweet Dreams Buttercup!";
            return `${this.firstName} is sound asleep`;
    }//ends sleeping
        watchingTv(){
            newDiv.textContent = "I hope its a good show!";
            return `${this.firstName} is watching tv`;
    }//ends watchingTv
        school(){
            newDiv.textContent = "Reading is fundamental!";
            return `${this.firstName} is at school`;
        }//ends school
        cookingB(){
            newDiv.textContent = "Yum, Smells nice!";
            return `${this.firstName} is cooking something for breakfast`;
        }//ends cooking
        cookingL(){
            newDiv.textContent = "Sure smell delish !";
            return `${this.firstName} is cooking something for Lunch`;
        }//ends cooking
}//ends People class 

  
    let Jay = new People ("Jhuan", "Pressley", 31, "Devops Engineer", "male");
    let Sharena = new People ("Sharena", "Bess", 33, "Merchandise Manager", "female")
    let Christian = new People ("Christian", "Bess", 11, "fortnite streamer", "male")
    
    
    //console.log(Sharena);
    //console.log(jay.firstName);
    //Jay.eat();
    //Sharena.Church();
    //Sharena.Driving();

    //timeout slows the alerts to allow the Html page to load first
   setTimeout(function (){
    let user = prompt("Who are you?").toString().toLowerCase();
    let day = prompt("What day of the week is it");
    let today = day.toLowerCase();
    if(today.includes("sat")){
           //creating variable to compare for time of day
           let time = prompt("what time is it? (Military without symbol e.g. 0000 is 12am)");
           //if statements to call functions at given times 
           if ( time > 1700 && time <= 1800 || time == 700 && time <= 800){
              if(user == "jhuan" || user == "jay"){
               myDiv.textContent = Jay.eatB();
                   }else if(user == "sharena"){
                       myDiv.textContent = Sharena.cookingB();
                   }else if (user == "christian"){
                       myDiv.textContent = Christian.eatB();
   
                   } else{
                       myDiv.textContent = `${user} not in the system`;
                   }
               }//closes first time if
               else if (time >= 800 && time <= 1700 ){
                   if(user == "jhuan" || user == "jay"){
                   myDiv.textContent = Jay.pvG();
                       }else if(user == "sharena"){
                           myDiv.textContent = Sharena.onSM();
                       }else if (user == "christian"){
                           myDiv.textContent = Christian.pvG();
               
                       } else{
                           myDiv.textContent = `${user} not in the system`;
                       }
               }//closes second time if
               else if(time >= 2200 && time <= 2400 || time <= 600){
                   if(user == "jhuan" || user == "jay"){
                       myDiv.textContent = Jay.sleeping();
                           }else if(user == "sharena"){
                               myDiv.textContent = Sharena.sleeping();
                           }else if (user == "christian"){
                               myDiv.textContent = Christian.sleeping();
                   
                           } else{
                               myDiv.textContent = `${user} not in the system`;
                           }         
                  }//closes third time if
               else if (time > 1800 && time < 2200){
                   if(user == "jhuan" || user == "jay"){
                       myDiv.textContent = Jay.watchingTv();
                           }else if(user == "sharena"){
                               myDiv.textContent = Sharena.watchingTv();
                           }else if (user == "christian"){
                               myDiv.textContent = Christian.watchingTv();
                   
                           } else{
                               myDiv.textContent = `${user} not in the system`;
                           }
               }//closes last time if
               else{
                   document.write("Please refresh page and enter valid military time");
               }//closes else
           }//closes if 
       else if(today.includes("sun")){
           //creating variable to compare for time of day
           let time = prompt("what time is it? (Military without symbol e.g. 0000 is 12am)");
           //if statements to call functions at given times 
           if ( time > 1700 && time <= 1800 || time == 700 && time <= 800){
              if(user == "jhuan" || user == "jay"){
               myDiv.textContent = Jay.pvG();
                   }else if(user == "sharena"){
                       myDiv.textContent = Sharena.cookingL();
                   }else if (user == "christian"){
                       myDiv.textContent = Christian.pvG();
   
                   } else{
                       myDiv.textContent = `${user} not in the system`;
                   }
               }//closes first time if
               else if (time >= 800 && time <= 1700 ){
                   if(user == "jhuan" || user == "jay"){
                   myDiv.textContent = Jay.Church();
                       }else if(user == "sharena"){
                           myDiv.textContent = Sharena.Church();
                       }else if (user == "christian"){
                           myDiv.textContent = Christian.Church();
               
                       } else{
                           myDiv.textContent = `${user} not in the system`;
                       }
               }//closes second time if
               else if(time >= 2200 && time <= 2400 || time <= 600){
                   if(user == "jhuan" || user == "jay"){
                       myDiv.textContent = Jay.sleeping();
                           }else if(user == "sharena"){
                               myDiv.textContent = Sharena.sleeping();
                           }else if (user == "christian"){
                               myDiv.textContent = Christian.sleeping();
                   
                           } else{
                               myDiv.textContent = `${user} not in the system`;
                           }         
                  }//closes third time if
               else if (time > 1800 && time < 2200){
                   if(user == "jhuan" || user == "jay"){
                       myDiv.textContent = Jay.pracCode();
                           }else if(user == "sharena"){
                               myDiv.textContent = Sharena.watchingTv();
                           }else if (user == "christian"){
                               myDiv.textContent = Christian.pvG();
                   
                           } else{
                               myDiv.textContent = `${user} not in the system`;
                           }
               }//closes last time if
               else{
                   document.write("Please refresh page and enter valid military time");
               }//closes else
           }//closes if sunday 
    //if statement to narrow down which day it is
    else if(today.includes("mon") || today.includes("tue") || today.includes("wed") || today.includes("thu") || today.includes("fri") ){    
        //creating variable to compare for time of day
        let time = prompt("what time is it? (Military without symbol e.g. 0000 is 12am)");
        //if statements to call functions at given times 
        if ( time > 1700 && time <= 1800 || time == 700 && time <= 800){
           if(user == "jhuan" || user == "jay"){
            myDiv.textContent = Jay.Driving();
                }else if(user == "sharena"){
                    myDiv.textContent = Sharena.Driving();
                }else if (user == "christian"){
                    myDiv.textContent = Christian.eat();

                } else{
                    myDiv.textContent = `${user} not in the system`;
                }
            }//closes first time if
            else if (time >= 800 && time <= 1700 ){
                if(user == "jhuan" || user == "jay"){
                myDiv.textContent = Jay.working();
                    }else if(user == "sharena"){
                        myDiv.textContent = Sharena.working();
                    }else if (user == "christian"){
                        myDiv.textContent = Christian.school();
            
                    } else{
                        myDiv.textContent = `${user} not in the system`;
                    }
            }//closes second time if
            else if(time >= 2200 && time <= 2400 || time <= 600){
                if(user == "jhuan" || user == "jay"){
                    myDiv.textContent = Jay.sleeping();
                        }else if(user == "sharena"){
                            myDiv.textContent = Sharena.sleeping();
                        }else if (user == "christian"){
                            myDiv.textContent = Christian.sleeping();
                
                        } else{
                            myDiv.textContent = `${user} not in the system`;
                        }         
               }//closes third time if
            else if (time > 1800 && time < 2200){
                if(user == "jhuan" || user == "jay"){
                    myDiv.textContent = Jay.watchingTv();
                        }else if(user == "sharena"){
                            myDiv.textContent = Sharena.watchingTv();
                        }else if (user == "christian"){
                            myDiv.textContent = Christian.watchingTv();
                
                        } else{
                            myDiv.textContent = `${user} not in the system`;
                        }
            }//closes last time if
            else{
                document.write("Please refresh page and enter valid military time");
            }//closes else
        }//closes if 
    else{
        document.write("please refresh page");
    }//ends else
//Christian.eat();
    //console.log(Christian);
},500);