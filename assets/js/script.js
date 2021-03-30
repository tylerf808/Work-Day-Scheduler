//Create an element var and make it display the current date
var dayDisplay = document.getElementById("currentDay");
dayDisplay.innerHTML = moment().format('MMMM Do YYYY');

//Variable that holds current hour in string and int
var time, timeParsed;
//Variable to hold input text
var inputTxt;

//Function that checks the time and applies appropriate colors to the timeblocks
function checkTime(){
    //Stores the time as a string and parsed int
    time = moment().format('k');
    timeParsed = parseInt(time);
}

function fillInRows(){
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

//Function to save text input into local storage
function saveText(event){
    //Var that hold the button clicked id
    var elId = event.target.id;

    //Switch statement that matches the input box to the target id
    switch(elId){
        case "9btn":
            inputTxt = document.getElementById('9').value;
            
            break;
        case "10btn":
            inputTxt = document.getElementById('10').value;
            
            break;
        case "11btn":
            inputTxt = document.getElementById('11').value;
            
            break;
        case "12btn":
            inputTxt = document.getElementById('12').value;
            
            break;
        case "1btn":
            inputTxt = document.getElementById('1').value;
            
            break;
        case "2btn":
            inputTxt = document.getElementById('2').value;
            
            break;
        case "3btn":
            inputTxt = document.getElementById('3').value;
            
            break;
        case "4btn":
            inputTxt = document.getElementById('4').value;
            
            break;
        case "5btn":
            inputTxt = document.getElementById('5').value;
            
            break;
    }

}

//Function to add event listeners to the buttons
function loadBtns(){
    document.querySelectorAll('.saveBtn').forEach(item => {
        item.addEventListener('click', saveText);
    });
}

//Init function that runs when the page is opened
function init() {
    checkTime();
    fillInRows();
    loadBtns();
}

init();