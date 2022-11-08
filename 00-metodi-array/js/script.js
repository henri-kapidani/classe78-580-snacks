// arr = [2, 5, 10];
// arr.forEach((ele, i) => {
//   console.log(i)
// })

// arr.forEach(qualcosaDaFare);

// arr.forEach(function (ele) {
//   console.log(ele);
// })

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// function qualcosaDaFare(elemento, indice, arrayIntero) {
//   console.log(indice);
// }

// qualcosaDaFare(2, 0, [2, 5, 10])
// qualcosaDaFare(5, 1, [2, 5, 10])
// qualcosaDaFare(10, 2, [2, 5, 10])



arrNum = [2, 50, 25, 10];



// GENERARE ARRAY CON I VALORI RADDOPPIATI RISPETTO ALL'ORIGINALE

// con ciclo for
const arrNumDoubleFor = [];
for (let i = 0; i < arrNum.length; i++) {
	arrNumDoubleFor.push(arrNum[i] * 2);
}
console.log(arrNumDoubleFor); // [4, 100, 50, 20]

// con metodo forEach
const arrNumDoubleForEach = [];
arrNum.forEach(number => arrNumDoubleForEach.push(number * 2));
console.log(arrNumDoubleForEach); // [4, 100, 50, 20]

// con metodo map
const arrResults = arrNum.map(number => number * 2); // [4, 100, 50, 20]



// FILTRARE UN ARRAY

// con ciclo for
const evenNumsFor = [];
for (let i = 0; i < arrNum.length; i++) {
	if (arrNum[i] % 2 === 0) {
		evenNumsFor.push(arrNum[i]);
	}
}
console.log(evenNumsFor); // [2, 50, 10]

// con metodo filter
const evenNumsFilter = arrNum.filter(number => number % 2 === 0);
console.log(evenNumsFilter); // [2, 50, 10]

// con metodo map (NON adatto a filtrare)
const evenNumsMap = arrNum.map(number => number % 2 === 0);
console.log(evenNumsMap); // [true, true, false, true]
