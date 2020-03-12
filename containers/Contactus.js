import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const useStyles = makeStyles(theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
}));

const initialState = {
  firstName: '',
  lastName: '',
  address1: '',
  address2: '',
  city: '',
  state: '',
  zip: '',
  country: '',
}

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  address1: Yup.string().required("Required"),
  city: Yup.string().required("Required"),
  country: Yup.string().required("Required"),
  zip: Yup.string().required("Required")
});

const Contactus = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant="h5" gutterBottom>
            Contact us
          </Typography>
          <Formik 
            initialValues={initialState}
            validationSchema={validationSchema}
            onSubmit={(e, values) =>{
              e.preventDefault();
              console.log(values);
            }}>
            {(Props) => {
              const {
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
              } = Props;
              return(
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        id="firstName"
                        name="firstName"
                        label="First name"
                        value={values.firstName}
                        fullWidth
                        autoComplete="fname"
                      />
                      <ErrorMessage name="firstName"/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        id="lastName"
                        name="lastName"
                        label="Last name"
                        value={values.lastName}
                        fullWidth
                        autoComplete="lname"
                      />
                      <ErrorMessage name="lastName"/>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        id="address1"
                        name="address1"
                        label="Address line 1"
                        value={values.address1}
                        fullWidth
                        autoComplete="billing address-line1"
                      />
                      <ErrorMessage name="address1"/>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        id="address2"
                        name="address2"
                        label="Address line 2"
                        value={values.address2}
                        fullWidth
                        autoComplete="billing address-line2"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        id="city"
                        name="city"
                        label="City"
                        value={values.city}
                        fullWidth
                        autoComplete="billing address-level2"
                      />
                      <ErrorMessage name="city"/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField id="state" name="state" value={values.state} label="State/Province/Region" fullWidth />
                      <ErrorMessage name="state"/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        id="zip"
                        name="zip"
                        label="Zip / Postal code"
                        value={values.zip}
                        fullWidth
                        autoComplete="billing postal-code"
                      />
                      <ErrorMessage name="zip"/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        id="country"
                        name="country"
                        label="Country"
                        value={values.country}
                        fullWidth
                        autoComplete="billing country"
                      />
                      <ErrorMessage name="country"/>
                    </Grid>
                    <Grid item xs={12}>
                      <button
                        type="submit"
                        className={classes.button}>
                        Submit
                      </button>
                    </Grid>
                  </Grid>
                </form>
              );
            }}
          </Formik>
        </Paper>
      </main>
    </React.Fragment>
  );
}

export default Contactus;