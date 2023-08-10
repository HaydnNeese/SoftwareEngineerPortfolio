import './AboutMe.css';
import { Container } from '@mui/material';

const AboutMe = () => {
    return (
        // TODO Needs to have a headshot picture to the left and then a brief story on who I am and what I do
        <Container maxWidth="md" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexGrow: 1 }}>
            <div className="flex flex-col gap-4 text-center">
                <h1 className="text-5xl font-extrabold">About Me</h1>
                <p>
                    I'm Haydn, a software engineer with a specialization in Angular 15+ development and a focus on intuitive user experience.
                    I have spent the last 4 years playing a key role in assisting our Lead UI Engineer to build a Cloud Portal UI that takes very complicated concepts and
                    simplifies them as bet as we can for the user. I've implemented features for kubernetes clusters, project management, loadbalancing configuration, and cloud instance creation/management to name a few.
                </p>
                
                <p>
                    I have a passion for solving complicated problems and designing user interfaces that help users accomplish the work they need to do with ease.
                    In combination with my extensive Angular experience, I have experience with React. I understand the basics of MySQL databases. I've also dabbled a little in java back-end services when assistance has been needed.
                    I view myself as versatile engineer so there are many technologies I have worked with and used on occasion but these are the ones that come up the most in my day-to-day life.
                </p>

                <p>
                    I like to keep an open mind in a work environment. I'm always willing to take on learning something new. I'm always looking for ways we can improve.
                    My career to this point has taught me that no task is too big. I believe that if a team has a culture built around the pillars of learning, exploration, and collaboration then great things can be achieved.
                </p>

                <p>
                    When I'm not designing software I like to watch sports, (particularly football), play video games and tabletop adventures, spend time with my wife and our close friends, and play a little guitar.
                    I can fit into any team, in my opinion, because the list of things I find interesting and hobbies that I take on vary from attending sports events to roleplaying a barbarian orc on D&D tabletop.
                    I value human connection and I view myself as someone who can find common ground with anyone I meet and foster a quality connection with that person.
                </p>
            </div>
        </Container>
    )
};

export default AboutMe;