import React from 'react'
import '../styles/Resources.css';

//chakra ui styles for this section
import {
    Stack,
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
        <Stack>

        <Tabs align='left' size='md' isFitted variant='enclosed'>
        <TabList>
            <Tab>Academic</Tab>
            <Tab>Biographical</Tab>
            <Tab>Cultural</Tab>
            <Tab>Featured</Tab>
            <Tab>Tribal</Tab>
            
            
        </TabList>

        <TabPanels>
        <TabPanel>
            <div>
            <a rel="noreferrer" href="https://fau.digital.flvc.org/islandora/object/fau%3A31263/datastream/OBJ/view/Finding_a_place_for_Cacega_Ayuwipi_within_the_structure_of_American_Indian_music_and_dance_traditions.pdf" target="_blank">Finding a Place for Cacega Ayuwipi within the Structure of American Indian Music and Dance Traditions [by Adam Eric Berkowitz]</a>
            </div>
            <br></br>
            <div>
            <a rel="noreferrer" href="https://ufdc.ufl.edu/UFE0046553/00001" target="_blank">Louis W. Ballard: Composer and Music Educator [by Karl Erik Ettinger]</a>
            </div>
            <br></br>
            <div>
            <a rel="noreferrer" href="https://studylibit.com/doc/1599546/louis-w.-ballard-e-la-musica-colta-dei-nativi-americani" target="_blank">Louis W. Ballard E La Musica Colta Dei Nativi Americani [by Emanuele Arciuli]</a>
            </div>
            <br></br>
            <div>
            <a rel="noreferrer" href="https://digital.library.unt.edu/ark:/67531/metadc28485/m2/1/high_res_d/dissertation.pdf" target="_blank">Native American Elements in Piano Repertoire by the Indianist and Present-Day Native American Composers [by Lisa Cheryl Thomas]</a>
            </div>
            <br></br>
            <div>
            <a rel="noreferrer" href="https://www.proquest.com/openview/b1343db3374ad0f2e7148d2de435c625/1?pq-origsite=gscholar&cbl=18750" target="_blank">Native American influence in the piano music of Louis W. Ballard [by Courtney J. Crappell]</a>
            </div>
            </TabPanel>

            <TabPanel>
            <div>
            <a rel="noreferrer" href="https://www.britannica.com/biography/Louis-Ballard" target="_blank">Louis Ballard | [Britannica]</a>
            </div>
            <br></br>
            <div>
            <a rel="noreferrer" href="https://www.encyclopedia.com/history/encyclopedias-almanacs-transcripts-and-maps/ballard-louis-wayne" target="_blank">Louis Ballard | [Encyclopedia]</a>
            </div>
            <br></br>
            <div>
            <a rel="noreferrer" href="https://www.okhistory.org/publications/enc/entry.php?entry=BA009" target="_blank">Ballard, Wayne Louis | [Oklahoma Historical Society]</a>
            </div>
            <br></br>
            <div>
            <a rel="noreferrer" href="https://en.wikipedia.org/wiki/Louis_W._Ballard" target="_blank">Louis W. Ballard | [Wikipedia]</a>
            </div>
            </TabPanel>

            <TabPanel>
            <div>
            <a rel="noreferrer" href="https://composersforum.org/resources/organizations-supporting-composers-new-music/" target="_blank">American Composers Forum [Supporting Organizations]</a>
            </div>
            <br></br>
            <div>
            <a rel="noreferrer" href="https://indiancountrytoday.com/archive/chickasaw-chamber-music-festival-bridges-gap-between-two-worlds" target="_blank">Chickasaw Chamber Music Festival Bridges Gap Between Two Worlds [Indian Country Today]</a>
            </div>
            <br></br>
            <div>
            <a rel="noreferrer" href="https://famok.org/" target="_blank">First Americans Museum [Oklahoma]</a>
            </div>
            <br></br>
            <div>
            <a rel="noreferrer" href="https://americanindian.si.edu/" target="_blank">National Museum of the American Indian [Smithsonian]</a>
            </div>
            <br></br>
            <div>
            <a rel="noreferrer" href="https://www.okhistory.org/index.php" target="_blank">Oklahoma Historical Society</a>
            </div>
            <br></br>
            <div>
            <a rel="noreferrer" href="https://indiancountrytoday.com/archive/12-images-seneca-indian-boarding-school" target="_blank">12 Images From Seneca Indian Boarding School [Indian Country Today]</a>
            </div>
            </TabPanel>

            <TabPanel>
            <div>
            <a rel="noreferrer" href="https://italianacademy.columbia.edu/event/american-voices-selected-piano-works-by-black-and-native-american-composers" target="_blank">American Voices: Selected Piano Works by Black and Native American Composers</a>
            </div>
            <br></br>
            <div>
            <a rel="noreferrer" href="https://live.stanford.edu/blog/february-2018/composing-american-sound" target="_blank">Composing the American Sound [Standford Live]</a>
            </div>
            <br></br>
            <div>
            <a rel="noreferrer" href="https://kaleidoscopemusart.com/louis-wayne-ballard/#easy-footnote-bottom-1-3489" target="_blank">Louis Wayne Ballard [by Maria Sumareva and Andrew Rosenblum]</a>
            </div>
            <br></br>
            <div>
            <a rel="noreferrer" href="https://pages.stolaf.edu/americanmusic/tag/indian-music/" target="_blank">MacDowell vs. Ballard: A Comparison of American Indian Identity in Classical Music [by Aaron Linde]</a>
            </div>
            <br></br>
            <div>
            <a rel="noreferrer" href="https://nmbx.newmusicusa.org/native-american-composers/" target="_blank">Native American Composers [by Gail Wein]</a>
            </div>
            <br></br>
            <div>
            <a rel="noreferrer" href="https://blogs.wdav.org/2021/11/get-to-know-5-native-american-and-indigenous-classical-icons/" target="_blank">Native American Heritage Day: Get to Know 5 Native American and Indigenous Classical Icons</a>
            </div>
            <br></br>
            <div>
            <a rel="noreferrer" href="http://www.sentineltimes.com/musical-presentation-honoring-dr-louis-w-ballard/" target="_blank">Sentinel Times: Musical Presentation Honoring Dr. Louis W. Ballard (Quapaw Tribe)</a>
            </div>
            </TabPanel>

            <TabPanel>
            <div>
            <a rel="noreferrer" href="https://www.cherokee.org/" target="_blank">Cherokee Nation [Official Website]</a>
            </div>
            <br></br>
            <div>
            <a rel="noreferrer" href="https://www.osagenation-nsn.gov/" target="_blank">Osage Nation [Official Website]</a>
            </div>
            <br></br>
            <div>
            <a rel="noreferrer" href="https://www.quapawtribe.com/" target="_blank">Quapaw Nation [Official Website]</a>
            </div>
            </TabPanel>
            
            

        </TabPanels>
        </Tabs>

        </Stack>
    )
}

export default Resources
