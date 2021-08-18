
const FlowerCard = ({ flower }) => {
    return (
        <div>
            <img src={flower.img_url} alt="flower" />
            <h3>{flower.name}</h3>
        </div>
    )
}

export default FlowerCard;