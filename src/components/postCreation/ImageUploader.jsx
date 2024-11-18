import { useState } from 'react';
import { LabelImage, Photo, Placeholder } from '../../style/postCreation/imageUploaderStyle';

const ImageUploader = ({ onImageChange }) => {
  const [imgPath, setImgPath] = useState(null);

  const previewImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setImgPath(reader.result);
      };

      reader.readAsDataURL(file);
      onImageChange(file);
    }
  };

  return (
    <>
      <LabelImage htmlFor="photo">
        {imgPath ? <Photo src={imgPath} alt="이미지 업로드" /> : <Placeholder>이미지 업로드</Placeholder>}
      </LabelImage>
      <input type="file" id="photo" accept=".png, .jpeg, .jpg" onChange={previewImage} style={{ display: 'none' }} />
    </>
  );
};

export default ImageUploader;
