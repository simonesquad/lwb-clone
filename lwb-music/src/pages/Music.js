import React from 'react'
import  {
    Stack,
    HStack,
    VStack,
    Box,
    Heading,
    Link,
    Text,
    List,
    ListItem,
} from '@chakra-ui/react';
import { Buttons } from '../components'
import { createBreakpoints } from '@chakra-ui/theme-tools';

const breakpoints = createBreakpoints({
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em',
  })

function Music() {
    return (
        <Stack>
            <VStack 
                spacing={1}
                align='center'
            >
            <VStack
                w={{
                    sm: '75vw',
                    md: '60vw',
                    lg:'70vw'
                }}
                h={{
                    base: '100vh',
                    sm: '80vh',
                    md: '77vh',
                    lg: '75vh'
                }}
                align='left'
            >
                <Box
                    marginTop='5%'
                    h={{
                        md: '13vh',
                        lg:'9vh'
                    }}
                >
                    <Heading>Music Highlights Table of Contents</Heading>
                </Box>
                <Box>
                <Link href='#incident'>Incident at Wounded Knee</Link>
                <br></br>
                <Link href='#katcina'>Katcina Dances</Link>
                <br></br>
                <Link href='#preludes'>Four American Indian Preludes</Link>
                <br></br>
                <Link href='#short_tail'>Why the Duck Has a Short Tail</Link>
                <br></br>
                <Link href='#ritmo_indio'>Ritmo Indio</Link>
                <br></br>
                <Link href='#fire_moon'>Fire Moon String Quartet</Link>
                <br></br>
                <Link href='#three_cities'>Three Cities</Link>
                <br></br>
                <Link href='#will_rogers'>Portrait of Will Rogers</Link>
                <br></br>
                <Link href='#four_moons'>The Four Moons</Link>
                <br></br>
                <Link href='#three_cities'>The Three Cities</Link>
                <br></br>
                <Link href='#na_songs'>Native American Indian Songs</Link>
                <br></br>
                <Link href='#chamber_music'>Chamber Music Overview</Link>
                <br></br>
                <Link href='#notes'>Note on music*</Link>
                </Box>
            </VStack>

                <a id="incident"></a>
                <HStack 
                    w={{
                        base: '75vw',
                        md: '60vw',
                        lg:'70vw'
                        }} 
                    h={{
                        base: '165vh',
                        md: '140vh',
                        lg:'100vh'
                        }}>
                <VStack 
                    align='center'
                >
                <Box w='100vw' style={{ margin: '5px' }}>
                    <Box h= '7vh'>
                    <Heading as='h3' size='md'>Incident at Wounded Knee</Heading>
                    </Box>
                    <Text>
                    This four-movement work for chamber orchestra is inspired by one of America’s darkest historical moments, the original massacre at Wounded Knee and the modern day siege that occurred while Ballard was composing the score commemorating the first event. The original massacre took place on December 29, 1890 when over 200 men, women, and children belonging to the Miniconjou and Hunkpapa tribes were killed by U.S. troops on Sioux territory after surrender and an unplanned skirmish with a rifle. On February 27, 1973, nearly a century later, 200 members of the inter-tribal American Indian Movement occupied the same site in a standoff with the U.S. government over oppressive living conditions and treaty disputes. The site and events remain one of the most visible reference points for the often dysfunctional relationship between the U.S. government and Native American tribes.
                    </Text>
                </Box>
                <Box w='100vw' style={{ margin: '3vh' }}>
                    <Text>
                    The piece was originally commissioned by the Saint Paul Chamber Orchestra in 1974. It consists of the following movements: “Procession,” “Prayer,” “Blood and War,” and “Ritual.” It was dedicated to their esteemed conductor at the time, Dennis Russell Davies. According to Ballard, the piece: <Text as='i'>“is not a literal depiction of any programmatic materials, but rather…tone-rhythmical series of musical episodes meant to suggest violent conflict…emotion-laden processions…spiritual state of being.”</Text> It premiered in the U.S. on May 4th, 1974 in St. Paul Minnesota, and later in Warsaw, Poland on October 12th, 1974. The European tour continued to debut the piece in Prague, Budapest, Belgrade, Berlin, Munich, Amsterdam, and Paris. The premieres received mixed critical reviews, but the work and tour garnered Ballard much more international attention. To date, it remains his most well-known piece and a symbol of supra-tribal Native American classical composition, which would become a Ballard trademark.
                   </Text>
                </Box>
                </VStack>
                </HStack>
                
                <a id="katcina"></a>
                <HStack 
                    w={{
                        base: '75vw',
                        md: '60vw',
                        lg:'70vw'
                        }} 
                    h={{
                        base: '150vh',
                        md: '140vh',
                        lg:'115vh'
                        }}>
                <VStack 
                    align='left'
                >
                <Box w='100vw' style={{ margin: '5px' }}>
                    <Box h='7vh'>
                    <Heading as='h3' size='md'>Katcina Dances</Heading>
                    </Box>
                    <Text>
                    The Katcina Dances: Suite for Violoncello and Pianoforte was commissioned by and dedicated to Herbert and Bernice Beenhouwer. The piece is named after mythical spirits originating from the Hopi tribe in New Mexico, where Ballard lived most of his life. They are spirits that the Hopi believe manifest themselves for six months here on Earth to give guidance. Ballard initially started visiting the Hopi reservation while doing research for his first ballet composition <Text as='i'>Koshare.</Text> He witnessed the ceremonial Katcina dances first hand on tribal grounds which inspired the project. Katcina Dances consists of 10 movements corresponding to different Katcina manifestations and their distinguishing characteristics. Those movements are: <Text as='i'>“Powamu (Coming of the Gods)”, “Ahul (Sun God)”, “Kwahu (Eagle)”, “Momo (Bees)”, “Monwu (Owls)”, “Koyimsi (Foolish Ones)”, “Calako (Huge Birds)”, “Tumas, Tunwup (Crow Mother and Sons)”, “Soyokos (Monsters)”, and “Niman (Departure of the Gods)”.</Text>
                    </Text>
                </Box>
                <Box w='100vw' style={{ margin: '5px', marginTop: '3vh' }}>
                    <Text>
                    Ballard’s European training becomes evident in this work, as well as his cultural anthropological ambitions to capture the essence of other tribe’s folklore without disturbing their religious significance. These were delicate matters, and it seems that his approach with Katcina Dances paid off as it remains an alluring piece and is still preferentially performed. The world premiere was on July 28th, 1970 in Santa Fe, New Mexico featuring cellist James Holoshovsky and Ruth Doré. 
                    </Text>
                </Box>
                <Box style={{ 
                    marginTop: '17%', 
                    marginLeft: '45%' 
                }}>
                    <a href="https://www.youtube.com/watch?v=BoIZ7uBh1Nk" target="_blank">
                    <Buttons
                        text="Listen" />
                    </a>
                    </Box>
                </VStack>
                </HStack>
                
                <a id="preludes"></a>
                <HStack 
                    w={{
                        base: '75vw',
                        md: '60vw',
                        lg:'70vw'
                        }} 
                    h={{
                        base: '160vh',
                        md: '140vh',
                        lg:'115vh'
                        }}>
                <VStack 
                    align='left'
                >
                <Box w='100vw' style={{ margin: '5px' }}>
                    <Box h='7vh'>
                    <Heading as='h3' size='md'>Four American Indian Preludes</Heading>
                    </Box>
                    <Text>
                    The Four American Indian Preludes were composed during a unique time in Ballard’s career, when he was under the tutelage of Darius Milhaud at the Aspen Music Festival in 1963. When Darius first heard the preludes he allegedly remarked: <Text as='i'>“Louis, now you are a real composer!”</Text> This was a pivotal moment for Ballard as he felt he had crossed an important personal and professional milestone. The Preludes remain his most outstanding work for piano and were often played during his lifetime. The piece was selected for a tribute concert to Ballard at the Smithsonian National Museum of the American Indian in November, 2007. It is also frequently played by his friend Italian pianist Emanuele Arciuli. 
                    </Text>
                    </Box>
                    <Box w='100vw' style={{ margin: '5px', marginTop: '3vh' }}>
                    <Text>
                    The Preludes marks Ballard’s chosen departure from his original training via Béla Rózsa at the University of Tulsa, who had studied from Schoenberg. His original techniques primarily involved twelve-tone music and atonal writing. The atonal writing persisted, however, the preludes represented his foray into intervals of a perfect fourth and diminished fifth. Each prelude depicts a scene relevant to historical Native American life, and each scene’s title is presented in the Quapaw language. The four scenes are: “Ombáska” (Daylight), “Tabideh” (The Hunt), “Nekátohe” (Lovesong), and “T’ohkáne” (Warrior Dance). The entire set is 10 minutes in duration. According to Native pianist Tim Hays: <Text as='i'>“In the Preludes he looked at the piano in two different ways. He looked at it as a percussion band and as a source for vocal lines at the same time. … The audience gets it; they understand it immediately.”</Text>
                    </Text>
                </Box>
                <Box style={{ 
                    marginTop: '17%', 
                    marginLeft: '45%' 
                    }}>
                    <a href="https://open.spotify.com/album/4dOgH1viKCbfX2h56VoPvh" target="_blank">
                    <Buttons
                        text="Listen" />
                    </a>
                    </Box>
                </VStack>
                </HStack>
                
                <a id="short_tail"></a>
                <HStack 
                    w={{
                        base: '75vw',
                        md: '60vw',
                        lg:'70vw'
                        }} 
                    h={{
                        base: '145vh',
                        md: '120vh',
                        lg:'80vh'
                        }}>
                <VStack 
                    align='center'
                >
                <Box w='100vw' style={{ margin: '5px' }}>
                    <Box h='7vh'>
                    <Heading as='h3' size='md'>Why the Duck Has a Short Tail</Heading>
                    </Box>
                    <Text>
                    <Text as='i'>Why the Duck Has a Short Tail: An American Indian Folktale,</Text> is a narrative work composed for a juvenile audience and follows from the quintessential oral history tradition of indigenous cultures. It premiered in Tempe, Arizona on May 8th, 1969 during the Communication Through Music tour. As Ballard described it: <Text as='i'>“This work, which is based on an authentic legend of the Navajo people, includes narration, Indian chant, and instruments within the framework of a modern orchestral composition. It tells the story of the First Indian Man upon this continent and of the creation of the mountain ranges. The animal characters, which are featured in this story, are the Eagle, Coyote, Bear, and the Little Duck who sacrifices his beauty in order to help bring the magic stones to the First Man.”</Text>
                    </Text>
                </Box>
                <Box w='100vw' style={{ margin: '3vh' }}>
                    <Text>
                    As this music was inspired by the Navajo tradition, it was performed locally by the Phoenix Symphony at key Navajo community centers and also for a benefit concert to send eight Native American IAIA students on a trip to France. The concerts were given to utilize local Native choral talent from multiple tribes, and to involve Native youth as much as possible in the performance creation process. This coincided with Ballard’s appointment at the Bureau of Indian Affairs towards Bureau Music Education. In conjunction with Ballard’s Native American Indian Songs, this piece has lasting cultural value by preserving indigenous storytelling within the format of Classical Music. 
                    </Text>
                </Box>
                </VStack>
                </HStack>
                
                <a id="ritmo_indio"></a>
                <HStack 
                    w={{
                        base: '75vw',
                        md: '60vw',
                        lg:'70vw'
                        }} 
                    h={{
                        base: '130vh',
                        md: '120vh',
                        lg:'100vh'
                        }}>
                <VStack 
                    align='left'
                >
                <Box w='100vw' style={{ margin: '5px' }}>
                    <Box h='5vh'>
                    <Heading as='h3' size='md'>Ritmo Indio</Heading>
                    </Box>
                    <Text>
                    <Text as='i'>Ritmo Indio: A study in American Indian Rhythms</Text> for woodwind quintet was commissioned by the Martha Baird Rockefeller Foundation and written for the Dorian Woodwind Quintet. The Bourne Music Company originally published the work and the Dorian Woodwind Quintet gave the world premiere on Saturday, March 8th, 1969 in the Kiva Theater on the IAIA campus in Santa Fe, New Mexico. The original concert was made possible by a grant from the Ford Foundation and presented by Mrs. Stewart Udall, the head of the Center for Arts of Indian America in Washington, D.C. at the time. The work includes the use of the Sioux Indian flageolet which was described as a <Text as='i'>“lovely native instrument, visually attractive with a beautiful tone.”</Text> It was originally performed by the Quintet of Karl Kraber (flute), William Lewis (clarinet), Jane Taylor (bassoon), Barry Benjamin (French horn), and Charles Kuskin (oboe and Sioux flute). Following the premiere, the piece became a part of the Quintet’s repertoire for a tour of 150 concerts given for Native American children in the Southwest of the U.S. 
                    </Text>
                </Box>
                <Box 
                    style={{
                        marginTop: '17%',
                        marginLeft: '45%'
                    }}
                >
                    <a href="https://www.youtube.com/watch?v=HFGK7rLwTwY" target="_blank">
                    <Buttons
                        text="Listen" />
                    </a>
                    </Box>
                </VStack>
                </HStack>
                
                <a id="fire_moon"></a>
                <HStack 
                    w={{
                        base: '75vw',
                        md: '60vw',
                        lg:'70vw'
                        }} 
                    h={{
                        base: '135vh',
                        md: '120vh',
                        lg:'100vh'
                        }} >
                <VStack 
                    align='center'
                >
                <Box w='100vw' style={{ margin: '5px' }}>
                    <Box h='7vh'>
                    <Heading as='h3' size='md'>Fire Moon String Quartet</Heading>
                    </Box>
                    <Text>
                    The Fire Moon or <Text as='i'>“Pe’teh Minoba”</Text> string quartet is unique in that it directly relates to one of Ballard’s own tribes, the Quapaw tribe of Oklahoma. This is one of his later works and was released in 1998 through his own publishing company at the time, New Southwest Music Publications. The piece consists of 3 movements: <Text as='i'>“I. Tourima”, “II: Osotouy”, and “III. Kappa”.</Text> Three years prior to composition, there was an exhibition of historical Quapaw artifacts including those influenced by French colonial trade times. The French government had loaned several 250 year-old elk and buffalo robes to the Territorial Restoration Museum in Little Rock, Arkansas that were from three historical Quapaw villages which are no longer in existence. 
                    </Text>
                </Box>
                <Box w='100vw' style={{ margin: '3vh' }}>
                    <Text>
                    The Quapaws and French had a military alliance in the 1800’s and this cultural influence is still visible in some of the tribe’s regalia today. Ballard sought to reflect this musically by incorporating elements of French Impressionist music with his own compositional style. He named the three movements after historical Quapaw villages that were in existence at that time. The piece could be interpreted as Ballard paying homage to his roots towards the end of his career. He concludes this work with a traditional stomp dance, which he grew up dancing himself, making it one of his most personal and signature compositions. 
                    </Text>
                </Box>
                </VStack>
                </HStack>
                
                <a id="three_cities"></a>
                <HStack 
                    w={{
                        base: '75vw',
                        md: '60vw',
                        lg:'70vw'
                        }} 
                    h={{
                        base: '170vh',
                        md: '145vh',
                        lg:'115vh'
                        }}>
                <VStack 
                    align='center'
                >
                <Box w='100vw' style={{ margin: '5px' }}>
                    <Box h='7vh'>
                    <Heading as='h3' size='md'>Three Cities</Heading>
                    </Box>
                    <Text>
                    The Three Cities consists of three pieces: <Text as='i'>A City of Silver (1981), A City of Fire (1984), and A City of Light (1987).</Text> Ballard visited Buenos Aires, Argentina for the first time in 1980 for the world premiere of his choral cantata <Text as='i'>Thus Spoke Abraham</Text> as performed by the Choro Conservatorio Gilardo Gilardi. The trip deeply affected him and afterwards he began composing the first city piece, A City of Silver. He dedicated this piece: <Text as='i'>“Para todos los desaparecidos del mundo,”</Text> or <Text as='i'>“For all the disappeared ones of the world.”</Text> His visit was during the aftermath of Argentina’s “Dirty War” from 1975-1978 and the military’s brutal mass executions of dissenters.
                    </Text>
                    </Box>
                    <Box w='100vw' style={{ margin: '5px', marginTop: '3vh' }}>
                    <Text>
                    The world premiere for A City of Silver was on April 30th, 1981 at Northeastern Oklahoma University in Tahlequah. A few years later, it premiered at Carnegie Hall with pianist Roberta Rust. The New York Tribune stated that Rust’s performance: <Text as='i'>“held the promise of raising Native American music into new and undiscovered dimensions.”</Text> The performance itself was historic in that it was the first performance in Carnegie Hall of music by a Native American composer and performed by a Native American concert pianist. A City of Fire was also performed during this concert and it is a tribute to Los Alamos, New Mexico and the nuclear testing sites, a location that Ballard saw in person and had a morbid fascination with afterwards. Finally, a City of Light was inspired by Ballard’s first trip to Paris, France. In Paris, he sought out the district of his ancestral namesake, the <Text as='i'>“Place Balárd,”</Text> where the original music publishing house of the sixteenth century was located. A City of Light premiered at Carnegie Hall on February 8th, 1987 and was performed by pianist Stephan Drury. Ballard would later perform the piece himself at the Beethoven-Haus in Bonn, Germany in 1989.
                    </Text>
                </Box>
                <Box style={{ 
                    marginTop: '17%', 
                    marginLeft: '19%' 
                }}>
                    <a href="https://www.navonarecords.com/catalog/nv6429/" target="_blank">
                    <Buttons
                        text="Listen" />
                    </a>
                </Box>
                </VStack>
                </HStack>
                
                <a id="will_rogers"></a>
                <HStack 
                    w={{
                        base: '75vw',
                        md: '60vw',
                        lg:'70vw'
                        }} 
                    h={{
                        base: '105vh',
                        md: '120vh',
                        lg:'100vh'
                        }} spacing='70px'>
                <VStack 
                    align='center'
                >
                <Box w='100vw' style={{ margin: '5px' }}>
                    <Box h='7vh'>
                    <Heading as='h3' size='md'>Portrait of Will Rogers</Heading>
                    </Box>
                    <Text>
                    A unique and perhaps “tongue-and-cheek” work is the <Text as='i'>Portrait of Will Rogers (Tribute to a Great American).</Text> It’s a piece that allowed Ballard to flex his literary side as well as his cultural sensibilities in reading the audience of the day. It was commissioned by The William Jewell College Choir and conducted by his friend, Wesley Forbis, while Will Rogers Jr. narrated the premiere. In the construction of the piece, Ballard states that: <Text as='i'>“I used a half-dozen quotes from Will Rogers in the libretto I wrote for the piece, something in the manner of Copland’s Lincoln Portrait.”</Text>Will Rogers was an American vaudeville performer, actor, and comedian known colloquially as “Oklahoma’s Favorite Son.” He was a well-known Oklahoman celebrity of Cherokee descent and the best man in Ballard grandparent's wedding at the 1904 World Fair.
                    </Text>
                </Box>
                </VStack>
                </HStack>
                
                <a id="four_moons"></a>
                <HStack 
                    w={{
                        base: '75vw',
                        md: '60vw',
                        lg:'70vw'
                        }} 
                    h={{
                        base: '190vh',
                        md: '170vh',
                        lg:'130vh'
                        }} >
                <VStack 
                    align='left'
                >
                <Box w='100vw' style={{ margin: '5px' }}>
                    <Box h='7vh'>
                    <Heading as='h3' size='md'>The Four Moons</Heading>
                    </Box>
                    <Text>
                    The Four Moons is a ballet composed during a unique moment in history, when Oklahoma had produced four world-renowned Native American ballerinas who were all actively dancing over a few decades. Those four ballerinas were Yvonne Chouteau (Cherokee), Rosella Hightower (Choctaw), Moscelyne Larkin (Shawnee), and Marjorie Tallchief (Osage). An honorable mention has to be made for Marjorie’s older sister Maria Tallchief, who did not participate in the ballet at that time because she had already retired. She was known worldwide as one of the greatest prima ballerinas the U.S. had ever produced, a founding member of New York City Ballet, and a member of the Osage tribe of Oklahoma whom Dolores Lookout, Ballard’s first wife and mother of his three children, also belonged to. It was truly a family affair moment. 
                    </Text>
                </Box>
                <Box w='100vw' style={{ margin: '5px', marginTop: '3vh' }}>
                    <Text>
                    At this stage, Ballard had composed two previous ballets based on Iroquois and Hopi tribal mythology. Those ballets are <Text as='i'>Ji-jo-gweh and Koshare.</Text> The Four Moons was different because it wasn’t based on mythology, but rather an actual historical event that marked a turning point for many tribes. That event was the Trail of Tears and the forced migration of Native Americans from their ancestral homelands within the U.S. to less favorable land out west. Due to Ballard’s Cherokee and Quapaw heritage, the subject matter held a special significance for all artists involved. The 22-minute long ballet is structured as a <Text as='i'>pas de quatre,</Text> with solos from each ballerina and an <Text as='i'>ensemble</Text> finale. The choreography was highly personalized to each ballerina’s story and style. There was a reception at the Governor’s Mansion in Oklahoma to celebrate the announcement, and the ballet itself premiered later that year at the Tulsa Municipal Theater on October 28th, 1967 as a part of Oklahoma’s 60th Anniversary of Statehood celebration. The ballet received a glowing review from dance critic Walter Terry in World of Dance: <Text as='i'>“...and to the art of ballet in this fascinating and wholly rewarding Oklahoma Indian Ballerina Festival, for in their care the four moons did, indeed, shine warmly and brightly.”</Text>
                    </Text>
                </Box>
                <Box style={{ 
                    marginTop: '17%', 
                    marginLeft: '45%' 
                    }}>
                    <a href="https://open.spotify.com/album/4dOgH1viKCbfX2h56VoPvh" target="_blank">
                    <Buttons
                        text="Listen" />
                    </a>
                    </Box>
                </VStack>
                </HStack>
                
                <a id="na_songs"></a>
                <HStack 
                    w={{
                        base: '75vw',
                        md: '60vw',
                        lg:'70vw'
                        }} 
                    h={{
                        base: '120vh',
                        md: '125vh',
                        lg:'105vh'
                        }}>
                <VStack 
                    align='center'
                >
                <Box w='100vw' style={{ margin: '5px' }}>
                    <Box h='7vh'>
                    <Heading as='h3' size='md'>Native American Indian Songs</Heading>
                    </Box>
                    <Text>
                    A lasting legacy is nothing without passing the most important lessons onto the youth. In 1973, Ballard began teaching children in the classroom about Native American music. The sessions would include call-and-response singing, exposure to traditional instruments, new rhythm exercises and some tribal history lessons. Ballard’s commitment to passing on Native American cultural values through accessible music education would continue for the rest of his career, and his collection of unique Native American educational material remains unmatched. It is the immediate goal in the current revival of his work to make accessible once again this lesson kit in an updated format for wider distribution and use. Below are listed the songs he recorded and interpreted for the classroom.
                    </Text>
                    </Box>
                    <Box w='100vw' style={{ margin: '3vh' }}>
                    <Text>
                    Some of the songs he recorded and interpreted for the classroom are listed below:
                    </Text>
                    <Box
                        marginLeft='3%'
                        marginTop='2%'
                    >
                    <List>
                        <ListItem>Legend Song and Lullaby Song [Paiute]</ListItem>
                        <ListItem>Ice Cream Song [Eskimo-Inuit]</ListItem>
                        <ListItem>Love Song [Lakota-Dakota]</ListItem>
                        <ListItem>Corn Grinding Song [Navajo-Diné]</ListItem>
                        <ListItem>War Mother’s Song [Osage]</ListItem>
                        <ListItem>Stomp Dance Song [Shawnee]</ListItem>
                        <ListItem>Rabbit Dance Song [Iroquois]</ListItem>
                        <ListItem>Bird Dance Songs 1 and 2 [Mojave]</ListItem>
                        <ListItem>Hand Game Songs [Ponca, Comanche/Otoe]</ListItem>
                        <ListItem>Walk Dance Song [Choctaw]</ListItem>
                    </List>
                    </Box>
                </Box>
                </VStack>
                </HStack>
                
                <a id="chamber_music"></a>
                <HStack 
                    w={{
                        base: '75vw',
                        md: '60vw',
                        lg:'70vw'
                        }} 
                    h={{
                        base: '80vh',
                        md: '120vh',
                        lg:'100vh'
                        }} spacing='70px'>
                <VStack 
                    align='center'
                >
                <Box w='100vw' style={{ margin: '5px' }}>
                    <Box h='7vh'>
                    <Heading as='h3' size='md'>Chamber Music Overview</Heading>
                    </Box>
                    <List>
                        <ListItem>String Trio [1959]</ListItem>
                        <ListItem>Perc Ego [1962]</ListItem>
                        <ListItem>Rhapsody [1963]</ListItem>
                        <ListItem>Cacega Ayuwipi [1969]</ListItem>
                        <ListItem>Katcina Dances [1969]</ListItem>
                        <ListItem>Ritmo Indio for Wind Quintet [1969]</ListItem>
                        <ListItem>Desert Triology [1970]</ListItem>
                        <ListItem>Midwinter Fires [1970]</ListItem>
                        <ListItem>Pan Indian Dance Rhythms [1970]</ListItem>
                        <ListItem>Rio Grande Sonata [1976]</ListItem>
                        <ListItem>Bellum atramentum [1988]</ListItem>
                        <ListItem>Capientur a nullo [1988]</ListItem>
                        <ListItem>The Lonely Sentinel [1993]</ListItem>
                        <ListItem>The Fire Moon for String Quartet [1997]</ListItem>
                        <ListItem>Music for the Earth and the Sky [1986]</ListItem>
                    </List>
                </Box>
                </VStack>
                </HStack>
                
                <a id="notes"></a>
                <HStack 
                    w={{
                        base: '75vw',
                        md: '60vw',
                        lg:'70vw'
                        }} 
                    h={{
                        base: '105vh',
                        md: '120vh',
                        lg:'100vh'
                        }} spacing='70px'>
                <VStack 
                    align='center'
                >
                <Box w='100vw' style={{ margin: '5px' }}>
                    <Box h='7vh'>
                    <Heading as='h3' size='md'>Note on music:</Heading>
                    </Box>
                    <Text>
                    Here we have just listed the top pieces and given some brief history on their origins and performances. However, this is not an exhaustive list or comprehensive analysis of these works. For a deeper dive it is recommended to look at the resources page and especially the academic resources on Ballard works. We are also welcoming academic inquires at this time through the contact page. 
                    </Text>
                </Box>
                </VStack>
                </HStack>
            </VStack>
        </Stack>
    )
}

export default Music
