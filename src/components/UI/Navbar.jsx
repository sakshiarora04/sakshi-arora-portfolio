import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

import { Flex } from "@chakra-ui/layout";

export default function Nav({ links }) {   

  return (
  
     <nav className="navbar navbar-expand-lg bg-secondary">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {links.map((link) => link)}
          </ul>
        </div>
      </div>
    </nav>
  );
}
