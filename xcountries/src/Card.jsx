import './Card.css'
const Card = ({name,img,abbr}) => {

    return (
        <div className='card' >
            <img className='imgbox' src= {img} alt={abbr} />
            <h3>{name}</h3>
        </div>
    )

}

export default Card