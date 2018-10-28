let buttons = document.querySelectorAll("button");
 for(let but of buttons){
 	but.addEventListener("click", function(){
 		but.parentElement.children[1].style.textDecoration ="line-through";

 	});
 }
