

const users = document.getElementsByClassName("user");//returns array-like object HTML collection of html dom elements where info will be place
const cards  = document.getElementsByClassName("card");
//modal variables
const modal = document.getElementById("modalBox");
let modalContent = document.getElementById("greyBox");
//overlay variables
const nameOverlay = document.getElementsByClassName("nameOverlay")[0];
const emailOverlay = document.getElementsByClassName("emailOverlay")[0];
const overlayInfo = document.getElementsByClassName("overlayInfo")[0];
let greyBox = document.querySelector("#greyBox");
const extraInfo = document.querySelector(".extraInfo");


fetch("https://randomuser.me/api/?results=20")
.then(data => {
	return data.json();
})  
.then(reponse => {

	for (let i = 0 ; i < 20 ; i++){
		let img = document.createElement("img");
			users[i].appendChild(img);
			img.classList.add("radius");
			img.src = reponse.results[i].picture.thumbnail;
			//capitalizes names
		let firstName = reponse.results[i].name.first;
		let lastName = reponse.results[i].name.last;
		let firstChar = firstName.charAt(0).toUpperCase();
		let lastChar = lastName.charAt(0).toUpperCase();
			firstName = firstChar + firstName.slice(1);
			lastName = lastChar + lastName.slice(1);

			//capitalizes every word of location
		let location = reponse.results[i].location.state;
			location = location.split(" ").map(word =>	word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
			//ensures on the length of the dob is posted
		let dob = reponse.results[i].dob.date.slice(0, 10);
			//capitalizes every word for street data 
		let street = reponse.results[i].location.street;
		street = street.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
			//capitalizes every word for city
		let city = reponse.results[i].location.city;
			   city = city.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");

		users[i].innerHTML +=  `<ul class='card-list '> 
							<li class="name"> ${firstName} ${lastName} </li>
							<li class="email">  ${reponse.results[i].email} </li>							
							<li class="city">  ${location} </li>	
							</ul>
							<hr>
							<ul class="extraInfo">
								<li> ${reponse.results[i].phone}</li>
								<li> ${street} ${city} ${location}, ${reponse.results[i].location.postcode} </li>
								<li> DOB: ${dob}</li>
								<div class="iconContainer"><span class="fas fa-times-circle icon"></span></div>
							</ul>`;
		
	}
}) ;

Array.from(cards).forEach(card => { //"cards" returns an HTML nodelist collection, which is ARRAY-LIKE, but actaully an object - neeto use .form() to turn it into array
	card.addEventListener("click", function(e){
		// console.log(e.target)
		modal.style.display = "flex";
			greyBox.innerHTML += this.innerHTML;
			greyBox.firstElementChild.className = "" ;
			greyBox.firstElementChild.className = "givenLayout";
			greyBox.lastElementChild.lastElementChild.style.display  = "block";
		modal.addEventListener("click", function(e){
			// console.log(e.target.id)
			if(e.target.tagName == "SPAN" || e.target.id == "modalBox"){
				modal.style.display = "none";
				greyBox.innerHTML = "" ;
			}
		});
	});
});





