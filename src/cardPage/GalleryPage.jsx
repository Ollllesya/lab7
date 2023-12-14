import GoodsCard from "../components/GoodsCard";

function Gallery() {
  let data = [
    {
      id: 1,
      name: "Стайлер DYSON HS05 (Long)",
      image: 'https://techhab.store/image/cache/catalog/styler/4esff0qfsrpgufluhyx09spub6bffgyj-700x700.jpg',
      price: 25390,
    },
    {
      id: 2,
      name: "Стайлер Remington AS8606 Curl & Straight Confidence",
      image: 'https://img.moyo.ua/img/gallery/4821/42/1022542_zoom.jpg?1608282017',
      price: 2199,
    },
    {
      id: 3,
      name: "Мультистайлер Rowenta INFINITE LOOKS 14 IN1 CF4231F0",
      image: 'https://content2.rozetka.com.ua/goods/images/big/173824730.jpg',
      price: 1599,
    },
    {
      id: 4,
      name: "Стайлер Shark FlexStyle HD440EU",
      image: 'https://sharkcleaning.com.ua/image/cache/catalog/feny/hd440eu/shark_hd440eu-1180x0.png',
      price: 13999,
    },
    {
      id: 5,
      name: "Набор для укладки REMINGTON AS1220 5в1",
      image: 'https://content1.rozetka.com.ua/goods/images/original/176695676.jpg',
      price: 1399,
    },
    {
      id: 6,
      name: "Стайлер Remington AS7700 Blow Dry and Style Caring",
      image: 'https://toptv.com.ua/image/cache/catalog/productfoto/363776/fen-shchetka-remington-as7700-2-700x700.jpeg',
      price: 1999,
    },
  ];
  return (
    <div>
      <h1>Галерея</h1>
      <div className="gallery">
        {data.map((product) => (
          <GoodsCard
            key={product.id}
            name={product.name}
            image={product.image}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}

export default Gallery;