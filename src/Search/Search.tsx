import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { SearchContainer, SearchInput, SearchButton, Icon } from "../styles.ts";
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
		<SearchContainer>
			<Icon>
				<SearchIcon />
			</Icon>
			<SearchInput
				type="text"
				placeholder="Search..."
				value={searchQuery}
				onChange={handleInputChange}
			/>
			<SearchButton onClick={handleSearch}>Search</SearchButton>
		</SearchContainer>
	);
};

export default SearchBar;
