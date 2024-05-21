import { Outlet, useLocation, useNavigate } from "react-router-dom";

const Lore = () => {
    const location = useLocation();
    const pathname = location.pathname;
    const navigate = useNavigate();
  
  
    const handlePageChange = (link) => {
      navigate(link);
  };
  

    const pages = [
        { title: 'Overview', link:"/mistborn-ttrpg/lore", className: pathname === "/mistborn-ttrpg/lore" ? 'selected' : 'unselected' },
        { title: 'Locations', link:"/mistborn-ttrpg/locations", className: pathname === "/mistborn-ttrpg/locations" ? 'selected' : 'unselected' },
        { title: 'People', link:"/mistborn-ttrpg/people", className: pathname === "/mistborn-ttrpg/people" ? 'selected' : 'unselected' },
        { title: 'History', link:"/mistborn-ttrpg/history", className: pathname === "/mistborn-ttrpg/history" ? 'selected' : 'unselected' },
        { title: 'Religion', link:"/mistborn-ttrpg/religion", className: pathname === "/mistborn-ttrpg/religion" ? 'selected' : 'unselected' }
    ];
    
    return (
        < >
        <div id="startHead">
          <nav>
              {pages.map((page, index) => (
                  <button key={index} id="head-button" className={page.className} onClick={() => handlePageChange(page.link)}>
                      <span id="bold">{page.title}</span>
                  </button>
              ))}
          </nav>
        </div>
        <div id='creation'>
            <Outlet />
        </div>
        </>
    )
}

export default Lore
