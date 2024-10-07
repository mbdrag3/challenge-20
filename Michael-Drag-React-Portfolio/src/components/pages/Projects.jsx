import React from 'react';
import '../../styles/projects.css';
import jokeGameIMG from '../../assets/joke-games.png';
import digidexIMG from '../../assets/digidex.png'
import reBookedIMG from '../../assets/reBooked.png'
import mongoDbIMG from '../../assets/mongo-insomnia.png'
import employeeTrackerIMG from '../../assets/node-employee-tracker.png'
import noteTakerIMG from '../../assets/note-taker-app.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe, faNetworkWired } from '@fortawesome/free-solid-svg-icons';
import aedventuresMap from '../../assets/aedventures-map.png'

function Projects() {
    const projectData = [
        {
            id: 1,
            image: jokeGameIMG,
            githubLink: 'https://github.com/Wanipopota/project-1-game',
            websiteLink: 'https://wanipopota.github.io/project-1-game/',
            title: 'Joke Games',
            description: 'A place to see popular games and laugh at a ton of jokes!'
        },
        {
            id: 2,
            image: digidexIMG,
            githubLink: 'https://github.com/mbdrag3/project-2',
            websiteLink: 'https://project-2-qnfz.onrender.com/',
            title: 'DigiDex',
            description: 'A digital library for managing your favorite Pokémon cards. You can even start your own collection!'
        },
        {
            id: 3,
            image: reBookedIMG,
            githubLink: 'https://github.com/mbdrag3/ReBooked',
            websiteLink: '',
            title: 'ReBooked',
            description: 'A platform to sell and buy textbooks that you need for school.'
        },
        {
            id: 4,
            image: mongoDbIMG,
            githubLink: 'https://github.com/mbdrag3/challenge-18-new?tab=readme-ov-file',
            websiteLink: '',
            title: 'MongoDB',
            description: 'Build a NoSQL backend to support a social network web application'
        },
        {
            id: 5,
            image: employeeTrackerIMG,
            githubLink: 'https://github.com/mbdrag3/employee-tracker',
            websiteLink: '',
            title: 'Employee Tracker',
            description: "Created a node application to be ran in the terminal that will manage an employer's employees"
        },
        {
            id: 6,
            image: noteTakerIMG,
            githubLink: 'https://github.com/mbdrag3/Note-taker-11',
            websiteLink: '',
            title: 'Note taker app',
            description: 'A note taker application that will keep you more organized!'
        },
        {
            id: 7,
            image: aedventuresMap,
            githubLink: 'https://github.com/mbdrag3/aedventures-map',
            websiteLink: 'https://mbdrag3.github.io/aedventures-map/',
            title: 'Sales map',
            description: 'Integrated a map API in order to display sales across the state of Ohio.'
        }
    ];

    return (
        <div className='projects-container'>
            <h1>Projects</h1>
            <div className='cards'>
                {projectData.map(project => (
                    <div className='card' key={project.id}>
                        <div className='card-background'>
                            <img src={project.image} alt={project.title} />
                        </div>
                        <div className='card-content'>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                        </div>
                        <div className='card-links'>
                            {/* GitHub Link */}
                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGithub} className="icon" />
                            </a>
                            
                            {/* Website Link */}
                            {project.websiteLink && project.websiteLink !== 'https://placeholder' ? (
                                <a href={project.websiteLink} target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faGlobe} className="icon" />
                                </a>
                            ) : (
                                <a href="/error-page" className="error-link">
                                    <FontAwesomeIcon icon={faGlobe} className="icon" />
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
