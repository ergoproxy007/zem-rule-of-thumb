import pope from 'assets/img/pope-francis.png';
import popetwox from 'assets/img/pope-francis.@2x.png';
import { diffInText } from 'config/date.utils';
import { Text } from 'config/TextConstants';
import { CharacterModel } from 'model/character.model';
import { VotesModel } from 'model/votes.model';
import { HeaderVoteCard } from 'components/Vote/HeaderVoteCard';
import { Span, WhiteSpace } from 'views/Tags/Text';
import { Image } from 'views/Tags/Picture';
import { Header, DivContainer, Section } from 'views/Tags/BlockLevel';
import { useStyles } from './styles';

const getPopeFrancis = () => {
    const votes = new VotesModel(55, 90).build();
    let lastUpdated = new Date();
    lastUpdated.setDate(lastUpdated.getDate() - 1);
    const description = "He’s talking tough on clergy sexual abuse, or is he just another pervert protector? (thumbs down) or a true pedophile punishing pontiff? (thumbs up)";
    return new CharacterModel('Pope Francis?', description, 'religion',
                pope, popetwox, votes, lastUpdated).build();
}

export const HeaderRule = () => {
    const classes = useStyles();
    const classGaugeTitle = 'closing-gauge__title '.concat(classes.closingTitleXS);
    const classGaugeNumber = 'closing-gauge__number '.concat(classes.closingTextXS);
    const classGaugeDesc = 'closing-gauge__desc '.concat(classes.closingTextXS);
    const cardTitle = "What's your opinion on";
    const character = getPopeFrancis();
    const objDate = diffInText(character.lastUpdated, new Date());
    return (
        <Header className='hero'>
            <Image
                className='hero__background'
                srcSet={`${character.pictureOne} 750w, ${character.pictureTwo} 1440w`}
                sizes='(min-width: 750px) 1440px, 100vw'
                src={character.pictureOne}
                alt='Pope Francis'
            />
            <Section className='max-centered'>
                <HeaderVoteCard character={character} title={cardTitle} />
            </Section>
            <Section className='hero__closing-gauge'>
                <DivContainer className='closing-gauge__left'>
                    <Span className={classGaugeTitle}>{ Text.ClosingIn }</Span>
                </DivContainer>
                <DivContainer className='closing-gauge__right'>
                    <Span className={classGaugeNumber}>{ objDate.mainNumber }</Span>
                    <WhiteSpace />
                    <Span className={classGaugeDesc}>{ objDate.text }</Span>
                </DivContainer>
            </Section>
        </Header>
    );
}