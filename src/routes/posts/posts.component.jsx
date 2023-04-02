import { useSelector } from 'react-redux';

import { MdAddCircleOutline } from 'react-icons/md';

import { Link } from 'react-router-dom';

import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import Post from '../../components/post/post.component';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './posts.styles.scss';

const Posts = () => {
    const currentUser = useSelector((state) => state.user.currentUser);
    const posts = useSelector((state) => state.posts.posts);

    return (
        <div className='posts'>
            { currentUser &&
                <div className='add-post'>
                    <Link to='/add-post'>
                        <div className='add-post__icon'>
                            <MdAddCircleOutline />
                        </div>
                    </Link>
                    <div className='add-post__tooltip'>
                        <span className='add-post__tooltip-text'>Click here to add a new post</span>
                    </div>
                </div>
            }

            <div className='posts__title-container'>
                {/* <h1 className='posts__title'>News</h1> */}
            </div>
            <div className='posts__carousel'>
                <Swiper 
                    modules={[Navigation, Pagination, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                >
                    {/* <SwiperSlide>
                        <Post 
                            img="https://firebasestorage.googleapis.com/v0/b/unique-beauty-87701.appspot.com/o/posts%2Fwe-are-hiring.png?alt=media&token=4492a36b-95a5-400b-a087-41d4a0ac0873"
                            text="Looking for qualified eyelashes and threading and Waxing person, three days a week work"
                            title="We are hiring!"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Post 
                            img="https://firebasestorage.googleapis.com/v0/b/unique-beauty-87701.appspot.com/o/posts%2Fnails1.jpg?alt=media&token=89a848e5-78b6-486d-8546-1852db010227"
                            text='Full set of gel nail extensions...&#10;Done by molly&#10;Pop in for appointment only 35.00 euro'
                            title="Gel Nail Extensions"
                        />
                    </SwiperSlide> */}
                    { posts.map(post => {
                        const { imgUrl, text, title, id } = post;

                        return(
                            <SwiperSlide key={id}>
                                <Post 
                                    id={id}
                                    img={imgUrl}
                                    text={text}
                                    title={title}
                                />
                            </SwiperSlide>
                        )
                    })
                    }
                </Swiper>
            </div>
        </div>
    );
}

export default Posts;