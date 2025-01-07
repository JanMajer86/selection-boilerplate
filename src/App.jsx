import { useState } from "react";
import data from "./data";
import "./App.css";

function App() {
	const budget = 10;
	const [remainingBudget, setRemainingBudget] = useState(budget);
	const [items, setItems] = useState(data);
	const [selectedItem, setSelectedItem] = useState({});

	let isSelected = Object.keys(selectedItem).length !== 0;

	const handleSelection = (id) => {
		// const id = parseInt(e.target.id);
		console.log(id);
		const newItem = items.find((item) => item.id === id);
		if (newItem.id === selectedItem?.id) {
			setSelectedItem({});
			return;
		}
		setSelectedItem(newItem);
	};

	return (
		<>
			<h2>app</h2>
			{isSelected ? (
				<h4>your selected color: {selectedItem.name}</h4>
			) : (
				<h4>select a color</h4>
			)}
			<h4>
				your budget: {budget} | remaining: {remainingBudget}
			</h4>
			<div className="items-container">
				{items.map((item) => {
					const { id, name, color, cost } = item;
					const thisOneSelected = id === selectedItem.id;
					return (
						<div
							className="item"
							key={id}
							style={{
								backgroundColor: `${color}`,
								borderColor: thisOneSelected && "#2a9e03",
							}}
							onClick={() => handleSelection(id)}
						>
							<p>{name}</p>
							<p>cost: {cost}</p>
						</div>
					);
				})}
			</div>
		</>
	);
}

export default App;
