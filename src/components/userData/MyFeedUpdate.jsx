import { useEffect, useState } from 'react';
import { supabase } from '../../supabase/supabaseClient';
import { useParams, useNavigate } from 'react-router-dom';
import {
  ContainerDiv,
  ContentInput,
  FeedChangeButton,
  ImageDiv,
  InputForm,
  TagInputDiv
} from '../../style/myFeedStyle/myFeedUpdateStyle';
import { ContentDiv } from '../../style/myFeedStyle/myPageStyle';
import { FaFileImage } from 'react-icons/fa';

function MyFeedUpdate() {
  // url에서 id 가져오는 코드
  const { id } = useParams();
  const navigate = useNavigate();

  const [content, setContent] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [tag, setTag] = useState('');
  const [tags, setTags] = useState([]);

  // 2. input 창을 만들어 초기 값을 넣어준다
  // 3. 수정 후 수정 버튼을 누르면 수정되고, 다시 mypage로 이동한다.

  useEffect(() => {
    // 1. post id를 이용해서 게시물 데이터를 가져온다
    const getPost = async () => {
      const { data, error } = await supabase.from('posts').select().eq('id', id);
      if (data.length > 0) {
        console.log(data);
        setContent(data[0].content);
        setImgUrl(data[0].img_url);
        setTags(data[0].tags);
      }
    };
    getPost();
  }, []);

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onChangeTag = (e) => {
    setTag(e.target.value);
  };

  const onAddTag = () => {
    setTags((prev) => [...prev, tag]);
    setTag('');
  };

  const onDeleteTag = (index) => {
    setTags((prev) => prev.filter((_, idx) => idx !== index));
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // 이미지 미리보기용 코드
    const reader = new FileReader();
    reader.onload = () => setImgUrl(reader.result); // 미리보기 URL 설정
    reader.readAsDataURL(file);

    // supabase storage에 업로드
    const uniqueFileName = `${Date.now()}-${file.name}`; // 파일 이름 중복 방지를 위한 고유 이름 생성
    const { data, error } = await supabase.storage.from('images').upload(uniqueFileName, file);

    if (error) {
      console.error('Error uploading image:', error.message); // 업로드 실패 시 로그 출력
      return null; // 실패 시 null 반환
    }

    const { data: imageData } = supabase.storage.from('images').getPublicUrl(data.path);

    if (imageData.publicUrl) {
      setImgUrl(imageData.publicUrl);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase
      .from('posts')
      .update({
        content,
        img_url: imgUrl, // storage 업로드 실패 시 커버가 안됨
        tags
      })
      .eq('id', id);

    if (error) {
      return alert(error.message);
    }
    alert('성공~');
    navigate('/mypage');
  };

  return (
    <ContainerDiv>
      <InputForm>
        <ContentInput placeholder="게시글 수정" value={content} onChange={onChangeContent} />
        <ImageDiv>
          <img src={imgUrl} />
          <br />
          <label htmlFor="img-url">
            <FaFileImage />
            이미지 선택
          </label>
          <input type="file" id="img-url" style={{ display: 'none' }} onChange={handleImageUpload} />
        </ImageDiv>
        <TagInputDiv>
          <input placeholder="태그 수정" onChange={onChangeTag} value={tag} />
          <button type="button" onClick={onAddTag}>
            추가
          </button>
          <br />
          {tags.map((tag, index) => (
            <div key={tag}>
              {tag}{' '}
              <label type="button" onClick={() => onDeleteTag(index)}>
                X
              </label>
            </div>
          ))}
        </TagInputDiv>
        <FeedChangeButton onClick={onSubmit}>피드 변경</FeedChangeButton>
      </InputForm>
    </ContainerDiv>
  );
}

export default MyFeedUpdate;
