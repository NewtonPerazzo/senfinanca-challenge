import { Select } from "antd";
import { useEffect, useState } from "react";
import loadTransactions from "../../api/list";
import useFilters from "../../hooks/useFilters";
import { SelectCustom, Container } from "./style";

export const handleChangeFilter = (oldData, filters) => {
    let newFilteredData = [...oldData];
    const keys = Object.keys(filters);
    keys?.forEach((key) => {
        if(filters[key]?.length > 0){
            newFilteredData = newFilteredData?.filter((item) => {
                return item[key] === filters[key][0]
            });
        }
    });
    return newFilteredData;
};

export function Filters(props){
    const { data, setData } = props;
    const { handleFilter, filters } = useFilters();
    const [types, setTypes] = useState();
    const [oldData, setOldData] = useState([]);
    const [categories, setCategories] = useState();
    const { Option } = Select; 
    
    useEffect(() => {
        setData(handleChangeFilter(oldData, filters));
        // Se o filtro tiver vazio, retorna os valores iniciais
        if(Object.keys(filters).length === 0){
            setData(oldData);
        }
    }, [filters]);

    useEffect(() => {
        setOldData(loadTransactions());
    }, [data]);

    useEffect(() => {
        let typesAux = [];
        let categoriesAux = [];
        const loadSelectOptions = () => {
            data?.filter((element) => {
                if(!typesAux.includes(element.type)){
                    typesAux.push(element.type);
                }
                if(!categoriesAux.includes(element.category)){
                    categoriesAux.push(element.category);
                }
            })
            setTypes(typesAux);
            setCategories(categoriesAux);
        };
        loadSelectOptions();
    }, [data]);

    return(
        <Container>
            <SelectCustom 
                placeholder="Transação"
                allowClear 
                showSearch
                optionFilterProp="children"
                filterOption={(value, option) =>
                    option?.children?.toLowerCase().indexOf(value?.toLowerCase()) >= 0
                }
                filterSort={(a, b) =>
                    a?.children?.toLowerCase().localeCompare(b?.children?.toLowerCase())
                }
                onChange={(value) => {
                    handleFilter("name", value)
                }}
            >
                {
                    data?.map((element) => (
                        <Option key={element} value={element?.name}>{element?.name}</Option>
                    ))
                }
            </SelectCustom>

            <SelectCustom 
                placeholder="Tipo de transação"
                allowClear 
                showSearch
                optionFilterProp="children"
                filterOption={(value, option) =>
                    option?.children?.toLowerCase().indexOf(value?.toLowerCase()) >= 0
                }
                filterSort={(a, b) =>
                    a?.children?.toLowerCase().localeCompare(b?.children?.toLowerCase())
                }
                onChange={(value) => {
                    handleFilter("type", value)
                }}
            >
                {
                    types?.map((element) => (
                        <Option key={element} value={element}>{element}</Option>
                    ))
                }
            </SelectCustom>
            
            <SelectCustom 
                placeholder="Categoria"
                allowClear 
                showSearch
                optionFilterProp="children"
                filterOption={(value, option) =>
                    option?.children?.toLowerCase().indexOf(value?.toLowerCase()) >= 0
                }
                filterSort={(a, b) =>
                    a?.children?.toLowerCase().localeCompare(b?.children?.toLowerCase())
                }
                onChange={(value) => {
                    handleFilter("category", value)
                }}
            >
                {
                    categories?.map((element) => (
                        <Option key={element} value={element}>{element}</Option>
                    ))
                }
            </SelectCustom>
        </Container>
    );
};