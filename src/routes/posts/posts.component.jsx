import { Navigation, Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Post from '../../components/post/post.component';

import './posts.styles.scss';

const Posts = () => {
    return (
        <div className='posts'>
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
                    <SwiperSlide>
                        <Post 
                            img="https://firebasestorage.googleapis.com/v0/b/unique-beauty-87701.appspot.com/o/services%2Flogo.jpg?alt=media&token=99bfc6b8-ec74-4c84-8e93-cd06722108fa"
                            text="text"
                            title="title"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Post 
                            img="https://firebasestorage.googleapis.com/v0/b/unique-beauty-87701.appspot.com/o/services%2Flogo.jpg?alt=media&token=99bfc6b8-ec74-4c84-8e93-cd06722108fa"
                            text="text"
                            title="title"
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}

export default Posts;