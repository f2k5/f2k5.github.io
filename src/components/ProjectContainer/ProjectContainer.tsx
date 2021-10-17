import React from "react";
import "./ProjectContainer.styles.css"
import { Button } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import ComputerIcon from '@mui/icons-material/Computer';

interface ProjectComposition {
    projectName: string,
    githubRepoLogo? : boolean,
    githubRepoURL? : string,
    hostedLinkLogo? : boolean,
    hostedLinkURL? : string,
    projectDescription : string,
    techStacks: string[]
}

const ProjectContainer: React.FC<ProjectComposition> = ({
    projectName, 
    githubRepoLogo, 
    githubRepoURL, 
    hostedLinkLogo, 
    hostedLinkURL, 
    projectDescription, 
    techStacks}) => {

        const handleGitHubButtonClick = () => {
            window.open(githubRepoURL, "_blank");
        }

        const handleLiveAppButtonClick = () => {
            window.open(hostedLinkURL, "_blank");
        }

        return (
            <div className = "projectContainerBox">
                <div className = "project-name-and-github-live-buttons">
                    <h1 style = {{ color: "#CFD8DC" }}>{projectName}</h1>
                    <div className = "github-and-live">
                        {githubRepoLogo ? 
                            <Button onClick = {handleGitHubButtonClick} 
                            style = {{ backgroundColor: '#CFD8DC', color: "black" }} 
                            variant = "contained" 
                            endIcon = {<GitHubIcon />}>GitHub</Button>
                            : 
                            null
                        }
                        {hostedLinkLogo ?
                            <Button onClick = {handleLiveAppButtonClick} 
                            style = {{ backgroundColor: '#CFD8DC', color: "black", margin: "0 0 0 0.5rem" }} 
                            variant = "contained" 
                            endIcon = {<ComputerIcon />}>Live</Button>
                            :
                            null
                        }
                    </div>
                </div>
                <p className = "project-description">{projectDescription}</p>
                <div className = "tech-stack-list">
                    {techStacks.map((techStack) => {
                        let color = "#81C784";
                        techStack === "TypeScript" ? color = "#007ACC" : 
                        techStack === "React" ? color = "#61DBFB" : 
                        techStack === "React Router" ? color = "#D0262F" :
                        techStack === "Material-UI" ? color = "#00A9E7" : 
                        techStack === "HTML" ? color = "#4DB6AC" : 
                        techStack === "CSS" ? color = "#FF6F00" : 
                        techStack === "Python" ? color = "#D500F9" :
                        techStack === "C" ? color = "#9E9E9E" :
                        techStack === "Bash" ? color = "#90A4AE" :
                        techStack === "Swift" ? color = "#F05138" :
                        techStack === "JavaScript" ? color = "#F5DE19" : color = "#81C784";
                        return (
                        <p style = {{backgroundColor: color, borderColor: color}} 
                        className = "tech-stack">&nbsp;{techStack}&nbsp;</p>)
                    })}
                </div>
            </div>
        )
}

export default ProjectContainer;