import { debounce } from "lodash";
import { useState } from "react";

export default function useFilters(){
    const [filters, setFilters] = useState({});

    const handleFilter = debounce((field, value) => {
        if(value){
            setFilters({...filters, [field]: [value]});
        } else{
            const newFilters = { ...filters };
            if(field in newFilters){
                delete newFilters[field];
            }
            setFilters({...newFilters});
        }
    }, 300);

    return { handleFilter, filters};
};