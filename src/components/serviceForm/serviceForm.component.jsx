import { useState } from 'react';

import { BiImageAdd, BiMinusCircle, BiMessageSquareAdd } from 'react-icons/bi';

import ServiceDetails from '../../components/service-details/service-details.component';
import Service from '../../components/service/service.component';
import InputField from '../../components/inputField/inputField.component';
import LoadingSpinner from '../../components/loadingSpinner/loadingSpinner.component';
import CustomButton from '../../components/button/button.component';

import './serviceForm.styles.scss';


const ServiceForm = ({ onFormSubmit, loading, setFormFields, formFields, handleImageInputChange, imgUrlPreview, buttonTitle }) => {
  const [ hidePreview, setHidePreview ] = useState(false);
  const [ hideShortPreview, setHideShortPreview ] = useState(false);
  const { details, title, shortDetails } = formFields;

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormFields({...formFields, [name]: value});
  }

  const togglePreview = () => setHidePreview(!hidePreview);

  const togglePreviewShort = () => setHideShortPreview(!hideShortPreview);

    return(
        <div className='service-form__wrapper'>
              <form className='service-form__form' onSubmit={onFormSubmit}>
                <h3 className='service-form__form-title'>Fill in the service information</h3>
                <div className='service-form__form-fields'>
                  <label htmlFor="file-upload" className="service-form__file-upload">
                    <div className='service-form__file-upload-icon'>
                      <BiImageAdd /> 
                    </div>
                      Click here to add a Custom Image
                  </label>
                  <input id="file-upload" type="file" accept='image/*' name='imgUrl' onChange={handleImageInputChange}/>
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
                    name="shortDetails"
                    label="Short Description"
                    rows="2"
                    cols="50"
                    onChange={handleInputChange}
                    value={shortDetails}
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
                <div className='service-form__button-wrapper'>
                  <div className='service-form__button'>
                    <CustomButton buttonText={buttonTitle} type='submit' />
                  </div>
                  { loading &&
                    <LoadingSpinner />
                  }
                </div>
              </form>
              <div className='service-form__preview'>
                <div className='service-form__preview-wrapper'>
                  <div className='service-form__preview-title-wrapper'>
                    <h3 className='service-form__preview-title'>Preview from the main page</h3>
                    <div className='service-form__preview-title-icon' onClick={togglePreviewShort}>
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
                      shortDetails={shortDetails}
                      preview={true}
                    />
                  }
                </div>
                <div className='service-form__preview-wrapper'>
                  <div className='service-form__preview-title-wrapper'>
                    <h3 className='service-form__preview-title'>Preview when you click for more details</h3>
                    <div className='service-form__preview-title-icon' onClick={togglePreview}>
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
    );
}


export default ServiceForm;