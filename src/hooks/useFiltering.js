import { useState } from "react";

const useFiltering = (data, filters) => {
  const [filterValues, setFilterValues] = useState(() => {
    const filterInitialValues = filters.map((f) => (
      console.log("the f ",f),{
      name: f.name,
      value: f.value,
    }));
    console.log("ini ",filterInitialValues)
    return filterInitialValues;
  });

  const filteringConditions = filters.map((f) => f.condition);
  console.log("conditions ",filteringConditions)
  const filterFunction = (collection) =>
      
    filteringConditions.reduce((data, conditionFn, index) => {
      console.log("conditionFn", conditionFn,"index",index)
      return data.filter((item) => {
     
          return conditionFn(item, filterValues[index].value);
      });
    
    }, collection);

  return {
    filterValues,
    setFilterValues,
    filterFunction,
  };
};

export default useFiltering;
