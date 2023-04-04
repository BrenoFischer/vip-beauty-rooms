import { useState } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';

import { useSelector, useDispatch } from 'react-redux';

import { setPosts } from '../../store/posts/posts.action';
import { deletePostDocument, getPostsAndDocuments } from '../../utils/firebase';

import CustomButton from '../button/button.component';

import './post.styles.scss';

const Post = ({title, text, img, id, preview=false}) => {
    const currentUser = useSelector((state) => state.user.currentUser);
    const [ modalOpen, setModalOpen ] = useState(false);
    const dispatch = useDispatch();


    const deletePost = () => {
        setModalOpen(true);
      }
    
    
      const Modal = () => {
        const onCancel = () => {
          setModalOpen(false);
        }
    
        const onConfirm = async () => {
          await deletePostDocument(id);
          setModalOpen(false);
          const allPosts = await getPostsAndDocuments();
          dispatch(setPosts(allPosts));
        }
    
        return(
          <div className='modal'>
            <h2 className='modal__title'>Are you sure you want to delete this post?</h2>
            <div className='modal__buttons-container'>
              <div className='modal__button-wrapper'>
                <CustomButton 
                  buttonText="Yes"
                  onClickAction={onConfirm}
                />
              </div>
              <CustomButton 
                buttonText="No"
                secondaryStyle={true}
                onClickAction={onCancel}
              />
            </div>
          </div>
        );
    }


    return(
        <div className='post'>
            <div className='post__title-wrapper'>
              <h2 className='post__title'>{title}</h2>
            </div>
            <div className='post__image-container'>
                <img className='post__image' src={img} alt={title} />
            </div>
            <div className='post__description'>
                {/* <h2 className='post__title'>{title}</h2> */}
                <p className='post__text'>{text}</p>
            </div>
            { currentUser && !preview &&
                <div className='actions-container'>
                    <div className='delete-container' onClick={deletePost}>
                        <AiOutlineDelete />
                    </div>
                </div>
            }
            { modalOpen && 
                <Modal />
            }
        </div>
    );
}

export default Post;