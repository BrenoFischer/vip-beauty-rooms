import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { v4 } from 'uuid';

import { editServiceDocument, uploadImageToStorage } from '../../utils/firebase';

import Footer from '../../components/footer/footer.component';
import ServiceForm from '../../components/serviceForm/serviceForm.component';
import './editService.styles.scss';
import BoxMessage from '../../components/boxMessage/boxMessage.component';

const EditService = () => {
    const currentUser = useSelector((state) => state.user.currentUser);
    const location = useLocation();
    const { id, titleLoc, img, detailsLoc, shortDetailsLoc } = location.state;

    const defaultFormFields = {
        title: titleLoc,
        details: detailsLoc,
        shortDetails: shortDetailsLoc,
    }

    const [ formFields, setFormFields ] = useState(defaultFormFields);
    const { title, details, shortDetails } = formFields;
    const [ loading, setLoading ] = useState(false);
    const [ messageBox, setMessageBox ] = useState(false);
    const [ imgUrlPreview, setImgUrlPreview ] = useState(img);
    const [ imgUpload, setImgUpload ] = useState(null);


    const uploadImage = async () => {
        if(!imgUpload) return imgUrlPreview;
    
        const filePath = `services/${imgUpload.name + v4()}`;
        const url = await uploadImageToStorage(filePath, imgUpload);
    
        return url;
      }


    const handleImageInputChange = (event) => {
        setImgUpload(event.target.files[0]);
        setImgUrlPreview(URL.createObjectURL(event.target.files[0]));
    }


    const editService = async (event) => {
        event.preventDefault();
        setLoading(true);

        const imgUrl = await uploadImage();
        
        const data = {
            details: details,
            imgUrl: imgUrl,
            shortDetails: shortDetails,
            title: title
        }
        
        await editServiceDocument(id, data);
        setLoading(false);
        setMessageBox(true);
        setTimeout(() => setMessageBox(false), 10000);
    }

    return(
        <section className='edit-service'>
            { currentUser ?
                <div className='edit-service__container'>
                    <div className='edit-service__title-container'>
                        <h2 className='edit-service__title'>Edit service - <span>{title}</span></h2>
                    </div>
                    <ServiceForm 
                        onFormSubmit={editService}
                        loading={loading}
                        setFormFields={setFormFields}
                        formFields={formFields}
                        handleImageInputChange={handleImageInputChange}
                        imgUrlPreview={imgUrlPreview}
                        buttonTitle="Edit service"
                    />
                    { messageBox &&
                        <BoxMessage 
                            setMessageBox={setMessageBox}
                            messageSuccessTitle="Service edited"
                            messageSuccessText="This service information was edited with success"
                            messageErrorTitle="Error!"
                            messageErrorText="An error ocurred while editing service"
                        />
                    }
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