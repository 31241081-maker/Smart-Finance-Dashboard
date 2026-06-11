function MonthSelector({
    selectedMonth,
    setSelectedMonth
}) {

    return (

        <div className="card shadow p-4 mb-4">

            <h3 className="mb-3">
                📅 Select Month
            </h3>

            <input
                type="month"
                className="form-control"
                value={selectedMonth}
                onChange={(e) =>
                    setSelectedMonth(
                        e.target.value
                    )
                }
            />

        </div>

    );
}

export default MonthSelector;