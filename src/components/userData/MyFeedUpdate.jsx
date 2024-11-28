import { useEffect, useState } from 'react';
import { supabase } from '../../supabase/supabaseClient';
import { useParams, useNavigate } from 'react-router-dom';
import {
  ContainerDiv,
  ContentInput,
  FeedChangeButton,
  ImageDiv,
  InputForm,
  TagDiv,
  TagInputDiv
} from '../../style/myFeedStyle/myFeedUpdateStyle';
import { ImFinder } from 'react-icons/im';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { Tag } from '../../style/postCreation/tagSelectorStyle';
import { tagColors } from '../../style/tagColors';

function MyFeedUpdate() {
  // url에서 id 가져오는 코드
  const { id } = useParams();
  const navigate = useNavigate();

  // TODO: 초기값을 객체로 변환해보기
  // ex)
  // const [values, setValues] = useState({
  //   content: '',
  //   imgUrl: '',
  //   tag: ''
  // });

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
    // TODO: dependency array에 id 추가
  }, [id]);

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

  // TODO: 스토리지에 바로 올리면 불필요하게 용량이 채워지는 문제가 있음
  // 하지만 이 방법도 많이 사용은 함
  // onChange 시에는 화면에만 보이고, 제출 시에 실제 업로드할 수도 있음
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // 이미지 미리보기용 코드
    // TODO: 이때 setImagUrl에 들어가는 데이터는 임시 url이라 아래에서 실패하면 잘못된 url이 db에 들어가지는 문제가 있음
    // 그래서 preview url을 state로 따로 두는 것도 방법
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

    // TODO: data 안쓰면 지우기
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
    <>
      <ContainerDiv>
        <InputForm>
          <div>
            <ContentInput placeholder="게시글 수정" value={content} onChange={onChangeContent} />
          </div>
          <ImageDiv>
            <img src={imgUrl} />
            <br />
            <label htmlFor="img-url">
              <ImFinder />
              Finder
            </label>
            <input type="file" id="img-url" style={{ display: 'none' }} onChange={handleImageUpload} />
          </ImageDiv>
          <TagInputDiv>
            <input placeholder="태그 수정" onChange={onChangeTag} value={tag} />
            <button type="button" onClick={onAddTag}>
              추가
            </button>
          </TagInputDiv>
          <TagDiv>
            {tags.map((tag, index) => (
              <Tag key={tag} color={tagColors[Math.floor(Math.random() * tagColors.length)]}>
                {tag}{' '}
                <label type="button" onClick={() => onDeleteTag(index)}>
                  <IoCloseCircleOutline style={{ color: 'red' }} />
                </label>
              </Tag>
            ))}
          </TagDiv>
          <FeedChangeButton type="button" onClick={onSubmit}>
            피드 변경
          </FeedChangeButton>
        </InputForm>
      </ContainerDiv>
    </>
  );
}

export default MyFeedUpdate;
