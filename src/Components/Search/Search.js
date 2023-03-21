import React from 'react'
import './Search.css'
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import Button from '@mui/material/Button';

const Search = ({hidebuttons}) => {
  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon/>
        <input/>
        <MicIcon/>
      </div>
      {
        !hidebuttons &&  <div className="search__buttons">
        <Button type="submit" variant="outlined">Venus Search</Button>
        <Button variant="outlined">I'm Feeling Lucky</Button>
      </div>
      }
    </form>
  )
}

export default Search
