import pope from 'assets/img/pope-francis.png';
import popetwox from 'assets/img/pope-francis.@2x.png';

import { Header, DivContainer, Section } from 'views/Tags/BlockLevel';
import { Span } from 'views/Tags/Text';
import { VoteCard } from 'components/Vote/VoteCard';
import { Image } from 'views/Tags/Picture';
import { CharacterModel } from 'model/character.model';

export const HeaderRule = () => {
    const cardTitle = "What's your opinion on";
    const description = "He’s talking tough on clergy sexual abuse, or is he just another pervert protector? (thumbs down) or a true pedophile punishing pontiff? (thumbs up)";
    const character = new CharacterModel(
                            'Pope Francis?',
                            description,
                            'religion',
                            pope,
                            popetwox)
                            .build();
    return (
        <Header className='hero'>
            <Image
                className='hero__background'
                srcSet={`${character.pictureOne} 750w, ${character.pictureOne} 1440w`}
                sizes='(min-width: 750px) 1440px, 100vw'
                src={character.pictureOne}
                alt='Pope Francis'
            />
            <Section className='max-centered'>
                <VoteCard character={character}
                    title={cardTitle}
                />
            </Section>
            <Section className='hero__closing-gauge'>
                <DivContainer className='closing-gauge__left'>
                    <Span className='closing-gauge__title'>closing in</Span>
                </DivContainer>
                <DivContainer className='closing-gauge__right'>
                    <Span className='closing-gauge__number'>22</Span>
                    <Span className='closing-gauge__desc'>days</Span>
                </DivContainer>
            </Section>
        </Header>
    );
}