import { useState } from 'react';
import { useSelector } from 'react-redux';
import { v4 } from 'uuid';

import { BiImageAdd } from 'react-icons/bi';

import InputField from '../../components/inputField/inputField.component';
import LoadingSpinner from '../../components/loadingSpinner/loadingSpinner.component';
import CustomButton from '../../components/button/button.component';
import BoxMessage from '../../components/boxMessage/boxMessage.component';
import Footer from '../../components/footer/footer.component';
import SignIn from '../signIn/signIn.component';
import Post from '../../components/post/post.component';

import { uploadImageToStorage, addCollectionAndDocuments } from '../../utils/firebase';

import './addPost.styles.scss';


const defaultFormFields = {
    text: '',
    title: '',
}


const AddPost = () => {
    const currentUser = useSelector((state) => state.user.currentUser);
  
    const [ formFields, setFormFields ] = useState(defaultFormFields);
    const { text, title } = formFields;
    const [ messageBox, setMessageBox ] = useState(false);
    const [ imageUpload, setImageUpload ] = useState(null);
    const [ loading, setLoading ] = useState(false);
    const [ imgUrlPreview, setImgUrlPreview ] = useState('https://firebasestorage.googleapis.com/v0/b/unique-beauty-87701.appspot.com/o/services%2Flogo.jpg?alt=media&token=99bfc6b8-ec74-4c84-8e93-cd06722108fa');
    
  
    const uploadImage = async () => {
      if(!imageUpload) return imgUrlPreview;
  
      const filePath = `posts/${imageUpload.name + v4()}`;
      const url = await uploadImageToStorage(filePath, imageUpload);
  
      return url;
    }


    const handleInputChange = (event) => {
        const { name, value } = event.target;
    
        setFormFields({...formFields, [name]: value});
    }


    const handleImageInputChange = (event) => {
      setImageUpload(event.target.files[0]);
      setImgUrlPreview(URL.createObjectURL(event.target.files[0]));
    }


    const buildItem = (url) => {
      const date = new Date();

      return(
        {
          id: v4(),
          imgUrl: url,
          title: title,
          text: text,
          date: date,
        }
      );
    }
  

    const addPost = async (event) => {
      event.preventDefault();
      setLoading(true);

      const url = await uploadImage();

      const item = buildItem(url);

      await addCollectionAndDocuments('posts', [item]);

      setFormFields(defaultFormFields);
      setLoading(false);

      setMessageBox(true);
      setTimeout(() => setMessageBox(false), 10000);
    }


    return(
      <div className='add-post'>
        { currentUser ?
        <>
          <div className='add-post__container'>
            <div className='add-post__description'>
              <h2 className='add-post__description-title'>Add a new post</h2>
            </div>
            <div className='post-form__wrapper'>
                <form className='post-form__form' onSubmit={addPost}>
                  <h3 className='post-form__form-title'>Fill in the post information</h3>
                  <div className='post-form__form-fields'>
                    <label htmlFor="file-upload" className="post-form__file-upload">
                      <div className='post-form__file-upload-icon'>
                        <BiImageAdd /> 
                      </div>
                        Click here to add a Custom Image
                    </label>
                    <input id="file-upload" type="file" accept='image/*' name='imgUrl' onChange={handleImageInputChange}/>
                    <InputField 
                      required
                      name="title"
                      label="Post Title"
                      onChange={handleInputChange}
                      value={title}
                      type="text"
                    />
                    <InputField 
                      isTextArea={true}
                      required
                      name="text"
                      label="Post text"
                      rows="2"
                      cols="50"
                      onChange={handleInputChange}
                      value={text}
                    />
                  </div>
                  <div className='post-form__button-wrapper'>
                    <div className='post-form__button'>
                      <CustomButton buttonText="Add Post" type='submit' />
                    </div>
                    { loading &&
                      <LoadingSpinner />
                    }
                  </div>
                </form>
                <div className='post-form__preview'>
                  <div className='post-form__preview-wrapper'>
                    <div className='post-form__preview-title-wrapper'>
                      <h3 className='post-form__preview-title'>Preview from the main page</h3>
                    </div>
                    <Post 
                        img={imgUrlPreview}
                        title={title}
                        text={text}
                        preview={true}
                    />
                  </div>
                </div>
              </div>
            { messageBox &&
              <BoxMessage 
                setMessageBox={setMessageBox}
                messageSuccessTitle="Post included"
                messageSuccessText="The post was added with success!"
                messageErrorTitle="Error!"
                messageErrorText="An error has ocurred while adding post"
              />
            }
          </div>
          <Footer />
        </>
        :
          <SignIn />
        }
      </div>
    );
}

export default AddPost;