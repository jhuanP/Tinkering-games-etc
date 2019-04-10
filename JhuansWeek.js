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
        eat(){
            newDiv.textContent = "Man that sure is alot of food!";
        return `${this.firstName} is eating a meal`;
        //return `${this.firstName} is eating!`
    }//end eat method
        poop(){
            return `${this.firstName} is taking a poop, wish him luck`;
    }//ends poop
        hunting(){
            newDiv.textContent = "Its better to be the hunter than the prey";
            return `${this.firstName} is hunting for food`;
    }//ends hunting
        Driving(){
            newDiv.textContent = "Remember slow and steady wins the race";
            return `${this.firstName} is traveling`;
    }//ends driving
        barfight(){
            return `${this.firstName} is in a fight`;
    }//ends barfight
        Church(){
            return `${this.firstName} is in church praising the lort`;
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
            newDiv.textContent = "Sure smell delish!";
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
    let user = prompt("Who are you?").toString();
    let day = prompt("What day of the week is it");
    let today = day.toLowerCase();
    if(today.includes("sat")){
           //creating variable to compare for time of day
           let time = prompt("what time is it? (Military)");
           //if statements to call functions at given times 
           if ( time > 1700 && time <= 1800 || time == 700 && time <= 800){
              if(user == "Jhuan" || user == "Jay"){
               myDiv.textContent = Jay.eat();
                   }else if(user == "Sharena"){
                       myDiv.textContent = Sharena.cooking();
                   }else if (user == "Christian"){
                       myDiv.textContent = Christian.eat();
   
                   } else{
                       myDiv.textContent = `${user} not in the system`;
                   }
               }//closes first time if
               else if (time >= 800 && time <= 1700 ){
                   if(user == "Jhuan" || user == "Jay"){
                   myDiv.textContent = Jay.working();
                       }else if(user == "Sharena"){
                           myDiv.textContent = Sharena.working();
                       }else if (user == "Christian"){
                           myDiv.textContent = Christian.school();
               
                       } else{
                           myDiv.textContent = `${user} not in the system`;
                       }
               }//closes second time if
               else if(time >= 2200 && time <= 2400 || time <= 600){
                   if(user == "Jhuan" || user == "Jay"){
                       myDiv.textContent = Jay.sleeping();
                           }else if(user == "Sharena"){
                               myDiv.textContent = Sharena.sleeping();
                           }else if (user == "Christian"){
                               myDiv.textContent = Christian.sleeping();
                   
                           } else{
                               myDiv.textContent = `${user} not in the system`;
                           }         
                  }//closes third time if
               else if (time > 1800 && time < 2200){
                   if(user == "Jhuan" || user == "Jay"){
                       myDiv.textContent = Jay.watchingTv();
                           }else if(user == "Sharena"){
                               myDiv.textContent = Sharena.watchingTv();
                           }else if (user == "Christian"){
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
           let time = prompt("what time is it? (Military)");
           //if statements to call functions at given times 
           if ( time > 1700 && time <= 1800 || time == 700 && time <= 800){
              if(user == "Jhuan" || user == "Jay"){
               myDiv.textContent = Jay.Driving();
                   }else if(user == "Sharena"){
                       myDiv.textContent = Sharena.Driving();
                   }else if (user == "Christian"){
                       myDiv.textContent = Christian.eat();
   
                   } else{
                       myDiv.textContent = `${user} not in the system`;
                   }
               }//closes first time if
               else if (time >= 800 && time <= 1700 ){
                   if(user == "Jhuan" || user == "Jay"){
                   myDiv.textContent = Jay.working();
                       }else if(user == "Sharena"){
                           myDiv.textContent = Sharena.working();
                       }else if (user == "Christian"){
                           myDiv.textContent = Christian.school();
               
                       } else{
                           myDiv.textContent = `${user} not in the system`;
                       }
               }//closes second time if
               else if(time >= 2200 && time <= 2400 || time <= 600){
                   if(user == "Jhuan" || user == "Jay"){
                       myDiv.textContent = Jay.sleeping();
                           }else if(user == "Sharena"){
                               myDiv.textContent = Sharena.sleeping();
                           }else if (user == "Christian"){
                               myDiv.textContent = Christian.sleeping();
                   
                           } else{
                               myDiv.textContent = `${user} not in the system`;
                           }         
                  }//closes third time if
               else if (time > 1800 && time < 2200){
                   if(user == "Jhuan" || user == "Jay"){
                       myDiv.textContent = Jay.watchingTv();
                           }else if(user == "Sharena"){
                               myDiv.textContent = Sharena.watchingTv();
                           }else if (user == "Christian"){
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
    //if statement to narrow down which day it is
    else if(today.includes("mon") || today.includes("tue") || today.includes("wed") || today.includes("thu") || today.includes("fri") ){    
        //creating variable to compare for time of day
        let time = prompt("what time is it? (Military)");
        //if statements to call functions at given times 
        if ( time > 1700 && time <= 1800 || time == 700 && time <= 800){
           if(user == "Jhuan" || user == "Jay"){
            myDiv.textContent = Jay.Driving();
                }else if(user == "Sharena"){
                    myDiv.textContent = Sharena.Driving();
                }else if (user == "Christian"){
                    myDiv.textContent = Christian.eat();

                } else{
                    myDiv.textContent = `${user} not in the system`;
                }
            }//closes first time if
            else if (time >= 800 && time <= 1700 ){
                if(user == "Jhuan" || user == "Jay"){
                myDiv.textContent = Jay.working();
                    }else if(user == "Sharena"){
                        myDiv.textContent = Sharena.working();
                    }else if (user == "Christian"){
                        myDiv.textContent = Christian.school();
            
                    } else{
                        myDiv.textContent = `${user} not in the system`;
                    }
            }//closes second time if
            else if(time >= 2200 && time <= 2400 || time <= 600){
                if(user == "Jhuan" || user == "Jay"){
                    myDiv.textContent = Jay.sleeping();
                        }else if(user == "Sharena"){
                            myDiv.textContent = Sharena.sleeping();
                        }else if (user == "Christian"){
                            myDiv.textContent = Christian.sleeping();
                
                        } else{
                            myDiv.textContent = `${user} not in the system`;
                        }         
               }//closes third time if
            else if (time > 1800 && time < 2200){
                if(user == "Jhuan" || user == "Jay"){
                    myDiv.textContent = Jay.watchingTv();
                        }else if(user == "Sharena"){
                            myDiv.textContent = Sharena.watchingTv();
                        }else if (user == "Christian"){
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