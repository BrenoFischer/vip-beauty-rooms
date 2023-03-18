import { useContext, useState, useRef } from 'react';
import { v4 } from 'uuid';

import { BiImageAdd, BiMinusCircle, BiMessageSquareAdd } from 'react-icons/bi';

import { uploadImageToStorage, addCollectionAndDocuments } from '../../utils/firebase';

import ServiceDetails from '../../components/service-details/service-details.component';
import Service from '../../components/service/service.component';
import Footer from '../../components/footer/footer.component';

import { UserContext } from '../../context/user.context';

import './addService.styles.scss';
import CustomButton from '../../components/button/button.component';

const defaultFormFields = {
    details: '',
    title: '',
    short: '',
  }


const InputField = ({label, isTextArea=false, ...otherProps}) => (
  <div className='form__input-field'>
    { isTextArea ?
      (
        <textarea className='form__input textarea' {...otherProps} />
      ) 
    :
      (
        <input className='form__input' {...otherProps} />
      )
    }
    <label className={`${otherProps.value.length ? 'shrink' : ''} form__input-label`}>
      {label}
    </label>
  </div>
);
  

const AddService = () => {
    const form = useRef();

    const { currentUser } = useContext(UserContext);
  
    const [ imageUpload, setImageUpload ] = useState(null);
    const [ hidePreview, setHidePreview ] = useState(false);
    const [ hideShortPreview, setHideShortPreview ] = useState(false);
    const [ imgUrlPreview, setImgUrlPreview ] = useState('https://firebasestorage.googleapis.com/v0/b/unique-beauty-87701.appspot.com/o/services%2Flogo.jpg?alt=media&token=99bfc6b8-ec74-4c84-8e93-cd06722108fa');
    const [ formFields, setFormFields ] = useState(defaultFormFields);
    const { details, title, short } = formFields;
    
  
    const uploadImage = async () => {
      if(!imageUpload) return imgUrlPreview;
  
      const filePath = `services/${imageUpload.name + v4()}`;
      const url = await uploadImageToStorage(filePath, imageUpload);
  
      return url;
    }
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
  
      setFormFields({...formFields, [name]: value});
    }

    const buildItem = (url) => (
      {
        id: v4(),
        imgUrl: url,
        title: title,
        details: details,
        shortDetails: short
      }
    );  
  
    const addService = async (event) => {
      event.preventDefault();

      const url = await uploadImage();

      const item = buildItem(url);

      await addCollectionAndDocuments('services', [item]);

      setFormFields(defaultFormFields);
    }

    const handleImageInputChange = (event) => {
      setImageUpload(event.target.files[0]);
      setImgUrlPreview(URL.createObjectURL(event.target.files[0]));
    }


    const togglePreview = () => setHidePreview(!hidePreview);

    const togglePreviewShort = () => setHideShortPreview(!hideShortPreview);


    return(
      <div className='add-service'>
        { currentUser ?
          <div className='add-service__container'>
            <div className='add-service__description'>
              <h2 className='add-service__description-title'>Add a new service</h2>
              <p className='add-service__description-paragraph'>Fill the fields below to add a new service.</p>
              <p className='add-service__description-paragraph'>You can preview how the service is going to be displayed on the website, before adding it.</p>
            </div>
            <div className='add-service__wrapper'>
              <form className='add-service__form' onSubmit={addService}>
                <h3 className='add-service__form-title'>Fill in the service information</h3>
                <div className='add-service__form-fields'>
                  <label htmlFor="file-upload" className="add-service__file-upload">
                    <div className='add-service__file-upload-icon'>
                      <BiImageAdd /> 
                    </div>
                      Click here to add a Custom Image
                  </label>
                  <input id="file-upload" type="file" accept='image/*' name='imgUrl' onChange={handleImageInputChange}/>
                  {/* <button onClick={uploadImage}>Upload Image</button> */}
                  <InputField 
                    required
                    name="title"
                    label="Service Title"
                    onChange={handleInputChange}
                    value={title}
                    type="text"
                  />
                  <InputField 
                    isTextArea={true}
                    required
                    name="short"
                    label="Short Description"
                    rows="2"
                    cols="50"
                    onChange={handleInputChange}
                    value={short}
                  />
                  <InputField 
                    isTextArea={true}
                    required
                    name="details"
                    label="Service Details"
                    rows="4"
                    cols="50"
                    onChange={handleInputChange}
                    value={details}
                  />
                </div>
                <div className='add-service__button-wrapper'>
                  <CustomButton buttonText="Add service" type='submit' />
                </div>
              </form>
              <div className='add-service__preview'>
                <div className='add-service__preview-wrapper'>
                  <div className='add-service__preview-title-wrapper'>
                    <h3 className='add-service__preview-title'>Preview from the main page</h3>
                    <div className='add-service__preview-title-icon' onClick={togglePreviewShort}>
                      { hideShortPreview ?
                          <BiMessageSquareAdd />
                        :
                          <BiMinusCircle />
                      }
                    </div>
                  </div>
                  { !hideShortPreview &&
                    <Service 
                      img={imgUrlPreview}
                      title={title}
                      shortDetails={short}
                      preview={true}
                    />
                  }
                </div>
                <div className='add-service__preview-wrapper'>
                  <div className='add-service__preview-title-wrapper'>
                    <h3 className='add-service__preview-title'>Preview when you click for more details</h3>
                    <div className='add-service__preview-title-icon' onClick={togglePreview}>
                      { hidePreview ?
                          <BiMessageSquareAdd />
                        :
                          <BiMinusCircle />
                      }
                    </div>
                  </div>
                  { !hidePreview &&
                    <ServiceDetails
                      title={title}
                      img={imgUrlPreview}
                      details={details}
                      preview={true}
                    />
                  }
                </div>
              </div>
            </div>
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