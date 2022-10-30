
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

// for(i = 0; i < 256; i++) {
//   let gridPiece = document.createElement("div");
//   gridPiece.classList.add("gridPiece");
//   gridContainer.appendChild(gridPiece);
//   grid.push(gridPiece);
// }

// make a grid

// change anad show the grid size value
function showVal(newVal){
  gridSize=newVal;
  console.log(gridSize);
  return gridSize;
}

//make a new grid based on gridSize
// width is 640, so we well need to adjust the size of each div based on that.
function makeGrid(size) {
  //clear();
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
 
    piece.addEventListener('mouseenter', (event) => {
      {
        // if mouse is down 
        if(mouseDown){
          piece.style.backgroundColor = "black";
        }    }
      
    })
  })
  container.appendChild(gridContainer);
}

makeGrid(16);
// Set up a “hover” effect so that the grid divs change color when 
// your mouse passes over them, leaving a (pixelated) trail through 
// your grid like a pen would.


// check if mouse is down
let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

//clear function - make all backgrounds white
function clear(){
  grid.forEach(piece => {
    piece.style.backgroundColor = "white";
  })
}
clearButton.onclick = () => {
  clear();
  }
