/**
 * @Class View
 * 
 * Reprensetació visual
 */

class ExpenseView {
    constructor() {
        //Body
        this.body = document.getElementById('root');

        //Title body 
        this.title = this.createElement('h2')
        this.title.textContent = 'Expense Tracker';

        //Container
        this.container = this.createElement('div', 'container');

        this.subtitle = this.createElement('h4')
        this.subtitle.textContent = 'Your Balance';

        this.balance = this.createElement('h1');
        this.balance.id = 'balance';
        this.balance.textContent = '$0.00';

        //Income expense container
        this.incExpContainer = this.createElement('div', 'inc-exp-container');

        //Income
        this.incDivContainer = this.createElement('div');
        this.incTitleContainer = this.createElement('h4');
        this.incTitleContainer.textContent = 'Income';
        this.incValueContainer = this.createElement('p');
        this.incValueContainer.id = 'money-plus'
        this.incValueContainer.classList = 'money plus';
        this.incValueContainer.textContent = '+$0.00';
        this.incDivContainer.append(this.incTitleContainer, this.incValueContainer);

        //Expense
        this.expDivContainer = this.createElement('div');
        this.expTitleContainer = this.createElement('h4');
        this.expTitleContainer.textContent = 'Expense';
        this.expValueContainer = this.createElement('p');
        this.expValueContainer.id = 'money-minus';
        this.expValueContainer.classList = 'money minus';
        this.expValueContainer.textContent = '-$0.00';
        this.expDivContainer.append(this.expTitleContainer, this.expValueContainer);

        this.incExpContainer.append(this.incDivContainer, this.expDivContainer);

        //History
        this.historyTitle = this.createElement('h3');
        this.historyTitle.textContent = 'History';

        //Transactions list
        this.transactionsList = this.createElement('ul', 'list');

        //Form trnasaction
        this.formTitle = this.createElement('h3');
        this.formTitle.textContent = 'Add new transaction';
        this.form = this.createElement('form');
        this.form.id = 'form';

        //Input text form
        this.textDiv = this.createElement('div', 'form-control');
        this.textLabel = this.createElement('label');
        this.textLabel.htmlFor = 'text';
        this.textLabel.textContent = 'Text';
        this.textInput = this.createElement('input');
        this.textInput.type = 'text';
        this.textInput.id = 'text';
        this.textInput.placeholder = 'Enter text...';
        this.textDiv.append(this.textLabel, this.textInput);

        //Input amount from
        this.amountDiv = this.createElement('div', 'form-control');
        this.amountLabel = this.createElement('label');
        this.amountLabel.htmlFor = 'amount';
        this.amountLabel.innerHTML = 'Amount <br /> (negative - expense, positive - income)';
        this.amountInput = this.createElement('input');
        this.amountInput.type = 'number';
        this.amountInput.id = 'amount';
        this.amountInput.placeholder = 'Enter amount...';
        this.amountDiv.append(this.amountLabel, this.amountInput);

        //Submit button form 
        this.submitButton = this.createElement('button', 'btn');
        this.submitButton.textContent = 'Add transaction';
        this.form.append(this.textDiv, this.amountDiv, this.submitButton);

        this.container.append(this.subtitle, this.balance, this.incExpContainer, this.historyTitle, this.transactionsList, this.formTitle, this.form);
        this.body.append(this.title, this.container);
    }

    get _expenseText() {
        return this.textInput.value;
    }

    get _expenseAmount() {
        return this.amountInput.value;
    }

    _resetTextInput() {
        this.textInput.value = "";
    }

    _resetAmountInput() {
        this.amountInput.value = "";
    }

    createElement(tag, className) {
        const element = document.createElement(tag);
        if (className) element.classList.add(className);
        return element;
    }

    getElement(selector) {
        const element = document.querySelector(selector);
        return element;
    }

    displayExpenses(expenses) {
        // Delete all nodes
        while (this.transactionsList.firstChild) {
            this.transactionsList.removeChild(this.transactionsList.firstChild);
        }
        
        if(expenses.length !== 0){
            expenses.forEach(transaction => {
                const sign = +transaction.amount < 0 ? '-' : '+';

                const item = document.createElement('li');
                item.classList.add(transaction.amount < 0 ? 'minus' : 'plus');
                item.id = transaction.id;

                const itemText = this.createElement('input', 'edit-expense-text');
                itemText.type= 'text';
                itemText.value = transaction.text;
                itemText.id = 'expenseText';

                const itemAmount = this.createElement('input', 'edit-expense-amount');
                itemAmount.type= 'number';
                itemAmount.value = transaction.amount;
                itemAmount.id = 'expenseAmount';
                itemAmount.textContent= `${sign}${transaction.amount}`;

                const itemDelButton = this.createElement('button', 'delete-btn');
                itemDelButton.textContent = 'X';

                item.append(itemText, itemAmount, itemDelButton);
                this.transactionsList.appendChild(item);
            });
        }

        const amounts = expenses.map(transaction => transaction.amount);
        const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
        const income = amounts
          .filter(item => item > 0)
          .reduce((acc, item) => (acc += item), 0)
          .toFixed(2);
      
        const expense = (
          amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
          -1
        ).toFixed(2);
      
        this.balance.innerText = `$${total}`;
        this.incValueContainer.innerText = `$${income}`;
        this.expValueContainer.innerText = `$${expense}`;
    }

    bindAddExpense(handler) {
        this.form.addEventListener("submit", event => {
            event.preventDefault();
            if (this._expenseText.trim() === '' || this._expenseAmount.trim() === '') {
                alert('Please add a text and amount');
            } else {
                handler(this._expenseText, this._expenseAmount);
                this._resetTextInput();
                this._resetAmountInput();
            }
        });
    }
    
    /**
     * Primer aquest bind abans del delete, ja que si els invertim,
     * primer anira al delete ja que es un click event, 
     * verificara que no correspond i anira al de 'focusout'
     * tenin aquest odre es assegurem que la funcionalitat vagi correctament 
     */
    bindEditExpense(handler) {
        this.transactionsList.addEventListener("focusout", event => {
        
            let parent = event.target.parentElement;
            let text;
            let amount; 
            
            if(event.target.id === 'expenseText'){
                text = event.target.value;
                amount = +parent.querySelector('#expenseAmount').value;
             }

            if(event.target.id === 'expenseAmount'){
               text = parent.querySelector('#expenseText').value;
               amount = +event.target.value;
            }

            console.log(`'id': ${parent.id}, 'text': ${text}, 'amount': ${amount}`);
            handler(parent.id, text, amount);
        });
    }

    bindDeleteExpense(handler) {
        this.transactionsList.addEventListener("click", event => {
            if (event.target.className === "delete-btn") {
                const id = event.target.parentElement.id;
                handler(id);
            }
        });
    }

}