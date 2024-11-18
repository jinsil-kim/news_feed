import { useState } from 'react';
import ImageUploader from './ImageUploader';
import PostInputField from './PostInputField';
import PostSubmitButton from './PostSubmitButton';
import TagSelector from './TagSelector';
import { Container } from '../../style/postCreation/postFormStyle';

const PostForm = () => {
  const [image, setImage] = useState(null);
  const [content, setContent] = useState('');
  const [tags, setTags] = useState([]);

  const handleImage = (file) => {
    setImage(file);
  };

  const handleContent = (newContent) => {
    setContent(newContent);
  };

  const handleAddTag = (newTag) => {
    setTags([...tags, newTag]);
  };

  const handleRemoveTag = (tagRemove) => {
    setTags(tags.filter(tag => tag.text !== tagRemove.text));
  };

  const handleSubmit = () => {
    // 콘솔 출력 - 성공
    console.log('Content:', content);
    console.log('Image:', image);
    // Supabase 데이터 저장 로직 들어갈 곳 //
  };

  return (
    <Container>
      <ImageUploader onImageChange={handleImage} />
      <PostInputField content={content} onContentChange={handleContent} />
      <TagSelector tags={tags} onAddTag={handleAddTag} onRemoveTag={handleRemoveTag} />
      <PostSubmitButton onSubmit={handleSubmit} />
    </Container>
  );
};

export default PostForm;
