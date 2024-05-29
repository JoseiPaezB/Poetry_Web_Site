var grid_item2= document.getElementById('grid-item2')[0,1];

grid_item2.addEventListener("touchstart", function() {
   grid_item2.classList.add("grid-item2-hover");


})
grid_item2.addEventListener("touchend", function() {
    grid_item2.classList.remove("grid-item2-hover");
 
 
 })
