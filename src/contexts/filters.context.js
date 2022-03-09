import { createContext, useContext, useState } from "react";

const FilterContext = createContext()

export const FilterProvider = ({ children }) => {
    const [filters, setFilters] = useState({
        filterPrice: 5000,
        priceSortOrder: '',
        genderChecks: [],
        brandChecks: [],
        sizeChecks: [],
        ratingChecks: []
    })

    return (
        <FilterContext.Provider
            value={{
                filters,
                setFilters
            }}
        >
            {children}
        </FilterContext.Provider>
    )
}

export const useFilters = () => useContext(FilterContext)
