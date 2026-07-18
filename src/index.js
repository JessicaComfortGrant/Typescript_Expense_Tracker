import { ExpenseTracker } from "./tracker.js";
const tracker = new ExpenseTracker();
tracker.addExpense({
    id: 1,
    title: "Transport",
    amount: 21,
    category: "Travel",
    date: "2026-07-16",
});
tracker.addExpense({
    id: 2,
    title: "Lunch",
    amount: 20,
    category: "Food",
    date: "2026-07-16",
});
console.log("Expenses:");
console.log(tracker.getExpenses());
console.log("\nTotal Spent:");
console.log(`GH₵ ${tracker.getTotal()}`);
//# sourceMappingURL=index.js.map