import React, { useContext } from 'react';
import thumbsUp from 'assets/img/thumbs-up.svg';
import { diffInText } from 'config/date.utils';
import { RuleContext } from 'context/RuleContext';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { DivContainer } from 'views/Tags/BlockLevel'
import { Paragraph, CustomParagraph } from 'views/Tags/Text'
import { ThumbTitle } from 'components/Vote/Thumb';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    width: '97%',
    height: 'auto',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));

const HeaderCard = ({ name }) => {
    return (
        <DivContainer style={{ display: 'flex' }}>
            <ThumbTitle icon={thumbsUp} text={name} padding='7px' />
        </DivContainer>
    )
}

const CenterCard = ({ description, lastUpdated }) => {
    const dateTo = new Date(lastUpdated);  
    const objDate = diffInText(dateTo, new Date());
    return (
        <DivContainer>
            <CustomParagraph $fontSize='0.6rem' $weight='bold' $family='Lato'>{`${objDate.mainNumber} ${objDate.text}`}</CustomParagraph>
            <CustomParagraph $family='Lato' $spaces='break-spaces' $lineHeight='1.2'>{ description }</CustomParagraph>
        </DivContainer>
    );
}

export default function VoteCard() {
  const {
        data: { records },
        mutations: { getCharactersUpdated }
  } = useContext(RuleContext);
  const characters = getCharactersUpdated(records);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ImageList className={classes.imageList} rowHeight={160} cols={3}>
        {characters?.map((item) => (
          <ImageListItem key={item.name} cols={1} rows={2}>
            <img src={item.picture} alt={item.name} />
            <ImageListItemBar style={{ height: 'inherit', background: 'rgba(0, 0, 0, 0.2)' }}
              titlePosition="top"
              title={ <HeaderCard name={item.name} /> }
              subtitle={<CenterCard description={item.description} lastUpdated={item.lastUpdated} />}
            />
            <ImageListItemBar
              titlePosition="bottom"
              title={ item.name }
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton aria-label={`star ${item.title}`}>
                  <StarBorderIcon className={classes.title} />
                </IconButton>
              }
            />
          </ImageListItem>
          
        ))}
      </ImageList>
    </div>
  );
}
