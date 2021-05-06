import CircularProgress from '@material-ui/core/CircularProgress'
import { Backdrop } from 'components/atoms'

const LoadingPage = () => {
  return <Backdrop icon={<CircularProgress color="inherit" />} isOpen />
}

export default LoadingPage
