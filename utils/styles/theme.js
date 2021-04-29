import { createMuiTheme } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#482e9c'
    },
    secondary: {
      main: '#8e5285'
    },
    error: {
      main: red.A400
    },
    background: {
      default: '#fff'
    }
  }
})

export default theme
