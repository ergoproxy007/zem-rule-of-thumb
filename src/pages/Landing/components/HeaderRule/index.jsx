import pope from 'assets/img/pope-francis.png';
import popetwox from 'assets/img/pope-francis.@2x.png';
import { Header } from 'views/Tags/BlockLevel';
import { VoteCard } from 'components/Vote/VoteCard';

export const HeaderRule = () => {
    return (
        <Header className="hero">
            <img
            className="hero__background"
            srcset={`${pope} 750w, ${popetwox} 1440w`}
            sizes="(min-width: 750px) 1440px, 100vw"
            src={pope}
            alt="Pope Francis" />
            <div className="max-centered">
                <VoteCard />
            </div>
            <div className="hero__closing-gauge">
                <div className="closing-gauge__left">
                    <span className="closing-gauge__title">closing in</span>
                </div>
                <div className="closing-gauge__right">
                    <span className="closing-gauge__number">22</span>
                    <span className="closing-gauge__desc">days</span>
                </div>
            </div>
        </Header>
    );
}