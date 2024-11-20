import { ImgDiv } from '../../style/upDate/updateStyle';
import { Button } from '../../style/buttonStyle';

const ProfileImgUpdate = ({ onUpLoad, img, handleDeleteImg }) => {
  console.log('img', img);
  return (
    <div>
      <ImgDiv>
        <img src={img} alt="" />
        <div>
          <Button
            fontSize="20px"
            borderRadius="30px"
            padding="10px 20px"
            onClick={() => document.getElementById('image-upload').click()}
          >
            사진 변경
          </Button>
          <input id="image-upload" type="file" accept="image/*" style={{ display: 'none' }} onChange={onUpLoad} />
          <Button fontSize="20px" borderRadius="30px" padding="10px 30px" onClick={handleDeleteImg}>
            삭제
          </Button>
        </div>
      </ImgDiv>
    </div>
  );
};

export default ProfileImgUpdate;
