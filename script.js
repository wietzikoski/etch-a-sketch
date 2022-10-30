
//Create a webpage with a 16x16 grid of square divs.
/*
make the container div width 16x the size of grid piece
no margin no padding. will do flexbox, wrap. 

start with each grid piece being 40px x 40px.

256 grid pieces in total.

will create and put into an array, using a for loop
*/


const body = document.body;
const container = document.getElementById("container");
const gridContainer = document.createElement("div");
const containerStyle = container.style;
gridContainer.classList.add("grid-container");
const clearButton = document.getElementById("clear");

let gridSize = document.getElementById('gridSize').value;


// array to store my grid pieces
const grid = [];


// change anad show the grid size value
function showVal(newVal){
  gridSize=newVal;
  return gridSize;
}

const randomButton = document.getElementById("randomColor");
randomButton.onclick = () => {
  randomButton.classList.toggle('active');
}
function checkActive(button) {
  if(button.classList.contains('active')){
    return true;
  } else{ 
    return false;
  }
}

// check if mouse is down
let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)


// create random color
function randomNumber(){
  return Math.floor(Math.random() * 256);

  //'rgb(' + randomNumber() + ',' + randomNumber() + ',' + randomNumber() + ')';
}
//make a new grid based on gridSize
// width is 640, so we well need to adjust the size of each div based on that.
function makeGrid(size) {
  //clear
  gridContainer.innerHTML = "";
  for(i = 0; i < size * size; i++){
    let gridPiece = document.createElement("div");
    gridPiece.classList.add("gridPiece");
    gridPiece.style.height = 640/size + "px";
    gridPiece.style.width = 640/size + "px";
    gridContainer.appendChild(gridPiece);
    grid.push(gridPiece);
  }
  grid.forEach(piece => {
    
    piece.addEventListener('click', (event) => {
      if (checkActive(randomButton)) {
        piece.style.backgroundColor = 'rgb(' + randomNumber() + ',' + randomNumber() + ',' + randomNumber() + ')';
      }
      else
      piece.style.backgroundColor = "black";
    })
    piece.addEventListener('mouseenter', (event) => {
      {
        // if mouse is down 
        if(mouseDown){
          if (checkActive(randomButton)) {
            piece.style.backgroundColor = 'rgb(' + randomNumber() + ',' + randomNumber() + ',' + randomNumber() + ')';
          } 
          else
          piece.style.backgroundColor = "black";
        }    
      }
    })
  })
  container.appendChild(gridContainer);
}


// set original grid as 16 x 16
makeGrid(16);
// Set up a “hover” effect so that the grid divs change color when 
// your mouse passes over them, leaving a (pixelated) trail through 
// your grid like a pen would.

//clear function - make all backgrounds white
function clear(){
  grid.forEach(piece => {
    piece.style.backgroundColor = "white";
  })
}
clearButton.onclick = () => {
  clear();
  }
