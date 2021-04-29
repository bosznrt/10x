// import Container from '@material-ui/core/Container'
import { Container } from 'components/atoms'
import Box from '@material-ui/core/Box'
import ClassNames from 'classnames'

const Layout = ({ children, ...props }) => {
  const { flex, boxClass, haveGutter = false } = props

  const appliedClassBox = ClassNames('min-h-screen', boxClass, { 'flex-center': !!flex })

  return (
    <Container maxWidth="sm" disableGutters={!haveGutter}>
      <Box className={appliedClassBox}>{children}</Box>
    </Container>
  )
}

export default Layout
