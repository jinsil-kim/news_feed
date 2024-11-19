import { ContentDiv, FeedDiv, HomeDiv, HomeSection } from '../../style/Home/homeStyle';

const Feed = ({ post }) => {
  return (
    <>
      <HomeSection>
        <HomeDiv>
          <img src={post.user_img} alt="" />
          <h3>{post.user_name}</h3>
        </HomeDiv>
        <FeedDiv>
          <img src={post.feed_img} alt="" />
        </FeedDiv>
        <ContentDiv>
          <p>{post.content}</p>
          <span>{post.tag}</span>
        </ContentDiv>
      </HomeSection>
    </>
  );
};

export default Feed;
