import { useContext, useState } from 'react';
import { v4 } from 'uuid';

import { uploadImageToStorage, addCollectionAndDocuments } from '../../utils/firebase';

import Footer from '../../components/footer/footer.component';
import ServiceForm from '../../components/serviceForm/serviceForm.component';

import { UserContext } from '../../context/user.context';

import './addService.styles.scss';

const defaultFormFields = {
    details: '',
    title: '',
    shortDetails: '',
}

const AddService = () => {
    const { currentUser } = useContext(UserContext);
  
    const [ formFields, setFormFields ] = useState(defaultFormFields);
    const { details, title, shortDetails } = formFields;
    const [ imageUpload, setImageUpload ] = useState(null);
    const [ loading, setLoading ] = useState(false);
    const [ imgUrlPreview, setImgUrlPreview ] = useState('https://firebasestorage.googleapis.com/v0/b/unique-beauty-87701.appspot.com/o/services%2Flogo.jpg?alt=media&token=99bfc6b8-ec74-4c84-8e93-cd06722108fa');
    
  
    const uploadImage = async () => {
      if(!imageUpload) return imgUrlPreview;
  
      const filePath = `services/${imageUpload.name + v4()}`;
      const url = await uploadImageToStorage(filePath, imageUpload);
  
      return url;
    }


    const handleImageInputChange = (event) => {
      setImageUpload(event.target.files[0]);
      setImgUrlPreview(URL.createObjectURL(event.target.files[0]));
    }


    const buildItem = (url) => (
      {
        id: v4(),
        imgUrl: url,
        title: title,
        details: details,
        shortDetails: shortDetails
      }
    );  
  

    const addService = async (event) => {
      event.preventDefault();
      setLoading(true);

      const url = await uploadImage();

      const item = buildItem(url);

      await addCollectionAndDocuments('services', [item]);

      setFormFields(defaultFormFields);
      setLoading(false);
    }


    return(
      <div className='add-service'>
        { currentUser ?
          <div className='add-service__container'>
            <div className='add-service__description'>
              <h2 className='add-service__description-title'>Add a new service</h2>
            </div>
            <ServiceForm 
              onFormSubmit={addService}
              loading={loading}
              defaultFormFields={defaultFormFields}
              handleImageInputChange={handleImageInputChange}
              imgUrlPreview={imgUrlPreview}
              setFormFields={setFormFields}
              formFields={formFields}
              buttonTitle="Add service"
            />
          </div>
        :
          <div>
            <h2>Sorry, this is an area for Unique Beauty Managers</h2>
            <p>If you are a manager, please, authenticate yourself before adding a new service. You can do it by clicking on "Log In".</p>
          </div>
        }
        <Footer />
      </div>
    );
}

export default AddService;