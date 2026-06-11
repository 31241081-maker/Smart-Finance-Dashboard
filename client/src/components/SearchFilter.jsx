function SearchFilter({
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory
}) {

    const categories =
        JSON.parse(
            localStorage.getItem("categories")
        ) || [];

    return (

        <div className="card shadow p-3 mt-4">

            <div className="row">

                <div className="col-md-6">

                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search Expense"
                        value={searchTerm}
                        onChange={(e) =>
                            setSearchTerm(
                                e.target.value
                            )
                        }
                    />

                </div>

                <div className="col-md-6">

                    <select
                        className="form-select"
                        value={selectedCategory}
                        onChange={(e) =>
                            setSelectedCategory(
                                e.target.value
                            )
                        }
                    >

                        <option value="All">
                            All Categories
                        </option>

                        {categories.map((cat) => (

                            <option
                                key={cat}
                                value={cat}
                            >
                                {cat}
                            </option>

                        ))}

                    </select>

                </div>

            </div>

        </div>

    );
}

export default SearchFilter;