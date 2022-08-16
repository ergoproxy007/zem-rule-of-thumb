import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Button } from 'views/Tags/Form/Action';
import { Image } from 'views/Tags/Picture';

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
    const result = ((props.voteValue / props.totalVotes) * 100).toFixed(1);
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

Thumb.propTypes = {
    voteValue: PropTypes.number.isRequired,
    isReverse: PropTypes.bool,
    thumbAlt: PropTypes.string,
    icon: PropTypes.any,
    separator: PropTypes.node
}
