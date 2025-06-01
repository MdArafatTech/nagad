import React from "react";
import { useAuth } from "../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  const {
    signInUser,
    signInWithGoogle,
    
    loading,
    error,
    resetPassword,
  } = useAuth();

  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then((userCredential) => {
        console.log("User logged in:", userCredential.user);
        navigate("/");
      })
      .catch((err) => {
        console.error("Login error:", err.message);
      });
  };

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        console.log("Google login:", result.user);
        navigate("/");
      })
      .catch((err) => console.error("Google login error:", err.message));
  };

 

  return (
    <div>
      <div className="hero  min-h-screen">
        <div className="hero-content flex-col lg:flex-row rounded-2xl bg-white">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-red-500">Login now!</h1>
            
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleLogin}>
                <fieldset className="fieldset">
                  <label className="label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="input"
                    placeholder="Email"
                    required
                  />
                  <label className="label">Password</label>
                  <input
                    type="password"
                    name="password"
                    className="input"
                    placeholder="Password"
                    required
                  />
                  <div>
                  <button
    type="button"
    className="link link-hover text-blue-500 decoration-white hover:scale-102 duration-[.3s] font-semibold"
    onClick={() => {
      const email = prompt("Enter your email to reset password:");
      if (email) {
        resetPassword(email)
          .then(() => alert("Check your email for reset instructions."))
          .catch((err) => alert("Error: " + err.message));
      }
    }}
  >
    Forgot password?
  </button>
                  </div>

                  <div className="flex flex-col items-center gap-4 mt-4">
                    <p className="text-xl font-bold">Or login with:</p>
                    <div className="flex gap-6 text-3xl">
                      <Link
                        type="button"
                        onClick={handleGoogleLogin}
                        className="google hover:bg-red-500 p-2 rounded-2xl hover:text-white"
                      >
                        <FaGoogle />
                      </Link>
                      
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-neutral mt-4"
                    disabled={loading}
                  >
                    {loading ? "Logging in..." : "Login"}
                  </button>
                  {error && <p style={{ color: "red" }}>{error}</p>}
                </fieldset>
              </form>

              <p className="mt-4">
                Not registered?{" "}
                <Link to="/register" className="link  text-[15px] font-bold hover:text-blue-400 decoration-white">
                  Register here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;









