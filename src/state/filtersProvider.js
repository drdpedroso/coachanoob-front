import React, {useState, createContext} from 'react'

const FiltersContext = createContext({});

const FiltersProvider = (props) => {
    const [filters, setFilters] = useState({});

    return (
        <FiltersContext.Provider
            value={{filters, setFilters}}
        >
            {props.children}
        </FiltersContext.Provider>
    )

};

export {FiltersProvider, FiltersContext}
