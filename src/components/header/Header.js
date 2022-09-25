import headerStyle from '../header/Header.module.css';

import { Link } from 'react-router-dom';

export const Header = () => {
    

    return (
        <>
            <div className={headerStyle['header-container']}>
                <Link to='/'>Movies</Link>
                <Link to='tv'>TV Shows</Link>
                <Link to='search'>Search</Link>
            </div>
        </>
    );
}