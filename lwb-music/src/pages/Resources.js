import React from 'react'
// import Menu from '../components/MainMenu'
import LWBlinks from '../components/LWBlinks';
import NAlinks from '../components/NAlinks';
//chakra ui styles for this section
import {
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel
} from '@chakra-ui/react'


function Resources() {
    return (
        <div>

        <Tabs>
        <TabList>
            <Tab>Biographical</Tab>
            <Tab>Featured</Tab>
            <Tab>Historical</Tab>
            <Tab>Tribal</Tab>
            <Tab>Cultural</Tab>
            <Tab>Academic</Tab>
        </TabList>

        <TabPanels>
            <TabPanel>
            <p>one!</p>
            </TabPanel>
            <TabPanel>
            <p>two!</p>
            </TabPanel>
            <TabPanel>
            <p>three!</p>
            </TabPanel>
        </TabPanels>
        </Tabs>

        </div>
    )
}

export default Resources
