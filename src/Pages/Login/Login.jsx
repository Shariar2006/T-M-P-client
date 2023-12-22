import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Components/AuthContext/AuthProvider";
import Swal from 'sweetalert2'

const Login = () => {
    const { loginUser, googleLogin } = useContext(AuthContext)
    // const axiosPublic = useAxiosPublic()
    const navigate = useNavigate();
    const location = useLocation();
    const form = location.state?.from?.pathname || "/"

    const handleLogin = e => {
        e.preventDefault()
        const from = e.target
        const email = from.email.value
        const password = from.password.value
        console.log(email, password)
        loginUser(email, password)
            .then(result => {
                console.log(result.user)
                if (result.user) {
                    navigate(form, { replace: true })
                }
                // Swal("Good job!", "You are successfully Logged in!", "success");
            })
            .catch(error => { console.log(error) })
    }

    const loginWithGoogle = () => {
        googleLogin()
            .then(res => {
                // const userInfo = {
                //     email: res.user.email,
                //     name: res.user.displayName,
                //     photo: res.user.photoURL,
                //     badge: 'Bronze'
                // }
                console.log(res.user)
                Swal.fire({
                    icon: "success",
                    title: "Good job!",
                    text: "You are successfully Logged in!",
                    showConfirmButton: false,
                    timer: 2000
                });
                navigate(form, { replace: true })
                // axiosPublic.post('/users', userInfo)
                .then(res=>{
                    console.log(res.data)
                    // Swal.fire({
                    //     icon: "success",
                    //     title: "Good job!",
                    //     text: "You are successfully Logged in!",
                    //     showConfirmButton: false,
                    //     timer: 2000
                    // });
                    // navigate(form, { replace: true })
                })
            })
            .catch(error => { console.log(error) })
    }

    return (
        <div>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left hidden lg:block">
                        <img src="https://assets-v2.lottiefiles.com/a/567e9d6a-116d-11ee-adcc-c362dfe23881/hrMdhw3flV.gif" alt="" />
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className=" py-8 px-10 rounded-lg transparent">
                    <p className=' text-blue-500 text-4xl text-center mb-5'>Log In now!</p>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-blue-500 text-base">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="Email" className="font2 inputFild input input-bordered text-blue-500 text-lg font-semibold" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-blue-500 text-base">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="Password" className="font2 inputFild input
                    text-blue-500 text-lg font-semibold input-bordered" required />
                    </div>
                    <div>
                        <input className='btn border-none hover:bg-blue-500 text-center text-blue-500 hover:text-white py-3 rounded-lg text-xl w-full my-4' type="submit" value="Login" />
                    </div>
                    <p className='divider'>or</p>
                    <div
                     onClick={loginWithGoogle}
                      className='flex items-center mt-4 justify-center rounded-lg cursor-pointer border hover:bg-gray-800'>
                        <img className='w-10 h-10 ' src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" alt="" />
                        <span className='text-blue-500 text-sm font-semibold'>Continue With Google</span>
                    </div>

                    <p className='text-[#9CA3AF] text-base font-semibold text-center mt-4'>Don't have an account? Please <Link to='/register' className='text-blue-500 underline'>Register</Link></p>

                </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;