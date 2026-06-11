import {
    Pie
} from "react-chartjs-2";

import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from "chart.js";

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
);

function ExpensePieChart({
    expenses
}) {

    const categories =
        JSON.parse(
            localStorage.getItem("categories")
        ) || [];

    const totals =
        categories.map((category) =>

            expenses
                .filter(
                    expense =>
                        expense.category === category
                )
                .reduce(
                    (
                        total,
                        expense
                    ) =>
                        total +
                        Number(expense.amount),
                    0
                )

        );

    const data = {

        labels: categories,

        datasets: [

            {

                data: totals,

                backgroundColor: [
                    "#4F46E5",
                    "#06B6D4",
                    "#10B981",
                    "#F59E0B",
                    "#EF4444",
                    "#8B5CF6",
                    "#14B8A6",
                    "#EC4899",
                    "#3B82F6",
                    "#84CC16"
                ]

            }

        ]

    };

    return (

        <div
            className="
            card
            shadow
            p-4
            mt-4
            "
        >

            <h3 className="mb-4">

                Expense Analytics

            </h3>

            <div
                style={{
                    width: "450px",
                    margin: "auto"
                }}
            >

                <Pie data={data} />

            </div>

        </div>

    );
}

export default ExpensePieChart;