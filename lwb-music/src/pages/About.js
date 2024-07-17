import React from 'react'

import  {
    Stack,
    HStack,
    VStack,
    Box,
    Heading,
    Link,
    Text,
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
                    base: '125vh',
                    sm: '100vh',
                    md: '105vh',
                    lg: '110vh'
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
                    <Heading>Biographical Table of Contents</Heading>
                </Box>
                <Box>
                <Link href='#humble'>Humble Beginnings</Link>
                <br></br>
                <Link href='#oklahoma'>Oklahoma Roots</Link>
                <br></br>
                <Link href='#aspen'>Aspen Music Festival</Link>
                <br></br>
                <Link href='#santafe'>Santa Fe Begins</Link>
                <br></br>
                <Link href='#gospel'>Spreading the Gospel</Link>
                <br></br>
                <Link href='#acclaim'>Critical Acclaim</Link>
                <br></br>
                <Link href='#citizen'>Poised for Exposure</Link>
                <br></br>
                <Link href='#woundedknee'>Wounded Knee Battle Cry</Link>
                <br></br>
                <Link href='#unseen'>Visibility for the Unseen</Link>
                <br></br>
                <Link href='#cities'>The Three Cities</Link>
                <br></br>
                <Link href='#jewel'>European Crown Jewel</Link>
                <br></br>
                <Link href='#newera'>A New Era Begins</Link>
                <br></br>
                <Link href='#achievement'>Lifetime Achievements</Link>
                <br></br>
                <Link href='#torch'>Passing the Torch</Link>
                <br></br>
                <Link href='#revival'>An Ongoing Revival</Link>
                </Box>
            </VStack>

            <a id="humble"></a>
                <HStack 
                    w={{
                        base: '75vw',
                        md: '60vw',
                        lg:'70vw'
                        }} 
                    h={{
                        base: '185vh',
                        md: '150vh',
                        lg:'100vh'
                        }}>
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
                <Text>Louis Wayne Ballard, or “Honga-no-zhe'' meaning “Grand Eagle” in Quapaw, was born on July 8th, 1931 in Devil’s Promenade, Oklahoma. His mother was Leona Mae Quapaw of the Quapaw tribe of Oklahoma and his father was Charles “Smokey” Guthrie Ballard of the Cherokee tribe of Oklahoma. His Quapaw lineage traces back to a prominent traditional medicine family and his Cherokee lineage to the chief’s line. His mother spoke her native tongue and Ballard himself was one of the last native speakers of the Quapaw language. At age six, Ballard was sent to the Seneca Indian Training School, one of the now infamous government operated boarding schools for Native American children living on reservations across the United States. The official mission of these schools was to assimilate these children into normal American society and provide them with useful trades. These schools were created after tribes had been forced to resettle all over the country under varying conditions during the 1800’s.</Text>
                </Box>
                <Box w='100vw' style={{ margin: '3vh' }}>
                <Text>
                Ballard resisted the dominant narrative from the moment he arrived at boarding school. While the school did provide him with a foundational education, he felt that the institution was really more like a: “brainwashing center for young Indians.” He was punished for speaking his native tongue and practicing traditional dances in the school yard. These practices would later come to be recognized as institutionalized cultural genocide tactics and did in fact alienate children from their parents and elders. After boarding school, Ballard spent several years living on the Quapaw reservation with his grandmother and brother while attending church and local tribal dances. His grandmother encouraged his interest in music and paid for his first piano and voice lessons through the church. He started to flourish towards the end of high school and piano became a constant in his life.
                </Text>
                </Box>
                </VStack>
                </HStack>
                
                
                <a id="oklahoma"></a>
                <HStack 
                    w={{
                        base: '75vw',
                        md: '60vw',
                        lg:'70vw'
                        }} 
                    h={{
                        base: '185vh',
                        md: '150vh',
                        lg:'100vh'
                        }}>
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
                <Text>After completing high school, Ballard continued his studies first at the University of Oklahoma, then Northeastern Oklahoma A & M, and finally deciding on the University of Tulsa. He graduated with a B.M. in Music Theory and a B.M.E. in music education in 1954. He studied piano under Stefan Bardos and received his first formal education in composition from the Hungarian Béla Rózsa. During undergraduate, Ballard was exposed to the Hungarian folk music of Béla Bartók, which became a large influence for him and led him down the path of wanting to “combine two worlds” in his music. For one of his early educational assignments, he arranged a traditional Ponca Indian melody in the style of Chopin and Rachmaninoff.</Text>
                </Box>
                <Box w='100vw' style={{ margin: '3vh' }}>
                <Text>
                Ballard not only left school with a degree, he also met his first wife, Delores Marie Lookout, on a blind date in 1953. Delores was a member of the Osage tribe and descended from one of their chief lines. When they met she was a nursing student at St. John's Hospital. Ballard had been singing with the Tulsa University Radio Choir and serving as a music director for several local high schools and churches during school. After graduation he taught piano privately and then went back to school. In 1962, he became the first Native American to receive a graduate degree in composition from the University of Tulsa.
                </Text>
                </Box>
                </VStack>
                </HStack>
                

                <a id="aspen"></a>
                <HStack 
                    w={{
                        base: '75vw',
                        md: '60vw',
                        lg:'70vw'
                        }} 
                    h={{
                        base: '185vh',
                        md: '150vh',
                        lg:'100vh'
                        }}>
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
                <Text>During his studies and the years in between, Ballard started a family. He and Delores had three children together born in Tulsa, Oklahoma between 1954-57. Ballard was staying active in local tribal affairs and had begun staging pageants for students in collaboration with the newly launched Institute of American Indian Arts (IAIA). However, it was clear that giving private lessons and the local scene were no longer enough. After a few restless seasons and even considering leaving music, he started looking outside of Oklahoma for what to pursue next.</Text>
                </Box>
                <Box w='100vw' style={{ margin: '3vh' }}>
                <Text>
                After earning his Masters in 1962, Ballard shifted his focus to “real-world” composition aims. He was spending his summers in Aspen, Colorado where the Aspen Music Festival was taking place every year. In this environment he was able to gain access to elite education from various established composers of the era such as: Darius Milhaud (in 1963), Mario Castelnuovo-Tedesco (from 1966-67), Carlos Surinach (in 1967), and Felix Labunski (in 1968-69). Ballard also was appointed as the music director for the IAIA located on the College of Santa Fe campus. He served as the director from 1962-69. It was during this period that he started forming his ideas around what traditional Native American music should represent beyond simplistic chanting stereotypes. He gave several lectures, including “The Cultural Milieu and American Indian Music” during the festival that explore unique rhythmic structures and strive to correct previous limitations of musical interpretations from Hollywood and Europe.
                </Text>
                </Box>
                </VStack>
                </HStack>
                
                
                <a id="santafe"></a>
                <HStack 
                    w={{
                        base: '75vw',
                        md: '60vw',
                        lg:'70vw'
                        }} 
                    h={{
                        base: '195vh',
                        md: '160vh',
                        lg:'105vh'
                        }}>
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
                <Text>Aspen was the catalyst for a new musical horizon for Ballard. He began to explore more varied topics and take more risks in his own compositional style. Some of his early work was well received by his peers and his identity as an American composer began to form. With his time split between Aspen and Santa Fe, he grew more detached from his previous life in Oklahoma. In 1963, while his notoriety as a lecturer, pianist, and composer was gaining traction, he met Ruth Doré. Ruth was a pianist of Jewish-American descent from New York, who would later become his second wife. Ruth was playing during the festival in ‘63 and gained the attention of not only Ballard, but several prominent Spanish artists who later invited her to perform in Santiago de Compostela, Spain. Ballard composed a new work entitled Espiritu di Santiago based on that very same city intended for a Spanish folk singer and guitarist. Their romance and Ballard’s new musical life had begun.</Text>
                </Box>
                <Box w='100vw' style={{ margin: '3vh' }}>
                <Text>
                The following year, Ballard separated from his first wife Delores and began to throw himself into his work. He moved to Santa Fe and started forming local professional relationships such as with the Sante Fe Symphony. He and Ruth began collaborating not only on performances, but she also assumed a role as his manager and publicist, in addition to wife. Their debut as a professional couple would lead Ballard down a significantly different path. He was shortly thereafter sent to Europe for an American Music tour that largely relied on his Native American identity and storytelling abilities to captivate audiences. Upon return to Santa Fe, he debuted the first of eventually six orchestral pieces under the title “Fantasy Aborigne” to good reviews. This same year he composed Scenes from Indian Life for orchestra  and The Gods Will Hear, a work for soloists, mixed chorus, piano or orchestra, and percussion.
                </Text>
                </Box>
                </VStack>
                </HStack>
                

                <a id="gospel"></a>
                <HStack 
                    w={{
                        base: '75vw',
                        md: '60vw',
                        lg:'70vw'
                        }} 
                    h={{
                        base: '200vh',
                        md: '170vh',
                        lg:'110vh'
                        }}>
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
                <Text>The years when Ballard first moved to Santa Fe and was music director of the IAIA were very busy. His work with students never really stopped and the simultaneous mix of composition and education would be his modus operandi for the rest of his career. This decade culminated with the composition of Ritmo Indio in 1969 that won the first Marion Nevins McDowell Award for American Chamber Music. Ballard was becoming established as an American composer and as a representative for Native culture to Western audiences. He was well-known in the developing Santa Fe art community that was attracting top talents both nationally and internationally. New possibilities were on the horizon, and Native representation in art was growing more sophisticated across every category.</Text>
                </Box>
                <Box w='100vw' style={{ margin: '3vh' }}>
                <Text>
                With this momentum, Ballard was able to secure funding to expand his educational aims. One of these initiatives was a large work-study grant from the Department of Social Development via the Ford Foundation to begin collecting traditional Native music for the classroom. Combined with Ballard’s experience working with students and giving lectures across disciplines, the grant was truly a formalization of his years of ground work. The title of the initiative became “Put American Indian Music in the Classroom” and it sparked a fair amount of press in Santa Fe. This would eventually lead to the composition of Why the Duck Has a Short Tail in 1971 that would become one of his most popular and accessible pieces to date. The piece involves spoken word storytelling and traditional music that is both catchy and entertaining for younger audiences.
                </Text>
                </Box>
                </VStack>
                </HStack>
                

                <a id="acclaim"></a>
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
                        }}>
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
                <Text>In 1970, Ballard showcased The Gods Will Hear alongside two other American “west-coast” composers and adapted The Four Moons ballet into a concert suite for the Tulsa Philharmonic Orchestra. He also premiered Cacéga Ayuwípi and the Katcina Dances. Cacéga Ayuwípi is a piece composed for percussion quartet and emulates traditional rhythm structures of other Native American tribes including the Eskimo, Tlingit, Mojave, Ute, Pueblo, Apache, Sioux, Comanche, Creek, Seminole, Seneca tribes and more. The piece incorporates rattles and whistles from the traditions of various tribes, such as Ute and Apache bull-roarers, whips, and an eagle-bone whistle. The premiere of this work and the Katcina Dances took place on July 28th, 1970 at the Kiva Theater of IAIA. Katcina Dances was written for piano and cello and portrays the mythical kachina spirits from Pueblo tribal lore. The piece struck a chord both locally and nationally as it effectively captured fascinating cultural lore and adapted the storytelling to a western musical format seamlessly. The premiere was the only show available to the public at the American Forum for International Studies that year, and it was sold out.</Text>
                </Box>
                <Box w='100vw' style={{ margin: '3vh' }}>
                <Text>
                Following good reviews and local notoriety, Ballard began considering new mediums to promote Native American culture and music. After being approached by Bailey Film Associates, who were creating similar cultural topic films at the time, he agreed to work on “Discovering American Indian Music.” The 24-minute long short was filmed in the National Parks of New Mexico and on location in Arizona. It features performances of songs from various regional tribes and dances from local IAIA students and tribal dancers. In the end of the film, Ballard quotes:
                <Text as='i'> “I feel that the music of the American Indian is unique, valuable, and can serve as a springboard for the composer in creating new works, which reflect the voice and soul of indigenous America.” </Text>
                The year concluded with two more works: Awakening of Love and Mojave Bird Dance Song. The first piece is an organ arrangement section adapted from his first ballet Koshare, and the second piece is a similar style arrangement for chorus and percussion. The following year Ballard resumed teaching and his role of being spokesperson, educator, composer, and cultural advocate would continue in force.
                </Text>
                </Box>
                </VStack>
                </HStack>
                

                <a id="citizen"></a>
                <HStack 
                    w={{
                        base: '75vw',
                        md: '60vw',
                        lg:'70vw'
                        }} 
                    h={{
                        base: '285vh',
                        md: '245vh',
                        lg:'175vh'
                        }}>
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
                        base: '32vh',
                        md: '25vh',
                        lg: '15vh'
                    }}      
                >
                <Text as='i'> “These art forms offer the basis for the development of a truly indigenous American expression which will be a contribution to the stream of world arts forms… Such expression need not be limited to the visual arts, but can infuse new life and vitality into our literature, architecture, and even our way of life.” </Text>
                </Box>
                <Box w='100vw' style={{ marginTop: '1vh' }}>
                <Text>Ballard premiered his work in the 1970’s to a noticeably different audience and cultural movement. He was poised during the rise of more socially conscious events in the Southwest and wanted to bring pride to Native American identity over a painful past. The art community in Santa Fe was booming, and the local opera had been frequented by the likes of Igor Stravinsky and Aaron Copeland. Ballard once brought Stravinsky to a Deer Dance in New Mexico, where he heard tribal rhythms for the first time. Ballard made many local appearances and gave an impressive number of innovative lectures during this period, establishing a new standard for Native American artists not only in classical music, but in fine art. Most of his success lay in his ability to effectively communicate traditional Native American pan-tribal cultural epithets to western audiences so they felt they could interact with the subject matter without trepidation. Certainly one of the best representations of this successful cultural crossover was the lasting local and national praise for Why the Duck Has A Short Tail. </Text>
                </Box>
                <Box w='100vw' style={{ marginTop: '3vh' }}>
                <Text>
                From the early 70’s onwards, Ballard’s work was recorded to meet international standards and more frequently played around the country. In 1972, some of his music was broadcast across the Smithsonian’s 80 FM member stations, as well as snippets played on Swedish national television. He created his first educational products for the classroom including: American Indians: Yesterday and Today and Oklahoma Indian Chants for the Classroom, both of which were precursors to American Indian Music for the Classroom. The following year, he accepted the Indian Achievement Award and was the first Quapaw tribal member, and fifth Cherokee tribal member, to win. The president of the council stated:</Text>
                <Box w='100vw' style={{ marginTop: '3vh' }}>
                <Text as='i'> “Mr. Ballard fully epitomizes the spirit and philosophy of the Indian Achievement Award…It is given in recognition of achievement and accomplishment, either personal in nature or humanitarian in endeavor. He is a combination of both – in his personal life he has struggled to rise in his chosen profession, and in his work he is helping to usher in a new era of enlightenment concerning Indians and their culture.” </Text>
                <Box w='100vw' style={{ marginTop: '3vh' }}>
                <Text>
                He also received an honorary doctorate from the College of Santa Fe that year, and according to the Santa Fe New Mexican:</Text>
                
                <Text as='i'>“His honorary degree praised his commitment to enrich the lives of young people, whatever their origin.”</Text>
                </Box>
                </Box>
                </Box>
                </Box>
                </VStack>
                </HStack>
                

                <a id="woundedknee"></a>
                <HStack 
                    w={{
                        base: '75vw',
                        md: '60vw',
                        lg:'70vw'
                        }} 
                    h={{
                        base: '245vh',
                        md: '190vh',
                        lg:'145vh'
                        }}>
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
                <Text>While Ballard enjoyed the positive reception of both his music and educational materials nationally, he would also achieve an international recognition milestone this decade impacting Native visibility. In 1974, he composed the Incident at Wounded Knee and Siouxiana, both based on Sioux tribal events and lore. The Incident at Wounded Knee draws inspiration from and pays homage to a dark chapter in U.S. government and tribal relations during the late 1800’s, when members of the Miniconjou and Hunkpapa tribes in collaboration with the Sioux tribe, including women and children, were massacred by members of the U.S. military. In a twist of fate, Ballard had already begun composing the piece and was onsite at the Sioux reservation when the modern day Wounded Knee standoff began. Once again, the painful reality of life on a reservation and broken treaty promises was on full display. It reawakened the national consciousness to the plight of communities of color within the U.S. and inspired Ballard to capture these interconnected historical moments in a musical score.</Text>
                </Box>
                <Box w='100vw' style={{ marginTop: '3vh' }}>
                <Text>
                The piece premiered both in the U.S. and Europe and was performed by the St. Paul Chamber Orchestra and conducted by Denis Russell Davies. The reception on both sides had a deep impact on Ballard at the time, as he quoted:</Text>
                <Box w='100vw' style={{ marginTop: '3vh' }}>
                <Text as='i'> “A series of musical episodes depict the emotional procession toward the town, the state of the souls in torment, and the violent conflict. The work culminates in musical and dance forms affirming the essential spirituality of Native American people. Incident is not a political work, but it drew a strong reaction from oppressed peoples when it was played in Poland and Czechoslovakia, as well as the cities of Western Europe. The fact that I was taking a bow onstage with a white American orchestra and conductor did more than words can to show that we live in a free country.” </Text>
                </Box>
                <Box w='100vw' style={{ marginTop: '3vh' }}>
                <Text>
                The premiere of Incident at Wounded Knee brought Ballard into realms that few American classical composers, and no Native American classical composers had reached before. He suddenly gained access to an international network of musicians and support networks. When he returned home from the European tour, he had more invitations to compose music and he continued securing grants more easily.</Text>
                </Box>
                </Box>
                </Box>
                </VStack>
                </HStack>
                

                <a id="unseen"></a>
                <HStack 
                    w={{
                        base: '75vw',
                        md: '60vw',
                        lg:'70vw'
                        }} 
                    h={{
                        base: '245vh',
                        md: '195vh',
                        lg:'140vh'
                        }}>
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
                        base: '27vh',
                        md: '25vh',
                        lg: '15vh'
                    }}      
                >
                <Text as='i'> “‘I first wrote Indian music as a protest to correct stereotypes and cliches,’ he said. Until Dr. Ballard, no ‘Indian’ music was written by Indians, but by Caucasians who transcribed Indian themes for piano and orchestra for pseudo ‘Indian-sounding’ music.” </Text>
                </Box>
                <Box w='100vw' style={{ marginTop: '1vh' }}>
                <Text>The pinnacle of this period was the performance by the Indian Honor Band during halftime of the Washington Redskins, Dallas Cowboys National Football League game in Washington, D.C. on Sunday, November 27th, 1977. After years of devotion to his compositional craft, and becoming a spokesperson for Native American culture and music education through the Bureau of Indian Affairs role, he was able to finally showcase Native music and performers on a national scale. It was truly a unique and unprecedented event. The event was conceived as part of a larger initiative to generate opportunities for talented Native American youth in the arts. Auditions were held in late summer 1977, and 150 Native high school students were selected out of 700 total auditionees. The final group represented 80 tribes from 30 different states. The marching band was co-directed by Fred Shields and Jack Romine during all rehearsals and performances.</Text>
                </Box>
                <Box w='100vw' style={{ marginTop: '3vh' }}>
                <Text>
                The final performance consisted of the Indian Honor Band and 50 tribal dancers performing four compositions by Ballard, which were:<Text as='i'>“Hymn to the Sun,” “Stand for the Tall Chiefs (Kihekastenozhe),” “Eagle March (Hunka-No-zhe),”</Text>and an unnamed percussion welcome march with accompanying choreography. During <Text as='i'>Hymn to the Sun,</Text> the dancers formed traditional geometric patterns on the football field representing the Sun, Smoke, Moon, and Arrows. During the performance of Stand for the Tall Chiefs, large banners were carried onto the field representing four great historical chiefs: Powhatan, Sitting Bull, Geronimo, and Seattle. A dancer from the Laguna Pueble tribe led a ceremonial Eagle Dance to conclude the showcase. It is estimated that 100,000 people were in attendance and the performance was recorded and televised in 1978. Louis and Ruth Ballard were in attendance, as well as the chairman of the board of the Kennedy Center at the time Mr. Roger L. Stevens, his wife, and the Secretary of the Interior. </Text>
                </Box>
                </Box>
                </VStack>
                </HStack>
                

                <a id="cities"></a>
                <HStack 
                    w={{
                        base: '75vw',
                        md: '60vw',
                        lg:'70vw'
                        }} 
                    h={{
                        base: '245vh',
                        md: '195vh',
                        lg:'140vh'
                        }}>
                <VStack 
                    align='center'
                >
                <Box w='100vw' style={{ margin: '5px' }}>
                <Box h='9vh'>
                <Heading as='h3' size='xl'>The Three Cities</Heading>
                </Box>
                <Box h='7vh'>
                <Heading as='h5' size='md'>"What the Golden Hour Did"</Heading>
                </Box>
                <Box w='100vw' style={{ marginTop: '1vh' }}>
                <Text>When the 1980’s began, Ballard had already left a large body of work behind for future generations through his personal compositions and his educational legacy at the BIA. He had toured Europe and the U.S. and made lifelong connections both locally and internationally. He gained traction with local and national media entities and published compositions, textbooks, guides, and worked on films. The 1970’s were certainly a golden era in Santa Fe and in the U.S. for many cultural “firsts” nationwide, as American Black, Latino, and Asian communities were simultaneously making significant strides into the arts and other industries. As with all golden eras however, progress can wax and wane over the years. Ballard’s relationships with several local music groups in New Mexico had deteriorated and he felt he was being intentionally left out of programming due to racial bias. It was objectively true that as one of the only Native American classical composers ever, his material did not fit the traditional Western classical repertoire and often required further effort to appreciate and perform correctly. Nonetheless, he had enjoyed some higher levels of exposure specifically due to his Native American heritage and approach.</Text>
                </Box>
                <Box w='100vw' style={{ marginTop: '3vh' }}>
                <Text>
                As exciting and novel as his work in the 1970’s was, the 1980’s would beget a more introspective and oftentimes abstract artist who was in many ways more sensitive and less interested in exterior consumption. This was demonstrated after he and Ruth took a trip to Argentina together to visit members of Ruth’s family and for an honorary performance of Ballard’s music. This trip and exposure to post-war Argentina inspired Ballard to begin composing several solo works for piano that described mythical cities of pre-colonial South America. The first of these works was A City of Silver: Concert Fantasy for Piano, which was premiered by pianist Val Goff in Oklahoma. He also continued the Fantasy Aborigine orchestral series, and the fourth installment entitled “Fantasy Aborigine No. 4: Xacteoyan, Companion of Talking God” premiered in New York in 1982 and was later nominated for a Pulitzer Prize. It was performed by the American Composer’s Orchestra at Alice Tully Hall and conducted by Ballard’s then long-time friend Denis Russell Davies.</Text>
                </Box>
                </Box>
                </VStack>
                </HStack>
                

                <a id="jewel"></a>
                <HStack 
                    w={{
                        base: '75vw',
                        md: '60vw',
                        lg:'70vw'
                        }} 
                    h={{
                        base: '185vh',
                        md: '150vh',
                        lg:'100vh'
                        }}>
                <VStack 
                    align='center'
                >
                <Box w='100vw' style={{ margin: '5px' }}>
                <Box h='9vh'>
                <Heading as='h3' size='xl'>European Crown Jewel</Heading>
                </Box>
                <Box h='7vh'>
                <Heading as='h5' size='md'>"Named After Beethoven"</Heading>
                </Box>
                <Box w='100vw' style={{ marginTop: '1vh' }}>
                <Text>In 1989, after decades of challenging stereotypes and experimenting with groundbreaking compositional techniques, Ballard became the first American composer and Native American composer to have an entire concert of his music dedicated and performed at the Beethovenhalle in Bonn, Germany. The program included: <Text as='i'>Cacega Ayuwipi, Music for Earth and the Sky, Ritmo Indio, Katcina Dances, Incident at Wounded Knee, and A City of Light.</Text> It was also the premiere of <Text as='i'>Dialogue Differentia,</Text> a new piece for symphony that incorporated two Cherokee monochords and three vocal parts. It was originally commissioned by Denis Russell Davies, who was at that time the Music Director of the Beethovenhalle Orchestra. Ballard traveled to Germany for the event with fifteen containers full of Native American instruments. The concert was historic for this venue and such an all-encompassing event by a Native American classical composer in a venue of that caliber has not been repeated since. </Text>
                </Box>
                <Box w='100vw' style={{ marginTop: '3vh' }}>
                <Text>
                Upon return to the United States, Ballard was once again engaged with inter-tribal projects. One of these later pieces is Maid of the Mist and the Thunderbeings. By the early 1990’s, there were significantly more Native artists trained in various disciplines and able to collaborate across the country. For this project Ballard worked with an Apache choreographer named Raoul Trujillo and a Oneida writer named Bruce King to craft the story and the accompanying dance parts. The piece is composed for a 24-piece orchestra and again incorporates Native instruments, as was Ballard’s signature by this time. It was performed by the Repertory Dance Theater of Utah and debuted at the Buffalo Performing Arts Center in 1991.
                </Text>
                </Box>
                </Box>
                </VStack>
                </HStack>
                
                
                <a id="newera"></a>
                <HStack 
                    w={{
                        base: '75vw',
                        md: '60vw',
                        lg:'70vw'
                        }} 
                    h={{
                        base: '195vh',
                        md: '165vh',
                        lg:'110vh'
                        }}>
                <VStack 
                    align='center'
                >
                <Box w='100vw' style={{ margin: '5px' }}>
                <Box h='9vh'>
                <Heading as='h3' size='xl'>A New Era Begins</Heading>
                </Box>
                <Box h='7vh'>
                <Heading as='h5' size='md'>"New tools and new horizons"</Heading>
                </Box>
                <Box w='100vw' style={{ marginTop: '1vh' }}>
                <Text>As Ballard approached elderly status, he began to see the fruits of his labor take hold in a more receptive national and international discourse. He composed an opera in 1994 entitled <Text as='i'>Moontide: The Man Who Hated Money,</Text> that premiered in Norden, Germany. The next year, the final installment of <Text as='i'>Scenes From Indian Life</Text> entitled <Text as='i'>Feast Day</Text> was performed alongside works by Aaron Copeland and Leonard Berstein. It was clear that his music was finally going to rest among the top American classical music composers of the century. Around this time, the first music composition software was being developed alongside other software transforming the way music had traditionally been written and shared. Likewise, recording equipment had advanced significantly, and Ballard was able to adapt quickly to the new composing options.</Text>
                </Box>
                <Box 
                    style={{ marginTop: '3.5vh' }}
                    h={{
                        base: '23vh',
                        md: '17vh',
                        lg: '12vh'
                    }}     
                >
                <Text as='i'> “Ballard has embraced changes of his own, the latest being composing via computer, which allows him to hear the sounds right after writing them. It’s the best thing to happen to the composer since the invention of ink.” </Text>
                </Box>
                <Box w='100vw' style={{ marginTop: '0.3vh' }}>
                <Text>
                The technology allowed Ballard to compose new scores more easily and revisit old ones for revision with a new perspective. Besides technology, new Native American composers had begun to enter the field and follow in Ballard’s trailblazing footsteps. A Mohican composer, Brent Michael Davids mentioned Ballard in an Indian Country Today article for his ideas towards a Native American Music Association and also the more sophisticated role that Natives could potentially occupy in Hollywood.
                </Text>
                </Box>
                </Box>
                </VStack>
                </HStack>
                

                <a id="achievement"></a>
                <HStack 
                    w={{
                        base: '75vw',
                        md: '60vw',
                        lg:'70vw'
                        }} 
                    h={{
                        base: '215vh',
                        md: '175vh',
                        lg:'110vh'
                        }}>
                <VStack 
                    align='center'
                >
                <Box w='100vw' style={{ margin: '5px' }}>
                <Box h='9vh'>
                <Heading as='h3' size='xl'>Lifetime Achievements</Heading>
                </Box>
                <Box h='7vh'>
                <Heading as='h5' size='md'>"Resounding History"</Heading>
                </Box>
                <Box w='100vw' style={{ marginTop: '1vh' }}>
                <Text>
                On February 15th, 1997, Ballard received a Lifetime Musical Achievement Award at the fifth annual First Americans in the Arts (FAITA) awards ceremony in Beverly Hills, California. The award celebrates outstanding achievements by Native Americans in the performing arts and was a relatively new platform at that time. Ballard was already a veteran of Native visibility in the arts for decades and had certainly reached many milestones first. There were 1,100 guests present and the awards were broadcast to over 25 reservations across 12 states. Ballard performed three of his piano preludes at the event including: <Text as='i'>Daylight, The Hunt, and The Warrior Dance.</Text> In his acceptance speech, Ballard mentioned how his visibility could impact younger generations: 
                </Text>
                </Box>
                <Box 
                    style={{ marginTop: '3.5vh' }}
                    h={{
                        base: '23vh',
                        md: '17vh',
                        lg: '12vh'
                    }}      
                >
                <Text as='i'> “I’m very gratified and proud to have this opportunity to make my contributions known in the musical field… A lot of my work is based upon my heritage…It’s important for young people…I want to encourage young composers and artists.” </Text>
                </Box>
                <Box w='100vw' style={{ marginTop: '0.3vh' }}>
                <Text>
                A few years later, in October of 1999, there was a Sunday afternoon performance of <Text as='i'>Incident at Wounded Knee</Text> at Carnegie Hall in New York. The piece was performed by the American Composer’s Orchestra and conducted again by Dennis Russell Davies. A lecture preceded the performance and the theme was “protest,” including works from two other composers whose work was making social statements. Those works were <Text as='i'>Heavenly Feast</Text> by Robert Beaser and <Text as='i'>56 Blows</Text> by Alvin Singleton. Louis W. Ballard was accompanied to the performance by his eldest son, Louis A. Ballard, who had graduated from the University of Illinois with his Masters in Fine Arts and was teaching ceramics at the time.
                </Text>
                </Box>
                </Box>
                </VStack>
                </HStack>
                

                <a id="torch"></a>
                <HStack 
                    w={{
                        base: '75vw',
                        md: '60vw',
                        lg:'70vw'
                        }} 
                    h={{
                        base: '235vh',
                        md: '190vh',
                        lg:'155vh'
                        }}>
                <VStack 
                    align='center'
                >
                <Box w='100vw' style={{ margin: '5px' }}>
                <Box h='9vh'>
                <Heading as='h3' size='xl'>Passing the Torch</Heading>
                </Box>
                <Box h='7vh'>
                <Heading as='h5' size='md'>"The Ancestors Live On"</Heading>
                </Box>
                <Box w='100vw' style={{ marginTop: '1vh' }}>
                <Text>
                Ballard would live to see the turn of the century, with huge leaps in technology, society, and music itself. He had lived in Santa Fe for decades and traveled around Europe routinely, creating lasting impressions for national and international audiences alike. In 2004, he was inducted into the Oklahoma Music Hall of Fame and was the only Native American composer ever to be inducted. That same year, he became a founding member of the First Nations Composer Initiative. He would serve as an advisor for the organization which included younger Native American composers who viewed Ballard as a mentor and inspiration. Some of those composers include: Brent Michael Davids, Jerod Impichchaachaaha’ Tate, and Raven Chacon. Ballard’s lasting gift of this year would be his release of <Text as='i'>Native American Indian Songs.</Text> The original release included Ballard’s curated list of songs from various Native American tribes transcribed into sheet music with CD’s, photos, and cultural notes to help teachers use the materials in the classroom. As Ballard quotes:
                </Text>
                </Box>
                <Box 
                    style={{ marginTop: '3.5vh' }}
                    h={{
                        base: '25vh',
                        md: '20vh',
                        lg: '12vh'
                    }}      
                >
                <Text as='i'> “This guidebook means a lot to me, and to Americans everywhere, including Native Americans…This is America’s cultural heritage. I want the tradition of our songs and our music to live on, and the best way to do that is to teach all teachers how to teach them. Simple as that.” </Text>
                </Box>
                <Box w='100vw' style={{ marginTop: '3vh' }}>
                <Text>
                In 2006, the newly created Smithsonian Museum of the American Indian welcomed Ballard three separate times to hear performances of his music. It was truly a full circle moment as Ballard had worked in D.C. on the all Native half-time show which was the pinnacle of his career with the BIA decades prior, and he had a long relationship with government initiatives for Native American youth. It seemed only fitting that he was alive to see Native American culture take a rightful and symbolic place on the National Mall. Unfortunately, unbeknownst to the musical community at the time, this was also to be Ballard’s last year of life. He had been diagnosed with and was quietly battling cancer since 2004. In February 2007, he succumbed to his illness and died in his home in Santa Fe. He was survived by Ruth Ballard and his three children and five grandchildren. He was mourned by his artistic community in Santa Fe and by the Quapaw tribe and Oklahoma community who knew him as a pioneer and elder. At the time of his death, Ballard left two works unfinished, a piano concerto and an opera. The piano concerto was finished by his friend, the Mohican composer Brent Michael Davids. It was entitled <Text as='i'>“A Spirited Farewell”</Text> and was performed by the Indianapolis Symphony in 2007.
                </Text>
                </Box>
                </Box>
                </VStack>
                </HStack>
                

                <a id="revival"></a>
                <HStack 
                    w={{
                        base: '75vw',
                        md: '60vw',
                        lg:'70vw'
                        }} 
                    h={{
                        base: '175vh',
                        md: '155vh',
                        lg:'110vh'
                        }}>
                <VStack 
                    align='center'
                >
                <Box w='100vw' style={{ margin: '5px' }}>
                <Box h='9vh'>
                <Heading as='h3' size='xl'>An Ongoing Revival</Heading>
                </Box>
                <Box w='100vw' style={{ marginTop: '1vh' }}>
                <Text>
                The story didn’t quite end there. While Ballard’s music would be retained and studied in the years following his death by the publishers and institutions he left it with, his legacy would not be touched by his family for an astounding fifteen years. His eldest son would sadly pass only ten years after his father, leaving the musical legacy adrift. However, close friends to the composer would keep his memory alive through concerts and discussions until his granddaughter, Simone A. Ballard would revive the story and seek to make the music and educational materials once again readily accessible to a new audience. Welcome, you are in the middle of the revival currently, and if there are further questions about musical pieces or any of the history presented here, please reach out to us via the contact form. Thank you again for your continued interest in this unique story.
                </Text>
                </Box>

                <Box 
                    style={{ marginTop: '5vh' }}
                    h='7vh'>
                <Heading as='h4' size='lg'>Sincerely,</Heading>
                </Box>

                <Box 
                    style={{ marginTop: '5vh', marginLeft: '8vw' }}
                    h='7vh'>
                <Heading as='h5' size='lg'>Simone</Heading>
                <a rel="noreferrer" href="https://www.simoneballard.com" target="_blank">
                    www.simoneballard.com
                </a>
                </Box>
                </Box>
                </VStack>
                </HStack>
            </VStack>
        </Stack>
    )
}

export default About
