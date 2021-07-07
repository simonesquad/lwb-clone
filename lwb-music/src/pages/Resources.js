import React from 'react'
import Menu from '../components/Menu'
import LWBlinks from '../components/LWBlinks';
import NAlinks from '../components/NAlinks';

function Resources() {
    return (
        <div>
          <Menu 
            oneTxt='Home'
            oneLink='/'
            twoTxt='About'
            twoLink='/about'
            threeTxt='Gallery'
            threeLink='/gallery'
            fourTxt='Music'
            fourLink='/music'
            fiveTxt='Contact'
            fiveLink='/contact'
        />
        <LWBlinks />
        <NAlinks />
        </div>
    )
}

export default Resources
