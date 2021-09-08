import React from 'react';
import moduleTrainerImg from '../../../assets/images/module-trainer.PNG'; 
import workoutTrackerImg from '../../../assets/images/workout-tracker.PNG';
import covidImg from '../../../assets/images/covid.PNG';

export default function Projects() {
  return (
    <div>
      <h1>Home Page</h1>
      <div class="container">
<ul class="row portfolio list-unstyled mb-0 boxed-portfolio">
           
            <li class="col-md-6 col-lg-4 project" data-groups="[&quot;skill1&quot;]">
                <div className="card mb-0">
                    <div className="project m-0">
                        <figure className="portfolio-item">
                            <a href="https://github.com/Jbolton89/Module-trainer-" className="hovereffect">
                                <img className="img-fluid" src={moduleTrainerImg} alt=""/>
                                <div className="overlay">
                                </div>
                            </a>
                        </figure>
                    </div>
                    <div className="card-body">
                        <a href="single-project6.html" className="card-title title-link fs-16 fw-bold">Module Trainer</a>
                        <p className="card-text mt-5 mb-0 fs-14">Full MERN stack application that can hold accounts, and files relating to different subjects.</p>
                    </div>
                </div>
            </li>

           
            <li className="col-md-6 col-lg-4 project" data-groups="[&quot;skill1&quot;]">
                <div className="card mb-0">
                    <div className="project m-0">
                        <figure className="portfolio-item">
                            <a href="https://github.com/Jbolton89/Workout-Tracker" className="hovereffect">
                                <img className="img-fluid" src={workoutTrackerImg} alt=""/>
                                <div className="overlay">
                                </div>
                            </a>
                        </figure>
                    </div>
                    <div className="card-body">
                        <a href="single-project6.html" className="card-title title-link fs-16 fw-bold">Workout Tracker</a>
                        <p className="card-text mt-5 mb-0 fs-14">Track your workouts and store the data</p>
                    </div>
                </div>
            </li>

            
            <li className="col-md-6 col-lg-4 project" data-groups="[&quot;skill1&quot;]">
                <div className="card mb-0">
                    <div className="project m-0">
                        <figure className="portfolio-item">
                            <a href="single-project6.html" className="hovereffect">
                                <img className="img-fluid" src={covidImg} alt=""/>
                                <div className="overlay">
                                </div>
                            </a>
                        </figure>
                    </div>
                    <div className="card-body">
                        <a href="single-project6.html" className="card-title title-link fs-16 fw-bold">COVID tracker</a>
                        <p className="card-text mt-5 mb-0 fs-14">A web application that can make API calls globally to cehck what current COVID statistics are worldwide</p>
                    </div>
                </div>
            </li>
        </ul>
</div>
    </div>
  );
}
