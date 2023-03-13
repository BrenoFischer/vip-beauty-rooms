import { useContext, useState } from 'react';
import { v4 } from 'uuid';

import { uploadImageToStorage } from '../../utils/firebase';

import { UserContext } from '../../context/user.context';

import './addService.styles.scss';

const defaultFormFields = {
    details: '',
}

const AddService = () => {
    const { currentUser } = useContext(UserContext);
  
    const [imageUpload, setImageUpload] = useState(null);
    const [ formFields, setFormFields ] = useState(defaultFormFields);
    const { details } = formFields;
  
    const uploadImage = async () => {
      if(!imageUpload) return;
  
      const filePath = `services/${imageUpload.name + v4()}`;
      const url = await uploadImageToStorage(filePath, imageUpload);
  
      console.log(url);
    }
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
  
      setFormFields({...formFields, [name]: value});
    }
  
    const addService = (event) => {
      event.preventDefault();
  
      console.log(details);
    }


    return(
        <>
            { currentUser &&
                <>
                    <input type="file" onChange={(event) => setImageUpload(event.target.files[0])}/>
                    <button onClick={uploadImage}>Upload Image</button>

                    <form onSubmit={addService}>
                    <textarea name="details" onChange={handleInputChange}></textarea>
                    <button>Submit Form</button>
                    </form>

                    {
                    details &&
                        <p style={{whiteSpace: 'pre-line'}}>{details}</p>
                    }
                </>
          }
        </>
    );
}

export default AddService;