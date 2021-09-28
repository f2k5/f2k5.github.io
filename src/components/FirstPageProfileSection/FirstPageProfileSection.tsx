import React, { useState } from "react";
import "./FirstPageProfileSection.styles.css";
import Pdf from "../../resume/FardinKhanResume.pdf";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import IconButton from '@material-ui/core/IconButton';
import DescriptionIcon from '@mui/icons-material/Description';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { makeStyles } from "@mui/styles";
import { Button } from "@mui/material";
import { Link } from "react-scroll";

const useStyles = makeStyles({
    root: {
        "&:hover": {
            backgroundColor: "transparent"
        }
    }
})

const emailAndSocialURLs = {
    Email: "fardin.khan.cs@gmail.com",
    GitHub: "https://github.com/f2k5",
    LinkedIn: "https://www.linkedin.com/in/csfardinkhan/",
    Instagram: "https://www.instagram.com/f25k10/",
}

const ProfileSection = () => {
    const classes = useStyles();

    const handleGitHubButtonClick = () => {
        window.open(emailAndSocialURLs.GitHub, "_blank");
    }

    const handleLinkedInButtonClick = () => {
        window.open(emailAndSocialURLs.LinkedIn, "_blank");
    }

    const handleInstagramButtonClick = () => {
        window.open(emailAndSocialURLs.Instagram, "_blank");
    }

    const handlePdf = () => {
        window.open(Pdf, "_blank");
    }

    const copyEmailToClipboard = () => {
        navigator.clipboard.writeText(emailAndSocialURLs.Email);
        updateEmailIconHoverMessage("Copied email to clipboard!");
    }

    const useHover = () => {
        const [hovering, setHovering] = useState(false)
        const onHoverProps = {
          onMouseEnter: () => setHovering(true),
          onMouseLeave: () => setHovering(false),
        }
        return [hovering, onHoverProps]
    }

    const [emailIconHoverMessage, updateEmailIconHoverMessage] = useState("Copy email to clipboard");
    const [buttonAIsHovering, buttonAHoverProps] = useHover();

    return (
        <div id = "srollUpToProfilePage" className = "profile-page">
            <section  className = "profile-section">
                <div>
                    <h1 className = "name-header-page-one">Hello,<br />I'm Fardin!</h1>
                    <h2>I write stuff to make computers do things.</h2> <br />
                    <p>
                        I am a Computer Science graduate from the University of Victoria, <br />
                        who is passionate about building things and bringing cool ideas/projects to reality. <br />
                        Software development is one of the best things I came across in life.
                        <br /> <br />

                        I am currently based in Vancouver, BC. <br /><br />

                        <Link to = "srollDownToProjectPage" smooth = {true} duration = {750}>
                            <Button variant = "contained" style={{ backgroundColor: 'black' }}> Click here to see my projects.</Button>
                        </Link>
                        <br />
                        <br />

                        Places where I exist on the internet and can be reached at: <br />
                        <div style = {{marginLeft: "-1rem"}}>
                            <IconButton onClick = {handleLinkedInButtonClick} className = {classes.root} style={{ color: 'black', backgroundColor: "transparent"}}>
                                <LinkedInIcon style={{ paddingLeft: 0}} fontSize = "large"/>
                            </IconButton>

                            <IconButton onClick = {handleGitHubButtonClick} className = {classes.root} style={{ color: 'black', backgroundColor: "transparent"}}>
                                <GitHubIcon fontSize = "large"/>
                            </IconButton>

                            <IconButton  onClick = {handlePdf} className = {classes.root} style={{ color: 'black', backgroundColor: "transparent" }}>
                                <DescriptionIcon fontSize = "large"/> 
                            </IconButton>

                            <IconButton onClick = {handleInstagramButtonClick} className = {classes.root} style={{ color: 'black', backgroundColor: "transparent" }}>
                                <InstagramIcon fontSize = "large"/>
                            </IconButton>

                            <IconButton {...buttonAHoverProps} disableRipple = {true} onClick = {copyEmailToClipboard} className = {classes.root} style={{ color: 'black', backgroundColor: "transparent" }}>
                                <EmailIcon fontSize = "large"/> {buttonAIsHovering ? <p className = "hover-text">{emailIconHoverMessage}</p> : null}
                            </IconButton> 
                        </div>
                    </p>
                </div>
            </section>
        </div>
    )
}

export default ProfileSection;