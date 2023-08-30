import "./App.css";
import Pilot from "./Pilot/Pilot.tsx";
import Visibility from "./Visibility/Visibility.tsx";
import Cursor from "./Cursor/Cursor.tsx";
import Display from "./Display/Display.tsx";
import Inline from "./Inline/Inline.tsx";
import Conic from "./Conic/Conic.tsx";
import Backface from "./Backface/Backface.tsx";
import Transition from "./Transition/Transition.tsx";
import Margin from "./Margin/Margin.tsx";
import Block from "./Block/Block.tsx";
import SearchBar from "./Search/Search.tsx";
function App() {
	const handleSearch = (query: string) => {
		console.log("Searching for:", query);
	};
	return (
		<>
			<SearchBar onSearch={handleSearch} />
			<Pilot />
			<Visibility />
			<Cursor />
			<Display />
			<Inline />
			<Conic />
			<Backface />
			<Transition />
			<Margin />
			<Block />
		</>
	);
}

export default App;
