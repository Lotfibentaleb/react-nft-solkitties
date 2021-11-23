import React from 'react'
import {
  Accordion, 
  AccordionDetails, 
  AccordionSummary, 
  Typography
} from '@material-ui/core';
import {
  FaqContainer,
  CloudImage1,
  CloudImage2,
  CloudImage3
} from './styles'

// styles
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    accodionRoot: {
      position: 'relative',
      width: '100%',
      '&.MuiPaper-root': {
          background: '#fea7a0'
      },
      '& .MuiAccordion-rounded:first-child': {
        borderTopLeftRadius: '14px',
        borderTopRightRadius: '14px'
      },
      '& .MuiAccordion-rounded': {
        marginTop: '17px',
        borderRadius: '15px',
        background: '#CAF5FF',
        '&:before': {
          height: '0px'
        }
      },
      '& .MuiAccordionDetails-root': {
        padding: '0px 16px 16px'
      },
      '& .MuiAccordionSummary-content.Mui-expanded': {
        margin: '20px 0px 7px'
      },
      '& .MuiAccordionSummary-root.Mui-expanded': {
        minHeight: '50px'
      },
      marginBottom: '130px'
    },
    expandIconImg: {
      width: '22px',
      [theme.breakpoints.down('xs')]: {
        width: '17px',
      },
    },
    secondaryHeading1: {
      color: '#000000',
      textAlign: 'left',
      fontWeight: 600,
      fontSize: '17px',
      fontFamily: 'Open Sans',
      [theme.breakpoints.down('xs')]: {
        fontSize: '13px'
      },
    },
    secondaryHeading2: {
      color: '#000000',
      textAlign: 'left',
      fontWeight: 400,
      fontSize: '17px',
      fontFamily: 'Open Sans',
      [theme.breakpoints.down('xs')]: {
        fontSize: '13px'
      },
    },
  }),
);

const FAQ_DATAS = [
  {question: 'Q: What are Sol Kitties?',                        answer: ' Sol Kitties are a collection of distinctive kitties. We spent over 4 months drawing the kitties.'},
  {question: 'Q: Will this have a utility?',                    answer: ' Yes! The collection will have a utility in our game coming out 2022 Q1.'},
  {question: 'Q: How many items in this NFT project?',          answer: ' There are 3,080 hand-drawn Sol Kitties in total.'},
  {question: 'Q: How much mint cost for a Sol Kitty?',          answer: ' 1 SOL.'},
  {question: 'Q: When is the next sale/drop date?',             answer: ' December 2021.'},
  {question: 'Q: What blockchain does Sol Kitties bellong to?', answer: ' Sol Kitties are about to invade the Solana block-chain!'},
  {question: 'Q: How do I buy a Sol Kitty NFT?',                answer: ' You will head to our website during launch and mint a random Sol Kitty during the presale or public mint. If you miss that there will be a secondary market!'},
  {question: 'Q: What about a secondary market?',               answer: ' You can count on it!'},
  {question: 'Q: How do I create and fund my Solana wallet?',   answer: ' Go to Phantom, download the Phantom wallet extension. Once the extension is installed, create a new wallet. Then, to fund it go to FTX.com or Binance (any exchange that sells and supports Solana token transfer) and purchase SOL. Once you have SOL, send it over to your SOL address in your Solana wallet.'},
  {question: 'Q: Do I own the Solkitty I’m paying for?',        answer: ' Your Kitty is yours with full intellectual property owned by you, do as you want!'},
  {question: 'Q: Is there a limit on how many I can mint?',     answer: ' There is no limit. Enjoy and mint as much as you want.'},
  {question: 'Q: Where is the digital artwork stored?',         answer: ' Sol Kitties will be stored on Airweave, which is a decentralized data storage. Airweave backs data with sustainable and perpetual endowments. This all means you can store data for eternity. Your Kitty will live forever!'},
  {question: 'Q: Where will the royalties go to?',              answer: ' All 5% of resale royalties will be used to sweep out the floor and increase the collection value as we are building a strong community and aiming for the long-run.'},
]

export const Faq = () => {

  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(-1)

  return (
    <FaqContainer id='faq'>
      <div className='main-layout'>
        <div className='main-container'>
          <h1>FAQ</h1>
          <div className={classes.accodionRoot}>
            <CloudImage1></CloudImage1>
            <CloudImage2></CloudImage2>
            <CloudImage3></CloudImage3>
            {
                FAQ_DATAS.map((item, index) => {
                    return (
                        <Accordion 
                        defaultExpanded={true}
                        expanded={expanded === index} 
                        onChange={() => {
                            if(expanded !== index)
                                setExpanded(index);
                            else
                                setExpanded(-1);
                        }}>
                            <AccordionSummary
                            expandIcon={<img src="assets/images/down-arrow.png" className={classes.expandIconImg} />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                            >
                            {/* <Typography className={classes.heading} variant='h4'>{item.question}</Typography> */}
                            <Typography className={classes.secondaryHeading1}>{item.question}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography className={classes.secondaryHeading1} style={{marginRight: '5px'}}>
                                A: 
                            </Typography>
                            <Typography className={classes.secondaryHeading2}>
                                {item.answer}
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                    )            
                })
            }
          </div>
        </div>
      </div>
    </FaqContainer>
  )
}
