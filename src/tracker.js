export class ExpenseTracker {
    expenses = [];
    addExpense(expense) {
        this.expenses.push(expense);
    }
    getExpenses() {
        return this.expenses;
    }
    getTotal() {
        return this.expenses.reduce((total, expense) => total + expense.amount, 0);
    }
}
//# sourceMappingURL=tracker.js.map