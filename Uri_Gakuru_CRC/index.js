const counter = document.querySelector(".counter-number");
async function updateCounter() {
	let response = await fetch("https://qfaavdvx3wvkbj4e5akae43zka0twdhp.lambda-url.us-east-1.on.aws/");
	let data = await response.json();
	counter.innerHTML = ' Views: ${data}';
}

updateCounter();
