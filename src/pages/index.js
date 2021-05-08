import { useRouter } from 'next/router'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import { makeStyles } from '@material-ui/core/styles'

import faker from 'faker'

import { AppContainer } from 'components/organisms'
import { Loading } from 'components/molecules'
import { useCustomer } from 'core/hooks'
import { withAuth } from 'core/hocs'

const useStyles = makeStyles((theme) => {
  return {
    grid: {
      padding: '8px 8px 0 8px'
    },
    card: {
      maxWidth: 345
    },
    actions: {
      justifyContent: 'space-between'
    },
    fab: {
      position: 'fixed',
      bottom: theme.spacing(2),
      right: theme.spacing(2)
    }
  }
})

const Home = (props) => {
  const router = useRouter()
  const classes = useStyles()

  return (
    <AppContainer haveNav title="ปาร์ตี้ทั้งหมด">
      <Grid container className={classes.grid} spacing={1}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, i) => {
          return (
            <Grid item xs={6} key={i}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image={faker.image.imageUrl()}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography variant="body2">Lizard</Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions disableSpacing className={classes.actions}>
                  <Typography variant="body2">0/5</Typography>
                  <Button variant="contained" size="small" disableElevation>
                    Join
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          )
        })}
      </Grid>
      <Fab
        aria-label="Add"
        className={classes.fab}
        color="primary"
        onClick={() => {
          router.push('/create')
        }}>
        <AddIcon />
      </Fab>
    </AppContainer>
  )
}

export default withAuth(Home)
