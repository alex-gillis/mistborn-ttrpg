import { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Navigate  } from 'react-router-dom';
import Menu from './views/Menu';
import './styles/index.css';
import Intro from './views/Main/Intro';
import Rules from './views/Main/Rules';
import RulesBasics from './views/Rules/Basics';
import Contests from './views/Rules/Contests';
import Conflicts from './views/Rules/Conflicts';
import Standing from './views/Rules/Standing';
import NoPage from './views/Main/NoPage';
import Starting from './views/Creation/Starting';
import Samples from './views/Creation/Samples';
import Build from './views/Creation/Build';
import Improvement from './views/Creation/Improvement';
import Creation from './views/Main/Creation';
import Lore from './views/Main/Lore';
import Overview from './views/Lore/Overview';
import Locals from './views/Lore/Locals';
import History from './views/Lore/History';
import Religion from './views/Lore/Religion';
import Metallurgy from './views/Main/Metallurgy';
import Stunts from './views/Reference/Stunts';
import Props from './views/Reference/Props';
import Terms from './views/Reference/Terms';
import People from './views/Lore/People';
import Networks from './views/Reference/Networks';
import Bestiary from './views/Reference/Bestiary';

function App() {
  const [myMetals, setMetals] = useState([]);
  const [myBasics, setBasics] = useState([]);
  const [myCreations, setCreations] = useState([]);
  const [myProps, setProps] = useState([]);
  const [myRogues, setRogues] = useState([]);
  const [myGames, setGames] = useState([]);
  const [myStunts, setStunts] = useState([]);
  const [myLore, setLore] = useState([]);
  const [myNetwork, setNetwork] = useState([]);
  const [myLoading, setLoading] = useState(true); 

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch('./assets/information.json'); 
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setMetals(data.metals); 
        setBasics(data.basics);
        setCreations(data.creation);
        setProps(data.propped);
        setRogues(data.rogues);
        setGames(data.game);
        setStunts(data.stunts);
        setLore(data.lore);
        setNetwork(data.network);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    getData();
  }, []);
  
  if (myLoading) {
    return <div className="spinner"></div>;
  }

  return (
    <HashRouter>
        <Routes>
            <Route path="/" element={<Menu />} >
                <Route index element={<Intro />} />
                <Route path="rules" element={<Rules />}>
                    <Route index element={<RulesBasics game={myGames[0]} />} />
                </Route>
                <Route path="contests" element={<Rules />}>
                    <Route index element={<Contests game={myGames[1]} />} />
                </Route>
                <Route path="conflicts" element={<Rules />}>
                    <Route index element={<Conflicts game={myGames[2]} phys={myGames[3]} soci={myGames[4]} ment={myGames[5]} />} />
                </Route>
                <Route path="standing" element={<Rules />}>
                    <Route index element={<Standing game={myGames[6]} />} />
                </Route>
                <Route path="creation" element={<Creation />}>
                    <Route index element={<Starting create={myCreations[0]} />} />
                </Route>
                <Route path="samples" element={<Creation />}>
                    <Route index element={<Samples era1={myCreations[1]?.era1Samples} era2={myCreations[1]?.era2Samples} rogues={myRogues}/> } />
                </Route>
                <Route path="building" element={<Creation />}>
                    <Route index element={<Build start={myCreations[3]} building={myCreations[4]}  propped={myProps[0]} built={myCreations[6]} /> } />
                </Route>
                <Route path="improvement" element={<Creation />}>
                    <Route index element={<Improvement improvement={myCreations[5]} alloy={myCreations[7]} network={myCreations[8]} /> } />
                </Route>
                <Route path="lore" element={<Lore />}>
                    <Route index element={<Overview lore={myLore[0]} />} />
                </Route>
                <Route path="locations" element={<Lore />}>
                    <Route index element={<Locals basin={myLore[1]} roughs={myLore[2]} strange={myLore[3]} />} />
                </Route>
                <Route path="people" element={<Lore />}>
                    <Route index element={<People koloss={myLore[7].koloss} terris={myLore[7].terris} kandra={myLore[7].kandra} malwish={myLore[7].malwish} />} />
                </Route>
                <Route path="history" element={<Lore />}>
                    <Route index element={<History history={myLore[4]} />} />
                </Route>
                <Route path="religion" element={<Lore />}>
                    <Route index element={<Religion religion={myLore[5]} />} />
                </Route>
                <Route path="metallurgy" element={<Metallurgy basics={myBasics} metals={myMetals} />} />
                <Route path="stunts" element={<Stunts stunts={myStunts}/>} />
                <Route path="bestiary" element={<Bestiary era1={myRogues[2]} era2={myRogues[3]}/>} />
                <Route path="props" element={<Props propped={myProps[1]}/>} />
                <Route path="networks" element={<Networks networks={myNetwork}/>} />
                <Route path="terms" element={<Terms gameTerms={myCreations[2]?.gameTerms}/>} />
                <Route path="404" element={<NoPage/>} />
                <Route path="*" element={<Navigate replace to='/404'/>} />

            </Route>
        </Routes>
    </HashRouter>
  );
}

export default App;
