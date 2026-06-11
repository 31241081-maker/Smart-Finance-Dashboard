import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import MonthSelector from "./components/MonthSelector";
import IncomeForm from "./components/IncomeForm";
import DashboardCards from "./components/DashboardCards";
import GoalTracker from "./components/GoalTracker";
import ExpenseForm from "./components/ExpenseForm";
import CategorySummary from "./components/CategorySummary";
import ExpensePieChart from "./components/ExpensePieChart";
import MonthlyComparison from "./components/MonthlyComparison";
import BudgetLeakDetector from "./components/BudgetLeakDetector";
import AIInsights from "./components/AIInsights";
import SearchFilter from "./components/SearchFilter";
import ExpenseList from "./components/ExpenseList";

function App() {

  const [expenses, setExpenses] =
    useState(() => {

      const savedExpenses =
        localStorage.getItem(
          "expenses"
        );

      return savedExpenses
        ? JSON.parse(
            savedExpenses
          )
        : [];

    });

  const [incomeData,
    setIncomeData] =
    useState(() => {

      const savedIncome =
        localStorage.getItem(
          "incomeData"
        );

      return savedIncome
        ? JSON.parse(
            savedIncome
          )
        : {};

    });

  const [selectedMonth,
    setSelectedMonth] =
    useState(
      new Date()
        .toISOString()
        .slice(0, 7)
    );

  const [searchTerm,
    setSearchTerm] =
    useState("");

  const [selectedCategory,
    setSelectedCategory] =
    useState("All");

  useEffect(() => {

    localStorage.setItem(
      "expenses",
      JSON.stringify(
        expenses
      )
    );

    localStorage.setItem(
      "incomeData",
      JSON.stringify(
        incomeData
      )
    );

  }, [
    expenses,
    incomeData
  ]);

  const currentIncome =
    incomeData[
      selectedMonth
    ] || 0;

  const monthExpenses =
    expenses.filter(
      (expense) =>
        expense.date &&
        expense.date.slice(
          0,
          7
        ) === selectedMonth
    );

  const filteredExpenses =
    monthExpenses.filter(
      (expense) => {

        const matchesSearch =
          expense.category
            .toLowerCase()
            .includes(
              searchTerm.toLowerCase()
            );

        const matchesCategory =
          selectedCategory ===
          "All"
            ? true
            : expense.category ===
              selectedCategory;

        return (
          matchesSearch &&
          matchesCategory
        );

      }
    );

  return (

    <div className="container py-4">

      <Navbar />

      <MonthSelector
        selectedMonth={
          selectedMonth
        }
        setSelectedMonth={
          setSelectedMonth
        }
      />

      <IncomeForm
        incomeData={
          incomeData
        }
        setIncomeData={
          setIncomeData
        }
        selectedMonth={
          selectedMonth
        }
      />

      <DashboardCards
        expenses={
          monthExpenses
        }
        income={
          currentIncome
        }
      />

      <GoalTracker />

      <ExpenseForm
        expenses={expenses}
        setExpenses={
          setExpenses
        }
      />

      <CategorySummary
        expenses={
          monthExpenses
        }
      />

      <ExpensePieChart
        expenses={
          monthExpenses
        }
      />

      <MonthlyComparison
        expenses={expenses}
        selectedMonth={selectedMonth}
      />

      <div className="row mt-4">

        <div className="col-md-6 mb-4">

          <BudgetLeakDetector
            expenses={
              monthExpenses
            }
          />

        </div>

        <div className="col-md-6 mb-4">

          <AIInsights
            expenses={
              monthExpenses
            }
          />

        </div>

      </div>

      <SearchFilter
        searchTerm={
          searchTerm
        }
        setSearchTerm={
          setSearchTerm
        }
        selectedCategory={
          selectedCategory
        }
        setSelectedCategory={
          setSelectedCategory
        }
      />

      <ExpenseList
        expenses={
          filteredExpenses
        }
        setExpenses={
          setExpenses
        }
      />

    </div>

  );
}

export default App;