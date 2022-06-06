// this is my rudimentary switchboard
import React from 'react'
import Home from './Home'
import HomeMobile from './HomeMobile'

import { useMediaQuery } from '@chakra-ui/react'


function LandingPage() {
 const [isMobile] = useMediaQuery('(max-width: 828px)')

 return (
    <div>
        {isMobile ? <HomeMobile/> : <Home/>}
    </div>
 )
}

export default LandingPage