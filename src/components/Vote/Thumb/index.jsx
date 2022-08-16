import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Button } from 'views/Tags/Form/Action';
import { Span } from 'views/Tags/Text';
import { Image } from 'views/Tags/Picture';
import { Text } from 'config/TextConstants';
import { RuleContext } from 'context/RuleContext';

export const ThumbImage = styled(Image)`
    padding-left: ${(props) => props.$left};
    padding-right: ${(props) => props.$right};
    padding-top: ${(props) => props.$top};
    padding-bottom: ${(props) => props.$bottom};

    @media all and (min-width: 1100px) {
        font-size: 1.2rem !important;
    }
`

const ThumbText = styled.h1`
    padding-left: ${(props) => props.$left};
    padding-right: ${(props) => props.$right};
    color: white;

    @media all and (min-width: 1100px) {
        font-size: 1.2rem !important;
    }
`

const ThumbButton = styled(Button)`
    width: ${(props) => props.$width};
    height: ${(props) => props.$height};
    padding-left: ${(props) => props.$left};
    padding-right: ${(props) => props.$right};
    padding-top: ${(props) => props.$top};
    padding-bottom: ${(props) => props.$bottom};

    @media all and (min-width: 1100px) {
        display: flex;
        justify-content: center;
    }
`

export const Thumb = (props) => {
    const totalVotes = props.totalVotes > 0 ? props.totalVotes : 1 ;
    const result = ((props.voteValue / totalVotes) * 100).toFixed(1);
    const porcentage = result.toString().concat('%');
    const left = props.isReverse ? '0px' : '8px';
    const right = props.isReverse ? '8px' : '0px';
    const SeparatorLeft = () => <>{props.separator}</>
    return (
        <ThumbButton className='icon-button' aria-label={props.thumbAlt}
                     $width={porcentage} $isReverse={props.isReverse} style={props.newStyles}>
            <SeparatorLeft />
            <ThumbImage src={props.icon} alt={props.thumbAlt} $left={left} $right={right} />
            <ThumbText $left={left} $right={right}>{ porcentage }</ThumbText>
        </ThumbButton>
    );
}

export const ThumbTitle = (props) => {
    return (
        <ThumbButton className='icon-button'>
            <ThumbImage className={props.classIcon} src={props.icon} style={{ height: '50%' }}
                        $left={props.padding} $right={props.padding} $top={props.padding} $bottom={props.padding} />
            <ThumbText $left='5px'>{ props.text }</ThumbText>
        </ThumbButton>
    );
}

const VoteNowButton = styled.button`
    cursor: pointer;
    border: 0.1rem solid #FFF;
    padding: 0.5rem 1.2rem;
    color: #FFF;
    background-color: rgba(0, 0, 0, 0.35);

    &:hover,
    &:focus,
    &:active {
        background-color: rgba(0, 0, 0, 0.8);
    }
`
const VoteNowContainer = styled.div`
    display: flex;
    float: right;

    @media all and (min-width: 1100px) {
        padding-bottom: 18px;
    }
`
export const ThumbClickable = styled(ThumbImage)`
    border: ${(props) => props.$border};
    cursor: pointer;
`
export const ThumbVoteNow = (props) => {
    const BORDER = '0.15rem solid #FFF';
    const { classIconDown, classIconUp, padding, iconDown, iconUp, eyebrow, setEyebrowText, votesGaugeBar } = props;
    const [voteAgain, setVoteAgain] = useState(false);
    const [thumbActive, setThumbActive] = useState('');
    const [borderUp, setBorderUp] = useState('');
    const [borderDown, setBorderDown] = useState('');
    const {
        data: { records },
        mutations: { getCharactersUpdated, updateRecords }
    } = useContext(RuleContext);
    const characters = getCharactersUpdated(records);
    const handleVoteUp = () => {
        setThumbActive('POSITIVE');
        setBorderUp(BORDER);
        setBorderDown('');
    }
    const handleVoteDown = () => {
        setThumbActive('NEGATIVE');
        setBorderUp('');
        setBorderDown(BORDER);
    }
    const handleVoteNow = () => {
        const character = characters.find(r => r.id === votesGaugeBar.id);
        const updateCharacters = characters.filter(r => r.id !== votesGaugeBar.id);
        if (thumbActive === 'POSITIVE') {
            setEyebrowText('Thank you for your vote!');
            setVoteAgain(true);
            character.votes = {positive: votesGaugeBar.positive + 1, negative: votesGaugeBar.negative};
            updateCharacters.push(character);
            updateRecords(updateCharacters);
            
        } else if (thumbActive === 'NEGATIVE') {
            setEyebrowText('Thank you for your vote!');
            setVoteAgain(true);
            character.votes = {positive: votesGaugeBar.positive, negative: votesGaugeBar.negative + 1};
            updateCharacters.push(character);
            updateRecords(updateCharacters);
        }
    }
    const handleVoteAgain = () => {
        setVoteAgain(false);
        setThumbActive('');
        setBorderUp('');
        setBorderDown('');
        setEyebrowText(eyebrow);
    }
    return (
        <VoteNowContainer>
            { !voteAgain
                ? ( <>
                    <ThumbClickable className={classIconUp} src={iconUp} style={{ width: '40px', marginRight: '10px' }}
                            $left={padding} $right={padding} $top={padding} $bottom={padding}
                            $border={borderUp} onClick={handleVoteUp} />
                    <ThumbClickable className={classIconDown} src={iconDown} style={{ width: '40px', marginRight: '10px' }}
                            $left={padding} $right={padding} $top={padding} $bottom={padding}
                            $border={borderDown} onClick={handleVoteDown} />
                    <VoteNowButton onClick={handleVoteNow}>
                        <Span $fontSize='0.9rem'>{ Text.VoteNow }</Span>
                    </VoteNowButton>
                    </> )
                : (
                    <VoteNowButton onClick={handleVoteAgain}>
                        <Span $fontSize='0.9rem'>{ Text.VoteAgain }</Span>
                    </VoteNowButton>
                  )
             }
        </VoteNowContainer>
    );
}

Thumb.propTypes = {
    voteValue: PropTypes.number.isRequired,
    isReverse: PropTypes.bool,
    thumbAlt: PropTypes.string,
    icon: PropTypes.any,
    separator: PropTypes.node
}

ThumbTitle.propTypes = {
    classIcon: PropTypes.string,
    text: PropTypes.string,
    padding: PropTypes.string,
    icon: PropTypes.any
}

ThumbVoteNow.propTypes = {
    classIconUp: PropTypes.string,
    classIconDown: PropTypes.string,
    padding: PropTypes.string,
    iconUp: PropTypes.any,
    iconDown: PropTypes.any,
    eyebrow: PropTypes.string,
    setEyebrowText: PropTypes.func,
    votesGaugeBar: PropTypes.object,
    setVotesGaugeBar: PropTypes.func,
}
