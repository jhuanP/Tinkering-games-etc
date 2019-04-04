//query selector creation for front-end display
let myDiv = document.querySelector("#first");
//set style element for the div
myDiv.style.backgroundColor = "red";
let newDiv = document.querySelector("#second");
newDiv.style.backgroundColor = "white";

class People{
    constructor(firstName, lastName, age, job, gender){
      
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.job = job;
      this.gender = gender;
    }
        eat(){
        return `${this.firstName} is eating a meal`;
        //return `${this.firstName} is eating!`
    }//end eat method
        poop(){
            return `${this.firstName} is taking a poop, wish him luck`;
    }//ends poop
        hunting(){
            return `${this.firstName} is hunting for food`;
    }//ends hunting
        Driving(){
            return `${this.firstName} is traveling`;
    }//ends driving
        barfight(){
            return `${this.firstName} is in a fight`;
    }//ends barfight
        Church(){
            return `${this.firstName} is in church praising the lort`;
    }//ends church
        working(){
            //return`${this.firstName} is at work for the day");
        
            return `${this.firstName} is at work for the day!`
    }//ends working
        sleeping(){
            return `${this.firstName} is sound asleep`;
    }//ends sleeping
        watchingTv(){
            return `${this.firstName} is watching tv with lover`;
    }//ends watchingTv
} 

  
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
    let day = prompt("What day of the week is it");
    let today = day.toLowerCase();
    if(today.includes("sat")){
        myDiv.textContent = Jay.hunting();
        newDiv.textContent = "Its better to be the hunter than the prey";

    }else if(today.includes("sun")){
        myDiv.textContent = Jay.Church();
        newDiv.textContent = "Halelujerr!";

    }
    //if statement to narrow down which day it is
    else if(today.includes("mon") || today.includes("tue") || today.includes("wed") || today.includes("thu") || today.includes("fri") ){    
        //creating variable to compare for time of day
        let time = prompt("what time is it? (Military)");
        //if statements to call functions at given times 
        if ( time > 1700 && time <= 1800 || time == 700 && time <= 800){
            myDiv.textContent = Jay.Driving();
            newDiv.textContent = "Remember slow and steady wins the race";
            }else if (time >= 800 && time <= 1700 ){
                myDiv.textContent = Jay.working();
                newDiv.textContent = "Is he working Hard or hardly working?";
            }else if(time >= 2200 || time <= 600){
                myDiv.textContent = Jay.sleeping();
                newDiv.textContent = "Sweet Dreams Buttercup!";
            }else if (time > 1800 && time < 2200){
                myDiv.textContent = Jay.watchingTv();
                newDiv.textContent = "I hope its a good show!";
            }else{
                document.write("Please refresh page");
            }//closes else
        }//closes if 
    else{
        document.write("please refresh page");
    }//ends else
//Christian.eat();
    //console.log(Christian);
},500);