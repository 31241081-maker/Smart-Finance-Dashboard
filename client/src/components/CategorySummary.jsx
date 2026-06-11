function CategorySummary({ expenses }) {

    const categories =
        JSON.parse(
            localStorage.getItem("categories")
        ) || [];

    const getTotal = (category) =>

        expenses
            .filter(
                expense =>
                    expense.category === category
            )
            .reduce(
                (total, expense) =>
                    total +
                    Number(expense.amount),
                0
            );

    return (

        <div className="row mt-4">

            {categories.map((category) => (

                <div
                    className="col-md-3 mb-3"
                    key={category}
                >

                    <div
                        className="
                        card
                        shadow
                        p-4
                        h-100
                        "
                    >

                        <h4>
                            {category}
                        </h4>

                        <h2>

                            ₹{
                                getTotal(category)
                            }

                        </h2>

                    </div>

                </div>

            ))}

        </div>

    );
}

export default CategorySummary;