let countries = ["Kazakhstan","Russia","England","France"];
let cities_by_country = {"Kazakhstan":["Almaty","Astana","Karagandy"],"Russia":["Moscow","Saint-Petersburg","Kazan"],"England":["London","Manchester","Liverpool"],"France":["Paris","Lyon","Marseille"]};

let country_elements = document.querySelector("#countries");
let cities_elements = document.querySelector("#cities");

for(let i=0; i<countries.length; i++){
 	let sds = document.createElement("option");
 	sds.textContent = countries[i];
 	country_elements.appendChild(sds);
	//country_elements.innerHTML += "<option>" + countries[i] +"</option>";
}
function Def(){

	cities_elements.innerHTML = "";
	for(let i of cities_by_country[event.currentTarget.value]){
		console.log(i);
		let sds1 = document.createElement("option");
		sds1.textContent = i;
		cities_elements.appendChild(sds1);
	}
}
document.querySelector("select").addEventListener("change", Def);

