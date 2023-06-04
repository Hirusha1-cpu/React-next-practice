import React from 'react'
import {Link} from 'react-router-dom'

import classes from './MainNavigation.module.css'

const MainNavigation = () => {
  return (
    <header className={classes.header}>
        <div className={classes.logo}>React Meetups</div>
        <nav>
            <ul>

            <li>
                <Link to='/'>Some Link</Link>
            </li>
            <li>
                <Link to='/new-meetup'>NewMeetup</Link>
            </li>
            <li>
                <Link to='/fav'>Favourites</Link>
            </li>
            </ul>
        </nav>
    </header>
  )
}

export default MainNavigation