import { useGlobalContext } from "./context";

const ItemsRow = ({ category }) => {
	const { items, selectedItems, handleClick } = useGlobalContext();
	const itemsCategorized = items.filter((item) => item.category === category);

	return (
		<div>
			<p>items from category: {category}</p>
			<div className="items-row">
				{itemsCategorized.map((item) => {
					const { id, name, color, cost, category } = item;
					let thisOneSelected = selectedItems.some((item) => item.id === id);

					return (
						<div
							className="item"
							key={id}
							style={{
								backgroundColor: `${color}`,
								borderColor: thisOneSelected && "#2a9e03",
							}}
							onClick={() => handleClick(id, category)}
						>
							<p>{name}</p>
							<p>cost: {cost}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default ItemsRow;
