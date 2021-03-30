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
        document.getElementById("0").classList.add("past");
    }
    if (timeParsed >= 10){
        document.getElementById("1").classList.add("past");
    }
    if (timeParsed >= 11){
        document.getElementById("2").classList.add("past");
    }
    if (timeParsed >= 12){
        document.getElementById("3").classList.add("past");
    }
    if (timeParsed >= 13){
        document.getElementById("4").classList.add("past");
    }
    if (timeParsed >= 14){
        document.getElementById("5").classList.add("past");
    }
    if (timeParsed >= 15){
        document.getElementById("6").classList.add("past");
    }
    if (timeParsed >= 16){
        document.getElementById("7").classList.add("past");
    }

    //Check if it's the current timeblock and change to red
    if (timeParsed == 9){
        document.getElementById("0").classList.add("present");
    }
    if (timeParsed == 10){
        document.getElementById("1").classList.add("present");
    }
    if (timeParsed == 11){
        document.getElementById("2").classList.add("present");
    }
    if (timeParsed == 12){
        document.getElementById("3").classList.add("present");
    }
    if (timeParsed == 13){
        document.getElementById("4").classList.add("present");
    }
    if (timeParsed == 14){
        document.getElementById("5").classList.add("present");
    }
    if (timeParsed == 15){
        document.getElementById("6").classList.add("present");
    }
    if (timeParsed == 16){
        document.getElementById("7").classList.add("present");
    }
    if (timeParsed == 17){
        document.getElementById("8").classList.add("present");
    }
    

    //Changes future blocks to green
    if (timeParsed < 9){
        document.getElementById("0").classList.add("future");
    }
    if (timeParsed < 10){
        document.getElementById("1").classList.add("future");
    }
    if (timeParsed < 11){
        document.getElementById("2").classList.add("future");
    }
    if (timeParsed < 12){
        document.getElementById("3").classList.add("future");
    }
    if (timeParsed < 13){
        document.getElementById("4").classList.add("future");
    }
    if (timeParsed < 14){
        document.getElementById("5").classList.add("future");
    }
    if (timeParsed < 15){
        document.getElementById("6").classList.add("future");
    }
    if (timeParsed < 16){
        document.getElementById("7").classList.add("future");
    }
    
}

//Function to save text input into local storage
function saveText(event){
    //Var that hold the button clicked id
    var elIdTemp = event.target.id;
    var elId = elIdTemp.replace('btn','');

    //Switch statement that matches the input box to the target id
    switch(elId){
        case "9":
            inputTxt = document.getElementById('0').value;
            storeTxt(inputTxt, 0);
            break;
        case "10":
            inputTxt = document.getElementById('1').value;
            storeTxt(inputTxt, 1);
            break;
        case "11":
            inputTxt = document.getElementById('2').value;
            storeTxt(inputTxt, 2);
            break;
        case "12":
            inputTxt = document.getElementById('3').value;
            storeTxt(inputTxt, 3);
            break;
        case "1":
            inputTxt = document.getElementById('4').value;
            storeTxt(inputTxt, 4);
            break;
        case "2":
            inputTxt = document.getElementById('5').value;
            storeTxt(inputTxt, 5);
            break;
        case "3":
            inputTxt = document.getElementById('6').value;
            storeTxt(inputTxt, 6);
            break;
        case "4":
            inputTxt = document.getElementById('7').value;
            storeTxt(inputTxt, 7);
            break;
        case "5":
            inputTxt = document.getElementById('8').value;
            storeTxt(inputTxt, 8);
            break;
    }

}

//Function to store the text to local storage
function storeTxt(txt, idForKey){
    var id = idForKey;
    var text = txt;
    localStorage.setItem(id, text);
}

//Function to add saved text and event listeners to the buttons
function loadBtns(){
    //Add buttons
    document.querySelectorAll('.saveBtn').forEach(item => {
        item.addEventListener('click', saveText);
    });

    //Add text
    document.querySelectorAll(".col-10").forEach(item => {
        item.value = localStorage.getItem(item.id);
    })
}

//Init function that runs when the page is opened
function init() {
    checkTime();
    fillInRows();
    loadBtns();
}

init();