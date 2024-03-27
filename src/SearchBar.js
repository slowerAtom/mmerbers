import React, { useState } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap'; // Bootstrap을 사용하는 경우

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <InputGroup className="mb-3">
      <FormControl
        placeholder="Search for members"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <InputGroup.Append>
        <Button variant="outline-secondary" onClick={handleSearch}>Search</Button>
      </InputGroup.Append>
    </InputGroup>
  );
};

export default SearchBar;