const ReviewBox = ({name, quote, date, rating, imageUrl, imageAlt}) => (
    <figure className='review-box'>
        <blockquote className='review-box__quote'>{quote}</blockquote>
        <figcaption className='review-box__user'>
            <img src={imageUrl} alt={imageAlt} className='review-box__photo'/>
            <div className='review-box__user-box'>
                <p className='review-box__user-name'>{name}</p>
                <p className='review-box__user-date'>{date}</p>
            </div>
            <div className='review-box__rating'>{rating}</div>
        </figcaption>
    </figure>
);

export default ReviewBox;