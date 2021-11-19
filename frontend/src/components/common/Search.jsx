import React, { useState } from 'react';
import ImgSearch from '../../assets/img/Search.png';
import Results from '../../components/common/SearchBox';
const Search = () => {
    const [showResults, setShowResults] = useState(false);
    const onClick = () => setShowResults(!showResults);
    return (
        <div>
            <img src={ImgSearch} class="sp-search" alt="" onClick={onClick} />
            {showResults ? <Results /> : null}
        </div>
    );
};

export default Search;