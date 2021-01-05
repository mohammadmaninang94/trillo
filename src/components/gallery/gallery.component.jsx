import './gallery.styles.scss';

const Gallery = () => (
    <div className='gallery'>
        <figure className='gallery__item'>
            <img src='img/hotel-1.jpg' alt='Hotel 1' className='gallery__photo' />
        </figure>
        <figure>
            <img src='img/hotel-2.jpg' alt='Hotel 2' className='gallery__photo' />
        </figure>
        <figure>
            <img src='img/hotel-3.jpg' alt='Hotel 3' className='gallery__photo' />
        </figure>
    </div>
);

export default Gallery;