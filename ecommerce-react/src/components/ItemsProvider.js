import React, {
  useState,
  useEffect,
  useMemo,
  useContext,
  createContext,
} from "react";
import {
  getItemCategories,
  getItemFields,
  getItems,
} from "../firebase/itemRepository";

export const ItemsContext = createContext();
export const useItems = () => useContext(ItemsContext);

export default function ItemsProvider({ children }) {
  const [items, setItems] = useState([]);
  const [itemCategories, setItemCategories] = useState([]);
  const [itemFields, setItemFields] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    const fetchItems = async () => {
      const data = await getItems();
      setItems(data);
    };
    const fetchItemCategories = async () => {
      const data = await getItemCategories();
      setItemCategories(data);
    };
    const fetchItemFields = async () => {
      const data = await getItemFields();
      setItemFields(data);
    };

    fetchItems();
    fetchItemCategories();
    fetchItemFields();
  }, []);

  const itemsToDisplay = useMemo(() => {
    const filteredItems = items.filter(
      (item) => selectedCategory === "all" || item.category === selectedCategory
    );
    return filteredItems; // orderBy(filteredItems, selectedSortField, "asc");
  }, [items, selectedCategory]);

  const handleSelectCategory = (category) => {
    console.log(category);
    setSelectedCategory(category);
  };

  const getItemById = (id) => items.find((item) => item.id === id);

  return (
    <ItemsContext.Provider
      value={{
        items: itemsToDisplay,
        itemCategories,
        handleSelectCategory,
        getItemById,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
}
