document.addEventListener("DOMContentLoaded", async function () {
	const redirectBtn = document.querySelector(".newPay");
	redirectBtn &&
		(redirectBtn.addEventListener("click", function () {
			window.location = "./redirect.html"
		}));
	externalClientsArray = [];
	const inputTable = [];
	const customValidator = validatorObject();
	//const john_Doe = client("superSecretID", "John", "Doe", "12345678900987654321123456", 10000, "none");


	const importObjectArray = [{
			id: "1",
			selector: "transferTitle-input",
			regexp: /^([a-zA-Z0-9_-\s]){5,60}$/
		},
		{
			id: "2",
			selector: "transferRecAccountNr-input",
			regexp: /^[0-9]{26}$/
		},
		{
			id: "3",
			selector: "transferRecName-input",
			regexp: /^[A-Z]([a-zA-Z]){2,60}\s[A-Z]([a-zA-Z]){2,60}$/
		},
		{
			//id: "12",
			selector: "transferRecPostalCode-input",
			regexp: /^\\d{2}[- ]{0,1}\\d{3}$/
		},
		{
			id: "4",
			selector: "transferRecCity-input",
			regexp: /^[A-Z]([a-zA-Z]){2,60}$/
		},
		{
			id: "5",
			selector: "transferMsg-input",
			regexp: /^([a-zA-Z]){2,60}$/
		},
		{
			id: "777",
			selector: "transferAmount-input",
			regexp: /^[0-9]{0,}$/
		},
	];
	let john_Dea;
	client("superSecretID", "John", "Doe", "12345678900987654321123456", 10000, ["0"], importObjectArray).then(response => {
		console.log(response);
		if (response.status === 200) {
			response.payload = inputTable
			john_Dea = response.payload;
			return john_Dea;
		} else {
			console.log(response.msg);
		}
	});


	let transferTitle;
	await inputElement(element.selector, element.regexp, element.id).then(response => {
		console.log(response);
		if (response.status === 200) {
			transferTitle = response.payload;
			//transferTitle.setListenerAndPush(inputTable, customValidator.customValidation);
			return transferTitle;
		} else {
			console.log(response.msg);
		}
	});

	let transferRecName;
	await inputElement(element.selector, element.regexp, element.id).then(response => {
		console.log(response);
		if (response.status === 200) {
			transferRecName = response.payload;
			return transferRecName;
		} else {
			console.log(response.msg);
		}
	});
	let transferRecAccountNr;
	await inputElement("transferRecAccountNr-input", /[0-9]{2}[- ]{0,1}[0-9]{4}[- ]{0,1}[0-9]{4}[- ]{0,1}[0-9]{4}[- ]{0,1}[0-9]{4}[- ]{0,1}[0-9]{4}[- ]{0,1}[0-9]{4}/).then(response => {
		console.log(response);
		if (response.status === 200) {
			transferRecAccountNr = response.payload;
			return transferRecAccountNr;
		} else {
			console.log(response.msg);
		}
	});

	let transferRecPostalCode;
	await inputElement("transferRecPostalCode-input", /[0-9]{2}[- ]{0,1}[0-9]{3}/).then(response => {
		console.log(response);
		if (response.status === 200) {
			transferRecPostalCode = response.payload;
			return transferRecPostalCode;
		} else {
			console.log(response.msg);
		}
	});
	let transferRecCity;
	await inputElement("transferRecCity-input", /^[A-Z]([a-zA-Z]){2,40}$/).then(response => {
		console.log(response);
		if (response.status === 200) {
			transferRecCity = response.payload;
			return transferRecCity;
		} else {
			console.log(response.msg);
		}
	});
	let transferMsg;
	await inputElement("transferMsg-input", /^([a-zA-Z0-9_-]){5,60}$/).then(response => {
		console.log(response);
		if (response.status === 200) {
			transferMsg = response.payload;
			return transferMsg;
		} else {
			console.log(response.msg);
		}
	});
	let transferAmount;
	await inputElement("transferAmount-input", /^[0-9]{0,}$/, "777").then(response => {
		console.log(response);
		if (response.status === 200) {
			transferAmount = response.payload;
			return transferAmount;
		} else {
			console.log(response.msg);
		}
	});
	const transferForm = document.querySelector('.transfer-form', "");

	transferTitle.setListenerAndPush(inputTable, customValidator.customValidation);
	transferRecName.setListenerAndPush(inputTable, customValidator.customValidation);
	transferRecPostalCode.setListenerAndPush(inputTable, customValidator.customValidation);
	transferAmount.setListenerAndPush(inputTable, customValidator.customValidation);
	transferRecCity.setListenerAndPush(inputTable, customValidator.customValidation);
	transferMsg.setListenerAndPush(inputTable, customValidator.customValidation);
	transferAmount.setListenerAndPush(inputTable, customValidator.customValidation);
	transferRecAccountNr.setListenerAndPush(inputTable, customValidator.customValidation);
	//  transferTitle.shouldSend = true;
	//  transferRecName.shouldSend = true;
	//  transferRecPostalCode.shouldSend = true;
	//  transferRecCity.shouldSend = true;
	//  transferMsg.shouldSend = true;
	//  transferAmount.shouldSend = true;
	//  transferRecAccountNr.shouldSend = true;
	transferForm.addEventListener("submit", function (e) {
		e.preventDefault();
		console.log(john_Doe);
		console.log(inputTable);
		// finalFromValidation(checkForm(generalCheck));
		customValidator.finalFromValidation(inputTable, john_Doe);
	})
})