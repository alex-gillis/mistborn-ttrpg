import { Outlet, useLocation, useNavigate } from "react-router-dom";

const Lore = () => {
    const location = useLocation();
    const pathname = location.pathname;
    const navigate = useNavigate();
  
  
    const handlePageChange = (link) => {
      navigate(link);
  };
  

    const pages = [
        { title: 'Overview', link:"/lore", className: pathname === "/lore" ? 'selected' : 'unselected' },
        { title: 'Locations', link:"/locations", className: pathname === "/locations" ? 'selected' : 'unselected' },
        { title: 'People', link:"/people", className: pathname === "/people" ? 'selected' : 'unselected' },
        { title: 'History', link:"/history", className: pathname === "/history" ? 'selected' : 'unselected' },
        { title: 'Religion', link:"/religion", className: pathname === "/religion" ? 'selected' : 'unselected' }
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
            <div className="mobExtra">
                <Outlet />
            </div>
        </div>
        </>
    )
}

export default Lore
