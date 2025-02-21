import React from 'react'
import '../styles/Resources.css';

//chakra ui styles for this section
import {
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel
} from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools';

const breakpoints = createBreakpoints({
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em',
  })

function Resources() {
    return (
    <div>
        <Tabs 
            align='left' 
            variant='enclosed'
        >
        <TabList>
            <Tab>Academic</Tab>
            <Tab>Biographical</Tab>
            <Tab>Cultural</Tab>
            <Tab>Featured</Tab>
            <Tab>Medium</Tab>
            <Tab>Tribal</Tab>
        </TabList>

        <TabPanels>
        <TabPanel px={0}>
            <div>
            <a rel="noreferrer" href="https://fau.digital.flvc.org/islandora/object/fau%3A31263/datastream/OBJ/view/Finding_a_place_for_Cacega_Ayuwipi_within_the_structure_of_American_Indian_music_and_dance_traditions.pdf" target="_blank"><b>Finding a Place for Cacega Ayuwipi within the Structure of American Indian Music and Dance Traditions</b> 
            <br></br>[Adam Eric Berkowitz]</a>
            </div>
            <br></br>
            <div>
            <a rel="noreferrer" href="https://ufdc.ufl.edu/UFE0046553/00001" target="_blank"><b>Louis W. Ballard: Composer and Music Educator</b> <br></br>[Karl Erik Ettinger]</a>
            </div>
            <br></br>
            <div>
            <a rel="noreferrer" href="https://studylibit.com/doc/1599546/louis-w.-ballard-e-la-musica-colta-dei-nativi-americani" target="_blank"><b>Louis W. Ballard E La Musica Colta Dei Nativi Americani</b> <br></br>[Emanuele Arciuli]</a>
            </div>
            <br></br>
            <div>
            <a rel="noreferrer" href="https://digital.library.unt.edu/ark:/67531/metadc28485/m2/1/high_res_d/dissertation.pdf" target="_blank"><b>Native American Elements in Piano Repertoire by the Indianist and Present-Day Native American Composers</b> <br></br>[Lisa Cheryl Thomas]</a>
            </div>
            <br></br>
            <div>
            <a rel="noreferrer" href="https://www.proquest.com/openview/b1343db3374ad0f2e7148d2de435c625/1?pq-origsite=gscholar&cbl=18750" target="_blank"><b>Native American influence in the piano music of Louis W. Ballard</b> <br></br> [Courtney J. Crappell]</a>
            </div>
            </TabPanel>

            <TabPanel px={0}>
            <div>
            <a rel="noreferrer" href="https://www.britannica.com/biography/Louis-Ballard" target="_blank"><b>Louis Ballard</b><br></br>[Britannica]</a>
            </div>
            <br></br>
            <div>
            <a rel="noreferrer" href="https://www.encyclopedia.com/history/encyclopedias-almanacs-transcripts-and-maps/ballard-louis-wayne" target="_blank"><b>Louis Ballard</b><br></br>[Encyclopedia]</a>
            </div>
            <br></br>
            <div>
            <a rel="noreferrer" href="https://www.okhistory.org/publications/enc/entry.php?entry=BA009" target="_blank"><b>Ballard, Wayne Louis</b><br></br>[Oklahoma Historical Society]</a>
            </div>
            <br></br>
            <div>
            <a rel="noreferrer" href="https://en.wikipedia.org/wiki/Louis_W._Ballard" target="_blank"><b>Louis W. Ballard</b><br></br>[Wikipedia]</a>
            </div>
            </TabPanel>

            <TabPanel px={0}>
            <div>
            <a rel="noreferrer" href="https://composersforum.org/resources/organizations-supporting-composers-new-music/" target="_blank"><b>American Composers Forum</b><br></br> [Supporting Organizations]</a>
            </div>
            <br></br>
            <div>
            <a rel="noreferrer" href="https://indiancountrytoday.com/archive/chickasaw-chamber-music-festival-bridges-gap-between-two-worlds" target="_blank"><b>Chickasaw Chamber Music Festival Bridges Gap Between Two Worlds</b><br></br> [Indian Country Today]</a>
            </div>
            <br></br>
            <div>
            <a rel="noreferrer" href="https://famok.org/" target="_blank"><b>First Americans Museum</b> <br></br> [Oklahoma]</a>
            </div>
            <br></br>
            <div>
            <a rel="noreferrer" href="https://americanindian.si.edu/" target="_blank"><b>National Museum of the American Indian</b> <br></br>[Smithsonian]</a>
            </div>
            <br></br>
            <div>
            <a rel="noreferrer" href="https://www.okhistory.org/index.php" target="_blank"><b>Oklahoma Historical Society</b></a>
            </div>
            <br></br>
            <div>
            <a rel="noreferrer" href="https://indiancountrytoday.com/archive/12-images-seneca-indian-boarding-school" target="_blank"><b>12 Images From Seneca Indian Boarding School</b><br></br> [Indian Country Today]</a>
            </div>
            </TabPanel>

            <TabPanel px={0}>
            <div>
            <a rel="noreferrer" href="https://italianacademy.columbia.edu/event/american-voices-selected-piano-works-by-black-and-native-american-composers" target="_blank"><b>American Voices: Selected Piano Works by Black and Native American Composers</b></a>
            </div>
            <br></br>
            <div>
            <a rel="noreferrer" href="https://live.stanford.edu/blog/february-2018/composing-american-sound" target="_blank"><b>Composing the American Sound</b> <br></br> [Standford Live]</a>
            </div>
            <br></br>
            <div>
            <a rel="noreferrer" href="https://kaleidoscopemusart.com/louis-wayne-ballard/#easy-footnote-bottom-1-3489" target="_blank"><b>Louis Wayne Ballard</b><br></br> [Maria Sumareva and Andrew Rosenblum]</a>
            </div>
            <br></br>
            <div>
            <a rel="noreferrer" href="https://pages.stolaf.edu/americanmusic/tag/indian-music/" target="_blank"><b>MacDowell vs. Ballard: A Comparison of American Indian Identity in Classical Music</b> <br></br>[Aaron Linde]</a>
            </div>
            <br></br>
            <div>
            <a rel="noreferrer" href="https://nmbx.newmusicusa.org/native-american-composers/" target="_blank"><b>Native American Composers</b><br></br> [Gail Wein]</a>
            </div>
            <br></br>
            <div>
            <a rel="noreferrer" href="https://blogs.wdav.org/2021/11/get-to-know-5-native-american-and-indigenous-classical-icons/" target="_blank"><b>Native American Heritage Day: Get to Know 5 Native American and Indigenous Classical Icons</b></a>
            </div>
            <br></br>
            <div>
            <a rel="noreferrer" href="https://cso.org/experience/article/11000/recalling-the-legacy-of-louis-ballard-father" target="_blank"><b>Recalling the legacy of Louis Ballard, father of Native American music</b> <br></br>[Chicago Symphony Orchestra]</a>
            </div>
            <br></br>
            <div>
            <a rel="noreferrer" href="http://www.sentineltimes.com/musical-presentation-honoring-dr-louis-w-ballard/" target="_blank"><b>Sentinel Times: Musical Presentation Honoring Dr. Louis W. Ballard</b> <br></br>[Quapaw Tribe]</a>
            </div>
           
            </TabPanel>

            <TabPanel px={0}>
            <div>
            <a rel="noreferrer" href="https://simone-a-ballard.medium.com/keeping-the-rhythm-alive-a-journey-into-unknown-scores-and-hidden-corners-75a16075c389" target="_blank"><b>Keeping the Rhythm Alive: ...</b><br></br> [Medium Blog]</a>
            </div>
            <br></br>
            <div>
            <a rel="noreferrer" href="https://simone-a-ballard.medium.com/native-american-legends-45bba500888b" target="_blank"><b>"Native American Legends"</b><br></br> [Medium Blog]</a>
            </div>
            <br></br>
            <div>
            <a rel="noreferrer" href="https://simone-a-ballard.medium.com/classical-revival-unleashed-516d9e705c12" target="_blank"><b>Classical Revival Unleashed!</b><br></br> [Medium Blog]</a>
            <br></br>
            </div>
            <div>
            <a rel="noreferrer" href="https://simone-a-ballard.medium.com/five-moons-festival-24-032d312aaecc" target="_blank"><b>Five Moons Festival '24</b><br></br> [Medium Blog]</a>
            </div>
            <br></br>
            <div>
            <a rel="noreferrer" href="https://simone-a-ballard.medium.com/highlights-cherokee-variation-revival-1f4b8acdf526" target="_blank"><b>Highlights: Cherokee Variation Revival</b><br></br> [Medium Blog]</a>
            </div>
            <br></br>
            <div>
            <a rel="noreferrer" href="https://simone-a-ballard.medium.com/what-is-the-hollywoodbowl-573137822d1e" target="_blank"><b>What is the #hollywoodbowl?</b><br></br> [Medium Blog]</a>
            </div>
            <br></br>
            <div>
            <a rel="noreferrer" href="https://simone-a-ballard.medium.com/a-brief-introduction-to-the-fleisher-collection-an-american-classical-haven-4dc83baa0761" target="_blank"><b>A Brief Introduction to the Fleisher Collection - An American Classical Haven</b><br></br> [Medium Blog]</a>
            </div>
            </TabPanel>

            <TabPanel px={0}>
            <div>
            <a rel="noreferrer" href="https://www.cherokee.org/" target="_blank"><b>Cherokee Nation</b><br></br> [Official Website]</a>
            </div>
            <br></br>
            <div>
            <a rel="noreferrer" href="https://www.osagenation-nsn.gov/" target="_blank"><b>Osage Nation</b><br></br> [Official Website]</a>
            </div>
            <br></br>
            <div>
            <a rel="noreferrer" href="https://www.quapawtribe.com/" target="_blank"><b>Quapaw Nation</b><br></br> [Official Website]</a>
            </div>
            </TabPanel>
        </TabPanels>
        </Tabs>
    </div>
    )
}

export default Resources;