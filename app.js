const boxOne = document.getElementById('box-one');
const boxTwo = document.getElementById('box-two');
const boxThree = document.getElementById('box-three');
const colourOne = document.getElementById('colour-one');
const colourTwo = document.getElementById('colour-two');
const colourThree = document.getElementById('colour-three');
const boxFour = document.getElementById('box-four');
const boxFive = document.getElementById('box-five');
const boxSix = document.getElementById('box-six');
const colourFour = document.getElementById('colour-four');
const colourFive = document.getElementById('colour-five');
const colourSix = document.getElementById('colour-six');
// rgb colour randomiser variables

const rgbRandom = () => {
	const num = Math.floor(Math.random() * 256);

	return num;
};

const hexRandom = () => {
	const randomColor = Math.floor(Math.random() * 16777215).toString(16);
	const hex = `#${randomColor}`;

	return hex;
};
const changeDivRGB = (id) => {
	if (id === 'One') {
		boxOne.style.backgroundColor = `rgb(${rgbRandom()},${rgbRandom()}, ${rgbRandom()})`;
		colourOne.innerText = boxOne.style.backgroundColor;
		console.log(boxOne.style.backgroundColor);
	}
	if (id === 'Two') {
		boxTwo.style.backgroundColor = `rgb(${rgbRandom()},${rgbRandom()}, ${rgbRandom()})`;
		colourTwo.innerText = boxTwo.style.backgroundColor;
	}
	if (id === 'Three') {
		boxThree.style.backgroundColor = `rgb(${rgbRandom()},${rgbRandom()}, ${rgbRandom()})`;
		colourThree.innerText = boxThree.style.backgroundColor;
	}
};

const changeAllDivsRGB = () => {
	boxOne.style.backgroundColor = `rgb(${rgbRandom()},${rgbRandom()}, ${rgbRandom()})`;
	boxTwo.style.backgroundColor = `rgb(${rgbRandom()},${rgbRandom()}, ${rgbRandom()})`;
	boxThree.style.backgroundColor = `rgb(${rgbRandom()},${rgbRandom()}, ${rgbRandom()})`;

	colourOne.innerText = boxOne.style.backgroundColor;
	colourTwo.innerText = boxTwo.style.backgroundColor;
	colourThree.innerText = boxThree.style.backgroundColor;
};

const changeDivHex = (id) => {
	if (id === 'four') {
		const hex = hexRandom();
		boxFour.style.backgroundColor = hex;
		colourFour.innerText = hex;
	}
	if (id === 'five') {
		const hex = hexRandom();
		boxFive.style.backgroundColor = hex;
		colourFive.innerText = hex;
	}
	if (id === 'six') {
		const hex = hexRandom();
		boxSix.style.backgroundColor = hex;
		colourSix.innerText = hex;
	}
};

const changeAllDivsHex = () => {
	const hexOne = hexRandom();
	const hexTwo = hexRandom();
	const hexThree = hexRandom();
	boxFour.style.backgroundColor = hexOne;
	boxFive.style.backgroundColor = hexTwo;
	boxSix.style.backgroundColor = hexThree;

	colourFour.innerText = hexOne;
	colourFive.innerText = hexTwo;
	colourSix.innerText = hexThree;
};
