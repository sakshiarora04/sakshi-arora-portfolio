import { IconButton } from '@chakra-ui/react'
import {  FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Footer() {
    const guthubLink = () => {
        <Link to ='/https://github.com/sakshiarora04/sakshi-arora-portfolio' ></Link>
    }
    return ( <div>
        <IconButton ml={2} icon={<FaGithub />} isRound='true' onClick={guthubLink}></IconButton>
    <IconButton ml={2} icon={<FaLinkedin />} isRound='true' onClick={guthubLink}></IconButton>
    </div>
    
    )
}