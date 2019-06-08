console.log("ok");


let data = document.getElementById('card1')
// let img = document.getElementsByClassName('img1')
// console.log(img)

let randomuser1 = fetch("https://randomuser.me/api")
let randomuser2 = fetch("https://randomuser.me/api")
// let randomuser3 = fetch("https://randomuser.me/api")
// let randomuser4 = fetch("https://randomuser.me/api")
// let randomuser5 = fetch("https://randomuser.me/api")
// let randomuser6 = fetch("https://randomuser.me/api")
// randomuser1 = fetch("https://randomuser.me/api")
// randomuser1 = fetch("https://randomuser.me/api")
// randomuser1 = fetch("https://randomuser.me/api")
// randomuser10 = "https://randomuser.me/api"
// randomuser11 = "https://randomuser.me/api"
// randomuser12 = "https://randomuser.me/api"


// let randomusers =[fetch("https://randomuser.me/api"), fetch("https://randomuser.me/api"), fetch("https://randomuser.me/api"), fetch("https://randomuser.me/api"), 
// fetch("https://randomuser.me/api"),fetch("https://randomuser.me/api"), fetch("https://randomuser.me/api"), fetch("https://randomuser.me/api"), fetch("https://randomuser.me/api")
// ,fetch("https://randomuser.me/api"), fetch("https://randomuser.me/api"), fetch("https://randomuser.me/api")];



let randomusers =[];

for( let i = 0; i < 3 ; i++) {
	randomusers[i] = fetch("https://randomuser.me/api");
}
 
Promise.all(randomusers)
.then(users => {
	return users.forEach((user) =>  console.log(user.json()))
})

	
fetch("https://randomuser.me/api")
.then(data => data.json())
.then(response => console.log(response.results[0]))


// fetch("https://randomuser.me/api")
// .then(data => {
// 	return data.json();
// })
// .then(reponse => {
// 		let img = document.createElement("img")
		// data.appendChild(img)

// 		img.classList.add("radius")

// 		img.src = reponse.results[0].picture.thumbnail;

// 		// data.innerHTML = `<ul class='card-list'>`
// 		data.innerHTML += `<ul class='card-list'> 
// 							<li> ${reponse.results[0].name.first} ${reponse.results[0].name.last} </li>
// 							<li>  ${reponse.results[0].email} </li>							
// 							<li>  ${reponse.results[0].email} </li>	
// 							<li>  ${reponse.results[0].location.state} </li>	
// 		`;
// 		// data.innerHTML = data.innerHTML + reponse.results[0].gender
// 		data.innerHTML += `</ul>`;
		
// 		// data.innerHTML = data.innerHTML + "</h1>"
// }) 


