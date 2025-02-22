import React, { useState } from 'react';
import Typography from './Typography';
import Textfield from './Textfield';
import Button from './Button';

const Login: React.FC = () => {
    const EMAIL = "gokulnath@steinnlabs.com";
    const PASSWORD = "12345678";

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [disabled, setDisabled] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleLogin = () => {
        setDisabled(true);
        setLoading(true);

        setTimeout(() => {
            setDisabled(false);
            setLoading(false);

            if (email === EMAIL && password === PASSWORD) {
                alert("Login successful");
            } else {
                alert("Invalid Email or Password");
            }
        }, 1000);
    };

    return (
        <div className='flex justify-center items-center h-screen bg-gradient-to-br from-purple-500 to-purple-700'>
            <div className='border-2 shadow-purple-950 shadow-2xl rounded-lg border-purple-300 bg-gray-900 py-12 px-8 w-[30rem]'>
                <Typography variant="h2" className='text-slate-200 mb-3 text-center'>Login</Typography>
                <Textfield
                    label="Email"
                    type="email"
                    value={email}
                    className="w-full mt-2 required shadow bg-slate-300"
                    placeholder="Email address"
                    onChange={(e) => setEmail(e.target.value)}
                />


                <Textfield
                    label="Password"
                    type={password}
                    value={password}
                    className="w-full required mt-2 shadow bg-slate-300"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                />

                <Button
                    loading={loading}
                    text="Login"
                    disabled={disabled}
                    className="bg-orange-400 rounded font-semibold mt-10 w-1/2 hover:bg-orange-300"
                    onClick={handleLogin}
                >
                    Login
                </Button>
            </div>
        </div>
    );
};

export default Login;
