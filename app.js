//BUDGET CONTROLLER
var budgetController = (function() {

    // some code here....

})();





//UI CONTROLLER

var UIController = (function() {

    // some code here....

})();





// GLOBAL APP CONTROLLER

var controller = (function(budgetCtrl, UICtrl) {

    document.querySelector(".add__btn").addEventListener("click", function() {
        console.log("the click works fine!");
        /*
        Things that are to be done on either of click or of the press of the ENTER key whose keycode is 13...
        1.) Get data from the user
        2.) Add the item to the budget controller
        3.) Add the item to the UI
        4.) Update the budget
        5.) Update the Budget on the UI
        */
    });

    // The same thing to be checked on the pressing of the ENTER key...
    document.addEventListener("keypress", function(event) {
        if (event.keypress === 13 || event.which === 13)
            console.log("ENTER key was pressed");
        /*
        Things that are to be done on either of click or of the press of the ENTER key whose keycode is 13...
        1.) Get data from the user
        2.) Add the item to the budget controller
        3.) Add the item to the UI
        4.) Update the budget
        5.) Update the Budget on the UI
        */
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
