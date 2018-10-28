// const current = document.querySelector("#bigImage");
// const imgs = document.querySelector("#carousel img");
//  // for(var i=0; i<imgs.lentgth; i++){
//  // 	imgs[i].addEventListener('click', e => 
//  // 		(current.src = e.currentTarget.src));
//  // }
//   imgs.forEach(img => 
//   	img.addEventListener('click', e => 
//   		(current.src = e.currentTarget.src)));
function makeBig(event){
    let src = event.currentTarget.getAttribute("src");
    document.getElementsByTagName("img")[0].setAttribute("src",src);
}
let images = document.getElementsByTagName("img");
for(let i = 0; i < images.length; i++ ){
    images[i].addEventListener('click',makeBig);
}