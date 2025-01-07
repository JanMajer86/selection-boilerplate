import "./App.css";
import { useGlobalContext } from "./context";
import ItemsRow from "./ItemsRow";

function App() {
	const { categories } = useGlobalContext();
	return (
		<>
			<h2>app</h2>

			<div className="items-container">
				{categories.map((category, index) => {
					return <ItemsRow key={index} category={category} />;
				})}
			</div>
		</>
	);
}

export default App;
