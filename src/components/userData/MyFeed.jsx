import { supabase } from '../../supabase/supabaseClient';
import { ButtonDiv, ContentDiv, ImageDiv, StyledLink } from '../../style/myFeedStyle/myPageStyle';
import { Tag } from '../../style/postCreation/tagSelectorStyle';

const tagColors = [
  '#FFB3BA',
  '#FFDFBA',
  '#FFFFBA',
  '#BAFFC9',
  '#BAE1FF',
  '#E0BBE4',
  '#FFB7B2',
  '#FFDAC1',
  '#B5EAD7',
  '#C7CEEA'
];

const MyFeed = ({ post, setPosts }) => {
  const deleteFeed = async () => {
    // 확인하는 절차
    if (confirm('정말로 삭제하시겠습니까?')) {
      await supabase.from('posts').delete().eq('id', post.id);
      setPosts((prev) => prev.filter((p) => p.id !== post.id));
    }
  };
  return (
    <div>
      <ButtonDiv>
        <StyledLink to={`/feed/${post.id}/update`}>게시글 수정</StyledLink>
        <button onClick={deleteFeed}>게시글 삭제</button>
      </ButtonDiv>
      <ImageDiv>
        <img src={post.img_url} alt="" />
      </ImageDiv>
      <ContentDiv>
        <p>{post.content}</p>
        {post.tags.map((tag) => (
          <Tag key={tag} color={tagColors[Math.floor(Math.random() * tagColors.length)]}>
            {tag}
          </Tag>
        ))}
      </ContentDiv>
    </div>
  );
};

export default MyFeed;
