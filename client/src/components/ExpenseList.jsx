function ExpenseList({
    expenses,
    setExpenses
}) {

    const deleteExpense = (id) => {

        const updatedExpenses =
            expenses.filter(
                expense =>
                    expense.id !== id
            );

        setExpenses(updatedExpenses);
    };

    return (

        <div className="card shadow mt-4 p-3">

            <h3 className="mb-3">
                Transactions
            </h3>

            <table className="table table-hover">

                <thead>

                    <tr>
                        <th>Date</th>
                        <th>Amount</th>
                        <th>Category</th>
                        <th>Action</th>
                    </tr>

                </thead>

                <tbody>

                    {expenses.length === 0 ? (

                        <tr>

                            <td colSpan="4">

                                No Expenses Added Yet

                            </td>

                        </tr>

                    ) : (

                        expenses.map((expense) => (

                            <tr
                                key={expense.id}
                            >

                                <td>
                                    {expense.date}
                                </td>

                                <td>
                                    ₹{expense.amount}
                                </td>

                                <td>
                                    {expense.category}
                                </td>

                                <td>

                                    <button
                                        className="
                                        btn
                                        btn-danger
                                        btn-sm
                                        "
                                        onClick={() =>
                                            deleteExpense(
                                                expense.id
                                            )
                                        }
                                    >
                                        Delete
                                    </button>

                                </td>

                            </tr>

                        ))

                    )}

                </tbody>

            </table>

        </div>

    );
}

export default ExpenseList;