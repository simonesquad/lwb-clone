import React from 'react'
import Menu from '../components/Menu';
import Atom from '../components/Atom';
import LWB from '../assets/lwb_1.jpg'

function Home() {
    return (

        <div>
        <Menu 
            oneTxt='About'
            oneLink='/about'
            twoTxt='Music'
            twoLink='/music'
            threeTxt='Gallery'
            threeLink='/gallery'
            fourTxt='Resources'
            fourLink='/resources'
            fiveTxt='Contact'
            fiveLink='/contact'
        />
        <div>
        <Atom 
            title='In memory of Louis W. Ballard...'
            subtitle='1931-2007'
            text='one of the premier classical music composers of the 20th century and one of the most notable Native American classical music composers of all time. This site is set up by his family to honor his unique legacy and continue celebrating his pioneering spirit. We are in the process of reviving and curating key musical scores and educational pieces for wider distribution. Please check this website for updates beginning in 2021 and feel free to contact us for other inquiries.'
            flic={LWB}
        />
        </div>
    </div>
    )
}

export default Home
