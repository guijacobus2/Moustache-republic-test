// Get the container element
var btnContainer = document.getElementById("myDIV");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("btns");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
  
      // If there's no active class
      if (current.length > 0) {
        current[0].className = current[0].className.replace(" active", "");
      }
  
      // Add the active class to the current/clicked button
      this.className += " active";
    });
  }

// 3 functions to change the selected size text
function selectFunction1() {
    document.getElementById("size").innerHTML = "S";
}

function selectFunction2() {
    document.getElementById("size").innerHTML = "M";
}

function selectFunction3() {
    document.getElementById("size").innerHTML = "L";
}

var myCart = document.getElementById("myCart");

myCart.onclick = function () {
    if (this.style.backgroundColor = '#F6F6F7') {
        this.style.backgroundColor = 'white';
    }   
}