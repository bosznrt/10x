import { useFormik } from 'formik'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import { makeStyles } from '@material-ui/core/styles'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import { Layout } from 'components/molecules'

import { PartySchema } from 'utils/schemas'

const useStyles = makeStyles((theme) => {
  return {
    root: { display: 'flex', justifyContent: 'center', alignItems: 'center' },
    menuButton: {
      position: 'fixed',
      zIndex: 10000,
      top: '4px',
      left: '8px'
    },
    header: { margin: 'auto' },
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
    <Layout>
      <IconButton
        edge="start"
        className={classes.menuButton}
        color="inherit"
        aria-label="open drawer">
        <ArrowBackIcon />
      </IconButton>
      <AppBar position="sticky" color="default">
        <Toolbar>
          <Typography variant="h6" className={classes.header}>
            สร้างปาร์ตี้
          </Typography>
        </Toolbar>
      </AppBar>
      <div className="flex-center mx-4" style={{ minHeight: `calc(100vh - 56px)` }}>
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
    </Layout>
  )
}

export default CreatePartyPage
