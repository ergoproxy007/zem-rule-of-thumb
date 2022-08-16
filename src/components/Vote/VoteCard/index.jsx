import React, { useState, useContext } from 'react';
import thumbsUp from 'assets/img/thumbs-up.svg';
import thumbsDown from 'assets/img/thumbs-down.svg';
import { diffInText } from 'config/date.utils';
import { RuleContext } from 'context/RuleContext';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import { DivContainer } from 'views/Tags/BlockLevel';
import { CustomParagraph } from 'views/Tags/Text';
import { Thumb, ThumbTitle, ThumbVoteNow } from 'components/Vote/Thumb';
import { LIMIT_VOTE } from 'context/helper/store.helper';
import { CenterContainer } from './styles'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    width: '100%',
    height: 'auto',
  },
  imageListMobile: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));

const HeaderCard = ({ name, votes }) => {
  const totalVotes = votes.positive + votes.negative;
  const result = ((votes.positive / totalVotes) * 100).toFixed(1);
  const classIcon = result > LIMIT_VOTE ? 'color-green-positive' :  'color-yellow-negative';
  const thumbsIcon = result > LIMIT_VOTE ? thumbsUp : thumbsDown;
  return (
    <DivContainer style={{ display: 'flex' }}>
        <ThumbTitle icon={thumbsIcon} classIcon={classIcon} text={name} padding='7px' />
    </DivContainer>
  )
}

const CenterCard = ({ id, description, category, lastUpdated, votes }) => {
    const dateTo = new Date(lastUpdated);  
    const objDate = diffInText(dateTo, new Date());
    const eyebrow = `${objDate.mainNumber} ${objDate.text} ago in ${category}`;
    const [eyebrowText, setEyebrowText] = useState(eyebrow);
    const votesGaugeBar = { id: id, ...votes };
    return (
        <CenterContainer>
            <CustomParagraph $family='Lato' $spaces='break-spaces' $lineHeight='1.2'>
              { description }
            </CustomParagraph>
            <CustomParagraph $fontSize='0.6rem' $weight='bold' $family='Lato' $textAlign='right'>
              { eyebrowText }
            </CustomParagraph>
            <ThumbVoteNow
              iconUp={thumbsUp}
              iconDown={thumbsDown}
              padding='7px'
              classIconUp='color-green-positive'
              classIconDown='color-yellow-negative'
              eyebrow={eyebrow}
              setEyebrowText={setEyebrowText}
              votesGaugeBar={votesGaugeBar}
              />
        </CenterContainer>
    );
}

const FooterCard = ({ votes }) => {
  const totalVotes = votes.positive + votes.negative;
  return (
    <DivContainer className='featured-card__buttons' style={{ paddingBottom: '40px' }}>
      <Thumb icon={thumbsUp} thumbAlt='thumbs up' voteValue={votes.positive} totalVotes={totalVotes} newStyles={ { justifyContent: 'start' } }
             separator={<span style={{ color: 'rgba(var(--color-yellow-negative), 0)' }}>|||||</span>} />
      <Thumb icon={thumbsDown} thumbAlt='thumbs down' voteValue={votes.negative} totalVotes={totalVotes} isReverse={true} newStyles={ { justifyContent: 'end' } }
             separator={<span style={{ color: 'rgba(var(--color-yellow-negative), 0)' }}>|||||</span>} />
    </DivContainer>
  );
}

const viewMobile = (view) => {
  if (!view) {
    return false;
  }
  if (view ===  'list') {
    return false;
  }
  return view !==  'grid';
}

const getImageListProps = (view, isMobile) => {
  if (isMobile || viewMobile(view)) {
    return { cols: 1 };
  }
  if (view ===  'list') {
    return { rowHeight: 140, cols: 1 };
  }
  return { rowHeight: 160, cols: 3 };
}

const getrgbaImage = (view) => {
  if (view ===  'list') {
    return { background: 'rgba(0, 0, 0, 0.4)', height: 'inherit' };
  }
  return { background: 'rgba(0, 0, 0, 0.1)', height: 'inherit' };
}

export default function VoteCard(props) {
  const classes = useStyles();
  const { view, isMobile } = props;
  const imageListProps = getImageListProps(view, isMobile);
  const imageListClass = isMobile || viewMobile(view) ? classes.imageListMobile : classes.imageList;
  const resizeImage = view ===  'list' ? 'resize-img' : '';
  const rgbaImage = getrgbaImage(view);
  const {
        data: { records },
        mutations: { getCharactersUpdated }
  } = useContext(RuleContext);
  const characters = getCharactersUpdated(records);
  return (
    <DivContainer className={classes.root}>
      <ImageList className={imageListClass} {...imageListProps}>
        {characters?.map((item) => (
          <ImageListItem key={item.name} cols={1} rows={2}>
            <img src={item.picture} alt={item.name} className={resizeImage} />
            <ImageListItemBar style={rgbaImage}
              titlePosition='top'
              title={ <HeaderCard name={item.name} votes={item.votes} /> }
              subtitle={<CenterCard id={item.id} description={item.description} category={item.category} lastUpdated={item.lastUpdated} votes={item.votes} />}
            />
            <ImageListItemBar
              titlePosition='bottom'
              title={ <FooterCard votes={item.votes} /> }
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </DivContainer>
  );
}
