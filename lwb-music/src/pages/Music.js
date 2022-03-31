import React from 'react'
import  {
    Stack,
    HStack,
    VStack,
    Box,
    Heading,
    Text,
    StackDivider,
    List,
    ListItem,
} from '@chakra-ui/react';

function Music() {
    return (
        <Stack>
            <VStack 
                divider={<StackDivider borderColor='gray.200' />}
                spacing={1}
                align='center'
            >
                <HStack 
                    w={{
                        base: '75vw',
                        md: '60vw',
                        lg:'70vw'
                        }} 
                    h={{
                        base: '155vh',
                        md: '95vh',
                        lg:'80vh'
                        }} spacing='70px'>
                <VStack 
                    align='center'
                >
                <Box w='100vw' style={{ margin: '5px' }}>
                    <Box h= '5vh'>
                    <Heading as='h3' size='md'>Incident at Wounded Knee</Heading>
                    </Box>
                    <Text>This four-movement work for chamber orchestra is inspired by one of America’s darkest historical moments, the original massacre at Wounded Knee and the modern day siege that occurred while Ballard was composing the score. The original massacre took place on December 29, 1890 when over 200 Sioux men, women, and children were killed by U.S. troops after surrender and an unplanned skirmish with a rifle. On February 27, 1973, nearly a century later, 200 members of the American Indian Movement occupied the same site in a standoff with the U.S. government over oppressive living conditions and treaty disputes. The site and events remain one of the most visible reference points for dysfunctional U.S. government and Native American tribes relations throughout the country’s history.  
                    </Text>
                </Box>
                <Box w='100vw' style={{ margin: '10px' }}>
                    <Text>
                    The piece was commissioned by the Saint Paul Chamber Orchestra and composed in 1974. It consists of the following movements: “Procession,” “Prayer,” “Blood and War,” and “Ritual.” It was dedicated to their esteemed conductor at the time, Dennis Russell Davies. According to Ballard, the piece: “is not a literal depiction of any programmatic materials, but rather…tone-rhythmical series of musical episodes meant to suggest violent conflict…emotion-laden processions…spiritual state of being.” The American premiere took place on May 4th, 1974 in St. Paul Minnesota and the World/European premiere took place six months later in Warsaw, Poland on October 12th, 1974. The European tour continued to debut the piece in Prague, Budapest, Belgrade, Berlin, Munich, Amsterdam, and Paris. The premieres received mixed critical reviews, but the piece and tour garnered Ballard much more international attention. To date, it remains his most well-known piece and a figurehead of supra-tribal Native American classical composition, a Ballard trademark.</Text>
                </Box>
                </VStack>
                </HStack>

                <HStack 
                    w={{
                        base: '75vw',
                        md: '60vw',
                        lg:'70vw'
                        }} 
                    h={{
                        base: '140vh',
                        md: '95vh',
                        lg:'80vh'
                        }} spacing='70px'>
                <VStack 
                    align='center'
                >
                <Box w='100vw' style={{ margin: '5px' }}>
                    <Box h='5vh'>
                    <Heading as='h3' size='md'>Katcina Dances</Heading>
                    </Box>
                    <Text>The Katcina Dances: Suite for Violoncello and Pianoforte was commissioned by and dedicated to Herbert and Bernice Beenhouwer. The piece is named for mythical spirits originating from the Hopi tribe in New Mexico, where Ballard lived most of his life. They are respected spirits that the Hopi believe manifest themselves for six months here on Earth. Ballard initially started visiting the Hopi reservation while doing research for the ballet Koshare. He witnessed ceremonial Katcina dances first hand that would later inspire this work. The piece consists of 10 movements corresponding to different Katcina manifestations and their distinguishing characteristics. Those movements are: “Powamu (Coming of the Gods)”, “Ahul (Sun God)”, “Kwahu (Eagle)”, “Momo (Bees)”, “Monwu (Owls)”, “Koyimsi (Foolish Ones)”, “Calako (Huge Birds)”, “Tumas, Tunwup (Crow Mother and Sons)”, “Soyokos (Monsters)”, and “Niman (Departure of the Gods)”.
                    </Text>
                </Box>
                <Box w='100vw' style={{ margin: '10px' }}>
                    <Text>
                    The clear marker of Ballard’s European training is present in this work, as well as his cultural anthropological ambitions to capture the essence of other tribe’s symbols deeper meanings without encroaching on their religious rights. It was a delicate approach to take, but one that seems to have weathered the test of time, as Katcina Dances remains an alluring piece and has been preferentially performed in recent years. The original world premiere was on July 28th, 1970 in Santa Fe, New Mexico featuring cellist James Holoshovsky and Ballard’s then wife and accomplished pianist Ruth Doré. 
                    </Text>
                </Box>
                </VStack>
                </HStack>

                <HStack 
                    w={{
                        base: '75vw',
                        md: '60vw',
                        lg:'70vw'
                        }} 
                    h={{
                        base: '140vh',
                        md: '95vh',
                        lg:'80vh'
                        }} spacing='70px'>
                <VStack 
                    align='center'
                >
                <Box w='100vw' style={{ margin: '5px' }}>
                    <Box h='5vh'>
                    <Heading as='h3' size='md'>Four American Indian Preludes</Heading>
                    </Box>
                    <Text>The Four American Indian Preludes were composed during a special time for Ballard, when he was under the tutelage of Darius Milhaud at the Aspen Music Festival in 1963. When Darius first heard the performance of the preludes he supposedly remarked: “Louis, now you are a real composer!” This was a pivotal and proud moment for Ballard as he felt he had crossed an important personal and professional milestone. The Preludes remain his most outstanding work for piano and were often played during his lifetime and is still a sought after piece now. The piece was selected for the tribute concert to Ballard at the Smithsonian National Museum of the American Indian in November, 2007. It is also frequently played by his friend Italian pianist Emanuele Arciuli. 
                    </Text>
                    </Box>
                    <Box w='100vw' style={{ margin: '10px' }}>
                    <Text>
                    The Preludes marks Ballard’s chosen departure from his original training via Béla Rózsa at the University of Tulsa, who had studied from Schoenberg. His techniques were primarily twelve-tone music and atonal writing before. The atonal writing persisted, however the preludes represented his foray into intervals of a perfect fourth and diminished fifth. Each titled prelude depicts a scene relevant to Native American life in the past, and each scene’s title is in the Quapaw language. The four scenes are: “Ombáska” (Daylight), “Tabideh” (The Hunt), “Nekátohe” (Lovesong), and “T’ohkáne” (Warrior Dance). The entire set only lasts about 10 minutes total. According to Native pianist Tim Hays: “In the Preludes he looked at the piano in two different ways. He looked at it to be a percussion band and as a source for vocal lines at the same time. … The audience gets it; they understand it immediately.” </Text>
                </Box>
                </VStack>
                </HStack>

                <HStack 
                    w={{
                        base: '75vw',
                        md: '60vw',
                        lg:'70vw'
                        }} 
                    h={{
                        base: '135vh',
                        md: '95vh',
                        lg:'80vh'
                        }} spacing='70px'>
                <VStack 
                    align='center'
                >
                <Box w='100vw' style={{ margin: '5px' }}>
                    <Box h='5vh'>
                    <Heading as='h3' size='md'>Why the Duck Has a Short Tail</Heading>
                    </Box>
                    <Text>Why the Duck Has a Short Tail: An American Indian Folktale is a narrative piece composed for a juvenile audience and follows from the quintessential oral history tradition of most Native American tribes and many indigenous cultures around the world. It premiered in Tempe, Arizona on May 8th, 1969 during the Communication Through Music tour. As Ballard described it: “This work, which is based on an authentic legend of the Navajo people, includes narration, Indian chant, and instruments within the framework of a modern orchestral composition. It tells the story of the First Indian Man upon this continent and of the creation of the mountain ranges. The animal characters, which are featured in this story, are the Eagle, Coyote, Bear, and the Little Duck who sacrifices his beauty in order to help bring the magic stones to First Man.” 
                    </Text>
                </Box>
                <Box w='100vw' style={{ margin: '10px' }}>
                    <Text>
                    Since this was a piece inspired by the Navajo tradition, it was performed locally by the Phoenix Symphony at key Navajo community centers and also for a benefit concert to send eight Native IAIA students to France. The impetus for the initial season of concerts given was to utilize local Native choral talent from multiple tribes and to involve Native youth as much as possible. This coincided with Ballard’s appointment at the Bureau of Indian Affairs towards Bureau Music Education and the aims of that period to give back locally. In conjunction with Ballard’s Native American Indian Songs, this piece has lasting cultural value in preserving indigenous storytelling within the European format of Classical Music.
                    </Text>
                </Box>
                </VStack>
                </HStack>

                <HStack 
                    w={{
                        base: '75vw',
                        md: '60vw',
                        lg:'70vw'
                        }} 
                    h={{
                        base: '110vh',
                        md: '95vh',
                        lg:'80vh'
                        }} spacing='70px'>
                <VStack 
                    align='center'
                >
                <Box w='100vw' style={{ margin: '5px' }}>
                    <Box h='5vh'>
                    <Heading as='h3' size='md'>Ritmo Indio</Heading>
                    </Box>
                    <Text>Ritmo Indio: A study in American Indian Rhythms for woodwind quintet was commissioned by the Martha Baird Rockefeller Foundation and written for the Dorian Woodwind Quintet. The Bourne Music Company originally published the work and the Dorian Woodwind Quintet gave the world premiere on Saturday, March 8th, 1969 in the Kiva Theater on the IAIA campus in Santa Fe, New Mexico. The original concert was made possible by a grant from the Ford Foundation and presented by Mrs. Stewart Udall, the head of the Center for Arts of Indian America in Washington, D.C. at the time. The work includes the use of the Sioux Indian flageolet which was described as a “lovely native instrument, visually attractive with a beautiful tone.” It was originally performed by the Quintet of Karl Kraber (flute), William Lewis (clarinet), Jane Taylor (bassoon), Barry Benjamin (French horn), and Charles Kuskin (oboe and Sioux flute). Following the premiere, the piece became a part of the Quintet’s repertoire for a tour of 150 concerts for Native American children across the Southwest of the U.S. </Text>
                </Box>
                </VStack>
                </HStack>

                <HStack 
                    w={{
                        base: '75vw',
                        md: '60vw',
                        lg:'70vw'
                        }} 
                    h={{
                        base: '125vh',
                        md: '95vh',
                        lg:'80vh'
                        }} spacing='70px'>
                <VStack 
                    align='center'
                >
                <Box w='100vw' style={{ margin: '5px' }}>
                    <Box h='5vh'>
                    <Heading as='h3' size='md'>Fire Moon String Quartet</Heading>
                    </Box>
                    <Text>The Fire Moon “Pe’teh Minoba” string quartet is unique in that it directly relates to one of Ballard’s own tribes, the Quapaw tribe of Oklahoma. This is one of his later works and was published in 1998 through his own publishing company at the time, New Southwest Music Publications. The piece consists of 3 movements: “I. Tourima”, “II: Osotouy”, and “III. Kappa”. Three years prior to composition, there was an exhibition of historical Quapaw artifacts including those influenced by French colonial trade times. The French government displayed 250 year-old elk and buffalo robes at the Territorial Restoration Museum in Little Rock, Arkansas that were from three historical Quapaw villages no longer in existence. 
                    </Text>
                </Box>
                <Box w='100vw' style={{ margin: '10px' }}>
                    <Text>
                    The Quapaws and French had a strong military alliance in the 1800’s and this cultural influence persists in the tribe today. Ballard sought to reflect this musically by incorporating elements of French Impressionist music with his own fully developed musical style at that point. He also named the three movements after those original Quapaw villages. The piece could be interpreted as Ballard towards the end of his musical career “coming home.” He concludes this work with a traditional stomp dance, which he used to dance with the tribe on tribal grounds, making it one of his most personal and signature pieces.
                    </Text>
                </Box>
                </VStack>
                </HStack>

                <HStack 
                    w={{
                        base: '75vw',
                        md: '60vw',
                        lg:'70vw'
                        }} 
                    h={{
                        base: '150vh',
                        md: '95vh',
                        lg:'80vh'
                        }} spacing='70px'>
                <VStack 
                    align='center'
                >
                <Box w='100vw' style={{ margin: '5px' }}>
                    <Box h='5vh'>
                    <Heading as='h3' size='md'>Three Cities</Heading>
                    </Box>
                    <Text>	The Three Cities consists of three pieces: A City of Silver (1981), A City of Fire (1984), and A City of Light (1987). Ballard visited Buenos Aires, Argentina for the first time in 1980 for the world premiere of his choral cantata Thus Spoke Abraham as performed by the Choro Conservatorio Gilardo Gilardi. The trip had a deep impact on him and prompted him to begin composing the first city piece, A City of Silver. He dedicated this piece: “Para todos los desaparecidos del mundo,” or “For all the disappeared ones of the world.” His visit coincided with the aftermath of Argentina’s “Dirty War” from 1975-1978 and the military’s brutal mass executions of dissenters. This theme would inspire him through the following pieces.
                    </Text>
                    </Box>
                    <Box w='100vw' style={{ margin: '5px' }}>
                    <Text>
                    The world premiere for A City of Silver was on April 30th, 1981 at Northeastern Oklahoma University in Tahlequah. A few years later the piece was also premiered at Carnegie Hall featuring pianist Roberta Rust. The New York Tribune stated that Rust’s performance: “held the promise of raising Native American music into new and undiscovered dimensions.” The performance itself was historic in that it was the first performance in Carnegie Hall of a Native composer by a Native concert pianist. A City of Fire was also performed during this concert. A City of Fire paid tribute to Los Alamos, New Mexico as one of the first nuclear testing sites, a place Ballard saw in person and had a morbid fascination with. Finally, the City of Light was inspired by Ballard’s trip to Paris, France. In Paris he sought out the district of his ancestral namesake, the “Place Balárd,” where the original music publishing house of the sixteenth century was located. A City of Light premiered at Carnegie Hall on February 8th, 1987 and was performed by pianist Stephan Drury. Ballard would later perform the piece himself at the Beethoven-Haus in Bonn, Germany in 1989.</Text>
                </Box>
                </VStack>
                </HStack>

                <HStack 
                    w={{
                        base: '75vw',
                        md: '60vw',
                        lg:'70vw'
                        }} 
                    h={{
                        base: '105vh',
                        md: '95vh',
                        lg:'80vh'
                        }} spacing='70px'>
                <VStack 
                    align='center'
                >
                <Box w='100vw' style={{ margin: '5px' }}>
                    <Box h='5vh'>
                    <Heading as='h3' size='md'>Portrait of Will Rogers</Heading>
                    </Box>
                    <Text>
                    A unique and perhaps “tongue-and-cheek” piece is the Portrait of Will Rogers (Tribute to a Great American). It’s a piece that gave Ballard the opportunity to flex his literary side as well as his cultural sensibilities in reading the audience of the day. It was commissioned by The William Jewell College Choir and conducted by his friend, Wesley Forbis, while Will Rogers Jr. narrated the premiere. In the construction of the piece, Ballard states that: “I used a half-dozen quotes from Will Rogers in the libretto I wrote for the piece, something in the manner of Copland’s Lincoln Portrait.” Will Rogers was an American vaudeville performer, actor, and comedian known colloquially as “Oklahoma’s Favorite Son.” He was also of Cherokee descent, and Ballard’s father “Smokey” being involved in rodeo in the same area means their paths likely crossed. Rogers was a well-known Oklahoman celebrity and was the best man in Smokey’s parents’ wedding at the 1904 World Fair, so the families knew each other before.
                     </Text>
                </Box>
                </VStack>
                </HStack>

                <HStack 
                    w={{
                        base: '75vw',
                        md: '60vw',
                        lg:'70vw'
                        }} 
                    h={{
                        base: '170vh',
                        md: '95vh',
                        lg:'80vh'
                        }} spacing='70px'>
                <VStack 
                    align='center'
                >
                <Box w='100vw' style={{ margin: '5px' }}>
                    <Box h='5vh'>
                    <Heading as='h3' size='md'>The Four Moons</Heading>
                    </Box>
                    <Text>The Four Moons is a ballet composed during a special moment in history, when Oklahoma had produced four world-renowned Native ballerinas who were at the height of their careers. Those four ballerinas were Yvonne Chouteau (Cherokee), Rosella Hightower (Choctaw), Moscelyne Larkin (Shawnee), and Marjorie Tallchief (Osage). An honorable mention has to be made for Marjorie’s older sister Maria Tallchief, who did not participate in the ballet because she had retired; however, she was already known worldwide as one of the greatest prima ballerinas the U.S. had ever produced, a founding member of New York City Ballet, and a member of the Osage tribe of Oklahoma whom Dolores Lookout, Ballard’s first wife and mother of his three children, also belonged to. It was truly a family affair type of project. 
                    </Text>
                </Box>
                <Box w='100vw' style={{ margin: '10px' }}>
                    <Text>
                    At this point Ballard had composed two previous ballets based on Iroquois and Hopi tribal mythology. Those ballets are Ji-jo-gweh and Koshare. The Four Moons was different because it wasn’t based on mythology, but rather an actual historical event that marked a turning point for many tribes. That event was the Trail of Tears and the mass forced removal of many Native Americans from their ancestral homelands onto less hospitable land in what is now Oklahoma. Due to Ballard’s Cherokee and Quapaw heritage, the subject matter held special significance for all primary artists involved. The 22-minute long ballet is structured as a pas de quatre, with solos from each ballerina and an ensemble finale. The choreography was highly personalized to each ballerina’s story and style. There was a reception at the Governor’s Mansion in Oklahoma to celebrate the announcement, and the ballet itself premiered later that year at the Tulsa Municipal Theater on October 28th, 1967 as a part of Oklahoma’s 60th Anniversary of Statehood celebration. The ballet received a glowing review from dance critic Walter Terry in World of Dance: “...and to the art of ballet in this fascinating and wholly rewarding Oklahoma Indian Ballerina Festival, for in their care the four moons did, indeed, shine warmly and brightly.”</Text>
                </Box>
                </VStack>
                </HStack>

                <HStack 
                    w={{
                        base: '75vw',
                        md: '60vw',
                        lg:'70vw'
                        }} 
                    h={{
                        base: '120vh',
                        md: '95vh',
                        lg:'80vh'
                        }} spacing='70px'>
                <VStack 
                    align='center'
                >
                <Box w='100vw' style={{ margin: '5px' }}>
                    <Box h='5vh'>
                    <Heading as='h3' size='md'>Native American Indian Songs</Heading>
                    </Box>
                    <Text>A lasting legacy is nothing without a way to pass the most important lessons onto the youth. In 1973, Ballard began teaching children in the classroom about Native American music. The sessions would include call-and-response singing, exposure to traditional instruments, new rhythm exercises and some overall tribal history lessons. Ballard’s commitment to passing on Native cultural values through accessible music education would continue for the rest of his career and his collection of unique Native educational material remains unmatched. It is our current goal in the revival of his legacy now to make accessible once again these materials in an updated format for wide distribution and use. </Text>
                    </Box>
                    <Box w='100vw' style={{ margin: '10px' }}>
                    <Text>
                    Some of the songs he recorded and interpreted for the classroom are listed below:
                    </Text>
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
                </VStack>
                </HStack>

                <HStack 
                    w={{
                        base: '75vw',
                        md: '60vw',
                        lg:'70vw'
                        }} 
                    h={{
                        base: '80vh',
                        md: '95vh',
                        lg:'80vh'
                        }} spacing='70px'>
                <VStack 
                    align='center'
                >
                <Box w='100vw' style={{ margin: '5px' }}>
                    <Box h='5vh'>
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


            </VStack>
        </Stack>
    )
}

export default Music
