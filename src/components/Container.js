import React, { useState } from 'react'; 
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavTabs from'./NavTabs';
import Home from './pages/home/home.js';
import About from './pages/about/about.js';
import Contact from './pages/contact/contact.js';
import Projects from './pages/projects/projects.js';
import Resume from './pages/resume/resume.js'; 
import Footer from './pages/footer/footer.js';
// import Footer from './components/footer/footer.js';


export default function Container() { 
    // const [currentPage, setCurrentPage] = useState('Home');

    // const renderPage = () => { 
    //     if (currentPage === 'Home') { 
    //         return <Home />;
    //     }
    //     if (currentPage === 'About') { 
    //         return <About />;
    //     }
    //     if (currentPage === 'Projects') { 
    //         return <Projects />; 
    //     }
    //     if (currentPage === 'Resume') { 
    //         return <Resume />; 
    //     }
    //     return <Contact />; 
    // }; 

    // const handlePageChange = (page) => setCurrentPage(page);

    return ( 
        <div> 
            <Router>


            
            <NavTabs  />

            <Switch>
                <Route path="/" component={Home} exact ></Route>
                <Route path="/about" component={About} exact ></Route>

                <Route path="/projects" component={Projects} exact ></Route>
                <Route path="/resume" component={Resume} exact ></Route>




            </Switch>

            



            <Footer />

            </Router>
        </div>
    );
}



// function Container() {
//   return (
//     <div>
      
//         <Navpage /> 
//         <div className='container'> 
//           <Switch>

//           </Switch>
//         </div>
//         {/* <Footer /> */}
      
//     </div>
//   );
// }

// export default Container;
