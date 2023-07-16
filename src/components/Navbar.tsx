
function Navbar()  {
   
    let items = [
        { id: 1, link: '#', title: ''},
        { id: 2, link: '#home', title: 'Home'},
        { id: 3, link: '#services', title: 'Services'},
        { id: 4, link: '#faqs', title: 'FAQ'},
        { id: 5, link: '#reviews', title: 'Reviews'},
        { id: 6, link: '#contact', title: 'Contact'}
    ]

    return (
        <>
            <header>
                <a href="#home" className="logo">LOGO</a>
                <nav>
                    {items.length === 0 ? <p>No item found</p> : null}
                    <ul className="nav_links">
                        {items.map(item => <li key={item.id}><a href={item.link}>{item.title}</a></li>)}   
                    </ul>
                    <button className="menu-btn" aria-label="menu" aria-haspopup="true" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ACACB2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg></button>
                </nav>
            </header>
        </>
    );
};

export default Navbar