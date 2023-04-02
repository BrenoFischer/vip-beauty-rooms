
import './post.styles.scss';

const Post = ({title, text, img}) => {
    return(
        <div className='post'>
            <div className='post__image-container'>
                <img className='post__image' src={img} alt={title} />
            </div>
            <div className='post__description'>
                <h2 className='post__title'>{title}</h2>
                <p className='post__text'>{text}</p>
            </div>
        </div>
    );
}

export default Post;