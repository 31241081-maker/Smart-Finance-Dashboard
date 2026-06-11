import { useState } from "react";

function IncomeForm({
    incomeData,
    setIncomeData,
    selectedMonth
}) {

    const [inputIncome,
        setInputIncome] =
        useState("");

    const saveIncome = () => {

        if (!inputIncome) {

            alert(
                "Enter Income"
            );

            return;

        }

        setIncomeData({

            ...incomeData,

            [selectedMonth]:
                Number(
                    inputIncome
                )

        });

        setInputIncome("");

    };

    return (

        <div className="card shadow p-4 mb-4">

            <h3 className="mb-3">

                Monthly Income

            </h3>

            <p>

                Selected Month:
                {" "}
                <strong>
                    {selectedMonth}
                </strong>

            </p>

            <input
                type="number"
                className="form-control mb-3"
                placeholder="Enter Income"
                value={inputIncome}
                onChange={(e) =>
                    setInputIncome(
                        e.target.value
                    )
                }
            />

            <button
                className="btn btn-success"
                onClick={saveIncome}
            >

                Save Income

            </button>

            <h5 className="mt-3">

                Current Income:

                ₹{
                    incomeData[
                    selectedMonth
                    ] || 0
                }

            </h5>

        </div>

    );
}

export default IncomeForm;