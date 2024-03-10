import React from 'react'
import { useState } from 'react'
import { Icon } from '@iconify/react'
import Textinput from '../components/shared/Textinput'
import PasswordInput from '../components/shared/PasswordInput'
import { Link,useNavigate } from 'react-router-dom'
import { makeUnauthenticatedPOSTRequest } from '../utils/serverHelpers'
import { useCookies } from 'react-cookie'
const LoginComponent = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const[cookies,setCookie]=useCookies(["token"])
    const navigate = useNavigate();

    const login = async() => {
        
        const data = { email, password}
        const response = await makeUnauthenticatedPOSTRequest(
            "/auth/register",
            data
        );
        if(response && !response.err){
            console.log(response)
            //now we use token as a unique key which is generated when we do sign up and now we sore the token and other things in database so a old user dosen't do sign up process again so for that we use coockies for that and we install  npm i react-cookie in frontend cmd
            const token = response.token;
            const date = new Date();
            // we expire our cookie after 30 days
            date.setDate(date.getDate()+30)
            setCookie("token",token,{path:"/",expires:date});
            alert("Success")
            //by using navigate router dom we directly direct to the home 
            navigate("/home")
        }else{
            alert("failure")
        }
    };


    return (
        <div className='w-full h-full flex flex-col items-center'>
            <div className='logo p-8 border-b border-solid border-gray-200 w-full flex justify-center'>
                {/* <Icon icon="logos:spotify" width='180' /> */}
            </div>

            <div className='inputRegion w-1/3 py-5 flex items-center justify-center  flex-col'>
                <div className='font-bold mb-4'>To Continue,log in to Spotify</div>

                <Textinput
                    label="Email ID or username"
                    placeholder="Email ID or Username"
                    className="my-2" 
                    value={email}
                    setValue={setEmail}/>

                <PasswordInput
                    label="Password"
                    placeholder="Password" 
                    value={password}
                    setValue={setPassword}/>

                <div className='w-full flex items-center justify-end my-8'>
                    <button className='bg-green-300 font-semibold p-3 px-10 rounded-full 'onClick={(e)=>{
                        e.preventDefault()
                        login();
                    }}>LOG IN</button>
                </div>


                <div className='w-full border border-solid border-gray-300'></div>

                <div className='my-6 font-bold text-lg'>Don't have an account?</div>

                <div className='border border-gray-400 text-gray-800 w-full flex items-center justify-center rounded-full py-3'>
                    
                    <Link to="/signup">
                        SIGN UP FOR SPOTIFY
                    </Link>
                </div>
            </div>
        </div>

    )

}

export default LoginComponent