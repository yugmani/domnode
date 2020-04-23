
//Accessing the div element with id="div1"
var div1 = document.getElementById("div1");
var div1_title = div1.title;
window.alert("Title value of div1 is " + div1_title);

//creating new div element with a text and title value
var div2 = document.createElement("div")
let text = "<p>See You!</p>";
div2.innerHTML = text;
div2.title = "Lucky!";

//appending div2 as a child of div1.
div1.appendChild(div2);

