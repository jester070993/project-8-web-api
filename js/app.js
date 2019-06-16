

const users = document.getElementsByClassName("user");//returns array-like object HTML collection of html dom elements where info will be place
const cards  = document.getElementsByClassName("card");

//modal variables
const modal = document.getElementById("modalBox");
let modalContent = document.getElementById("greyBox");
//overlay variables
const nameOverlay = document.getElementsByClassName("nameOverlay")[0];
const emailOverlay = document.getElementsByClassName("emailOverlay")[0];
const overlayInfo = document.getElementsByClassName("overlayInfo")[0];

let greyBox = document.querySelector("#greyBox")

			const extraInfo = document.querySelector(".extraInfo")

console.log(greyBox)

console.log(nameOverlay, emailOverlay)

fetch("https://randomuser.me/api/?results=20")
.then(data => {
	return data.json();
})
.then(reponse => {

	for (let i = 0 ; i < 20 ; i++){
		let img = document.createElement("img")
			users[i].appendChild(img)
			img.classList.add("radius")
			img.src = reponse.results[i].picture.thumbnail;
		let firstName = reponse.results[i].name.first;
		let lastName = reponse.results[i].name.last;
		let firstChar = firstName.charAt(0).toUpperCase();
		let lastChar = lastName.charAt(0).toUpperCase();
			firstName = firstChar + firstName.slice(1);
			lastName = lastChar + lastName.slice(1);
		let location = reponse.results[i].location.state

		let locationFirstChar = location.charAt(0).toUpperCase();
			location = locationFirstChar + location.slice(1);

		users[i].innerHTML +=  `<ul class='card-list '> 
							<li class="name"> ${firstName} ${lastName} </li>
							<li class="email">  ${reponse.results[i].email} </li>							
							<li class="city">  ${location} </li>	
							</ul>
							<hr>
							<ul class="extraInfo">
								<li> ${reponse.results[i].phone}</li>
								<li> ${reponse.results[i].phone}</li>
								<li> ${reponse.results[i].phone}</li>

							</ul>					
		`;


		// if (modal.style.display == "none"){
			// console.log(reponse.results[i].phone)
			// if (modal.style.display){
			// 	console.log(reponse.results[i].phone)

			// }
	// <li class="phone">  ${reponse.results[i].phone} </li>
		
	}
		//fucntion demostation inside promise, newuser function exmaple, logs the specific data to the console
		console.log(newuser(reponse.results[1].email + "you bitch!"))
}) ;
//fucntion delcaration to use inside promise - example for testing purposes to make sure it works,
let newuser = (user) => {
	return user
}

newuser("hello!!!!");

Array.from(cards).forEach(card => { //"cards" returns an HTML nodelist collection, which is ARRAY-LIKE, but actaully an object - neeto use .form() to turn it into array
	card.addEventListener("click", function(e){
		// console.log(e.target)
		modal.style.display = "flex";
			greyBox.innerHTML += this.innerHTML;
			// console.log(this.className)
			console.log(greyBox.firstElementChild.className); 

			greyBox.firstElementChild.className = "" ;
			greyBox.firstElementChild.className = "givenLayout";
			// greyBox.firstElementChild.classList.add = "givenLayout"

			greyBox.lastElementChild.lastElementChild.style.display  = "block" ;


			// this.style.display = "inline"
			// greyBox.lastElementChild	// this.className = "cardLayout"
		modal.addEventListener("click", function(e){
			// console.log(e.target.id)
			if(e.target.tagName == "SPAN" || e.target.id == "modalBox"){
				modal.style.display = "none";
				greyBox.innerHTML = "" ;
				// this.className = "user"
			}
		})

	})
})





