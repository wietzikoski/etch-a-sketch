
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

// array to store my grid pieces
const grid = [];

for(i = 0; i < 256; i++) {
  let gridPiece = document.createElement("div");
  gridPiece.classList.add("gridPiece");
  gridPiece.setAttribute('id', `piece-${i}`);
  gridContainer.appendChild(gridPiece);
  grid.push(gridPiece);
}


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

grid.forEach(piece => {
  if(mouseDown){
    piece.style.backgroundColor === "black";
  }
  
  piece.addEventListener('mouseenter', (event) => {
    {
      // if mouse is down 
      if(mouseDown){
        piece.style.backgroundColor = "black";
      }    }
    
  })
})



body.appendChild(gridContainer);
