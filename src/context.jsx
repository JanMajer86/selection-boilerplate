import { createContext, useContext, useState } from "react";
import data from "./data";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
	const [items, setItems] = useState(data);
	const [selectedItems, setSelectedItems] = useState([]);

	const categories = [...new Set(items.map((item) => item.category))];

	const handleClick = (id, category) => {
		const newItem = items.find((item) => item.id === id);

		// 1) check, if there is already selected item from the same category or the same item
		const sameCategory = selectedItems.find(
			(item) => item.category === category
		);
		if (selectedItems.find((item) => item.category === category)) {
			if (sameCategory.id === id) {
				return setSelectedItems([
					...selectedItems.filter((item) => item !== sameCategory),
				]);
			}
			const newSelectedItems = [
				...selectedItems.filter((item) => item !== sameCategory),
				newItem,
			];
			return setSelectedItems(newSelectedItems);
		}

		const newSelectedItems = [...selectedItems, newItem];
		setSelectedItems(newSelectedItems);
	};

	return (
		<AppContext.Provider
			value={{ items, categories, selectedItems, handleClick }}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};
