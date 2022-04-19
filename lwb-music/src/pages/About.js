import React from 'react'

import  {
    Stack,
    HStack,
    VStack,
    Box,
    Heading,
    Text,
    StackDivider,
} from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const breakpoints = createBreakpoints({
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em',
  })

function About() {
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
                        md: '125vh',
                        lg:'90vh'
                        }} spacing='70px'>
                <VStack 
                    align='center'
                >
                <Box w='100vw' style={{ margin: '5px' }}>
                <Box h='9vh'>
                <Heading as='h3' size='xl'>Humble Beginnings</Heading>
                </Box>
                <Box h='7vh'>
                <Heading as='h5' size='md'>"Kill the Indian and Save the Man"</Heading>
                </Box>
                <Text>Louis Wayne Ballard, or “Honga-no-zhe” meaning “Grand Eagle” in Quapaw, was born on July 8th, 1931 in Devil’s Promenade, Oklahoma, close to Miami, Oklahoma today. His mother was Leona Mae Quapaw of the Quapaw tribe of Oklahoma and his father was Charles “Smokey” Guthrie Ballard of the Cherokee tribe of Oklahoma. His Quapaw lineage traces back to a prominent traditional medicine family and his Cherokee lineage to the chief’s line. His mother spoke her native tongue and Ballard himself was one of the last born native speakers of the Quapaw language. At only the age of six, Ballard was sent to the Seneca Indian Training School, one of the infamous government operated boarding schools for native children across the U.S. at the time. The official mission of these schools was to assimilate Native children into American society and give them useful trades after tribes had been forced to resettle all over the country under varying conditions.</Text>
                </Box>
                <Box w='100vw' style={{ margin: '3vh' }}>
                <Text>
                Ballard from an early age resisted the dominant narrative. While the boarding school did provide him some foundational education, he felt that it was really a: “brainwashing center for young Indians.” He was punished for speaking his native tongue and practicing traditional dances. The institutionalized cultural genocide tactics would come to be recognized by the greater society as detrimental much later on in his lifetime. After boarding school, Ballard spent several years living on the reservation with his grandmother and brother while attending church and local dances. His grandmother encouraged his interest in music early on and paid for his first piano and voice lessons through the church. He really started to flourish towards the end of high school, when piano became a constant in his life. 
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
                        md: '125vh',
                        lg:'90vh'
                        }} spacing='70px'>
                <VStack 
                    align='center'
                >
                <Box w='100vw' style={{ margin: '5px' }}>
                <Box h= '9vh'>
                <Heading as='h3' size='xl'>Oklahoma Roots</Heading>
                </Box>
                <Box h='7vh'>
                <Heading as='h5' size='md'>"Walking in Two Worlds"</Heading>
                </Box>
                <Text>After doing well towards the end of high school, Ballard decided to continue his studies first at the University of Oklahoma, then switching to Northeastern Oklahoma A & M, and finally deciding on the University of Tulsa. He graduated with a B.M. in Music Theory and a B.M.E. in music education in 1954. This is where he studied piano under Stefan Bardos and received his first formal education in composition from the Hungarian Béla Rózsa. In undergraduate, Ballard was exposed to the Hungarian folk music of Béla Bartók. This would prove to be a huge influence for him and start leading him towards the path of wanting to “combine two worlds” in his music. In one of his early educational assignments, he arranged a traditional Ponca Indian melody in the style of Chopin and Rachmaninoff.</Text>
                </Box>
                <Box w='100vw' style={{ margin: '3vh' }}>
                <Text>
                Ballard didn’t only leave school with a degree. He also met his first wife, Dolores Lookout, on a blind date in 1953. Dolores was a member of the Osage tribe of Oklahoma and descended from one of their ruling lines. By the time they met she was already working in the area as a nurse. Ballard already started working in music during his undergraduate studies by singing with the Tulsa University Radio Choir and serving as a music director for several local high schools and churches. After teaching piano privately post-graduation, he continued his education and in 1962 he became the first Native American to receive a graduate degree in composition. This degree was also from the University of Tulsa where he had continued studying under Béla Rózsa.
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
                        md: '125vh',
                        lg:'90vh'
                        }} spacing='70px'>
                <VStack 
                    align='center'
                >
                <Box w='100vw' style={{ margin: '5px' }}>
                <Box h= '9vh'>
                <Heading as='h3' size='xl'>Aspen Music Festival</Heading>
                </Box>
                <Box h='7vh'>
                <Heading as='h5' size='md'>"Reaching New Heights"</Heading>
                </Box>
                <Text>During his studies and the years in between, Louis and Delores started a family. They had three children born in Tulsa, Oklahoma between 1954-57. At this time, Louis was staying active in local tribal affairs and had begun staging pageants for students in collaboration with the newly launched Institute of American Indian Arts (IAIA). However, it was clear that giving private lessons and the local scene were no longer enough. After a few restless seasons and even considering leaving music, he started looking outside of Oklahoma for what to do next.</Text>
                </Box>
                <Box w='100vw' style={{ margin: '3vh' }}>
                <Text>
                After earning his MM in 1962, Ballard shifted his focus to “real-world” composition aims. He had already started spending his summers in Aspen, Colorado, the location of the Aspen Music Festival, where he was able to gain access to elite education from various established composers of the era such as: Darius Milhaud (in 1963), Mario Castelnuovo-Tedesco (from 1966-67), Carlos Surinach (in 1967), and Felix Labunski (in 1968-69). Ballard was also able to secure a position as music director for the IAIA that was located on the College of Santa Fe campus. He served in this position from 1962-69. It was during this period that he really began to form his ideas around what traditional Native American music should represent beyond simplistic chanting stereotypes. He gave several lectures, including “The Cultural Milieu and American Indian Music” during the festival which go into more detail about unique rhythmic structures and aims to correct previous classical music interpretations from Hollywood and Europe.
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
                        base: '180vh',
                        md: '145vh',
                        lg:'100vh'
                        }} spacing='70px'>
                <VStack 
                    align='center'
                >
                <Box w='100vw' style={{ margin: '5px' }}>
                <Box h= '9vh'>
                <Heading as='h3' size='xl'>Santa Fe Begins</Heading>
                </Box>
                <Box h='7vh'>
                <Heading as='h5' size='md'>"The Dawn of an Era"</Heading>
                </Box>
                <Text>It is clear that Aspen was the catalyst for a whole new musical horizon for Ballard. He began to embrace new topic explorations and take more risks regarding his own compositional style. Some of his work was well received by his peers and his identity as an American composer started to take shape. With his time split between Aspen and Santa Fe, he was growing more distant from his previous life in Oklahoma. It was in 1963, while his notoriety as a lecturer, pianist, and composer was starting to gain traction, that he met Ruth Doré, a pianist of Jewish descent from New York, who would later become his second wife. Ruth was performing during the festival in ‘63 and gained the attention of not only Ballard, but several prominent Spanish artists who later invited her to perform in Santiago de Compostela, Spain. Ballard composed a new work entitled Espiritu di Santiago based on that very same city intended for a Spanish folk singer and guitarist. The new era had begun.</Text>
                </Box>
                <Box w='100vw' style={{ margin: '3vh' }}>
                <Text>
                In 1964, Ballard separated from his first wife Delores and began to throw himself into his work. He officially became a resident of Santa Fe and formed critical local alliances, such as with the Sante Fe Symphony. Ruth and he began collaborating not just in performances, but she also assumed a role as his default manager and publicist, in addition to wife. Their debut as a professional couple would lead Ballard down a permanently altered path. He was almost immediately sent to Europe for an American Music tour that largely relied on his Native identity and storytelling approach to captivate audiences. Then back in Santa Fe, he debuted the first orchestral work Fantasy Aborigine No. 1 (Sipapu) to good reviews. He would later go on to compose six orchestral works total under the Fantasy Aborigine name. This same year he composed Scenes from Indian Life, an orchestral work,  and The Gods Will Hear, a work for soloists, mixed chorus, piano or orchestra, and percussion. Thus began the period where Ballard would take on larger and more ambitious projects such as orchestral works and ballets.
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
                        md: '125vh',
                        lg:'90vh'
                        }} spacing='70px'>
                <VStack 
                    align='center'
                >
                <Box w='100vw' style={{ margin: '5px' }}>
                <Box h= '9vh'>
                <Heading as='h3' size='xl'>Spreading the Gospel</Heading>
                </Box>
                <Box h='7vh'>
                <Heading as='h5' size='md'>"Let the Children Sing"</Heading>
                </Box>
                <Text>The decade when Ballard first moved to Santa Fe and was music director at IAIA (between 1962-1969) were very active. His work with students never really stopped and the simultaneous mix of composition and education would shape his trajectory in the following decade. It culminated with the composition of Ritmo Indio in 1969 that won the very first Marion Nevins McDowell Award for American Chamber Music. By this point Ballard was established as an American composer and as a representative for Native culture to a larger Western audience. He was well-known in the growing Santa Fe community that had already become an art scene and national trend meter. New possibilities were on the horizon and the Native arts were growing into a freshly established phase amongst all categories.</Text>
                </Box>
                <Box w='100vw' style={{ margin: '3vh' }}>
                <Text>
                With this new momentum, Ballard was able to secure funding through a variety of means to expand his educational aims. One of those was a large work-study grant from the Department of Social Development via the Ford Foundation to begin compiling traditional Native music specifically for educational purposes in the classroom. Combined with Ballard’s previous experience working with students and giving lectures across disciplines, the grant was a formalization of his years of ground level work. The title of the initiative became “Put American Indian Music in the Classroom” and there was a good deal of press about it in Santa Fe. This would gain momentum and eventually lead to the composition of Why the Duck Has a Short Tail in 1971 that would become one of his most popular and accessible pieces to date.
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
                        base: '190vh',
                        md: '165vh',
                        lg:'110vh'
                        }} spacing='70px'>
                <VStack 
                    align='center'
                >
                <Box w='100vw' style={{ margin: '5px' }}>
                <Box h= '9vh'>
                <Heading as='h3' size='xl'>Critical Acclaim</Heading>
                </Box>
                <Box h='7vh'>
                <Heading as='h5' size='md'>"Local support and national outreach"</Heading>
                </Box>
                <Text>In the year 1970, Ballard showcased The Gods Will Hear alongside two other “west coast” composers and adapted The Four Moons ballet into a concert suite for the Tulsa Philharmonic Orchestra. He also debuted two new pieces: Cacéga Ayuwípi and Katcina Dances. Cacéga Ayuwípi is a piece composed for percussion quartet and emulates traditional rhythm structures of other native tribes including the Eskimo, Tlingit, Mojave, Ute, Pueblo, Apache, Sioux, Comanche, Creek, Seminole, Seneca tribes and more. The piece incorporates rattles and whistles from the traditions of various tribes as well, such as Ute and Apache bull-roarers, whips, and an eagle-bone whistle. The premiere of this work and Katcina Dances took place on July 28th, 1970 at the Kiva Theater of IAIA. Katcina Dances was written for piano and cello and portrays the mythical kachina spirits from Pueblo tribal lore. The piece struck a chord both locally and nationally as it effectively captures a fascinating cultural story and adapts it to a western musical format seamlessly. The premiere was the only show available to the public at the American Forum for International Studies that year, and it was sold out.</Text>
                </Box>
                <Box w='100vw' style={{ margin: '3vh' }}>
                <Text>
                Following good reviews and growing local notoriety, Ballard branched into a new educational format to promote native music. After being approached by Bailey Film Associates, who were creating similar cultural topic piece films at the time, he agreed to work on “Discovering American Indian Music.” The 24-minute long piece was filmed in the National Parks of New Mexico and some locations in Arizona. It features performances of songs from various regional tribes and dances from local IAIA students and tribal dancers. In the end of the film, Ballard quotes:
                <Text as='i'> “I feel that music of the American Indian is unique, valuable, and can serve as a springboard for the composer in creating new works, which reflect the voice and the soul of indigenous America.” </Text>
                The breakout year concluded with two more pieces: Awakening of Love and Mojave Bird Dance Song. The first piece is an organ arrangement section from his first ballet Koshare, and the second piece is a similar style arrangement for chorus and percussion. The following year Ballard resumed teaching and the combined era of being spokesperson, educator, composer, and cultural advocate had been formalized and would last for the rest of his life. 
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
                        base: '235vh',
                        md: '195vh',
                        lg:'140vh'
                        }} spacing='70px'>
                <VStack 
                    align='center'
                >
                <Box w='100vw' style={{ margin: '5px' }}>
                <Box h='9vh'>
                <Heading as='h3' size='xl'>Native World Citizen</Heading>
                </Box>
                <Box h='7vh'>
                <Heading as='h5' size='md'>"Poised for Exposure"</Heading>
                </Box>
                <Box 
                    h={{
                        base: '23vh',
                        md: '15vh',
                        lg: '11vh'
                    }}      
                >
                <Text as='i'> “These art forms offer the basis for the development of a truly indigenous American expression which will be a contribution to the stream of world arts forms… Such expression need not be limited to the visual arts, but can infuse new life and vitality into our literature, architecture, and even our way of life.” </Text>
                </Box>
                <Box w='100vw' style={{ marginTop: '1vh' }}>
                <Text>Ballard debuted his work in the 1970’s to a strikingly different audience and rapidly growing momentum. He was poised during the rise of more socially conscious events in the Southwest bringing pride to indigenous heritage and trying to bring new life to Native American identity over a painful past. The enlightened art community in Santa Fe was attracting national and international talent, and the local opera had been frequented by the likes of Igor Stravinsky and Aaron Copeland. Ballard once brought Stravinsky to a Deer Dance in New Mexico, where he heard tribal rhythms for the first time live. Ballard made many local appearances and gave an impressive number of innovative lectures during this period, thereby cementing the foundation for Native American artists in not only classical music, but in all dominant art forms for decades to come. Most of his success lay in effectively communicating traditional Native American pan-tribal cultural epithets to western audiences so they felt they could take part without trepidation. Certainly one of his greatest representations of this successful cultural crossover was the local and national reception of Why the Duck Has A Short Tail. </Text>
                </Box>
                <Box w='100vw' style={{ marginTop: '3vh' }}>
                <Text>
                From the early 70’s onwards Ballard’s work was starting to be recorded to international standards and more frequently played around the country. In 1972 some of his works were broadcast across the Smithsonian’s 80 FM member stations, as well as snippets played on Swedish national television. He created his first educational products for the classroom: American Indians: Yesterday and Today and Oklahoma Indian Chants for the Classroom, both of which were precursors to American Indian Music for the Classroom. In 1973 he accepted the Indian Achievement Award and was the first Quapaw tribal member, and fifth Cherokee tribal member, to win that award. Upon receipt, the president of the council stated:</Text>
                <Text as='i'> “Mr. Ballard fully epitomizes the spirit and philosophy of the Indian Achievement Award…It is given in recognition of achievement and accomplishment, either personal in nature or humanitarian in endeavor. He is a combination of both – in his personal life he has struggled to rise in his chosen profession, and in his work he is helping to usher in a new era of enlightenment concerning Indians and their culture.” </Text><Text>
                He also received an honorary doctorate from the College of Santa Fe during this same year, and it was quoted in the Santa Fe New Mexican:</Text><Text as='i'>“His honorary degree praised his commitment to enrich the lives of young people, whatever their origin.” </Text>
                </Box>
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
                        base: '205vh',
                        md: '175vh',
                        lg:'120vh'
                        }} spacing='70px'>
                <VStack 
                    align='center'
                >
                <Box w='100vw' style={{ margin: '5px' }}>
                <Box h='9vh'>
                <Heading as='h3' size='xl'>Wounded Knee Battle Cry</Heading>
                </Box>
                <Box h='7vh'>
                <Heading as='h5' size='md'>"A Defining Native Moment"</Heading>
                </Box>
                <Box w='100vw' style={{ marginTop: '1vh' }}>
                <Text>While Ballard would enjoy local and national acclaim throughout this decade, including the positive reception of his educational materials and outreach efforts, he would also reach an international recognition milestone that would impact the Native narrative in the arts. In 1974 he composed the Incident at Wounded Knee and Siouxiana, both based on real Sioux tribe events and lore. The Incident at Wounded Knee draws inspiration from and pays homage to a dark chapter in U.S. and tribal relations during the late 1800’s when members of the Miniconjou and Hunkpapa tribes in collaboration with the Sioux tribe, including women and children, were massacred by members of the U.S. military. In a twist of fate, Ballard had already begun composing the piece and was onsite at the Sioux reservation when the modern day Wounded Knee standoff began. Once again, the painful reality of life on a reservation and broken treaty promises was on full display for the world to see. It reawakened the national consciousness to the plight of communities of color within the U.S. and inspired Ballard to capture these interconnected moments in a musical score.</Text>
                </Box>
                <Box w='100vw' style={{ marginTop: '3vh' }}>
                <Text>
                The piece was debuted both in the U.S. and Europe by the St. Paul Chamber Orchestra and conducted by Denis Russell Davies. The reception on both sides had a deep impact on Ballard at the time, as he quoted:</Text>
                <Text as='i'> “A series of musical episodes depict the emotional procession toward the town, the state of the souls in torment, and the violent conflict. The work culminates in musical and dance forms affirming the essential spirituality of Native American people. Incident is not a political work, but it drew a strong reaction from oppressed peoples when it was played in Poland and Czechoslovakia, as well as the cities of Western Europe. The fact that I was taking a bow onstage with a white American orchestra and conductor did more than words can to show that we live in a free country.” </Text><Text>
                The premiere of Incident at Wounded Knee brought Ballard into realms that few American classical composers, and no Native American classical composers, had ever reached before. Suddenly he was able to access an international network of musicians and reach new avenues of exposure for his music. When he returned home from the European tour he had more invitations to debut music and he was able to continue securing grants more easily for both composition and educational activities.</Text>
                </Box>
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
                        base: '235vh',
                        md: '195vh',
                        lg:'120vh'
                        }} spacing='70px'>
                <VStack 
                    align='center'
                >
                <Box w='100vw' style={{ margin: '5px' }}>
                <Box h='9vh'>
                <Heading as='h3' size='xl'>Visibility for the Unseen</Heading>
                </Box>
                <Box h='7vh'>
                <Heading as='h5' size='md'>"The Natives are Here"</Heading>
                </Box>
                <Box 
                    h={{
                        base: '23vh',
                        md: '15vh',
                        lg: '10vh'
                    }}      
                >
                <Text as='i'> “‘I first wrote Indian music as a protest to correct stereotypes and cliches,’ he said. Until Dr. Ballard, no ‘Indian’ music was written by Indians, but by Caucasians who transcribed Indian themes for piano and orchestra for pseudo ‘Indian-sounding’ music.” </Text>
                </Box>
                <Box w='100vw' style={{ marginTop: '1vh' }}>
                <Text> The pinnacle of this expansion epoch for Ballard was when the Indian Honor Band performed during halftime of the Washington Redskins, Dallas Cowboys National Football League game in Washington, D.C. on Sunday, November 27th, 1977. After many years of devotion to his compositional craft, and becoming a spokesperson for Native American culture and musical education through the Bureau of Indian Affairs role, he was able to showcase Native music and performers on a national scale. It was truly a unique and unprecedented event. The event was conceived as part of a larger initiative to create opportunities for talented Native youth in the arts. Auditions were held in the late summer of 1977 and 150 Native high school students were selected out of 700 total auditionees. The final group represented 80 tribes from 30 different states. The marching band was co-directed by Fred Shields and Jack Romine during all rehearsals and performances. </Text>
                </Box>
                <Box w='100vw' style={{ marginTop: '3vh' }}>
                <Text>
                The final performance included the Indian Honor Band and 50 tribal dancers performing four compositions by Ballard, which were: <Text as='i'>“Hymn to the Sun,” “Stand for the Tall Chiefs (Kihekastenozhe),” “Eagle March (Hunka-No-zhe),”</Text> and an unnamed percussion welcome march with accompanying choreography. During Hymn to the Sun, the dancers formed traditional geometric patterns on the football field representing the Sun, Smoke, Moon, and Arrows. During Stand for the Tall Chiefs large banners were carried onto the field representing four great historical chiefs: Powhatan, Sitting Bull, Geronimo, and Seattle. A dancer from the Laguna Pueble tribe led a ceremonial Eagle Dance to conclude the showcase. It is estimated that 100,000 people were in attendance and the performance was recorded and televised in 1978. Louis and Ruth Ballard were in attendance, as well as the chairman of the board of the Kennedy Center at the time Mr. Roger L. Stevens, his wife, and the Secretary of the Interior. </Text>
                </Box>
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
                        base: '235vh',
                        md: '195vh',
                        lg:'110vh'
                        }} spacing='70px'>
                <VStack 
                    align='center'
                >
                <Box w='100vw' style={{ margin: '5px' }}>
                <Box h='9vh'>
                <Heading as='h3' size='xl'>The Three Cities & Reflections</Heading>
                </Box>
                <Box h='7vh'>
                <Heading as='h5' size='md'>"What the Golden Hour Did"</Heading>
                </Box>
                <Box w='100vw' style={{ marginTop: '1vh' }}>
                <Text> As the 1980’s began, Ballard had left a large body of work and a triumphant decade of educational materials behind for future generations through the BIA. He toured Europe and the U.S. and made lifelong connections both locally and internationally. He gained traction with local and national media entities and published compositions, textbooks, guides, and worked on films. This was certainly a golden era in Santa Fe and in the U.S. for many cultural “firsts” nationwide, as American Black, Latino, and Asian communities were simultaneously making significant strides into the arts and other industries. As with all golden eras however, momentum can wax and wane over the years. Ballard’s relationships with several music groups in New Mexico had deteriorated and he felt he was being intentionally left out of programming due to racial bias. It was objectively true that as one of the only Native American composers ever, his material did not fit the other more classical composers and required some further effort to appreciate and present correctly. Nonetheless, he had enjoyed some higher levels of exposure due to his Native heritage and approach. </Text>
                </Box>
                <Box w='100vw' style={{ marginTop: '3vh' }}>
                <Text>
                As exciting and novel as his work in the 70’s was, the 80’s would beget a more introspective and oftentimes abstract artist who was in some ways more sensitive to the inputs around him and less concerned with exterior consumption. This was demonstrated after he and Ruth took a trip to Argentina together to visit members of Ruth’s family and for an honorary performance of Ballard’s music. This trip and the exposure to post-war Argentina inspired Ballard to begin composing solo works for piano that described mythical cities of pre-colonial South America. The first of these works was <Text as='i'>A City of Silver: Concert Fantasy for Piano,</Text> which was premiered by pianist Val Goff in Oklahoma. He was also continuing the <Text as='i'>Fantasy Aborigine</Text> orchestral series, and the fourth installment entitled <Text as='i'>Fantasy Aborigine No. 4: Xacteoyan, Companion of Talking God”</Text> premiered in New York in 1982 and was later nominated for a Pulitzer Prize. It was performed by the American Composer’s Orchestra at Alice Tully Hall and conducted by Ballard’s then long-time friend Denis Russell Davies. </Text>
                </Box>
                </Box>
                </VStack>
                </HStack>
                
            </VStack>
        </Stack>
    )
}

export default About
