import React, { useContext, useState } from "react";
import { SearchContext } from "../Context/SearchContext";

export default function Search() {
    const { result, searchBox , setSearchTerm ,searchTerm} = useContext(SearchContext);

    // Function to handle input
    function handleInput(e) {
        setSearchTerm(e.target.value);
    }
    // Function to handle search
    function handleSearch() {
        searchBox(searchTerm);
    }

    return (
        <div id="search-box" className="">
            <form className="d-flex gap-3" role="search" onSubmit={(e) => e.preventDefault()}>
                <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    onChange={handleInput}
                />
                <button type="button" onClick={handleSearch}>
                    Search
                </button>
            </form>
        </div>
    );
}
