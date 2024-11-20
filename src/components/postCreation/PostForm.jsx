import { useState, useEffect } from 'react';
import ImageUploader from './ImageUploader';
import PostInputField from './PostInputField';
import PostSubmitButton from './PostSubmitButton';
import TagSelector from './TagSelector';
import { Container } from '../../style/postCreation/postFormStyle';
// supabase
import { supabase } from '../../supabase/supabaseClient';

const PostForm = () => {
  const [image, setImage] = useState(null);
  const [content, setContent] = useState('');
  const [tags, setTags] = useState([]);
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user }
      } = await supabase.auth.getUser();
      setUser(user);
    };
    fetchUser();
  }, []);

  const handleImage = (file) => {
    setImage(file);
  };

  const handleContent = (newContent) => {
    setContent(newContent);
  };

  const handleAddTag = (newTag) => {
    setTags([...tags, newTag]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!content) {
      alert('내용을 입력하세요.');
      return;
    } // 내용 없으면 alert 띄우고 종료

    if (!user) {
      alert('로그인 후 작성해 주세요.');
      return;
    }

    // 이미지 업로드하기
    let imageUrl = null;
    if (image) {
      const fileName = `post_${Date.now()}`;
      const { error: imgError } = await supabase.storage.from('images').upload(fileName, image);

      if (imgError) {
        console.error('Image upload failed:', imgError);
        alert('이미지를 업로드하지 못했습니다.');
        return;
      }

      imageUrl = supabase.storage.from('images').getPublicUrl(fileName).data.publicUrl;
      if (imageUrl) console.log('Generated image URL:', imageUrl); // 이미지 URL 확인용 출력 - 성공
    }

    // 게시글 업로드하기
    const { error: postError } = await supabase
      .from('posts')
      .insert([{ img_url: imageUrl, content, tags: tags.map((tag) => tag.text), user_id: user.id }]);

    if (postError) {
      console.error('Failed to create a post', postError);
      alert('게시글을 업로드하지 못했습니다.');
    } else {
      alert('게시글이 성공적으로 업로드되었습니다.');
      setContent('');
      setTags([]);
      setImage(null);
    }

    // 콘솔 출력 - 성공
    console.log('Content:', content);
    console.log('Image:', image);
  };

  return (
    <Container>
      <ImageUploader onImageChange={handleImage} />
      <PostInputField content={content} onContentChange={handleContent} />
      <TagSelector tags={tags} onAddTag={handleAddTag} />
      <PostSubmitButton onSubmit={handleSubmit} />
    </Container>
  );
};

export default PostForm;
