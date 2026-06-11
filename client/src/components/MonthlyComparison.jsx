function MonthlyComparison({
    expenses,
    selectedMonth
}) {

    const currentMonthExpense =
        expenses
            .filter(
                expense =>
                    expense.date &&
                    expense.date.slice(
                        0,
                        7
                    ) === selectedMonth
            )
            .reduce(
                (
                    total,
                    expense
                ) =>
                    total +
                    Number(
                        expense.amount
                    ),
                0
            );

    const date =
        new Date(
            selectedMonth + "-01"
        );

    date.setMonth(
        date.getMonth() - 1
    );

    const previousMonth =
        date
            .toISOString()
            .slice(0, 7);

    const previousMonthExpense =
        expenses
            .filter(
                expense =>
                    expense.date &&
                    expense.date.slice(
                        0,
                        7
                    ) === previousMonth
            )
            .reduce(
                (
                    total,
                    expense
                ) =>
                    total +
                    Number(
                        expense.amount
                    ),
                0
            );

    const difference =
        currentMonthExpense -
        previousMonthExpense;

    const percentage =
        previousMonthExpense === 0
            ? 0
            : Math.round(
                (
                    difference /
                    previousMonthExpense
                ) * 100
            );

    return (

        <div className="card shadow p-4 mt-4">

            <h3>
                📈 Monthly Comparison
            </h3>

            <hr />

            <h5>

                Current Month Expense

            </h5>

            <h2>

                ₹{currentMonthExpense}

            </h2>

            <h5 className="mt-3">

                Previous Month Expense

            </h5>

            <h2>

                ₹{previousMonthExpense}

            </h2>

            <hr />

            <h4>

                Difference:
                {" "}
                ₹{difference}

            </h4>

            <h4>

                Change:
                {" "}
                {percentage}%

            </h4>

        </div>

    );
}

export default MonthlyComparison;