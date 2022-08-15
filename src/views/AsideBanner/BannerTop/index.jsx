import { makeStyles } from "@material-ui/core/styles";
import { DivContainer } from 'views/Tags/BlockLevel';
import { Button } from 'views/Tags/Form/Action';
import { Span, Paragraph } from 'views/Tags/Text';
import { AsideBanner } from 'views/AsideBanner';
import '../../index.scss';

const useStyles = makeStyles((theme) => ({
    hideOnMobile: {
        // max-width media query between 0 and md
        [theme.breakpoints.down('sm')]: {
          display: 'none !important'
        }
    },
}));

const BannerLeft = () => {
    return (
        <DivContainer className='banner__left'>
            <Span className='banner__hairline'>Speak out. Be heard.</Span>
            <Span className='banner__title'>Be counted</Span>
         </DivContainer>
    );
}

const BannerRight = () => {
    return (
        <DivContainer className='banner__right'>
            <Paragraph className='banner__text'>
                Rule of Thumb is a crowd sourced court of public opinion where anyone and everyone can speak out and speak freely. It’s easy: You share your opinion, we analyze and put the data in a public report.
            </Paragraph>
        </DivContainer>
    );
}

const CustomButton = () =>  {
    const classes = useStyles();
    const classButton = 'icon-button '.concat(classes.hideOnMobile);
    return ( 
        <Button className={classButton} aria-label='close'>
            <svg width='20' height='20' xmlns='http://www.w3.org/2000/svg'><g stroke='#000' stroke-width='2' fill='none' fill-rule='evenodd'><path d='M1 19L19 1M1 1l18 18'/></g></svg>
        </Button>
    );
}
export const BannerTop = () => {
    return (
        <AsideBanner
            clazzName='banner banner-top'
            alabel='Speak Out'
            bannerLeft={ <BannerLeft /> }
            bannerRight={ <BannerRight /> }
            button={ <CustomButton /> }
        />
    );
}
