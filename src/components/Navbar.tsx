import { Fragment } from "react";
import { useState } from "react";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

function Navbar(): JSX.Element  {
    const[isNavShowing, setisNavshowing] = useState(false);
    let items = [
        { id: 0 as number, link: '#home' as string, title: 'Home' as string},
        { id: 1 as number, link: '#services' as string, title: 'Services' as string},
        { id: 2 as number, link: '#faqs' as string, title: 'FAQ' as string},
        { id: 3 as number, link: '#reviews' as string, title: 'Reviews' as string},
        { id: 4 as number, link: '#contact' as string, title: 'Contact' as string}
    ]

    let ulLists = [
        { id: 5 as number, link: '#home' as string, title: 'Home' as string},
        { id: 6 as number, link: '#services' as string, title: 'Services' as string},
        { id: 7 as number, link: '#faqs' as string, title: 'FAQ' as string},
        { id: 8 as number, link: '#reviews' as string, title: 'Reviews' as string},
        { id: 9 as number, link: '#contact' as string, title: 'Contact' as string}
    ]

    return (
        <Fragment>
            <header>
                <a href="#home" className="logo" aria-label="website logo">LOGO</a>
                <nav>
                    {items.length === 0 ? <p>No item found</p> : null}
                    <ul className="nav_links" aria-label="desktop nav">
                        {items.map(item => <li key={item.id}><a href={item.link}>{item.title}</a></li>)}   
                    </ul>
                    <ul className={`navbar2 ${isNavShowing ? 'show_nav' : 'hide_nav'}`} aria-label="mobile nav">
                        {ulLists.map(elem => <li key={elem.id}><a href={elem.link}>{elem.title}</a></li>)}
                    </ul>
                    <button className="menu-btn" onClick={() => setisNavshowing(!isNavShowing)} aria-label="menu" aria-haspopup="true" aria-expanded="false"><HamburgerMenuIcon className="IconButton" /></button>
                </nav>
            </header>
        </Fragment>
    );
};

export default Navbar