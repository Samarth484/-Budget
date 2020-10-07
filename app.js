//BUDGET CONTROLLER
var budgetController = (function() {

    // some code here....

})();





//UI CONTROLLER

var UIController = (function() {
        UIDOMstrings = {
            inputType: '.add__type',
            inputDescription: '.add__description',
            inputValue: '.add__value',
            inputBtn: '.add__btn',
        }
        return {
            getInput: function() {
                return {
                    type: document.querySelector(UIDOMstrings.inputType).value, // gets to know whether expense or income
                    description: document.querySelector(UIDOMstrings.inputDescription).value, // gets to know what is the cause of expense or income
                    cost: document.querySelector(UIDOMstrings.inputValue).value, // gets to know the cost
                }
            },
            getDOMstrings: function() {
                return UIDOMstrings;
            }
        }
    }

)();





// GLOBAL APP CONTROLLER

var controller = (function(budgetCtrl, UICtrl) {

    DOMstrings = UICtrl.getDOMstrings();

    var ctrlAddItem = function() {
        // IMPLEMENTING DRY FOR LINES 40 and 46

        // Things that are to be done on either of click or of the press of the ENTER key whose keycode is 13...
        // 1.) Get data from the user
        var input = UICtrl.getInput();
        console.log(input);
        // 2.) Add the item to the budget controller
        // 3.) Add the item to the UI
        // 4.) Update the budget
        // 5.) Update the Budget on the UI

    }
    document.querySelector(DOMstrings.inputBtn).addEventListener("click", ctrlAddItem);

    // The same thing to be checked on the pressing of the ENTER key...
    document.addEventListener("keypress", function(event) {
        if (event.keypress === 13 || event.which === 13) {
            ctrlAddItem();
        }

    });

})(budgetController, UIController);





/*
Things that are to be done on either of click or of the press of the ENTER key whose keycode is 13...
1.) Get data from the user
2.) Add the item to the budget controller
3.) Add the item to the UI
4.) Update the budget
5.) Update the Budget on the UI
*/
