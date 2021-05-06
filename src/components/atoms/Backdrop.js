import MuiBackdrop from '@material-ui/core/Backdrop'
import { makeStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff'
  }
}))

const Backdrop = ({ isOpen = false }) => {
  const classes = useStyles()
  return (
    <MuiBackdrop className={classes.backdrop} open={isOpen}>
      <CircularProgress color="inherit" />
    </MuiBackdrop>
  )
}

export default Backdrop
