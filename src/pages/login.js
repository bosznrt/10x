import Image from 'next/image'
import Link from 'next/link'
import { useFormik } from 'formik'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

import { LoginSchema } from 'core/schemas'

import { AppContainer } from 'components/organisms'

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
    <AppContainer layoutProps={{ flex: true, haveGutter: true }}>
      <Image src="/logo.svg" width="160" height="80" />
      <form className={classes.root} onSubmit={formik.handleSubmit} autoComplete="off">
        <TextField
          fullWidth
          id="email"
          name="email"
          label="อีเมล์"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          fullWidth
          id="password"
          name="password"
          label="รหัสผ่าน"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && !!formik.errors.password}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Button color="primary" variant="contained" type="submit" fullWidth>
          เข้าสู่ระบบ
        </Button>
        <Link href={`/signup`}>
          <Button color="primary" variant="outlined" fullWidth>
            สร้างบัญชีผู้ใช้
          </Button>
        </Link>
      </form>
    </AppContainer>
  )
}

export default LoginPage
