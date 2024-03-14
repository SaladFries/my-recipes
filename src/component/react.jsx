import '../App.css'

const Card = ({ image, title, body, ulist, olist, nutrlist, steplist}) => {
    return (
        <>
            <div className='card'>
                <img src={image} alt='' className='card-iamge' />
                <h2 className='card-title'>{title}</h2>
                <p className='card-body'>{body}</p>
                <p className='card-ulist'>{ulist}</p>
                <h3>Ingredients</h3>
                <p className='card-olist'>{olist}</p>
                <h3>Step-by-step Instructions</h3>
                <p className='card-step'>{steplist}</p>
                <p ckassBane='card-nutrlist'>{nutrlist}</p>
            </div>
        </>
    );
};

export default Card;