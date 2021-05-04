import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import { makeStyles } from '@material-ui/core/styles'

import { Layout } from 'components/molecules'

const useStyles = makeStyles((theme) => {
  return {
    nav: { display: 'flex', justifyContent: 'center', alignItems: 'center' },
    backButton: {
      position: 'fixed',
      zIndex: 10000,
      top: '4px',
      left: '8px'
    },
    title: { margin: 'auto' }
  }
})

const AppContainer = ({
  children,
  haveNav = false,
  haveBackButton = false,
  backAction = () => {},
  title,
  layoutProps
}) => {
  const classes = useStyles()

  return (
    <Layout {...layoutProps}>
      {haveBackButton && (
        <IconButton
          edge="start"
          className={classes.backButton}
          color="inherit"
          aria-label="open drawer"
          onClick={backAction}
          >
          <ArrowBackIcon />
        </IconButton>
      )}
      {haveNav && (
        <AppBar position="sticky" color="default">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              {title}
            </Typography>
          </Toolbar>
        </AppBar>
      )}
      {children}
    </Layout>
  )
}

export default AppContainer
