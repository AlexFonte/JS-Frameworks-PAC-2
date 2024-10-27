/**
 * @class Service
 *
 * Manages the data of the application.
 */

class ExpenseService {

    constructor() {
        this.exepenses = (JSON.parse(localStorage.getItem('exepenses')) || []).map(
            exepense => new Exepense(exepense)
        );
    }

    bindExpenseListChanged(callback) {
        this.onExpenseListChanged = callback;
    }

    _commit(exepenses) {
        this.onExpenseListChanged(exepenses);
        localStorage.setItem('exepenses', JSON.stringify(exepenses));
    }

    addExpense(text, amount) {
        this.exepenses.push(new Exepense({ text, amount}));

        this._commit(this.exepenses);
    }

    editTodo(id, updatedText, updateAmount) {
        this.exepenses = this.exepenses.map(exepense =>
            exepense.id === id
                ? new Exepense({
                    ...exepense,
                    text: updatedText,
                    amount: updateAmount
                })
                : exepense
        );

        this._commit(this.exepenses);
    }

    deleteExpenses(_id) {
        this.exepenses = this.exepenses.filter(({ id }) => id !== _id);

        this._commit(this.exepenses);
    }
}