import React from 'react';
import './footer.css'
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';

function Footer() {
    return (
        <footer>
           <div className='footer__socials'>
                <a href='https://github.com/Garethus'><AiFillGithub /></a>
                <a href='https://www.linkedin.com/in/grethel-mae-reyes-81549516b/'><AiFillLinkedin /></a>
                <a href='https://twitter.com/IamGaretThus'><AiFillTwitterCircle /></a>
           </div>
        </footer>
    )
}

export default Footer;
