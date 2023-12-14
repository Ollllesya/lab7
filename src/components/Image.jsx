import { useState } from "react";

function Image() {
  const [imageVisible, setImageVisible] = useState(true);
  const [imageWidth, setImageWidth] = useState(800);

  const addImage = () => {
    setImageVisible(true);
  };

  const increaseImageSize = () => {
    setImageWidth((prevWidth) => prevWidth + 50);
  };

  const decreaseImageSize = () => {
    if (imageWidth > 50) {
      setImageWidth((prevWidth) => prevWidth - 50);
    }
  };

  const deleteImage = () => {
    setImageVisible(false);
  };

  return (
    <>
      {imageVisible && (
        <img
          width={imageWidth}
          id="city"
          src="https://static.ukrinform.com/photos/2022_05/1652797612-912.jpg"
          alt="irpin'"
        />
      )}
      <div id="controls-img">
        <button onClick={addImage}>Додати</button>
        <button onClick={increaseImageSize}>Збільшити</button>
        <button onClick={decreaseImageSize}>Зменшити</button>
        <button onClick={deleteImage}>Видалити</button>
      </div>
    </>
  );
}

export default Image;