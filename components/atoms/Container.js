import Container from '@material-ui/core/Container'

const MuiContainer = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>
}

export default MuiContainer
