const button = document.getElementById("change-color")
const headerText = document.getElementById("header-text")
const colorBox = document.getElementById("color-box")
const colorName = document.getElementById("color-box")
const colors = ["green", "red", "rgba(133,122,200)", "#f15025","purple","rgb(255,192,203)","rgb(255,182,193)"

]



function randomNumber(){ 
    return Math.floor(Math.random()*colors.length)
}



button.addEventListener("click",function(){

console.log( colors[randomNumber()])
  colorBox.style.backgroundColor = colors[randomNumber()]
  headerText.style.color = colors[randomNumber()]
  

})

 





