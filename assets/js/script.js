var dayDisplay = document.getElementById("currentDay");

dayDisplay.innerHTML = moment().format('MMMM Do YYYY');

//Function that checks the time and applies appropriate colors to the timeblocks
function checkTime(){
    //Variable that holds current hour
    var time = moment().format('k');
    var timeParsed = parseInt(time);
    
    //Check if timeblock has passed and change to grey if it has
    if (timeParsed >= 9){
        document.getElementById("9").classList.add("past");
    }
    if (timeParsed >= 10){
        document.getElementById("10").classList.add("past");
    }
    if (timeParsed >= 11){
        document.getElementById("11").classList.add("past");
    }
    if (timeParsed >= 12){
        document.getElementById("12").classList.add("past");
    }
    if (timeParsed >= 13){
        document.getElementById("1").classList.add("past");
    }
    if (timeParsed >= 14){
        document.getElementById("2").classList.add("past");
    }
    if (timeParsed >= 15){
        document.getElementById("3").classList.add("past");
    }
    if (timeParsed >= 16){
        document.getElementById("4").classList.add("past");
    }

    //Check if it's the current timeblock and change to red
    if (timeParsed == 9){
        document.getElementById("9").classList.add("present");
    }
    if (timeParsed == 10){
        document.getElementById("10").classList.add("present");
    }
    if (timeParsed == 11){
        document.getElementById("11").classList.add("present");
    }
    if (timeParsed == 12){
        document.getElementById("12").classList.add("present");
    }
    if (timeParsed == 13){
        document.getElementById("1").classList.add("present");
    }
    if (timeParsed == 14){
        document.getElementById("2").classList.add("present");
    }
    if (timeParsed == 15){
        document.getElementById("3").classList.add("present");
    }
    if (timeParsed == 16){
        document.getElementById("4").classList.add("present");
    }
    if (timeParsed == 17){
        document.getElementById("5").classList.add("present");
    }
    

    //Changes future blocks to green
    if (timeParsed < 9){
        document.getElementById("9").classList.add("future");
    }
    if (timeParsed < 10){
        document.getElementById("10").classList.add("future");
    }
    if (timeParsed < 11){
        document.getElementById("11").classList.add("future");
    }
    if (timeParsed < 12){
        document.getElementById("12").classList.add("future");
    }
    if (timeParsed < 13){
        document.getElementById("1").classList.add("future");
    }
    if (timeParsed < 14){
        document.getElementById("2").classList.add("future");
    }
    if (timeParsed < 15){
        document.getElementById("3").classList.add("future");
    }
    if (timeParsed < 16){
        document.getElementById("4").classList.add("future");
    }
    
}

//Init function that runs when the page is opened
function init() {
    checkTime();
}

init();