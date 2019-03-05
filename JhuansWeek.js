
let myDiv = document.querySelector("#first");
myDiv.style.backgroundColor = "blue";

class People{
    constructor(firstName, lastName, age, job, gender){
      
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.job = job;
      this.gender = gender;
    }
        eat(){
        document.write(this.firstName +" is eating a meal");
        //return `${this.firstName} is eating!`
    }//end eat method
        poop(){
            document.write(this.firstName +" is taking a poop, wish him luck");
    }//ends poop
        hunting(){
            document.write(this.firstName +" is hunting for food");
    }//ends hunting
        Driving(){
            document.write(this.firstName +" is traveling");
    }//ends driving
        barfight(){
            document.write(this.firstName +" is in a fight");
    }//ends barfight
        Church(){
            document.write(this.firstName +" is in church praising the lort");
    }//ends church
        working(){
            //document.write(this.firstName +" is at work for the day");
        
            return `${this.firstName} is at work for the day!`
    }//ends working
        sleeping(){
            document.write(this.firstName +" is sound asleep");
    }//ends sleeping
        watchingTv(){
            document.write(this.firstName +" is watching tv with lover");
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
   setTimeout(function (){
    let day = prompt("What day of the week is it");
    let today = day.toLowerCase();
    if(today.includes("sat")){
        myDiv.textContent = Jay.hunting();
    }else if(today.includes("sun")){
        myDiv.textContent = Jay.Church();
    }
    //if (day.toLowerCase() == "Monday" || day.toLowerCase() == "Tuesday"){
    else if(today.includes("mon") || today.includes("tue") || today.includes("wed") || today.includes("thu") || today.includes("fri") ){    
        let time = prompt("what time is it? (Military)");
        if ( time > 1700 && time <= 1800 || time == 700 && time <= 800){
            myDiv.textContent = Jay.Driving();
            }else if (time >= 800 && time <= 1700 ){
                myDiv.textContent = Jay.working();
            }else if(time >= 2200 || time <= 600){
                myDiv.textContent = Jay.sleeping();
            }else if (time > 1800 && time < 2200){
                myDiv.textContent = Jay.watchingTv();
            }else{
                document.write("Please refresh page");
            }
        }//ends if 
    else{
        document.write("please refresh page");
    }//ends else
//Christian.eat();
    //console.log(Christian);
},500);