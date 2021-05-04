import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  box: {
    minHeight: '100vh'
  },
  boxFlex: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
}))

const Layout = ({ children, flex = false,  haveGutter = false}) => {
  const classes = useStyles()

  return (
    <Container maxWidth="sm" disableGutters={!haveGutter}>
      <Box className={flex ? classes.boxFlex : classes.box}>{children}</Box>
    </Container>
  )
}

export default Layout
