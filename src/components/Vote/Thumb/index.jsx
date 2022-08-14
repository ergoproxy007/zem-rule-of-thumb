import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Button } from 'views/Tags/Form/Action';
import { Image } from 'views/Tags/Picture';

export const ThumbImage = styled(Image)`
    padding-left: ${(props) => props.$left};
    padding-right: ${(props) => props.$right};

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

    @media all and (min-width: 1100px) {
        display: flex;
        justify-content: center;
    }
`

export const Thumb = (props) => {
    const porcentage = props.votes.concat('%');
    const left = props.isReverse ? '0px' : '8px';
    const right = props.isReverse ? '8px' : '0px';
    return (
        <ThumbButton className="icon-button" aria-label={props.thumbAlt}
                    $width={porcentage} $isReverse={props.isReverse} >
            <ThumbImage src={props.icon} alt={props.thumbAlt} $left={left} $right={right} />
            <ThumbText $left={left} $right={right}>{ porcentage }</ThumbText>
        </ThumbButton>
    );
}

Thumb.propTypes = {
    votes: PropTypes.string.isRequired,
    isReverse: PropTypes.bool,
    thumbAlt: PropTypes.string,
    icon: PropTypes.any
}
