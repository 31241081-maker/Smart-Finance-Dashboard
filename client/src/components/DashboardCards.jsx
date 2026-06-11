function DashboardCards({
    expenses,
    income
}) {

    const totalExpense =
        expenses.reduce(
            (total, expense) =>
                total +
                Number(expense.amount),
            0
        );

    const balance =
        income - totalExpense;

    return (

        <div className="row mb-4">

            <div className="col-md-4 mb-3">

                <div className="card shadow bg-success text-white">

                    <div className="card-body">

                        <h5>
                            Income
                        </h5>

                        <h2>
                            ₹{income}
                        </h2>

                    </div>

                </div>

            </div>

            <div className="col-md-4 mb-3">

                <div className="card shadow bg-danger text-white">

                    <div className="card-body">

                        <h5>
                            Expense
                        </h5>

                        <h2>
                            ₹{totalExpense}
                        </h2>

                    </div>

                </div>

            </div>

            <div className="col-md-4 mb-3">

                <div className="card shadow bg-primary text-white">

                    <div className="card-body">

                        <h5>
                            Balance
                        </h5>

                        <h2>
                            ₹{balance}
                        </h2>

                    </div>

                </div>

            </div>

        </div>

    );
}

export default DashboardCards;