import React from 'react'

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
            <a rel="noreferrer" href="https://en.wikipedia.org/wiki/Louis_W._Ballard" target="_blank">Louis W. Ballard | [Wikipedia]</a>
            <br></br>
            <a rel="noreferrer" href="https://www.okhistory.org/publications/enc/entry.php?entry=BA009" target="_blank">Ballard, Wayne Louis | [Oklahoma Historical Society]</a>
            <br></br>
            <a rel="noreferrer" href="https://www.britannica.com/biography/Louis-Ballard" target="_blank">Louis Ballard | [Britannica]</a>
            </TabPanel>
            <TabPanel>
            <a rel="noreferrer" href="https://kaleidoscopemusart.com/louis-wayne-ballard/#easy-footnote-bottom-1-3489" target="_blank">Louis Wayne Ballard [by Maria Sumareva and Andrew Rosenblum]</a>
            <br></br>
            <a rel="noreferrer" href="https://italianacademy.columbia.edu/event/american-voices-selected-piano-works-by-black-and-native-american-composers" target="_blank">American Voices: Selected Piano Works by Black and Native American Composers</a>
            </TabPanel>
            <TabPanel>
            <a rel="noreferrer" href="https://www.okhistory.org/index.php" target="_blank">Oklahoma Historical Society</a>
            <br></br>
            <a rel="noreferrer" href="https://indiancountrytoday.com/archive/12-images-seneca-indian-boarding-school" target="_blank">12 Images From Seneca Indian Boarding School [Indian Country Today]</a>
            </TabPanel>
            <TabPanel>
            <a rel="noreferrer" href="https://www.quapawtribe.com/" target="_blank">Quapaw Nation [Official Website]</a>
            <br></br>
            <a rel="noreferrer" href="https://www.cherokee.org/" target="_blank">Cherokee Nation [Official Website]</a>
            <br></br>
            <a rel="noreferrer" href="https://www.osagenation-nsn.gov/" target="_blank">Osage Nation [Official Website]</a>
            </TabPanel>
            <TabPanel>
            <a rel="noreferrer" href="https://americanindian.si.edu/" target="_blank">National Museum of the American Indian [Smithsonian]</a>
            <br></br>
            <a rel="noreferrer" href="https://famok.org/" target="_blank">First Americans Museum [Oklahoma]</a>
            <br></br>
            <a rel="noreferrer" href="https://composersforum.org/resources/organizations-supporting-composers-new-music/" target="_blank">American Composers Forum [Supporting Organizations]</a>
            </TabPanel>
            <TabPanel>
            <a rel="noreferrer" href="https://ufdc.ufl.edu/UFE0046553/00001" target="_blank">Louis W. Ballard: Composer and Music Educator [by Karl Erik Ettinger]</a>
            <br></br>
            <a rel="noreferrer" href="https://www.proquest.com/openview/b1343db3374ad0f2e7148d2de435c625/1?pq-origsite=gscholar&cbl=18750" target="_blank">Native American influence in the piano music of Louis W. Ballard [by Courtney J. Crappell]</a>
            </TabPanel>
        </TabPanels>
        </Tabs>

        </div>
    )
}

export default Resources
