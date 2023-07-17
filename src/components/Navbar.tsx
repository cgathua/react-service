import { Fragment } from "react";
import { useState } from "react";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

function Navbar()  {
    const[isNavShowing, setisNavshowing] = useState(false);
    let items = [
        { id: 1, link: '#', title: ''},
        { id: 2, link: '#home', title: 'Home'},
        { id: 3, link: '#services', title: 'Services'},
        { id: 4, link: '#faqs', title: 'FAQ'},
        { id: 5, link: '#reviews', title: 'Reviews'},
        { id: 6, link: '#contact', title: 'Contact'}
    ]

    let ulLists = [
        { id: 7, link: '#', title: ''},
        { id: 8, link: '#home', title: 'Home'},
        { id: 9, link: '#services', title: 'Services'},
        { id: 10, link: '#faqs', title: 'FAQ'},
        { id: 11, link: '#reviews', title: 'Reviews'},
        { id: 12, link: '#contact', title: 'Contact'}
    ]

    return (
        <Fragment>
            <header>
                <a href="#home" className="logo">LOGO</a>
                <nav>
                    {items.length === 0 ? <p>No item found</p> : null}
                    <ul className="nav_links">
                        {items.map(item => <li key={item.id}><a href={item.link}>{item.title}</a></li>)}   
                    </ul>
                    <ul className={`navbar2 ${isNavShowing ? 'show_nav' : 'hide_nav'}`}>
                        {ulLists.map(elem => <li key={elem.id}><a href={elem.link}>{elem.title}</a></li>)}
                    </ul>
                    <button className="menu-btn" onClick={() => setisNavshowing(!isNavShowing)} aria-label="menu" aria-haspopup="true" aria-expanded="false"><HamburgerMenuIcon className="IconButton" /></button>
                </nav>
            </header>
        </Fragment>
    );
};

export default Navbar