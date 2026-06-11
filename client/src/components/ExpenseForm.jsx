import { useState, useEffect } from "react";

function ExpenseForm({ expenses, setExpenses }) {

    const defaultCategories = [
        "🍔 Food",
        "✈️ Travel",
        "🛍️ Shopping",
        "💡 Bills",
        "🎬 Entertainment",
        "🏥 Healthcare",
        "📚 Education",
        "🚕 Transport",
        "🏠 Rent",
        "📱 Recharge"
    ];

    const [categories, setCategories] = useState(() => {

        const saved =
            localStorage.getItem("categories");

        return saved
            ? JSON.parse(saved)
            : defaultCategories;
    });

    const [newCategory, setNewCategory] =
        useState("");

    const [amount, setAmount] =
        useState("");

    const [category, setCategory] =
        useState("");

    const [date, setDate] =
        useState("");

    useEffect(() => {

        localStorage.setItem(
            "categories",
            JSON.stringify(categories)
        );

    }, [categories]);

    const addCategory = () => {

        if (!newCategory) return;

        const updatedCategories = [
            ...categories,
            newCategory
        ];

        setCategories(updatedCategories);

        setNewCategory("");
    };

    const handleAddExpense = () => {

        if (!amount || !category || !date) {

            alert("Please fill all fields");
            return;
        }

        const newExpense = {

            id: Date.now(),
            amount,
            category,
            date

        };

        setExpenses([
            ...expenses,
            newExpense
        ]);

        setAmount("");
        setCategory("");
        setDate("");
    };

    return (

        <div className="card shadow p-4 mt-4">

            <h2 className="mb-4">
                Add Expense
            </h2>

            <input
                type="number"
                className="form-control mb-3"
                placeholder="Amount"
                value={amount}
                onChange={(e) =>
                    setAmount(e.target.value)
                }
            />

            <select
                className="form-select mb-3"
                value={category}
                onChange={(e) =>
                    setCategory(e.target.value)
                }
            >

                <option value="">
                    Select Category
                </option>

                {categories.map((cat) => (

                    <option
                        key={cat}
                        value={cat}
                    >
                        {cat}
                    </option>

                ))}

            </select>

            <input
                type="date"
                className="form-control mb-3"
                value={date}
                onChange={(e) =>
                    setDate(e.target.value)
                }
            />

            <button
                className="btn btn-primary w-100 mb-4"
                onClick={handleAddExpense}
            >
                Add Expense
            </button>

            <hr />

            <h5>
                Create Custom Category
            </h5>

            <div className="d-flex gap-2">

                <input
                    className="form-control"
                    placeholder="Example: 🐶 Pet Care"
                    value={newCategory}
                    onChange={(e) =>
                        setNewCategory(
                            e.target.value
                        )
                    }
                />

                <button
                    className="btn btn-success"
                    onClick={addCategory}
                >
                    Add
                </button>

            </div>

        </div>

    );
}

export default ExpenseForm;