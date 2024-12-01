
import { useState } from 'react';
import RecipesResults from './RecipesResults';
import "./Search.css";

const Search = () => {
    const [searchQuery, setSearchQuery] = useState(null);
    const [searchResults, setSearchResults] = useState(null);

    const handleClick = async () => {
        const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch` +
            `?apiKey=4b424c98aaad481d90ba425eff49a103&query=${searchQuery}`);
        const responceJSON = await response.json();
        setSearchResults(responceJSON.results)
    };

    return (
        <>
            <div className="search-wrapper">
                <input
                    type="text"
                    placeholder="Search by ingredients.."
                    onChange={(e) => setSearchQuery(e.target.value)} />
                <button onClick={handleClick}>Search</button>
            </div>
            {searchResults && <RecipesResults recipes={searchResults} />}
        </>
    );
};

export default Search;
