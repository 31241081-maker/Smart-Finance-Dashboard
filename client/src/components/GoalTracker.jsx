import { useState } from "react";

function GoalTracker() {

    const [goalName,
        setGoalName] =
        useState("");

    const [goalAmount,
        setGoalAmount] =
        useState("");

    const [savedAmount,
        setSavedAmount] =
        useState("");

    const progress =
        goalAmount > 0
            ? Math.min(
                (
                    savedAmount /
                    goalAmount
                ) * 100,
                100
            )
            : 0;

    return (

        <div className="card shadow p-4 mt-4 mb-4">

            <div className="d-flex align-items-center mb-3">

                <h3 className="m-0">

                    🎯 Goal Tracker

                </h3>

            </div>

            <input
                className="form-control mb-3"
                placeholder="Goal Name"
                value={goalName}
                onChange={(e) =>
                    setGoalName(
                        e.target.value
                    )
                }
            />

            <input
                type="number"
                className="form-control mb-3"
                placeholder="Target Amount"
                value={goalAmount}
                onChange={(e) =>
                    setGoalAmount(
                        e.target.value
                    )
                }
            />

            <input
                type="number"
                className="form-control"
                placeholder="Current Saved Amount"
                value={savedAmount}
                onChange={(e) =>
                    setSavedAmount(
                        e.target.value
                    )
                }
            />

            <div className="mt-4">

                <h5>

                    {goalName || "No Goal Set"}

                </h5>

                <h4 className="mb-3">

                    ₹{savedAmount || 0}
                    {" / "}
                    ₹{goalAmount || 0}

                </h4>

                <div className="progress">

                    <div
                        className="
                        progress-bar
                        bg-primary
                        "
                        style={{
                            width:
                                `${progress}%`
                        }}
                    >

                        {Math.round(
                            progress
                        )}%

                    </div>

                </div>

            </div>

        </div>

    );
}

export default GoalTracker;