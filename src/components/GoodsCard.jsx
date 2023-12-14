function GoodsCard({ image, name, price }) {
  return (
    <div className="goods-card">
      <img src={image} alt="good" />
      <h1>{name}</h1>
      <h3>Price: {price}₴</h3>
    </div>
  );
}

export default GoodsCard;