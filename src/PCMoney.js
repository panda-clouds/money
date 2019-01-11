
if (typeof Parse !== 'function') var Parse = require('parse');

class PCMoney  {
	constructor() {
		//Empty Constructor
		this.moneyErrorTooManyPeriods = "Please only include one period.";
		this.moneyErrorTooManyCentsPlaces = "Please round to the nearest cent.";
		this.moneyErrorNotANumber = "Please enter a valid number";
	}

	static dollarStringFromCentsInt(centsInt){

		const dollarInt = (centsInt / 100);
		if(isNaN(dollarInt)) return PCMoney.moneyErrorNotANumber;
		const dollarFixed = dollarInt.toFixed(2);
		if(isNaN(dollarFixed)) return PCMoney.moneyErrorNotANumber;

		return "$" + dollarFixed;
	}
	static dollarStringFromCentsIntPromise(centsInt){
		var promise = new Parse.Promise();

		if(isNaN(centsInt)){
			promise.reject(PCMoney.moneyErrorNotANumber);
		}else{
			const dollarInt = (centsInt / 100);
			if(isNaN(dollarInt)){
				promise.reject(PCMoney.moneyErrorNotANumber);
			}else{
				const dollarFixed = dollarInt.toFixed(2);
				if(isNaN(dollarFixed)){
					promise.reject(PCMoney.moneyErrorNotANumber);
				}else{
					promise.resolve("$" + dollarFixed);
				}
			}
		}
		return promise;
	}
	// use positiveCentsIntFromDollarStringPromise instead
	// static positiveCentsIntFromDollarString(dollarString){
	// 	let forcedString = new String(dollarString);
	// 	// remove every character except 0123456789.
	// 	let strippedString = forcedString.replace(/[^\d.]/g, '');
	// 	// strip leading and trailing zeros
	// 	strippedString = strippedString.replace(/^0+|0+$/g, "");
	// 	let numberOfPeriods = (strippedString.match(/\./g) || []).length;
	// 	if(numberOfPeriods == 0){
	// 		// $5
	// 		let returnString = strippedString + "00";
	// 		return parseInt(returnString)
	// 	}else if(numberOfPeriods == 1){
	// 		let array = strippedString.split('.');
	// 		let dollarPart = array[0];
	// 		let centsPart = array[1];
	// 		if(!centsPart){
	// 			//$5.
	// 			let returnString = dollarPart + centsPart + "00";
	// 			return parseInt(returnString);
	// 		}else if(centsPart && centsPart.length == 1){
	// 			//$5.3
	// 			let returnString = dollarPart + centsPart + "0";
	// 			return parseInt(returnString);
	// 		}else if(centsPart && centsPart.length == 2){
	// 			//$5.39
	// 			let returnString = dollarPart + centsPart;
	// 			return parseInt(returnString);
	// 		}else{
	// 			return moneyErrorTooManyCentsPlaces;
	// 		}
	// 	}else{
	// 		return moneyErrorTooManyPeriods;
	// 	}
	// }
	static positiveCentsIntFromDollarStringPromise(dollarString){

		const promise = new Parse.Promise();
		const forcedString = new String(dollarString);

		// remove every character except 0123456789.
		let strippedString = forcedString.replace(/[^\d.]/g, '');

		// strip leading zeros
		strippedString = strippedString.replace(/^0+/g, "");

		const numberOfPeriods = (strippedString.match(/\./g) || []).length;
		if(numberOfPeriods == 0){
			// $5
			const returnString = strippedString + "00";
			const returnInt = parseInt(returnString)
			promise.resolve(returnInt);
			return promise;
		}else if(numberOfPeriods == 1){
			const array = strippedString.split('.');
			const dollarPart = array[0];
			let centsPart = array[1];
			// strip trailing zeros from cents
			centsPart = centsPart.replace(/0+$/g, "");
			if(!centsPart){
				//$5.
				const returnString = dollarPart + centsPart + "00";
				const returnInt = parseInt(returnString)
				promise.resolve(returnInt);
				return promise;
			}else if(centsPart && centsPart.length == 1){
				//$5.3
				const returnString = dollarPart + centsPart + "0";
				const returnInt = parseInt(returnString)
				promise.resolve(returnInt);
				return promise;
			}else if(centsPart && centsPart.length == 2){
				//$5.39
				const returnString = dollarPart + centsPart;
				const returnInt = parseInt(returnString)
				promise.resolve(returnInt);
				return promise;
			}else{
				promise.reject(PCMoney.moneyErrorTooManyCentsPlaces);
				return promise;
			}

		}else{
			promise.reject(PCMoney.moneyErrorTooManyPeriods);
			return promise;
		}
	}
}

module.exports = PCMoney;
