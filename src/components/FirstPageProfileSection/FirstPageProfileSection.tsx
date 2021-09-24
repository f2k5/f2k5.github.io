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

const ProfileSection = () => {
    const classes = useStyles();

    const handleGitHubButtonClick = () => {
        window.open("https://github.com/f2k5", "_blank");
    }

    const handleLinkedInButtonClick = () => {
        window.open("https://www.linkedin.com/in/csfardinkhan/", "_blank");
    }

    const handleInstagramButtonClick = () => {
        window.open("https://www.instagram.com/f25k10/", "_blank");
    }

    const handlePdf = () => {
        window.open(Pdf, "_blank");
    }

    const copyEmailToClipboard = () => {
        navigator.clipboard.writeText("fardin.khan.cs@gmail.com");
    }

    const useHover = () => {
        const [hovering, setHovering] = useState(false)
        const onHoverProps = {
          onMouseEnter: () => setHovering(true),
          onMouseLeave: () => setHovering(false),
        }
        return [hovering, onHoverProps]
    }

    const [buttonAIsHovering, buttonAHoverProps] = useHover();

    return (
        <div id = "srollUpToProfilePage" className = "profile-page">
            <section  className = "profile-section">
                <div>
                    <h1 className = "name-header-page-one">Hello <br />I'm Fardin!</h1>
                    <h2>I write stuff to make computers do what I want.</h2> <br />
                    <p>
                        I am a Computer Science graduate from the University of Victoria, <br />
                        who is passionate about building things and bringing cool ideas/projects to reality. <br />
                        Software development is the one of the best things I came across in life.
                        <br /> <br />

                        I am currently based in Vancouver BC. <br /><br />

                        <Link to = "srollDownToProjectPage" smooth = {true} duration = {750}>
                            <Button variant = "contained" style={{ backgroundColor: 'black' }}> Click here to see my projects.</Button>
                        </Link>
                        <br />
                        <br />

                        Places where I exist on the internet: <br />
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

                            <IconButton {...buttonAHoverProps} onClick = {copyEmailToClipboard} className = {classes.root} style={{ color: 'black', backgroundColor: "transparent" }}>
                                <EmailIcon fontSize = "large"/> <br />{buttonAIsHovering ? <p className = "hover-text">Copy email to clipboard</p> : null}
                            </IconButton> <br />
                        </div>
                    </p>
                </div>
            </section>
        </div>
    )
}

export default ProfileSection;