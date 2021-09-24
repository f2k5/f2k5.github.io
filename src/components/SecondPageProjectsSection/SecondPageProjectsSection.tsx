import React from "react";
import ProjectContainer from "../ProjectContainer/ProjectContainer";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Copyright from "../Copyright/Copyright";
import { Link } from "react-scroll";
import { Button } from "@mui/material";
import styled from "styled-components";

const ProjectSection = () => {

    const ProjectPageContainer = styled.div`
        background-color: black;
    `;

    const Box = styled.div`
        display: flex;
        align-items: center;
        text-align: left;
        padding: 0 0 0 20%;
    `

    return (
        <ProjectPageContainer>
            <Box>
                <section id = "srollDownToProjectPage">
                    <h1 style = {{margin: "1rem 0 0 0"}}>Projects:</h1> <br />
                    <ProjectContainer 
                        projectName = {"Card Trick"}
                        githubRepoLogo = {true}
                        githubRepoURL = {"https://github.com/f2k5/card-trick"}
                        hostedLinkLogo = {true}
                        hostedLinkURL = {"https://f2k5.github.io/card-trick"}
                        projectDescription = {"A web app that figures out what card you are thinking of."}
                        techStacks = {["TypeScript", "React", "React Router", "Material-UI"]}
                    />
                    <br />
                    <ProjectContainer 
                        projectName = {"COVID-19 Tracker"}
                        githubRepoLogo = {true}
                        githubRepoURL = {"https://github.com/f2k5/COVID-19-Tracker"}
                        hostedLinkLogo = {true}
                        hostedLinkURL = {"https://f2k5.github.io/COVID-19-Tracker/"}
                        projectDescription = {
                            "This web app fetches data from an API and shows the latest number of COVID-19 cases worldwide & allows users to search for COVID-19 data of any country."}
                        techStacks = {["JavaScript", "React"]}
                    />
                    <br />
                    <ProjectContainer 
                        projectName = {"Pomodoro Timer"}
                        githubRepoLogo = {true}
                        githubRepoURL = {"https://github.com/f2k5/Pomodoro"}
                        hostedLinkLogo = {true}
                        hostedLinkURL = {"https://f2k5.github.io/Pomodoro/"}
                        projectDescription = {"The Pomodoro Technique is a time management method. It uses a timer to break work into intervals 25 minute chunks."}
                        techStacks = {["JavaScript", "React"]}
                    />
                    <br />
                    <ProjectContainer 
                        projectName = {"Number Guessing Game"}
                        githubRepoLogo = {true}
                        githubRepoURL = {"https://github.com/f2k5/Number-Guessing-Game"}
                        hostedLinkLogo = {true}
                        hostedLinkURL = {"https://elastic-goldwasser-7f8b16.netlify.app/"}
                        projectDescription = {"The game asks users to guess a randomly generated number and assigns the user a score based on their number of attempts."}
                        techStacks = {["JavaScript", "HTML", "CSS"]}
                    />
                    <br />
                    <ProjectContainer 
                        projectName = {"Text formatter"}
                        githubRepoLogo = {true}
                        githubRepoURL = {"https://github.com/f2k5/card-trick"}
                        projectDescription = {
                            "Developed a text formatter in C and an advanced text formatter in Python. Wrote a Python script to automate testing for the advanced text formatter, reducing testing time significantly."}
                        techStacks = {["C", "Python"]}
                    />
                    <br />
                    <ProjectContainer 
                        projectName = {"MacOS Desktop Cleaner"}
                        githubRepoLogo = {true}
                        githubRepoURL = {"https://github.com/f2k5/card-trick"}
                        projectDescription = {"A script that macOS users can run on their desktop to declutter and organize piled up images, screenshots and pdfs."}
                        techStacks = {["Bash"]}
                    />
                    <br />
                    <ProjectContainer 
                        projectName = {"Password Generator (iOS)"}
                        githubRepoLogo = {true}
                        githubRepoURL = {"https://github.com/f2k5/card-trick"}
                        projectDescription = {"An iOS app that generates strong passwords for users."}
                        techStacks = {["Swift"]}
                    />
                    <Copyright />
                </section>
                <Link to = "srollUpToProfilePage" smooth = {true} duration = {750}>
                    <Button variant="outlined" style={{ backgroundColor: '#81C784' , marginLeft: "6rem", color: "black", borderColor: "#81C784"}} ><KeyboardArrowUpIcon /> Go back up</Button>
                </Link>
            </Box>
        </ProjectPageContainer>
    )
}

export default ProjectSection;