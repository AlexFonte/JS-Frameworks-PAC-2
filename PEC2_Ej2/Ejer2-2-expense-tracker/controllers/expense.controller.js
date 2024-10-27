/**
 * @class Controller
 *
 * Links the user input and the view output.
 *
 * @param model
 * @param view
 */

class ExpenseController{
    constructor(service, view){
        this.service = service;
        this.view = view;
    }
}