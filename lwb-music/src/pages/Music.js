import React from 'react'
import Menu from '../components/Menu'
import Tile1 from '../components/Tile1';
import Tile2 from '../components/Tile2';
import Decoy from '../assets/santafe colors.png';

function Music() {
    return (
        <div>
        <Menu 
            oneTxt='Home'
            oneLink='/'
            twoTxt='About'
            twoLink='/about'
            threeTxt='Gallery'
            threeLink='/gallery'
            fourTxt='Resources'
            fourLink='/resources'
            fiveTxt='Contact'
            fiveLink='/contact'
        />
        <div>
            <Tile1 
                icon={Decoy}
                title='The Katcina Dances'
                link=''
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed nulla nisi. Quisque suscipit urna vel sem venenatis semper. Nam vehicula sollicitudin dignissim. Aenean non sem a mauris aliquam mattis. Aenean non hendrerit diam, quis lacinia mi. Nam sollicitudin euismod mi, sed molestie nisl congue vitae. Maecenas interdum enim orci, eget lobortis diam pellentesque nec. Morbi pretium felis et lectus volutpat porttitor.'
            />
            <Tile2 
                icon={Decoy}
                title='Incident at Wounded Knee'
                link=''
                text='Nulla sit amet lectus ac mi laoreet dictum eleifend et diam. In et pellentesque mi, vel mollis magna. Fusce maximus tempus lacus malesuada tristique. Quisque commodo nisi nec efficitur aliquet. Nam et lacinia mi. Phasellus mollis tellus eu vulputate gravida. Vestibulum sodales a velit eu tincidunt. Fusce convallis faucibus justo, a feugiat nisi porttitor in. Nulla ac sagittis dolor.'
            />
            <Tile1 
                icon={Decoy}
                title='The Fire Moon'
                link=''
                text='Sed congue posuere velit id condimentum. Proin pulvinar consequat urna nec viverra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque at orci non nibh aliquam cursus. In viverra lobortis nisl at sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin sed purus eget erat vulputate volutpat vel vel orci. Aliquam magna massa, convallis non vulputate vitae, sagittis et orci. Ut quis enim rutrum, rhoncus nisi non, posuere eros. Ut sit amet posuere metus.'
            />
            <Tile2 
                icon={Decoy}
                title='Four American Indian Piano Preludes'
                link=''
                text='Curabitur faucibus quam id nisl mollis, in dignissim mauris ornare. Praesent rutrum nisl sed nisi bibendum rutrum eu eget urna. Quisque eget molestie purus. Mauris et fringilla tellus, quis malesuada enim. Morbi ut luctus mauris. Aliquam tempus porta arcu, consequat scelerisque dolor ullamcorper consectetur. Fusce scelerisque augue nulla, ac efficitur justo lacinia in. Aliquam suscipit malesuada justo a consectetur. Pellentesque auctor lectus quam, ut consectetur dolor faucibus vitae.'
            />
        </div>
        </div>
    )
}

export default Music
