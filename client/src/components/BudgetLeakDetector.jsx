function BudgetLeakDetector({
    expenses
}) {

    const categoryTotals = {};

    expenses.forEach((expense) => {

        categoryTotals[expense.category] =
            (categoryTotals[expense.category] || 0)
            + Number(expense.amount);

    });

    let leakCategory = "None";
    let leakAmount = 0;

    Object.entries(categoryTotals)
        .forEach(([category, amount]) => {

            if (amount > leakAmount) {

                leakAmount = amount;
                leakCategory = category;

            }

        });

    return (

        <div className="card shadow p-4 mt-4">

            <h3>
                ⚠ Budget Leak Detector
            </h3>

            <hr />

            <h5>

                Highest Spending Area:

                {leakCategory}

            </h5>

            <h4
                className="text-danger"
            >
                ₹{leakAmount}
            </h4>

            <p>

                Consider reducing
                {" "}
                {leakCategory}
                {" "}
                expenses next month.

            </p>

        </div>

    );
}

export default BudgetLeakDetector;