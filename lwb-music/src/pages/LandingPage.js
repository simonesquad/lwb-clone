// this is my rudimentary switchboard
import React from 'react'
import Home from './Home'
import HomeMobile from './HomeMobile'

import { useMediaQuery } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools';

const breakpoints = createBreakpoints({
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em',
  })


function LandingPage() {
 const [isMobile] = useMediaQuery('(max-width: sm)')

 return (
    <div>
        {isMobile ? <HomeMobile/> : <Home/>}
    </div>
 )
}

export default LandingPage