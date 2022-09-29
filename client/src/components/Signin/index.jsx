import "./index.scss";
import { Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
// import axios from "axios";

function Signin() {
  const [values, setValues] = useState({ username: "", password: "" });
  const [error, setError] = useState({});
  const [submit, setSubmit] = useState(false);
  const handleChange = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };
  const validate = (value) => {
    const nameRegex = /^[A-Za-z][A-Za-z0-9_]{3,16}$/;
    let err = {};
    if (value.username === "" || !nameRegex.test(value.username)) {
      err = { ...err, username: "invalid username" };
    }

    if (value.password === "") {
      err = { ...err, password: "Enter a password" };
    }
    return err;
  };
  const handleSubmit = () => {
    setError(validate(values));
    setSubmit(true);
  };

  useEffect(() => {
    if (submit && Object.keys(error).length === 0) {
      // hello
    } else {
      setSubmit(false);
    }
  }, [submit]);
  return (
    <div className='signin-container'>
      <Grid container>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "20px",
          }}
        >
          <div className='header'>
            <h1>Sign In</h1>
          </div>
        </Grid>
        <Grid className='wrapper' item xs={11} sm={9} md={7} lg={5}>
          <Grid
            container
            justifyContent='center'
            sx={{ height: "100%" }}
            alignItems=''
          >
            <Grid item className='form-wrapper' xs={10} sm={8} lg={6}>
              <div className={`input-wrapper ${error.username && "error"}`}>
                {error.username && <label>{error.username}</label>}
                <input
                  type='text'
                  value={values.name}
                  name='username'
                  placeholder='username'
                  onChange={handleChange}
                />
              </div>
              <div className={`input-wrapper ${error.password && "error"}`}>
                {error.password && <label>{error.password}</label>}
                <input
                  type='text'
                  value={values.password}
                  name='password'
                  minLength={4}
                  placeholder='password'
                  onChange={handleChange}
                />
              </div>
              <small style={{ alignSelf: "flex-start" }}>
                Don&#39;t have an account ? <Link to='/signup'>signup</Link>
              </small>
              <Button onClick={handleSubmit} variant='contained'>
                Sign in
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Signin;
