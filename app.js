
const colors = ["green",  "red", "rgba[133,122,200]", "#f15025"]

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener( 'click', () => {
    //get random number between 0 - 3 
    var randomNumber = Math.random()
    randomNumber *= 4
    var randomInt = Math.floor(randomNumber);

    document.body.style.backgroundColor = colors[randomInt]
    color.textContent = colors[randomInt]
})