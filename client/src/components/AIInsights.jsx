function AIInsights({
    expenses
}) {

    const totalExpense =
        expenses.reduce(
            (total, expense) =>
                total +
                Number(expense.amount),
            0
        );

    const categoryTotals = {};

    expenses.forEach((expense) => {

        categoryTotals[
            expense.category
        ] =
            (
                categoryTotals[
                expense.category
                ] || 0
            )
            +
            Number(
                expense.amount
            );

    });

    let highestCategory =
        "None";

    let highestAmount = 0;

    Object.entries(
        categoryTotals
    ).forEach(
        ([category, amount]) => {

            if (
                amount >
                highestAmount
            ) {

                highestAmount =
                    amount;

                highestCategory =
                    category;

            }

        }
    );

    const percentage =
        totalExpense === 0
            ? 0
            : Math.round(
                (
                    highestAmount /
                    totalExpense
                ) * 100
            );

    const recommendedBudget =
        Math.round(
            highestAmount * 0.8
        );

    const potentialSavings =
        highestAmount -
        recommendedBudget;

    let healthScore = 100;

    if (
        percentage > 50
    ) {

        healthScore -= 30;

    }
    else if (
        percentage > 35
    ) {

        healthScore -= 15;

    }

    return (

        <div className="card shadow p-4 h-100">

            <h3>

                🤖 Smart Finance Advisor

            </h3>

            <hr />

            <div className="mb-3">

                <small
                    className="
                    text-muted
                    "
                >
                    Highest Category
                </small>

                <h2>
                    {highestCategory}
                </h2>

            </div>

            <div className="mb-3">

                <small
                    className="
                    text-muted
                    "
                >
                    Spending Share
                </small>

                <h5>
                    {percentage}%
                </h5>

            </div>

            <div className="mb-3">

                <small
                    className="
                    text-muted
                    "
                >
                    Recommended Budget
                </small>

                <h5>
                    ₹{recommendedBudget}
                </h5>

            </div>

            <div className="mb-3">

                <small
                    className="
                    text-muted
                    "
                >
                    Potential Savings
                </small>

                <h5
                    className="
                    text-success
                    "
                >
                    ₹{potentialSavings}
                </h5>

            </div>

            <hr />

            <small
                className="
                text-muted
                "
            >
                Financial Health Score
            </small>

            <h1
                className="
                text-primary
                "
            >
                {healthScore}/100
            </h1>

        </div>

    );
}

export default AIInsights;