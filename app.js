//seperation of concerns, each part of the implementation is independent

//BUDGET CONTROLLER
var budgetController = (function() {



})();


//UI CONTROLLER
var UIController = (function() {

	return {
		getInput: function() {

			return { // returning multiple items, best to use an object
				type: document.querySelector('.add__type').value, // Will be either inc or exp
				description: document.querySelector('.add__description').value,
				value: document.querySelector('.add__value').value
			}
		}
	};

})();



//GLOBAL APP CONTROLLER
//connects the other modules
var controller = (function(budgetCtrl, UICtrl) {

	var ctrlAddItem = function() {
		// 1. Get the field input data

		// 2. Add the item to the budget controller

		// 3. Add the item to the UI

		// 4. Calculate the budget

		// 5. Display the budget on the UI

		console.log('Test the ctrlAddItem function');
	}

	document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

	document.addEventListener('keypress', function(event) {
		if(event.keyCode === 13) {
			ctrlAddItem();
		}


	});

})(budgetController, UIController);





