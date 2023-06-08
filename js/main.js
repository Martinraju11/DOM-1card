



var sect = document.getElementById("team");
var div1 = document.createElement("div");
sect.appendChild(div1);
div1.classList.add("container");




var image = document.createElement("img");
div1.appendChild(image);
image.src = "images/blog-1.jpg";

var para1 = document.createElement("p");
div1.appendChild(para1);
para1.classList.add("paras");
para1.innerHTML = "Tue, December 12 / Julia Parker";

var heading = document.createElement("h3");
div1.appendChild(heading);
heading.classList.add("head");
heading.innerHTML = "Eum ad dolor et. Autem aut fugiat debitis";

var para2 = document.createElement("p");
div1.appendChild(para2);
para2.classList.add("para-bottom");
para2.innerHTML = "Illum voluptas ab enim placeat. Adipisci enim velit nulla. Vel omnis laudantium. Asperiores eum ipsa est officiis. Modi qui magni est";

var link = document.createElement("a");
div1.appendChild(link);
link.classList.add("links");
link.innerHTML = "Read More";
link.setAttribute("href", "#");
