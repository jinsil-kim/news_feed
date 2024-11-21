import { ImgDiv } from '../../style/update/updateStyle';
import { Button } from '../../style/buttonStyle';

const ProfileImgUpdate = ({ onUpLoad, img, handleDeleteImg }) => {
  const handleDeleteConfirmation = () => {
    if (window.confirm('정말로 이미지를 삭제하시겠습니까?')) {
      handleDeleteImg();
    }
  };

  return (
    <div>
      <ImgDiv>
        <img src={img || '/default-profile.png'} alt="" />
        <div>
          <label htmlFor="image-upload">사진 변경</label>
          <input id="image-upload" type="file" accept="image/*" style={{ display: 'none' }} onChange={onUpLoad} />
          <Button fontSize="20px" borderRadius="30px" padding="10px 30px" onClick={handleDeleteConfirmation}>
            삭제
          </Button>
        </div>
      </ImgDiv>
    </div>
  );
};

export default ProfileImgUpdate;
