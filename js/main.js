

function yes() {
  var x = document.getElementById("addressInfo");
  let y = "We apology, but this maybe not be the best section for you, check our FAQ page for more info";
  if (x.style.display === "block") {
    x.style.display = "none";
    document.getElementById("notCanada").innerHTML = y;
    
  } 
}




function no(){
  var z = document.getElementById("addressInfo");
  if (z.style.display === "none") {
    z.style.display = "block";
    document.getElementById("notCanada").innerHTML = " ";
    
  } else {
    z.style.display = "block";
  }
}



// function yes() {
//   var x = document.getElementById("addressInfo");
//   let y = "We apology, but this maybe not be the best section for you, check our FAQ page for more info";
//   if (x.style.display === "block") {
//     x.style.display = "none";
//   } 
// }




// function no(){
//   var z = document.getElementById("addressInfo");
//   if (z.style.display === "none") {
//     z.style.display = "block";
//   } else {
//     z.style.display = "block";
//   }
// }




