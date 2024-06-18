import { Outlet, useLocation, useNavigate } from "react-router-dom";

const Rules = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const navigate = useNavigate();


  const handlePageChange = (link) => {
    navigate(link);
};

  const pages = [
    { title: 'Basics', link:"/rules", className: pathname === "/rules" ? 'selected' : 'unselected'},
    { title: 'Contests', link:"/contests", className: pathname === "/contests" ? 'selected' : 'unselected' },
    { title: 'Conflicts', link:"/conflicts", className: pathname === "/conflicts" ? 'selected' : 'unselected' },
    { title: 'Standings', link:"/standing", className: pathname === "/standing" ? 'selected' : 'unselected' }
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
  