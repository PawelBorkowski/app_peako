// let testVariable = '123456';
// fetch(`http://localhost:3001/rest/v1/products/${testVariable}`).then(
//     response => {
//         if (response.status === 200) {
//             response.json().then((response2) => {
//                 console.log(response2);
//             })
//         }
//     }
// );


document.addEventListener("DOMContentLoaded", function () {
    const transformBtn = document.querySelector(".newPay");
    const transferForm = document.querySelector(".modal-wrap");
    transformBtn &&
        (transformBtn.addEventListener("click", function () {
            // window.location = "./newPay2.html"
            transferForm.classList.contains('modal-none') && transferForm.classList.remove('modal-none');
            return 0;
        }));

    const closeForm = document.querySelector('.closeX');
    closeForm.addEventListener('click', function () {
        transferForm.classList.add('modal-none');
    })

    const btnNext = document.querySelector('.btn_next');
    const transfeSuccess = document.querySelector('.modal-success');

    btnNext.addEventListener('click', function () {
        transferForm.classList.add('modal-none');
        transfeSuccess.classList.remove('modal-none')
    })

    const closeSucess = document.querySelector('.close_cross');
    closeSucess.addEventListener('click', function () {
        transfeSuccess.classList.add('modal-none')
    })


    let data = new FormData();
    data.append(name, "dupa")
    let testVariable = "name=dupa";
    fetch(`http://localhost:3001/rest/v1/pekao-requests/postForm`, {
        method: 'POST',
        mode: 'cors',
        body: data
        // body: JSON.stringify({key: value})
    }).then(response => {
        console.log(response)
        if (response.status === 200) {
            response.json().then(dupa => {
                console.log(dupa)
            })
        }
    });

    const choose_account = document.getElementById('choose_account');
    console.log(choose_account, choose_account.value);

    const acc_number = document.getElementById('acc_number')
    acc_number.addEventListener("keyup", () => {
        console.log(acc_number.value);
    });

    const adress_recipient = document.getElementById('adress_recipient');
    adress_recipient.addEventListener("keyup", () => {
        console.log(adress_recipient.value);
    });

    const title_transfer = document.getElementById('title_transfer');
    title_transfer.addEventListener("keyup", () => {
        console.log(title_transfer.value);
    });

    const save_as_standing = document.getElementById('save_as_standing');
    // console.log(save_as_standing, save_as_standing.value);
    save_as_standing.checked ? (value = true) : (value = false);
    console.log(value);

    const name_order = document.getElementById('name_order');
    // console.log(name_order, name_order.value);
    name_order.addEventListener("keyup", () => {
        console.log(name_order.value);
    });
    const form_pay = document.querySelector('.transferForm')

    transferForm.addEventListener("submit", function (e) {
        e.preventDefault();
    })


    class Myclass {
        constructor(identifier, testMethod) {
            this.identifier = identifier
            this.value = "";
            this.testMethod = testMethod
        }
        getValue() {
            // gets Value and sets this.value to the value it's gotten
        }
        addDynamicValidationListener() {
            // add listener on keyup and chcecks if the input value is correct/has correct form
        }
        pushToSubmitArray() {

        }

    };

});




// externalClientsArray = [];
// const inputTable = [];
// const customValidator = validatorObject();
// //const john_Doe = client("superSecretID", "John", "Doe", "12345678900987654321123456", 10000, "none");


// const importObjectArray = [{
// 		//id: "1",
// 		selector: "transferTitle-input",
// 		regexp: /^([a-zA-Z0-9_-\s]){5,60}$/
// 	},
// 	{
// 		//id: "2",
// 		selector: "transferRecAccountNr-input",
// 		regexp: /^[0-9]{26}$/
// 	},
// 	{
// 		//id: "3",
// 		selector: "transferRecName-input",
// 		regexp: /^[A-Z]([a-zA-Z]){2,60}\s[A-Z]([a-zA-Z]){2,60}$/
// 	},
// 	{
// 		//id: "12",
// 		selector: "transferRecPostalCode-input",
// 		regexp: /^\\d{2}[- ]{0,1}\\d{3}$/
// 	},
// 	{
// 		//id: "4",
// 		selector: "transferRecCity-input",
// 		regexp: /^[A-Z]([a-zA-Z]){2,60}$/
// 	},
// 	{
// 		//id: "5",
// 		selector: "transferMsg-input",
// 		regexp: /^([a-zA-Z]){2,60}$/
// 	},
// 	{
// 		//id: "777",
// 		selector: "transferAmount-input",
// 		regexp: /^[0-9]{0,}$/
// 	},
// ];
// let john_Dea;
// client("superSecretID", "John", "Doe", "12345678900987654321123456", 10000, ["0"], importObjectArray).then(response => {
// 	console.log(response);
// 	if (response.status === 200) {
// 		response.payload.inputTable.map(inputObject => {
// 			inputElement(inputObject.inputTitle, inputObject.inputTitle).then(response => {
// 					console.log(response);
// 					if (response.status === 200) {
// 						transferTitle = response.payload;
// 						//transferTitle.setListenerAndPush(inputTable, customValidator.customValidation);
// 						return transferTitle;
// 					} else {
// 						//console.log(response.msg);
// 						throw new Err(response.msg);
// 					}
// 				})
// 				.then(() => {
// 					createdInputElements.map(element => {
// 						element.setInputListener(customValidator.customValidation)
// 					})
// 				})

// 		})

// 		john_Dea = response.payload;
// 		return john_Dea;
// 	} else {
// 		console.log(response.msg);
// 	}
// });
// // //et =
// // let testVariable = "1234564";
// // fetch(`http://localhost:3001/rest/v1/products/${testVariable}`).then(response => {
// // 	if (response.status === 200) {
// // 		//response.body.json();
// // 		console.log(response);
// // 	}
// // })

// let testVariable = '123456';
// fetch(`http://localhost:3001/rest/v1/products/${testVariable}`).then(
// 	response => {
// 		if (response.status === 200) {
// 			response.json().then((response2) => {
// 				console.log(response2);
// 			})
// 		}
// 	}
// );


// // let transferTitle;
// // await inputElement(element.selector, element.regexp, element.id).then(response => {
// // 	console.log(response);
// // 	if (response.status === 200) {
// // 		transferTitle = response.payload;
// // 		//transferTitle.setListenerAndPush(inputTable, customValidator.customValidation);
// // 		return transferTitle;
// // 	} else {
// // 		console.log(response.msg);
// // 	}
// // });

// // let transferRecName;
// // await inputElement(element.selector, element.regexp, element.id).then(response => {
// // 	console.log(response);
// // 	if (response.status === 200) {
// // 		transferRecName = response.payload;
// // 		return transferRecName;
// // 	} else {
// // 		console.log(response.msg);
// // 	}
// // });
// // let transferRecAccountNr;
// // await inputElement(element.selector, element.regexp, element.id).then(response => {
// // 	console.log(response);
// // 	if (response.status === 200) {
// // 		transferRecAccountNr = response.payload;
// // 		return transferRecAccountNr;
// // 	} else {
// // 		console.log(response.msg);
// // 	}
// // });

// // let transferRecPostalCode;
// // await inputElement(element.selector, element.regexp, element.id).then(response => {
// // 	console.log(response);
// // 	if (response.status === 200) {
// // 		transferRecPostalCode = response.payload;
// // 		return transferRecPostalCode;
// // 	} else {
// // 		console.log(response.msg);
// // 	}
// // });
// // let transferRecCity;
// // await inputElement(element.selector, element.regexp, element.id).then(response => {
// // 	console.log(response);
// // 	if (response.status === 200) {
// // 		transferRecCity = response.payload;
// // 		return transferRecCity;
// // 	} else {
// // 		console.log(response.msg);
// // 	}
// // });
// // let transferMsg;
// // await inputElement(element.selector, element.regexp, element.id).then(response => {
// // 	console.log(response);
// // 	if (response.status === 200) {
// // 		transferMsg = response.payload;
// // 		return transferMsg;
// // 	} else {
// // 		console.log(response.msg);
// // 	}
// // });
// // let transferAmount;
// // await inputElement(element.selector, element.regexp, element.id).then(response => {
// // 	console.log(response);
// // 	if (response.status === 200) {
// // 		transferAmount = response.payload;
// // 		return transferAmount;
// // 	} else {
// // 		console.log(response.msg);
// // 	}
// // });
// const transferForm = document.querySelector('.transfer-form', "");

// // transferTitle.setListenerAndPush(inputTable, customValidator.customValidation);
// // transferRecName.setListenerAndPush(inputTable, customValidator.customValidation);
// // transferRecPostalCode.setListenerAndPush(inputTable, customValidator.customValidation);
// // transferAmount.setListenerAndPush(inputTable, customValidator.customValidation);
// // transferRecCity.setListenerAndPush(inputTable, customValidator.customValidation);
// // transferMsg.setListenerAndPush(inputTable, customValidator.customValidation);
// // transferAmount.setListenerAndPush(inputTable, customValidator.customValidation);
// // transferRecAccountNr.setListenerAndPush(inputTable, customValidator.customValidation);
// //  transferTitle.shouldSend = true;
// //  transferRecName.shouldSend = true;
// //  transferRecPostalCode.shouldSend = true;
// //  transferRecCity.shouldSend = true;
// //  transferMsg.shouldSend = true;
// //  transferAmount.shouldSend = true;
// //  transferRecAccountNr.shouldSend = true;
// transferForm.addEventListener("submit", function (e) {
// 	e.preventDefault();
// 	console.log(john_Doe);
// 	console.log(inputTable);
// 	// finalFromValidation(checkForm(generalCheck));
// 	customValidator.finalFromValidation(inputTable, john_Doe);
// })