// function doSomething() {
//     console.log('this is delayed')
// };

// // 1000 == 1 Second
// setTimeout(doSomething, 10000);


//Bring in the elements from the index file
const changeColorBtn = document.getElementById('changeColorBtn');
const cancelColorBtn = document.getElementById('cancelColorBtn');
const boxEl = document.getElementById('box');

//Create an array with different colors
const colors = ['DBFE87', 'FFE381', 'CEC288', '6F8695', '1C448E', '476A6F', '519E8A', '7EB09B', 'C5C9A4', 'ECBEB4'];


//add Event Listeners to the Buttons
changeColorBtn.addEventListener('click', onChangeColorClick);

//Define an element which can be used as the timerID for clearTimeout()
let timerId = 0;

//Create a function that changes the color after a set amount of time
function onChangeColorClick() {
    timerId = setTimeout(changeColor, 3000)// 1000ms == 1s
    changeColorBtn.disabled = true;
}

//Create a function which changes the color after a 2 second delay
function changeColor() {
    //Randomise colors
    let randomColor = colors[Math.trunc(Math.random() * colors.length)];

    changeColorBtn.disabled = false;
    if (boxEl.style.backgroundColor == 'white') {
        boxEl.style.backgroundColor = `#${randomColor}`
    } else if (boxEl.style.backgroundColor = `#${randomColor}`) {
        boxEl.style.backgroundColor = `#${randomColor}`;

    }

}

cancelColorBtn.addEventListener('click', onCancelColorClick);

//Create a function which cancels the timer using the timerId variable
function onCancelColorClick() {
    clearTimeout(timerId)
    changeColorBtn.disabled = false;
}


