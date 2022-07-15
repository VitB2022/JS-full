export const addImage = (imgSrc, callback) => {
  const imgElem = document.createElement('img');
  imgElem.setAttribute('alt', 'My photo');
  const containerElem = document.querySelector('.page');
  imgElem.src = imgSrc;
  containerElem.append(imgElem);
  const onImageLoaded = () => {
    const { width, height } = imgElem;
    callback(null, { width, height });
  };
  imgElem.addEventListener('load', onImageLoaded);
  imgElem.addEventListener('error', () => callback('Image load fail'));
};
const imgSrc =
  'https://gromcode.s3.eu-central-1.aazonaws.com/front-end/html-css/lesson24/hw1/illustration-window.png';
const onImageLoaded = (error, data) => {
  if (error) {
    console.log(error);
    return;
  }
  const { width, height } = data;
  const sizeElem = document.querySelector('.image-size');
  sizeElem.textContent = `${width} x ${height}`;
};

addImage(
  'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg',
  onImageLoaded,
);
