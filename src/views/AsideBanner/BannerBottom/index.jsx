import bgpeople from 'assets/img/bg-people.png';
import bgpeopletwo from 'assets/img/bg-people.@2x.png';
import { DivContainer } from 'views/Tags/BlockLevel';
import { Button } from 'views/Tags/Form/Action';
import { Image } from 'views/Tags/Picture';
import { H2 } from 'views/Tags/Text';
import { AsideBanner } from 'views/AsideBanner';
import '../../index.scss';

const BackgroundPicture = () => {
    return (
        <Image
            className='banner__background'
            srcset={`${bgpeople} 750w, ${bgpeopletwo} 1440w`}
            sizes='(min-width: 750px) 1440px, 100vw'
            src={bgpeople}
            alt='anyone to add'
            role="none"
        />
    );
}

const BannerLeft = () => {
    return (
        <DivContainer className='banner__left'>
            <H2 className='banner__heading'>Is there anyone else you would want us to add?</H2>
        </DivContainer>
    );
}

const BannerRight = () => {
    return (
        <DivContainer className='banner__right'>
            <Button className='banner__cta'>
                Submit a name
            </Button>
        </DivContainer>
    );
}

export const BannerBottom = () => {
    return (
        <AsideBanner
            clazzName='banner banner-bottom'
            alabel='Submit a name'
            backgroundImage={ <BackgroundPicture /> }
            bannerLeft={ <BannerLeft /> }
            bannerRight={ <BannerRight /> }
        />
    );
}
