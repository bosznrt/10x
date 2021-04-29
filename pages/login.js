import Head from 'next/head'
import Image from 'next/image'
import { useFormik } from 'formik'

import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

import { LoginSchema } from 'utils/schemas'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1)
    }
  }
}))

const LoginPage = () => {
  const classes = useStyles()

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2))
      console.log(values)
    }
  })

  return (
    <Container maxWidth="xs">
      <Box my={4} className="min-h-screen flex flex-col justify-center items-center">
        <Image src="/logo.svg" width="160" height="80" />
        <form className={classes.root} onSubmit={formik.handleSubmit} autoComplete="off">
          <TextField
            fullWidth
            id="email"
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            fullWidth
            id="password"
            name="password"
            label="Password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && !!formik.errors.password}
            helperText={formik.touched.password && formik.errors.password}
          />
          <Button color="primary" variant="contained" fullWidth type="submit" className="mt-16">
            Submit
          </Button>
        </form>
      </Box>
    </Container>
  )
}

export default LoginPage
