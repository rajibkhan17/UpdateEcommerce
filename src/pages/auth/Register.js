import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { auth } from '../../firebase';
import { Button } from 'antd';
import { MailOutlined } from '@ant-design/icons';


const Register = () => {
    const [email, setEmail] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();

        const config = {
            url: process.env.REACT_APP_REGISTER_REDIRECT_URL,
            handleCodeInApp: true
        }

        await auth.sendSignInLinkToEmail(email, config)

        toast.success(`Email is sent to ${email}. Click the link to complete your registration`)

        //save email into localstorage
        window.localStorage.setItem('emailForRegistration', email)

        //clear state

        setEmail('')

    }


    const RegisterForm = () =>  (
    <form onSubmit={handleSubmit}>
        <input 
        type="email" 
        className="form-control"
        value={email} 
        onChange={e => setEmail(e.target.value)} 
        placeholder="Enter your email"
        autoFocus />
        <br />
        <Button onClick={handleSubmit} 
          type="primary"
          className="mb-4"
          block
          shape="round"
          icon={<MailOutlined />}
          size="large"
          disabled={!email}
        >
        Register your Email
        </Button>
    </form>)
    
    return (
        <div className="container p-5">
           <div className="row">
               <div className="col-md-6 offset-md-3">
                   <h4>Register</h4>
                   {RegisterForm()}
               </div>
           </div>
        </div>
    );
};

export default Register;

