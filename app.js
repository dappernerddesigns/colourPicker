const boxOne = document.getElementById('box-one');
const boxTwo = document.getElementById('box-two');
const boxThree = document.getElementById('box-three');
const colourOne = document.getElementById('colour-one');
const colourTwo = document.getElementById('colour-two');
const colourThree = document.getElementById('colour-three');
// rgb colour randomiser variables

const rgbRandom = () => {
	const num = Math.floor(Math.random() * 256);

	return num;
};

const changeDiv = (id) => {
	console.log('single div', id);
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

const changeAllDivs = () => {
	console.log('all divs');
	boxOne.style.backgroundColor = `rgb(${rgbRandom()},${rgbRandom()}, ${rgbRandom()})`;
	boxTwo.style.backgroundColor = `rgb(${rgbRandom()},${rgbRandom()}, ${rgbRandom()})`;
	boxThree.style.backgroundColor = `rgb(${rgbRandom()},${rgbRandom()}, ${rgbRandom()})`;

	colourOne.innerText = boxOne.style.backgroundColor;
	colourTwo.innerText = boxTwo.style.backgroundColor;
	colourThree.innerText = boxThree.style.backgroundColor;
};
