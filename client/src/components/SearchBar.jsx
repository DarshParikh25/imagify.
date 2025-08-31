import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoMdCloseCircleOutline } from "react-icons/io";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleClear = () => {
    setSearchValue("");
  };

  //   const filteredSuggestions = photos.filter((image) =>
  //     image.alt_description.toLowerCase().includes(searchValue.toLowerCase())
  //   );

  //   const handleSuggestionClick = (alt_description) => {
  //     setSearchValue(alt_description);
  //     setIsFocused(false);
  //   };

  return (
    <div
      id="navbar"
      className={`bg-white pr-10 py-8 pl-6 ml-4 w-[80%] flex items-start justify-between fixed z-20`}
    >
      <div className="relative w-full">
        <div
          id="search"
          className={`flex items-center border-2 border-solid ${
            isFocused ? "border-blue-600" : "border-[#a9a9a9]"
          } py-3 px-5 rounded-full transition-colors duration-300`}
        >
          <FaSearch
            className={`h-full mr-3 transition-colors duration-300 ${
              isFocused ? "text-blue-600" : "text-gray-500"
            }`}
          />
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setTimeout(() => setIsFocused(false), 200)}
            placeholder="Search for images"
            className="pl-3 bg-transparent w-full outline-none border-l-2 border-solid border-[#a9a9a9] focus:border-l-2 focus:border-blue-600 transition-colors duration-300"
          />
          {searchValue && (
            <IoMdCloseCircleOutline
              onClick={handleClear}
              className="text-2xl ml-5 cursor-pointer"
            />
          )}
        </div>

        {searchValue && isFocused && (
          <ul
            className={`opts absolute top-full left-12 mt-2 w-[90%] flex flex-col justify-center border border-gray-300 rounded-2xl bg-white text-[#111] max-h-[30rem] overflow-y-auto shadow-2xl z-30`}
          >
            {/* {filteredSuggestions.length > 0 ? (
                    filteredSuggestions.map((suggestion) => (
                        <li
                        key={suggestion.id}
                        onClick={() => handleSuggestionClick(suggestion.alt_description)}
                        className={`py-3 rounded-xl pl-3 ${
                            darkTheme ? "hover:bg-[#11111111]" : "hover:bg-gray-100"
                        } cursor-pointer border-b border-gray-300 transition-colors duration-300`}
                        >
                        {suggestion.alt_description}
                        </li>
                    ))
                    ) : (
                    <li className="p-3 text-gray-500">
                        Sorry, No results found. Please try something else! :)
                    </li>
                    )} */}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
