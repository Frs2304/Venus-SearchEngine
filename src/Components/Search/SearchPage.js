import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../Home/venus_logo.png'
import Search from './Search'
import './SearchPage.css'
import SearchIcon from '@mui/icons-material/Search';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MoreIcon from '@mui/icons-material/More';
import SettingsIcon from '@mui/icons-material/Settings';
import BuildIcon from '@mui/icons-material/Build';
const SearchPage = () => {
  return (

    <div className='SearchPage'>
      <div className="SearchPage__header">
        <Link to='/'>
          <img src={logo} />
        </Link>
        <div className="SearchPage__headerBody">
          <Search hidebuttons />
          <div className="SearchPage__options">
            <div className="SearchPage__optionsLeft">
              <div className="SearchPage__option">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>
              <div className="SearchPage__option">
                <NewspaperIcon />
                <Link to="/news">News</Link>
              </div>
              <div className="SearchPage__option">
                <ImageSearchIcon />
                <Link to="/images">Images</Link>
              </div>
              <div className="SearchPage__option">
                <LocationOnIcon />
                <Link to="/maps">Maps</Link>
              </div>
              <div className="SearchPage__option">
                <MoreIcon />
                <Link to="/more">More</Link>
              </div>
            </div>
            <div className="SearchPage__optionsRight">
              <div className="SearchPage__option">
                <SettingsIcon />
                <Link to="/settings">Settings</Link>
              </div>
              <div className="SearchPage__option">
                <BuildIcon />
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchPage

