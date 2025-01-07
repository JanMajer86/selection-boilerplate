const SingleItem = ({
	id,
	name,
	color,
	cost,
	selectedItem,
	handleSelection,
}) => {
	const thisOneSelected = id === selectedItem.id;

	return (
		<div
			className="item"
			id={id}
			style={{
				backgroundColor: `${color}`,
				borderColor: thisOneSelected && "#2a9e03",
			}}
			onClick={handleSelection}
		>
			<p>{name}</p>
		</div>
	);
};
export default SingleItem;
