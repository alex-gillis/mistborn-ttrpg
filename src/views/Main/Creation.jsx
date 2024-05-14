import { Outlet, useLocation, useNavigate } from "react-router-dom";

const Creation = () =>{
    const location = useLocation();
    const pathname = location.pathname;
    const navigate = useNavigate();
  
  
    const handlePageChange = (link) => {
      navigate(link);
  };

    const pages = [
        { title: 'Getting \n Started', link:"/mistborn-ttrpg/creation", className: pathname === "/mistborn-ttrpg/creation" ? 'selected' : 'unselected' },
        { title: 'Sample \n Characters', link:"/mistborn-ttrpg/creation/samples", className: pathname === "/mistborn-ttrpg/creation/samples" ? 'selected' : 'unselected' },
        { title: 'Building \n Characters', link:"/mistborn-ttrpg/creation/building", className: pathname === "/mistborn-ttrpg/creation/building" ? 'selected' : 'unselected' },
        { title: 'Improving \n Characters', link:"/mistborn-ttrpg/creation/improvement", className: pathname === "/mistborn-ttrpg/creation/improvement" ? 'selected' : 'unselected' }
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
        <div id='creation' >
            <Outlet />
            {/* { myPage === 0 && <Starting create={props.creation[0]}/> }
            { myPage === 1 && <Samples era1={props.creation[1].era1Samples} era2={props.creation[1].era2Samples} rogues={props.rogues}/> }
            { myPage === 2 && <Build start={props.creation[3]} building={props.creation[4]}  propped={props.propped} built={props.creation[6]} /> }
            { myPage === 3 && <Improvement improvement={props.creation[5]} alloy={props.creation[7]} /> } */}
        </div>
        
    </>
  )
}
  
export default Creation
  