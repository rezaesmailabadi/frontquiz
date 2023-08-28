import React, { useState } from 'react';
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';

const LoginAdmin = () => {
   


    const navigate = useNavigate();

    const [userField, setUserField] = useState({
        email: "",
        password: "",
      });
    
      const changeUserFieldHandler = (e) => {
        setUserField({
          ...userField,
          [e.target.name]: e.target.value,
        });
        //console.log(userField);
      };
    
      console.log(userField);
    
      const onSubmitChange = async (e) => {
        e.preventDefault();
        try {
          const responce = await axios.post(
            "http://127.0.0.1:8000/api/admin/login",
            userField
          );
          console.log(responce);
          navigate("/admin/dashboard");
        } catch (err) {
          console.log("Something Wrong");
        }
      };
   

    return ( 
        <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                 
                    <div class="card-body">
                        <h1 class="text-center">admin Login</h1>
                        <NavLink to="/register/admin">register</NavLink>
                        
                        
                        
                        
                        
                        <form class="mt-4">
                         

                            <div class="form-group row">
                                <label for="email" class="col-md-4 col-form-label text-md-right">E-Mail Address</label>

                                <div class="col-md-6">
                                    <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" 
                                    value={userField.email}
                                      onChange={(e) => changeUserFieldHandler(e)}
                                   required autocomplete="email" autofocus/>

                           
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

                                <div class="col-md-6">
                                    <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required 
                                    value={userField.password}
                                      onChange={(e) => changeUserFieldHandler(e)}
                                 
                                    autocomplete="current-password"/>

                        
                                </div>
                            </div>

                            <div class="form-group row">
                                <div class="col-md-6 offset-md-4">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" name="remember" id="remember" checked/>

                                        <label class="form-check-label" for="remember">
                                        Remember Me
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div class="mb-0 form-group row">
                                <div class="col-md-8 offset-md-4">
                                    <button type="submit" class="btn btn-primary" onClick={(e) => onSubmitChange(e)}>
                                       Login
                                    </button>



                                </div>
                            </div>


                        </form>
                        <NavLink to="/">home</NavLink>
                    </div>
                </div>
            </div>
        </div>
    </div>

     );
}
 
export default LoginAdmin;