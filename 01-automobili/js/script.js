/*
Crea un array composto da 10 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e
alimentazione (benzina, diesel, gpl, elettrico, metano).
Dividi le automobili in 3 array separati: nel primo array solo le auto a
benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
Infine stampa separatamente i 3 array.
*/

const arrAuto = [
	{
		marca: 'fiat',
		modello: 'uno',
		alimentazione: 'benzina',
	},
	{
		marca: 'lancia',
		modello: 'y',
		alimentazione: 'benzina',
	},
	{
		marca: 'fiat',
		modello: 'tipo',
		alimentazione: 'metano',
	},
	{
		marca: 'audi',
		modello: 'a5',
		alimentazione: 'diesel',
	},
	{
		marca: 'hyunday',
		modello: 'qualcosa',
		alimentazione: 'gpl',
	},
	{
		marca: 'tesla',
		modello: 'Model S',
		alimentazione: 'elettrica',
	},
	{
		marca: 'Piaggio',
		modello: 'Ape',
		alimentazione: 'benzina',
	},
	{
		marca: 'fiat',
		modello: 'fiorino',
		alimentazione: 'metano',
	},
	{
		marca: 'toyota',
		modello: 'elecrto',
		alimentazione: 'elettrica',
	},
	{
		marca: 'mercedes',
		modello: 'classe G',
		alimentazione: 'benzina',
	},
];


// const arrBenzina = [], arrDiesel = [], arrResto = [];
// for (let i = 0; i < arrAuto.length; i++) {
// 	const objAuto = arrAuto[i];
// 	// if (objAuto.alimentazione === 'benzina') {
// 	// 	arrBenzina.push(objAuto);
// 	// } else if (objAuto.alimentazione === 'diesel') {
// 	// 	arrDiesel.push(objAuto);
// 	// } else {
// 	// 	arrResto.push(objAuto);
// 	// }

// 	switch (objAuto.alimentazione) {
// 		case 'benzina':
// 			arrBenzina.push(objAuto);
// 			break;
// 		case 'diesel':
// 			arrDiesel.push(objAuto);
// 			break;
// 		default:
// 			arrResto.push(objAuto);
// 			break;
// 	}
// }


const arrBenzina = [], arrDiesel = [], arrResto = [];
arrAuto.forEach(objAuto => {
	switch (objAuto.alimentazione) {
		case 'benzina':
			arrBenzina.push(objAuto);
			break;
		case 'diesel':
			arrDiesel.push(objAuto);
			break;
		default:
			arrResto.push(objAuto);
			break;
	}
})


// Questo metodo cicla tre volte sull'array quindi è meno efficiente dei precedenti
// const arrBenzina = arrAuto.filter(objAuto => objAuto.alimentazione === 'benzina');
// const arrDiesel = arrAuto.filter(objAuto => objAuto.alimentazione === 'diesel');
// const arrResto = arrAuto.filter(objAuto => objAuto.alimentazione !== 'benzina' && objAuto.alimentazione !== 'diesel');


console.table(arrBenzina);
console.table(arrDiesel);
console.table(arrResto);
