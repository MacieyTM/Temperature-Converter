const converter = document.querySelector("#converter");
const result = document.querySelector(".result");
const convBtn = document.querySelector(".conv");
const resetBtn = document.querySelector(".reset");
const changeBtn = document.querySelector(".change");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
let f;
let c;

const changing = () => {
	if (one.textContent === "°C") {
		one.textContent = "°F";
		two.textContent = "°C";
		result.textContent = "";
	} else {
		two.textContent = "°F";
		one.textContent = "°C";
		result.textContent = "";
	}
};

const changedegrees = () => {
	if (one.textContent === "°F") {
		f = (converter.value - 32) / 1.8;
		result.textContent = `${converter.value}°F to ${f.toFixed(2)}°C`;
		converter.value = "";
	} else {
		c = converter.value * 1.8 + 32;
		result.textContent = `${converter.value}°C to ${c.toFixed(2)}°F`;
		converter.value = "";
	}
};

const ifEmpty = () => {
	if (converter.value === "")
		result.textContent = "Musisz podać jakąś wartość!";
	else changedegrees();
};

const restart = () => {
	converter.value = "";
	result.textContent = "";
};

changeBtn.addEventListener("click", changing);
convBtn.addEventListener("click", ifEmpty);
resetBtn.addEventListener("click", restart);
