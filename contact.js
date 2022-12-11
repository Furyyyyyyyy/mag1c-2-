window.onload = function() {
    //Get the DOM element that represents the <button> element.
    //And set the onclick event
    document.getElementById("contact").onclick = function(){
       //Set a variable to contain the DOM element of the overly
       var overlay = document.getElementById("overlay");
       //Set a variable to contain the DOM element of the popup
       var popup = document.getElementById("popup");
       
       //Changing the display css style from none to block will make it visible
       overlay.style.display = "block";
       //Same goes for the popup
       popup.style.display = "block";
    };
 };