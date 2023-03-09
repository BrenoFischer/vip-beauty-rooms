import { useState, useContext } from 'react';

import { signInAuthUserWithEmailAndPassword } from '../../utils/firebase';

import { UserContext } from '../../context/user.context';

import './signIn.styles.scss';

const FormInput = ({ label, ...otherProps }) => (
    <>
        <label>{label}</label>
        <input {...otherProps} />
    </>
);

const defaultFormFields = {
    email: '',
    password: '',
};

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const { setCurrentUser } = useContext(UserContext);

    const resetFields = () => {
        setFormFields(defaultFormFields);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        resetFields();

        try {
            const { user } = await signInAuthUserWithEmailAndPassword(email, password);
            setCurrentUser(user);
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
        <>
            <h2>Log In</h2>
            <form onSubmit={handleSubmit}>
                <FormInput 
                    label="Email"
                    type='email'
                    required
                    onChange={handleChange}
                    name='email'
                    value={email}
                />
                <FormInput 
                    label="Password"
                    type="password"
                    required
                    onChange={handleChange}
                    name='password'
                    value={password}
                />
                <button>Create User</button>
            </form>
        </>
    );
}

const SignIn = () => {
    return(
        <>
            <SignInForm />
            
        </>
    );
};

export default SignIn;