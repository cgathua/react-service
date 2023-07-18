import { Fragment } from "react";
import { useState } from "react";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

function Navbar()  {
    const[isNavShowing, setisNavshowing] = useState(false);
    let items = [
        { id: 0, link: '#home', title: 'Home'},
        { id: 1, link: '#services', title: 'Services'},
        { id: 2, link: '#faqs', title: 'FAQ'},
        { id: 3, link: '#reviews', title: 'Reviews'},
        { id: 4, link: '#contact', title: 'Contact'}
    ]

    let ulLists = [
        { id: 5, link: '#home', title: 'Home'},
        { id: 6, link: '#services', title: 'Services'},
        { id: 7, link: '#faqs', title: 'FAQ'},
        { id: 8, link: '#reviews', title: 'Reviews'},
        { id: 9, link: '#contact', title: 'Contact'}
    ]

    return (
        <Fragment>
            <header>
                <a href="#home" className="logo" aria-label="website logo">LOGO</a>
                <nav>
                    {items.length === 0 ? <p>No item found</p> : null}
                    <ul className="nav_links">
                        {items.map(item => <li key={item.id}><a aria-label="desktop nav" href={item.link}>{item.title}</a></li>)}   
                    </ul>
                    <ul className={`navbar2 ${isNavShowing ? 'show_nav' : 'hide_nav'}`}>
                        {ulLists.map(elem => <li key={elem.id}><a aria-label="mobile nav" href={elem.link}>{elem.title}</a></li>)}
                    </ul>
                    <button className="menu-btn" onClick={() => setisNavshowing(!isNavShowing)} aria-label="menu" aria-haspopup="true" aria-expanded="false"><HamburgerMenuIcon className="IconButton" /></button>
                </nav>
            </header>
        </Fragment>
    );
};

export default Navbar