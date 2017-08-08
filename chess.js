
var peshka = '<img src="peshka.png"></img>';
var count = 1; 
var figureTop = ['L','E','H','K','Q','H','E','L'];
var figureBot = ['LB','EB','HB','QB','KB','HB','EB','LB'];


for (var i = 1 ; i < 9 ; i++) {
 
  for (var j = 1; j < 9 ; j++) {
   
    var cell = document.createElement("div");

    cell.classList.add(count);
    
    if ((i+j)%2==0) {
      cell.classList.add("black");
  }

  cell.classList.add(i);
  chess.appendChild(cell);


    if (i==2) {
      cell.className += " Pesh";
    }
    if (i==7) {
      cell.className += " Black_Pesh";
    }

    if (i==1) {
      cell.className += " " + figureTop[j-1];
    }
    if (i==8) {
      cell.className += " " + figureBot[j-1];
    }


  count++;
  }
}



