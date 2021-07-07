import React from 'react';
import Menu from '../components/Menu';
import GPanel from '../components/GPanel';
import GPanel3 from '../components/GPanel3';
//pics panel one
import g1 from '../assets/gallery/g_1.png';
import g2 from '../assets/gallery/g_2.png';
import g7 from '../assets/gallery/g_7.png';
import g4 from '../assets/gallery/g_4.png';
//pics panel two
import g5 from '../assets/gallery/g_5.png';
import g11 from '../assets/gallery/g_11.png';
import g12 from '../assets/gallery/g_12.png';

function Gallery() {
    return (
        <div>
        <Menu 
        oneTxt='Home'
        oneLink='/'
        twoTxt='About'
        twoLink='/about'
        threeTxt='Music'
        threeLink='/music'
        fourTxt='Resources'
        fourLink='/resources'
        fiveTxt='Contact'
        fiveLink='/contact'
        />
        <div>
            <GPanel 
                g1={g7}
                g2={g1}
                g3={g2}
                g4={g4}
                caption='Amet cursus sit amet dictum. Sed vulputate odio ut enim blandit. Tempor nec feugiat nisl pretium. Donec adipiscing tristique risus nec feugiat in fermentum posuere. Augue mauris augue neque gravida in. Lacinia at quis risus sed vulputate. At quis risus sed vulputate odio ut enim blandit volutpat. Velit laoreet id donec ultrices tincidunt arcu non sodales. Amet purus gravida quis blandit. Eget mi proin sed libero enim. Commodo odio aenean sed adipiscing diam donec adipiscing.'
            />
            <GPanel3 
                g1={g5}
                g2={g11}
                g3={g12}
                caption='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris sit amet massa vitae tortor condimentum. Tristique senectus et netus et. Volutpat lacus laoreet non curabitur gravida arcu ac tortor. Pharetra massa massa ultricies mi quis hendrerit dolor. Et sollicitudin ac orci phasellus. Ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt. Aliquam etiam erat velit scelerisque in dictum. Fermentum posuere urna nec tincidunt. In eu mi bibendum neque egestas congue quisque egestas. Vulputate eu scelerisque felis imperdiet proin fermentum leo. Sit amet venenatis urna cursus eget nunc scelerisque viverra. Lorem donec massa sapien faucibus et molestie ac. Tempus imperdiet nulla malesuada pellentesque elit eget gravida.'
            />
        </div>
        </div>
    )
}

export default Gallery
