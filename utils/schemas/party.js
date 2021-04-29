import * as yup from 'yup'

export default yup.object({
  name: yup.string('Enter your email').email('Enter a valid email').required('Email is required'),
  maxParticipants: yup
    .number('Enter max participants')
    .min(2, 'Minimum participants is 2')
    .max(5, 'Maximum participants is 5')
    .required('Maximun participants is required')
})
