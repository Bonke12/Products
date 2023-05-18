import React from 'react'
import Header from '../Components/Header'
import '../Components/Login_Style.css'
const Login = () => {
    return (
        <div>
            <Header />
            <br /><br /><br />
            <div className="container">
                <div className="row">
                    <div className="col-md-5 mx-auto">
                        <div id="first">
                            <div className="myform form ">
                                <div className="text-bg-info p-3">
                                    <div className="col-md-12 text-center">
                                        <h1>Login</h1>

                                    </div>
                                </div>
                                <form action="" method="post" name="login">
                                    <div className="form-group">
                                        <label for="exampleInputEmail1">Email address</label>
                                        <input type="email" name="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleInputEmail1">Password</label>
                                        <input type="password" name="password" id="password" className="form-control" aria-describedby="emailHelp" placeholder="Enter Password" />
                                    </div>
                                    <div className="form-group">
                                        <p className="text-center">By signing up you accept our <a href="#">Terms Of Use</a></p>
                                    </div>
                                    <div className="col-md-12 text-center ">
                                        <button type="submit" className=" btn btn-block mybtn btn-primary tx-tfm">Login</button>
                                    </div>
                                    <div className="col-md-12 ">
                                        <div className="login-or">
                                            <hr className="hr-or" />
                                            <span className="span-or">or</span>
                                        </div>
                                    </div>
                                    <div className="col-md-12 mb-3">
                                        <p className="text-center">
                                            <a href="javascript:void();" className="google btn mybtn"><i className="fa fa-google-plus">
                                            </i> Signup using Google
                                            </a>
                                        </p>
                                    </div>
                                    <div className="form-group">
                                        <p className="text-center">Don't have account? <a href="#" id="signup">Sign up here</a></p>
                                    </div>
                                </form>

                            </div>
                        </div>
                        <div id="second">
                            <div className="myform form ">
                                <div className="logo mb-3">
                                    <div className="col-md-12 text-center">
                                        <h1 >Signup</h1>
                                    </div>
                                </div>
                                <form action="#" name="registration" />
                                <div className="form-group">
                                    <label for="exampleInputEmail1">First Name</label>
                                    <input type="text" name="firstname" className="form-control" id="firstname" aria-describedby="emailHelp" placeholder="Enter Firstname" />
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Last Name</label>
                                    <input type="text" name="lastname" className="form-control" id="lastname" aria-describedby="emailHelp" placeholder="Enter Lastname" />
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Email address</label>
                                    <input type="email" name="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Password</label>
                                    <input type="password" name="password" id="password" className="form-control" aria-describedby="emailHelp" placeholder="Enter Password" />
                                </div>
                                <div className="col-md-12 text-center mb-3">
                                    <button type="submit" className=" btn btn-block mybtn btn-primary tx-tfm">Get Started For Free</button>
                                </div>
                                <div className="col-md-12 ">
                                    <div className="form-group">
                                        <p className="text-center"><a href="#" id="signin">Already have an account?</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br /><br /><br />
        </div>
    )
}

export default Login