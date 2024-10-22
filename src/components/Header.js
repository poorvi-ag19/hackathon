import React, { useState } from 'react';
import './Header.css';

function Header() {
    // State to store the search query and results
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    // Function to fetch search results from the backend
    const fetchSearchResults = async (query) => {
        try {
            const response = await fetch(`http://localhost:3000/search?q=${query}`);
            const data = await response.json();
            setSearchResults(data); // Update the state with the search results
        } catch (error) {
            console.error("Error fetching search results:", error);
        }
    };

    // Function to handle search input
    const handleSearch = (event) => {
        const query = event.target.value;
        setSearchQuery(query);

        if (query) {
            fetchSearchResults(query); // Fetch results from the backend
        } else {
            setSearchResults([]); // Clear search results if query is empty
        }
    };

    return (
        <header>
            <div className="header-content">
                <h1>FAQ Search</h1>

                {/* Search Bar */}
                <input
                    type="text"
                    className="search-bar"
                    placeholder="Search FAQs..."
                    value={searchQuery}
                    onChange={handleSearch}
                />
            </div>

            {/* Search Results */}
            {searchResults.length > 0 && (
                <div className="search-results">
                    {searchResults.map((result, index) => (
                        <div key={index} className="search-result-item">
                            <h3>{result.question}</h3>
                            <p>{result.answer}</p>
                        </div>
                    ))}
                </div>
            )}
        </header>
    );
}

export default Header;
