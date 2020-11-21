var numSquares = 6;
var colors=generateRandomColors(numSquares);
var pickedcolor=pickColor();
var colordisplay=document.getElementById("colordisplay")
var squares=document.querySelectorAll(".square");
var message=document.querySelector("#message");
var myh1=document.getElementById("myh1");
var resetbutton=document.getElementById("reset");
var modeButtons=document.querySelectorAll(".mode");



colordisplay.textContent=pickedcolor;
for(var i=0;i<squares.length;i++){
    // add initial colors to the squares
    squares[i].style.backgroundColor=colors[i];
    
    squares[i].addEventListener("click",function(){
        // grab color of the clicked square
        var clickedcolor=this.style.backgroundColor
        // compare color to picked color
        if(clickedcolor===pickedcolor){
            message.textContent="Correct!!";
            changeColors(clickedcolor);
            myh1.style.backgroundColor=clickedcolor;
            resetbutton.textContent="Play Again?";
        }
        else{
            this.style.backgroundColor="#232323";
            message.textContent="Try Again!!";
        }
    });
    
}
function changeColors(color){
    //loop through all squares
    for(var i=0;i<squares.length;i++){
    //change all the colors with the given color
    squares[i].style.backgroundColor=color;
    }
}

// Creating color picker
function pickColor(){
    var random=Math.floor(Math.random()*colors.length)
    return colors[random];
}

//Generating random colors
function generateRandomColors(num){
    // make an array
    var arr=[];
    // add num random colors to the array
    for(var i=0;i<num;i++)
    {
        arr.push(randomColors());
    }
    // return the array
    return arr;
}
//Creating random colors
function randomColors(){
    // pick a "red","green","blue" between 0-255
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);

    return "rgb("+ r + ", " + g+ ", " + b +")";// The spaces are required because whenever we create a rgb in css by default the spaces are added
    // so to match with the css code we add the spaces

}

// New Colors Button
resetbutton.addEventListener("click",function(){
    //generate new colors
    reset();
});

for(var i=0;i<modeButtons.length;i++)
{
    modeButtons[i].addEventListener("click",function(){
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        this.classList.add("selected");
        
        this.textContent==="Easy"?numSquares=3 : numSquares=6;//we can use if else too
        reset();
    });
}

function reset(){
    colors=generateRandomColors(numSquares);
    //pick a new color from the colors array
    pickedcolor=pickColor();
    // change color display to match the picked color
    colordisplay.textContent=pickedcolor;

    message.textContent="";
    //change the colors of the squares
    for(var i=0;i<squares.length;i++)
    {
        if(colors[i]){
            squares[i].style.display="block";
            squares[i].style.backgroundColor=colors[i];
        }
        else{
            squares[i].style.display="none";
        }
        squares[i].style.backgroundColor=colors[i];
    }
    myh1.style.backgroundColor="steelblue";
    resetbutton.textContent="New Colors";
}
