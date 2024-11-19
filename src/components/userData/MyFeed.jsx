
import styled from 'styled-components';

const MyFeed = ({ post }) => {
  return (
    <div>
      <Div>
        <img src={post.img_url} alt="" />
      </Div>
      <ContentDiv>
        <p>{post.content}</p>
        <span>{post.tags}</span>
      </ContentDiv>
    </div>
  );
};

export default MyFeed;

const Div = styled.div`
  margin-left: 100px;
  img {
    width: 850px;
    height: 450px;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
  }
`;

const ContentDiv = styled.div`
  margin: 40px 0 30px 100px;
  p {
    font-size: 24px;
    margin-bottom: 30px;
    line-height: 1.5;
  }
  span {
    font-size: 20px;
    background-color: pink;
  }
`;
