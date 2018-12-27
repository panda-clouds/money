
const PCMoney = require("../src/PCMoney.js");

// describe('positiveCentsIntFromDollarString', () => {
//     it('should handle 5', () => {
//       const moneyString = "5";

//       let result = positiveCentsIntFromDollarString(moneyString);

//       expect(result).toBe(500);//     });
//     it('should handle 5.', () => {
//       const moneyString = "5.";

//       let result = positiveCentsIntFromDollarString(moneyString);

//       expect(result).toBe(500);

//     });
//     it('should handle 5.0', () => {
//       const moneyString = "5.0";

//       let result = positiveCentsIntFromDollarString(moneyString);

//       expect(result).toBe(500);

//     });
//     it('should handle 5.00', () => {
//       const moneyString = "5.00";

//       let result = positiveCentsIntFromDollarString(moneyString);

//       expect(result).toBe(500);

//     });

//     it('should handle 5.000', () => {
//       const moneyString = "5.000";

//       let result = positiveCentsIntFromDollarString(moneyString);

//       expect(result).toBe(500);

//     });

//     it('should handle 000005.00000000', () => {
//       const moneyString = "000005.00000000";

//       let result = positiveCentsIntFromDollarString(moneyString);

//       expect(result).toBe(500);//     });

//     it('should handle 5.1', () => {
//       const moneyString = "5.1";

//       let result = positiveCentsIntFromDollarString(moneyString);

//       expect(result).toBe(510);//     });

//     it('should handle 5.17', () => {
//       const moneyString = "5.17";

//       let result = positiveCentsIntFromDollarString(moneyString);

//       expect(result).toBe(517);//     });

//     it('should handle 5.174', () => {
//       const moneyString = "5.174";

//       let result = positiveCentsIntFromDollarString(moneyString);

//       expect(result).toBe(PCMoney.moneyErrorTooManyCentsPlaces);//     });
//     //Bad Examples
//     it('should handle 5.17.50', () => {
//       const moneyString = "5.17.50";

//       let result = positiveCentsIntFromDollarString(moneyString);

//       expect(result).toBe(PCMoney.moneyErrorTooManyPeriods);//     });

//     it('should handle az,5cnskdfc.osxj9', () => {
//       const moneyString = "az,5cnskdfc.osxj9";

//       let result = positiveCentsIntFromDollarString(moneyString);

//       expect(result).toBe(590);//     });
// });

describe('positiveCentsIntFromDollarStringPromise', () => {

	it('should handle 5', (done) => {
		const moneyString = "5";
		PCMoney.positiveCentsIntFromDollarStringPromise(moneyString)
			.then((result)=>{
				expect(result).toBe(500);
				done();
			}).catch(done.fail);
	});
	it('should handle 5.', (done) => {
		const moneyString = "5.";
		PCMoney.positiveCentsIntFromDollarStringPromise(moneyString)
			.then((result)=>{
				expect(result).toBe(500);
				done();
			}).catch(done.fail);
	});

	it('should handle 5.0', (done) => {
		const moneyString = "5.0";
		PCMoney.positiveCentsIntFromDollarStringPromise(moneyString)
			.then((result)=>{
				expect(result).toBe(500);
				done();
			}).catch(done.fail);
	});

	it('should handle 5.00', (done) => {
		const moneyString = "5.00";
		PCMoney.positiveCentsIntFromDollarStringPromise(moneyString)
			.then((result)=>{
				expect(result).toBe(500);
				done();
			}).catch(done.fail);
	});

	it('should handle 5.000', (done) => {
		const moneyString = "5.000";
		PCMoney.positiveCentsIntFromDollarStringPromise(moneyString)
			.then((result)=>{
				expect(result).toBe(500);
				done();
			}).catch(done.fail);
	});

	it('should handle 000005.00000000', (done) => {
		const moneyString = "000005.00000000";
		PCMoney.positiveCentsIntFromDollarStringPromise(moneyString)
			.then((result)=>{
				expect(result).toBe(500);
				done();
			}).catch(done.fail);
	});

	it('should handle 5.1', (done) => {
		const moneyString = "5.1";
		PCMoney.positiveCentsIntFromDollarStringPromise(moneyString)
			.then((result)=>{
				expect(result).toBe(510);
				done();
			}).catch(done.fail);
	});

	it('should handle 5.17', (done) => {
		const moneyString = "5.17";
		PCMoney.positiveCentsIntFromDollarStringPromise(moneyString)
			.then((result)=>{
				expect(result).toBe(517);
				done();
			}).catch(done.fail);
	});

	it('should handle az,5cnskdfc.osxj9', (done) => {
		const moneyString = "az,5cnskdfc.osxj9";
		PCMoney.positiveCentsIntFromDollarStringPromise(moneyString)
			.then((result)=>{
				expect(result).toBe(590);
				done();
			}).catch(done.fail);
	});

	//Bad Examples
	it('should handle 5.17.50', (done) => {
		const moneyString = "5.17.50";
		PCMoney.positiveCentsIntFromDollarStringPromise(moneyString)
			.then(done.fail).catch((error)=>{
				expect(error).toBe(PCMoney.moneyErrorTooManyPeriods);
				done();
			});
	});

	it('should handle 5.174', (done) => {
		const moneyString = "5.174";
		PCMoney.positiveCentsIntFromDollarStringPromise(moneyString)
			.then(done.fail).catch((error)=>{
				expect(error).toBe(PCMoney.moneyErrorTooManyCentsPlaces);
				done();
			});
	});

});

describe('dollarStringFromCentsInt', () => {

	it('should handle 0', () => {
		const moneyString = 0;
		const result = PCMoney.dollarStringFromCentsInt(moneyString);
		expect(result).toBe("$0.00");
	});

	it('should handle 5', () => {
		const moneyString = 5;
		const result = PCMoney.dollarStringFromCentsInt(moneyString);
		expect(result).toBe("$0.05");
	});

	it('should handle 51', () => {
		const moneyString = 51;
		const result = PCMoney.dollarStringFromCentsInt(moneyString);
		expect(result).toBe("$0.51");
	});

	it('should handle 529', () => {
		const moneyString = 529;
		const result = PCMoney.dollarStringFromCentsInt(moneyString);
		expect(result).toBe("$5.29");
	});

	it('should handle 1000', () => {
		const moneyString = 1000;
		const result = PCMoney.dollarStringFromCentsInt(moneyString);
		expect(result).toBe("$10.00");
	});

	it('should handle 20', () => {
		const moneyString = 2000;
		const result = PCMoney.dollarStringFromCentsInt(moneyString);
		expect(result).toBe("$20.00");
	});

	it('should handle 200', () => {
		const moneyString = 20000;
		const result = PCMoney.dollarStringFromCentsInt(moneyString);
		expect(result).toBe("$200.00");
	});

	it('should handle 5492', () => {
		const moneyString = 5492;
		const result = PCMoney.dollarStringFromCentsInt(moneyString);
		expect(result).toBe("$54.92");
	});

	//Bad Checks
	it('should handle asdf', () => {
		const moneyString = "asdf";
		const result = PCMoney.dollarStringFromCentsInt(moneyString);
		expect(result).toBe(PCMoney.moneyErrorNotANumber);
	});
});

describe('dollarStringFromCentsIntPromise', () => {

	it('should handle 0', (done) => {
		const moneyString = 0;
		PCMoney.dollarStringFromCentsIntPromise(moneyString)
			.then((result)=>{
				expect(result).toBe("$0.00");
				done();
			}).catch(done.fail);
	});

	it('should handle 5', (done) => {
		const moneyString = 5;
		PCMoney.dollarStringFromCentsIntPromise(moneyString)
			.then((result)=>{
				expect(result).toBe("$0.05");
				done();
			}).catch(done.fail);
	});

	it('should handle 51', (done) => {
		const moneyString = 51;
		PCMoney.dollarStringFromCentsIntPromise(moneyString)
			.then((result)=>{
				expect(result).toBe("$0.51");
				done();
			}).catch(done.fail);
	});
	it('should handle 5000', (done) => {
		const moneyString = 5000;
		PCMoney.dollarStringFromCentsIntPromise(moneyString)
			.then((result)=>{
				expect(result).toBe("$50.00");
				done();
			}).catch(done.fail);
	});

	it('should handle 529', (done) => {
		const moneyString = 529;
		PCMoney.dollarStringFromCentsIntPromise(moneyString)
			.then((result)=>{
				expect(result).toBe("$5.29");
				done();
			}).catch(done.fail);
	});
	it('should handle 5029', (done) => {
		const moneyString = 5029;
		PCMoney.dollarStringFromCentsIntPromise(moneyString)
			.then((result)=>{
				expect(result).toBe("$50.29");
				done();
			}).catch(done.fail);
	});
	it('should handle 5029', (done) => {
		const moneyString = 5029;
		PCMoney.dollarStringFromCentsIntPromise(moneyString)
			.then((result)=>{
				expect(result).toBe("$50.29");
				done();
			}).catch(done.fail);
	});

	it('should handle 5492', (done) => {
		const moneyString = 5492;
		PCMoney.dollarStringFromCentsIntPromise(moneyString)
			.then((result)=>{
				expect(result).toBe("$54.92");
				done();
			}).catch(done.fail);
	});

	//Bad Checks
	it('should handle asdf', (done) => {
		const moneyString = "asdf";
		PCMoney.dollarStringFromCentsIntPromise(moneyString)
			.then(done.fail).catch((error)=>{
				expect(error).toBe(PCMoney.moneyErrorNotANumber);
				done();
			});
	});

});


