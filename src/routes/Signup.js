import React from 'react'
import { Icon } from '@iconify/react'
import Textinput from '../components/shared/Textinput'
import PasswordInput from '../components/shared/PasswordInput'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import  {makeUnauthenticatedPOSTRequest} from '../utils/serverHelpers'
import { useCookies } from 'react-cookie'
import { useHistory } from 'react-router-dom'



const SignupComponent = () => {

    const [email, setEmail] = useState("")
    const [confirmEmail, setConfirmEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")

    //setting up cookies
    const[cookie,setCookie] = useCookies(["token"]);
    //to navigate
    const navigate = useNavigate();

    // to send data in api from frontend we create signUp() function
    const signUp = async() => {
        if (email !== confirmEmail) {
            alert("Email and Confirm Email fields must be same,Please check again");
            return ;
        };
        
        const data = { email, password, username, firstName, lastName }
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
    }
    return (
        <div className='w-full h-full flex flex-col items-center'>
            <div className='logo p-8 border-b border-solid border-gray-200 w-full flex justify-center'>
                {/* <Icon icon="logos:spotify" width='180' /> */}
            </div>

            <div className='inputRegion w-1/3 py-5 flex items-center justify-center  flex-col'>
                <div className='font-bold mb-4 text-2xl'>Sign up for free to start listening</div>

                <Textinput
                    label="Email Address"
                    placeholder="Email your Email"
                    className="my-6"
                    value={email}
                    setValue={setEmail} />

                <Textinput
                    label="Confirm Email Address"
                    placeholder="Confirm Email Address"
                    className="mt-5"
                    value={confirmEmail}
                    setValue={setConfirmEmail} />

                <Textinput
                    label="Enter your Username"
                    placeholder="Confirm Email Address"
                    className="mt-5"
                    value={username}
                    setValue={setUsername} />

                <PasswordInput
                    label="Create Password"
                    placeholder="Enter a strong Password Here"
                    value={password}
                    setValue={setPassword} />

                <div className='w-full flex justify-between items-center space-x-8'>
                    <Textinput
                        label="First Name"
                        placeholder="Enter your First Name"
                        className="my-6"
                        value={firstName}
                        setValue={setFirstName} />

                    <Textinput
                        label="Last Name"
                        placeholder="Enter your Last Name"
                        className="my-6"
                        value={lastName}
                        setValue={setLastName} />
                </div>


                <div className='w-full flex items-center justify-center my-8'>
                    <button className='bg-green-300 font-semibold p-3 px-10 rounded-full'
                        onClick={(e) => {
                            e.preventDefault()
                            signUp();
                        }}
                    >
                        SIGN UP
                    </button>
                </div>


                <div className='w-full border border-solid border-gray-300'></div>

                <div className='my-6 font-bold text-lg'>Already have an account?</div>

                <div className='border border-gray-400 text-gray-800 w-full flex items-center justify-center rounded-full py-3'>

                    <Link to="/login">
                        LOG IN INSTED
                    </Link>
                </div>
            </div>
        </div>

    )

}

export default SignupComponent;