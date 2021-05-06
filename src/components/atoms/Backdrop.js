import MuiBackdrop from '@material-ui/core/Backdrop'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: (props) => props?.color ?? '#fff'
  }
}))

const Backdrop = ({ icon, isOpen = false, action = () => {}, ...rest }) => {
  const classes = useStyles(rest)
  return (
    <MuiBackdrop className={classes.backdrop} open={isOpen} onClick={action}>
      {icon}
    </MuiBackdrop>
  )
}

export default Backdrop
