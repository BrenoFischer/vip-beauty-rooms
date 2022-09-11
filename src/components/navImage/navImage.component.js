import './navImage.styles.scss';

function NavImage({img, alt, special=false}) {
    const className = special ? 'special-item' : 'image-item'; 

  return (
    <li className={className}>
        <img src={img} alt={alt} />
    </li>
  );
}

export default NavImage;
