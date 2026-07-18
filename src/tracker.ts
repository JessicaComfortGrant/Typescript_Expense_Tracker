import type { Expense } from "./expense.js";

export class ExpenseTracker {

    private expenses: Expense[] = [];


    addExpense(expense: Expense): void {
        this.expenses.push(expense);
    }


    getExpenses(): Expense[] {
        return this.expenses;
    }


    getTotal(): number {
        return this.expenses.reduce(
            (total, expense) => total + expense.amount,
            0
        );
    }
}