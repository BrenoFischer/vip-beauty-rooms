import { useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { BiMessageSquareAdd, BiMinusCircle } from 'react-icons/bi';

import { UserContext } from '../../context/user.context';
import InputField from '../../components/inputField/inputField.component';
import CustomButton from '../../components/button/button.component';
import Service from '../../components/service/service.component';
import ServiceDetails from '../../components/service-details/service-details.component';

import './editService.styles.scss';
import Footer from '../../components/footer/footer.component';

const EditService = () => {
    const { currentUser } = useContext(UserContext);
    const location = useLocation();
    const { id, title, img, details, shortDetails } = location.state;

    const defaultFormFields = {
        titleField: title,
        imgField: img,
        detailsField: details,
        shortDetailsField: shortDetails,
    }

    const [ formFields, setFormFields ] = useState(defaultFormFields);
    const { titleField, imgField, detailsField, shortDetailsField } = formFields;
    const [ hidePreview, setHidePreview ] = useState(false);
    const [ hideShortPreview, setHideShortPreview ] = useState(false);
    const [ imgUrlPreview, setImgUrlPreview ] = useState(img);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
    
        console.log(name, value);
        setFormFields({...formFields, [name]: value});
    }


    const editService = () => {}

    const togglePreview = () => setHidePreview(!hidePreview);

    const togglePreviewShort = () => setHideShortPreview(!hideShortPreview);


    return(
        <section className='edit-service'>
            { currentUser ?
                <div className='edit-service__container'>
                    <div className='edit-service__title-container'>
                        <h2 className='edit-service__title'>Edit service - <span>{title}</span></h2>
                    </div>
                    <div className='edit-service__wrapper'>
                        <form className='edit-service__form' onSubmit={editService}>
                            <h3 className='edit-service__form-title'>Modify the service information</h3>
                            <div className='edit-service__form-fields'>
                                <InputField 
                                    required
                                    name="titleField"
                                    label="Service Title"
                                    onChange={handleInputChange}
                                    value={titleField}
                                    type="text"
                                />
                                <InputField 
                                    isTextArea={true}
                                    required
                                    name="shortDetailsField"
                                    label="Short Description"
                                    rows="2"
                                    cols="50"
                                    onChange={handleInputChange}
                                    value={shortDetailsField}
                                />
                                <InputField 
                                    isTextArea={true}
                                    required
                                    name="detailsField"
                                    label="Service Details"
                                    rows="4"
                                    cols="50"
                                    onChange={handleInputChange}
                                    value={detailsField}
                                />
                            </div>
                            <div className='edit-service__button-wrapper'>
                                <CustomButton buttonText="Edit service" type='submit' />
                            </div>
                        </form>
                        <div className='edit-service__preview'>
                            <div className='edit-service__preview-wrapper'>
                                <div className='edit-service__preview-title-wrapper'>
                                    <h3 className='edit-service__preview-title'>Preview from the main page</h3>
                                    <div className='edit-service__preview-title-icon' onClick={togglePreviewShort}>
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
                                    title={titleField}
                                    shortDetails={shortDetailsField}
                                    preview={true}
                                />
                                }
                            </div>
                            <div className='edit-service__preview-wrapper'>
                                <div className='edit-service__preview-title-wrapper'>
                                    <h3 className='edit-service__preview-title'>Preview when you click for more details</h3>
                                    <div className='edit-service__preview-title-icon' onClick={togglePreview}>
                                        { hidePreview ?
                                            <BiMessageSquareAdd />
                                        :
                                            <BiMinusCircle />
                                        }
                                    </div>
                                </div>
                                { !hidePreview &&
                                <ServiceDetails
                                    title={titleField}
                                    img={imgUrlPreview}
                                    details={detailsField}
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
        </section>
    );
}

export default EditService;