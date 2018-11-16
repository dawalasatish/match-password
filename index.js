var x,y;
x=y=0;
function logMouse(e){
x = event.clientX;     // Get the horizontal coordinate
y = event.clientY;     // Get the vertical coordinate
coor = "X coords: " + x + ", Y coords: " + y;
document.getElementByid("demo").innerHTML=coor;
}
