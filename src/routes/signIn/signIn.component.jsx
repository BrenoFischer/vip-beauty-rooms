import { useState } from 'react';

import InputField from '../../components/inputField/inputField.component';
import CustomButton from '../../components/button/button.component';

import { signInAuthUserWithEmailAndPassword } from '../../utils/firebase';

import './signIn.styles.scss';
import Footer from '../../components/footer/footer.component';


const defaultFormFields = {
    email: '',
    password: '',
};

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;


    const resetFields = () => {
        setFormFields(defaultFormFields);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        resetFields();

        try {
            await signInAuthUserWithEmailAndPassword(email, password);
        } catch(error) {
            switch(error.code) {
                case "auth/wrong-password":
                    alert('incorrect password for e-mail');
                    break;
                case "auth/user-not-found":
                    alert('incorrect e-mail');
                    break;
                default:
                    console.log(error);
            }
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({...formFields, [name]: value});
    }

    return(
        <div className='sign-in'>
            <form className='sign-in__form' onSubmit={handleSubmit}>
                <div className='sign-in__form--fields'>
                    <InputField 
                        label="Email"
                        type='email'
                        required
                        onChange={handleChange}
                        name='email'
                        value={email}
                    />
                    <InputField 
                        label="Password"
                        type="password"
                        required
                        onChange={handleChange}
                        name='password'
                        value={password}
                    />
                </div>
                <CustomButton buttonText="Sign In" type='submit' />
            </form>
        </div>
    );
}

const SignIn = () => {
    return(
        <>
            <section className='sign-in-page'>
                <h2 className='sign-in-page__title'>Ooops!</h2>
                <p>Authentication is only available to Unique Beauty managers</p>
                <p>If you are a manager, please, log in below</p>
                <SignInForm />
            </section>
            <Footer />
        </>
    );
};

export default SignIn;