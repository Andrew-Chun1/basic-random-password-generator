/* Length
Characters:
- capitals
- lowercase
- spec char
- number 

*/
function generate() {
	const m = document.getElementById("length");
	const length = m.value;
	m.value = "";

	if (length < 8) {
		return alert("Your password should be at least 8 characters.");
	}
	const uppercase = document.getElementById("uppercase").checked;
	const lowercase = document.getElementById("lowercase").checked;
	const special = document.getElementById("special").checked;
	const numbers = document.getElementById("numbers").checked;

	let count = 0;
	if (uppercase) {
		count++;
	}
	if (lowercase) {
		count++;
	}
	if (special) {
		count++;
	}
	if (numbers) {
		count++;
	}
	console.log(count);

	// if (count < 2) {
	// 	return alert("You should want a stronger password");
	// }

	let passwordArray = [];
	for (let i = 0; i < length; i++) {
		const randomNum = Math.floor(Math.random() * 4);
		console.log(randomNum);

		if (randomNum === 0) {
			if (uppercase === true) {
				passwordArray.push(uppercaseGenerator());
				console.log(passwordArray);
			}
			if (uppercase === false) {
				i--;
			}
		}
		if (randomNum === 1) {
			if (lowercase === true) {
				passwordArray.push(lowercaseGenerator());
			} else if (lowercase === false) {
				i--;
			}
		}
		if (randomNum === 2) {
			if (special === true) {
				passwordArray.push(specialcaseGenerator());
			} else if (special === false) {
				i--;
			}
		}
		if (randomNum === 3) {
			if (numbers === true) {
				passwordArray.push(numbersGenerator());
			} else if (numbers === false) {
				i--;
			}
		}
	}
	if (passwordArray.length > length) {
		return -1;
	}
	const passwordString = passwordArray.join("").toString();
	console.log(passwordString);
	const previous = document.getElementById("history");
	previous.value = passwordString;
}

function uppercaseGenerator() {
	const uppercaseChar = Math.floor(Math.random() * (90 - 65) + 65);
	console.log(uppercaseChar);
	return String.fromCharCode(uppercaseChar);
}

function lowercaseGenerator() {
	const lowerCharNum = Math.floor(Math.random() * (122 - 97) + 97);
	return String.fromCharCode(lowerCharNum);
}

function specialcaseGenerator() {
	const randomNum = Math.floor(Math.random(4));
	const specialCharNumOne = Math.floor(Math.random() * (47 - 33) + 33);
	const speicalCharNumTwo = Math.floor(Math.random() * (64 - 58) + 58);
	const specialCharNumThree = Math.floor(Math.random() * (96 - 91) + 91);
	const specialCharNumFour = Math.floor(Math.random() * (126 - 123) + 123);
	if (randomNum === 0) {
		return String.fromCharCode(specialCharNumOne);
	} else if (randomNum === 1) {
		return String.fromCharCode(speicalCharNumTwo);
	} else if (randomNum === 2) {
		return String.fromCharCode(specialCharNumThree);
	} else {
		return String.fromCharCode(specialCharNumFour);
	}
}

function numbersGenerator() {
	const randomNumChar = Math.floor(Math.random() * (57 - 48) + 48);
	return String.fromCharCode(randomNumChar);
}

function copyFunction() {
	var copyText = document.getElementById("history");

	// Select the text field
	copyText.select();
	copyText.setSelectionRange(0, 99999); // For mobile devices

	// Copy the text inside the text field
	navigator.clipboard.writeText(copyText.value);

	// Alert the copied text
	alert("Copied the text: " + copyText.value);
}
