import { Outlet, useLocation, useNavigate } from "react-router-dom";

const Rules = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const navigate = useNavigate();


  const handlePageChange = (link) => {
    navigate(link);
};

  const pages = [
    { title: 'Basics', link:"/mistborn-ttrpg/rules", className: pathname === "/mistborn-ttrpg/rules" ? 'selected' : 'unselected'},
    { title: 'Contests', link:"/mistborn-ttrpg/contests", className: pathname === "/mistborn-ttrpg/contests" ? 'selected' : 'unselected' },
    { title: 'Conflicts', link:"/mistborn-ttrpg/conflicts", className: pathname === "/mistborn-ttrpg/conflicts" ? 'selected' : 'unselected' },
    { title: 'Standings', link:"/mistborn-ttrpg/standing", className: pathname === "/mistborn-ttrpg/standing" ? 'selected' : 'unselected' }
  ];

  return (
    <>
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
  
export default Rules
  