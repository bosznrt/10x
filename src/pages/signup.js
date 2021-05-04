import Link from 'next/link'
import { useFormik } from 'formik'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import { makeStyles } from '@material-ui/core/styles'

import { SignupSchema } from 'utils/schemas'

import { AppContainer } from 'components/organisms'


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1)
    }
  }
}))

const SignUpPage = () => {
  const classes = useStyles()

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
      acceptTerms: false
    },
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2))
      console.log(values)
    }
  })

  return (
    <AppContainer layoutProps={{ flex: true, haveGutter: true }}>
      <Typography variant="h5" gutterBottom>
        สร้างบัญชีผู้ใช้
      </Typography>
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
        <TextField
          fullWidth
          id="confirmPassword"
          name="confirmPassword"
          label="ยืนยันรหัสผ่าน"
          type="password"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          error={formik.touched.confirmPassword && !!formik.errors.confirmPassword}
          helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
        />

        <FormControlLabel
          control={<Checkbox color="primary" />}
          id="acceptTerms"
          name="acceptTerms"
          value={formik.values.acceptTerms}
          onChange={formik.handleChange}
          label="ฉันยอมรับเงื่อนไขและข้อตกลงเกี่ยวกับการใช้งาน"
        />
        <Button
          color="primary"
          variant="contained"
          type="submit"
          fullWidth
          disabled={!formik.values.acceptTerms}>
          ยืนยัน
        </Button>
      </form>
    </AppContainer>
  )
}

export default SignUpPage
