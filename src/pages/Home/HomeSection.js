import React from 'react'

// material ui core components
import { Box, Grid, Typography } from '@material-ui/core'

// core components
import Button from 'components/Button/Button'

// images
import PlanetImage from 'assets/images/Home/Planet.png'
import StonesImage from 'assets/images/Home/Stones.png'
import FoxImage from 'assets/images/Home/Fox.svg'

// styles
import { makeStyles } from '@material-ui/core/styles'
import styles from 'assets/jss/pages/Home/homeSectionStyle'
const useStyles = makeStyles(styles)

const HomeSection = () => {
  const classes = useStyles()
  return (
    <Box className={classes.homeSectionArea}>
      <Box className={classes.planetArea}>
        <img src={PlanetImage} className={classes.planetImage} />
      </Box>
      <Box>
        <img src={StonesImage} className={classes.stonesImage} />
      </Box>
      <Box className={classes.container}>
        <Box className={classes.content}>
          <Grid container display="flex" alignItems="center">
            <Grid item xs={12} sm={12} md={6} lg={6} className={classes.foxArea}>
              <Box mb={3}>
                <Typography className={classes.title}>
                  What Began as a Space-Age Meme Token Will Evolve into a Flourishing, Decentralized Ecosystem
                </Typography>
              </Box>
              <Box mb={3}>
                <Typography className={classes.text31}>
                  From a snappy space token to a burgeoning community: PLTXSwap, DApp, and much more to follow!
                </Typography>
              </Box>
              <Box mb={3} className={classes.buttonArea}>
                <Button title="Read Our Woofpaper" color="yellow" />
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} className={classes.foxArea}>
              <img src={FoxImage} className={classes.foxImage} />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  )
}

export default HomeSection
