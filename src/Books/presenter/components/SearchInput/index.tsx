import React, { ChangeEvent } from "react";
import "./SearchInput.css";

interface SearchInputProps {
  title:string
  onSearch: Function;
}

const SearchInput = ({ onSearch,title }: SearchInputProps) => {
  const [searchValue, setSearchValue] = React.useState("");

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setSearchValue(event.target.value);
  }

  return (
    <div className="search">
      <h1>{title}</h1>
      <input
        className="search-input"
        type="text"
        placeholder="Buscar un libro"
        value={searchValue}
        onChange={handleInputChange}
      />
      <button className="search-button" onClick={() => onSearch(searchValue)}>
        Buscar
      </button>
    </div>
  );
};

export default SearchInput;
