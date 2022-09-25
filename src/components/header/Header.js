import headerStyle from '../header/Header.module.css';

export const Header = () => {

    return (
        <div className={headerStyle['header-container']}>
            <button>Movies</button>
            <button>TV Shows</button>
            <form>
                <input className={headerStyle['form-input']} type='text' placeholder='Search'/>
                <input className={headerStyle['form-button']} type='submit' value='Search'/>
            </form>
        </div>
    );
}