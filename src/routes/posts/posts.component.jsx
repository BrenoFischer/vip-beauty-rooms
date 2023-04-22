import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MediaQuery from 'react-responsive'

import { getPostsAndDocuments } from "../../utils/firebase";
import { setPosts } from '../../store/posts/posts.action';

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

    const dispatch = useDispatch();

    useEffect(() => {
        async function fetchPosts() {
        const allPosts = await getPostsAndDocuments();
    
        dispatch(setPosts(allPosts));
        }
        
        fetchPosts();
    }, [dispatch]);

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
                <MediaQuery minWidth={1200}>
                    <Swiper 
                        modules={[Navigation, Pagination, A11y]}
                        spaceBetween={50}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                    >
                        { Object.keys(posts).length === 0 ?
                            <div className='posts__no-news'>
                                <h2 className='posts__no-news-title'>No recent news</h2>
                                <p className='posts__no-news-paragraph'>Take a look at our <span>Services</span> and prices below!</p>
                                <p className='posts__no-news-paragraph'>Also make sure to follow us on <Link className='posts__no-news-paragraph--face' to='https://www.facebook.com/profile.php?id=100089288214240'>Facebook</Link> and <Link className='posts__no-news-paragraph--insta' to='https://www.instagram.com/uniquebeautylimerick/'>Instagram </Link></p>
                            </div> 
                        :
                            posts.map(post => {
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
                </MediaQuery>
                <MediaQuery maxWidth={1199}>
                    <Swiper 
                        modules={[Navigation, Pagination, A11y]}
                        spaceBetween={50}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                    >
                        { Object.keys(posts).length === 0 ?
                            <div className='posts__no-news'>
                                <h2 className='posts__no-news-title'>No recent news</h2>
                                <p className='posts__no-news-paragraph'>Take a look at our <span>Services</span> and prices below!</p>
                                <p className='posts__no-news-paragraph'>Also make sure to follow us on <Link className='posts__no-news-paragraph--face' to='https://www.facebook.com/profile.php?id=100089288214240'>Facebook</Link> and <Link className='posts__no-news-paragraph--insta' to='https://www.instagram.com/uniquebeautylimerick/'>Instagram </Link></p>
                            </div> 
                        :
                            posts.map(post => {
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
                </MediaQuery>
            </div>
        </div>
    );
}

export default Posts;