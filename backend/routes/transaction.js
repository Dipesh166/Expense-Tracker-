const { addExpense, getExpense, deleteExpense } = require("../controllers/expenses")
const { addIncome, getIncome, deleteIncome } = require("../controllers/transaction")

const router = require("express").Router()

//Income Routes
router.post("/add-income", addIncome)
router.get("/get-income", getIncome)

router.delete("/delete-income/:id", deleteIncome)


// Expense routes
router.post("/add-expense", addExpense)
router.get("/get-expense", getExpense)

router.delete("/delete-expense/:id", deleteExpense)

module.exports=router

