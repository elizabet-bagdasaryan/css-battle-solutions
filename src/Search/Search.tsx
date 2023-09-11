import { useState } from "react";
import "./Search.css";
import SearchIcon from "@mui/icons-material/Search";

interface SearchBarProps {
	onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
	const [searchQuery, setSearchQuery] = useState("");

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchQuery(event.target.value);
	};

	const handleSearch = () => {
		onSearch(searchQuery);
	};

	return (
		<div className="search">
			<SearchIcon className="icon" />
			<input
				type="text"
				placeholder="Search..."
				value={searchQuery}
				onChange={handleInputChange}
			/>
			<button onClick={handleSearch}>Search</button>
		</div>
	);
};

export default SearchBar;
