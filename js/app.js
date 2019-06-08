let data = document.getElementById('card1')
//create the 12 card variables from doc

//TO DO
// create the 12 div card elements, name them card0 - crard 11
//in js, create a loop that loops 12 times, and inside that loop
// create a function that creates an img elemnt, appends it  to the inside card it is in,
//gives it the resective class, and puts the correct innerHTML from the json response, 
//incrementing i every loop so the function can access card[i] and give it the innerHTML
//of reponse.results[i]...., or use a while loop - just any loop tht will loop 12 times


//then create function that puts that information inside  modal box, for whichever card is clicked - click event listener, also probably use the 'tis '

fetch("https://randomuser.me/api/?results=12")
.then(data => {
	return data.json();
})
.then(reponse => {
	//replace this with function inside for loop, 12 times 
	//newuser function example created at the bottom
		let img = document.createElement("img")
		data.appendChild(img)
		img.classList.add("radius")
		img.src = reponse.results[0].picture.thumbnail;
		// data.innerHTML = `<ul class='card-list'>`
		data.innerHTML += `<ul class='card-list'> 
							<li> ${reponse.results[0].name.first} ${reponse.results[0].name.last} </li>
							<li>  ${reponse.results[0].email} </li>							
							<li>  ${reponse.results[0].email} </li>	
							<li>  ${reponse.results[0].location.state} </li>	
		`;
		// data.innerHTML = data.innerHTML + "</ul>"
		//same as... 
		data.innerHTML += `</ul>`;
		//fucntion demostation inside promise, newuser function exmaple, logs the specific data to the console
		console.log(newuser(reponse.results[1].email + "you bitch!"))
}) 
//fucntion delcaration to use inside promise - example for testing purposes to make sure it works,
let newuser = (user) => {
	return user
}

newuser("hello!!!!");