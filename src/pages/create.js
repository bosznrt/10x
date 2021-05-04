import { useFormik } from 'formik'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import { AppContainer } from 'components/organisms'

import { PartySchema } from 'utils/schemas'

const useStyles = makeStyles((theme) => {
  return {
    formContainer: {
      minHeight: `calc(100vh - 56px)`,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '0px 8px'
    },
    form: {
      '& > *': {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1)
      }
    }
  }
})

const CreatePartyPage = () => {
  const classes = useStyles()

  const formik = useFormik({
    initialValues: {
      name: ''
    },
    validationSchema: PartySchema,
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2))
      console.log(values)
    }
  })

  return (
    <AppContainer haveNav haveBackButton title="สร้างปาร์ตี้">
      <div className={classes.formContainer}>
        <form className={classes.form} onSubmit={formik.handleSubmit} autoComplete="off">
          <TextField
            fullWidth
            id="name"
            name="name"
            label="ชื่อปาร์ตี้"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
          <TextField
            fullWidth
            id="maxParticipants"
            name="maxParticipants"
            label="จำนวนคนที่ขาด"
            value={formik.values.maxParticipants}
            onChange={formik.handleChange}
            error={formik.touched.maxParticipants && Boolean(formik.errors.maxParticipants)}
            helperText={formik.touched.maxParticipants && formik.errors.maxParticipants}
          />
          <Button color="primary" variant="contained" type="submit" fullWidth>
            สร้างปาร์ตี้
          </Button>
        </form>
      </div>
    </AppContainer>
  )
}

export default CreatePartyPage
