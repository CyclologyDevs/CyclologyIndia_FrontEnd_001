import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link, Redirect } from 'react-router-dom';
// import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
// import Googlelogo from '../images/google-logo.jpg'
// import stravalogo from '../images/strava-logo.png'
// import bgImg from '../images/banner.jpg'
import '../CSS_Style/signup.css'

function Login(props) {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userlogin, setUserlogin] = useState(false);

  const onSubmit = async (e) => {
    // e.preventDefault();
    const Data = { email, password };
    await fetch('http://127.0.0.1:3600/account/login', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Data)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        sessionStorage.setItem("uuid", data.user.uuid);
        console.log('Data Send');
        localStorage.setItem("token", data.jwt);
        if (localStorage.getItem('token') == null) {
          window.alert("Invalid Credentials");
        } else {
          window.alert("Login Successful");
          setUserlogin(true);
          window.location.reload();
          // Token is generated When we Logged In.
        }
      })
  }


  const [checkpwd, setCheckpwd] = useState(true);

  const selectCheckbox = (e) => {
    const checked = e.target.checked;
    if (checked) {
      setCheckpwd(false)
    } else {
      setCheckpwd(true)
    }
  };

  const [focused, setFocused] = useState(false);


  return (
    <div className='gradient-custom'>
      {userlogin ? (
        <Redirect to='/' />
      ) : (
        <section className="vh-100 text-white font-serif">
          <div className="mask d-flex align-items-center h-100">
            <div className="container h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                  <div className="card" style={{ borderRadius: '15px' }}>
                    <div className="card-body p-5 rounded-lg">
                      <h2 className="mb-1 pb-2 pb-md-0 mb-md-3 text-5xl text-center">Login</h2>

                      <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-outline mb-2">
                          <label className="form-label" htmlFor="form3Example1cg">Your Email</label>
                          <input type="email" id="form3Example3cg" className="form-control form-control-lg" style={{ borderColor: focused ? 'rgb(220 38 38)' : '', borderWidth: focused ? '3px' : '' }}
                            {...register("email", { required: <p className='text-red-600'>⚠ email is required</p>, pattern: { value: /^\S+@\S+$/i, message: <p className='text-red-600'>⚠ This not a valid email</p> } })}
                            value={email}
                            onFocus={() => setFocused(false)}
                            onChange={(e) => setEmail(e.target.value)} />
                          {errors.email?.message}
                        </div>

                        <div className="form-outline mb-2">
                          <label className="form-label" htmlFor="form3Example3cg">Password</label>
                          <input type={checkpwd ? 'password' : 'text'} id="form3Example4cg" className="form-control form-control-lg"
                            {...register("password", { required: <p className='text-red-600'>⚠ password is required</p>, minLength: { value: 4, message: <p className='text-red-600'>⚠ Password must be more than 4 characters</p> }, pattern: { value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/, message: <p className='text-red-700'>⚠ Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters</p> } })}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                          {errors.password?.message}
                        </div>

                        <div className="flex mb-2">
                          <div className="col d-flex justify-content-start md:text-lg text-sm">
                            <input
                              className="form-check-input me-2"
                              type="checkbox"
                              value=""
                              id="form2Example3c"
                              onClick={(e) => {
                                selectCheckbox(e);
                              }}
                            />
                            <label className="form-check-label" htmlFor="form2Example3">Show Password</label>
                          </div>

                          <div className="col d-flex justify-content-end md:text-lg text-sm" >
                            <Link to="/forgot">Forgot password?</Link>
                          </div>
                        </div>

                        <div className="d-flex justify-content-center">
                          <button className="rounded-full text-lg font-serif border-4 border-blue-800 hover:text-white py-2 px-20 bg-[#1814ff]">Submit</button>
                        </div>
                        <p className="text-center text-white mt-3 mb-0 font-serif">Not registered?? <Link to="/register" className="fw-bold text-body"><u className='text-white pl-1'>Create here</u></Link></p>
                      </form>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )
      }
    </div>
  )
}
export default Login