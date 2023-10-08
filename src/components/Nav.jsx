// Bringing in the required import from 'react-router-dom'
import { Link } from 'react-router-dom';
import Navbar from './UI/Navbar';

// import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

export default function Nav() {
  // The Navbar UI component will render each of the Link elements in the links prop
  return (
    <Navbar
      links={[
        <Link key={1} className="nav-link text-light" to="/">
         About
        </Link>,
        <Link key={2} className="nav-link text-light" to="/portfolio">
          Portfolio
        </Link>,
         <Link key={3} className="nav-link text-light" to="/contact">
         Contact
       </Link>,
        <Link key={4} className="nav-link text-light" to="/resume">
        Resume
      </Link>,
      ]}
    />
//     <Tabs size='md' mt="40px" p="20px" colorScheme='purple' variant='enclosed'>
//             <TabList>           
            
//              <Tab _selected={{color:'white', bg:'purple.400'}}>About</Tab>
//              <Tab _selected={{color:'white', bg:'purple.400'}}>Portfolio</Tab>
//              <Tab _selected={{color:'white', bg:'purple.400'}}>Contact</Tab>
//              <Tab _selected={{color:'white', bg:'purple.400'}}>Resume</Tab>
//              </TabList>
//              <TabPanels>   
//              <TabPanel>
//              <Link key={1} className="nav-link text-light" to="/">
//           Home
//         </Link>
//              </TabPanel>
//              <TabPanel>
//              <Link key={2} className="nav-link text-light" to="/about">
//           About 
//         </Link>
//              </TabPanel>
//              <TabPanel>
//              <Link key={3} className="nav-link text-light" to="/portfolio">
//          Portfolio
//        </Link>
//              </TabPanel>
//              <TabPanel>
//              <Link key={4} className="nav-link text-light" to="/contact">
//         Contact
//       </Link>
//              </TabPanel>
//              <TabPanel>
//              <Link key={4} className="nav-link text-light" to="/resume">
//         Contact
//       </Link>
//              </TabPanel>
//   </TabPanels>
// </Tabs> 
         
    
  );
}
