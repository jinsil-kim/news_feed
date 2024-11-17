// src/components/Feed.js
import React from 'react';

import styled from 'styled-components';

const PostContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 20px auto;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

const Username = styled.span`
  font-weight: bold;
`;

const Image = styled.img`
  width: 100%;
  border-bottom: 1px solid #ddd;
`;

const ExplainContent = styled.div`
  padding: 10px;
  margin-right: 10px;
`;

const Content = styled.div`
  padding: 30px;
`;

const Likes = styled.div`
  font-weight: bold;
`;

const Caption = styled.p`
  margin: 5px 0;
`;

const Feed = (props) => {
  const { post } = props;
  return (
    <PostContainer>
      <Header>
        <Avatar src={post.avatarImage} alt="profile" />
        <Username>{post.name}</Username>
        <div>
          <p>{post.ExplainContent}</p>
        </div>
      </Header>
      <Caption>{post.tag}</Caption>
      <Image src={post.feedImage} alt="post" />

      <Content>
        <div>{post.content}</div>
      </Content>
    </PostContainer>
  );
};

export default Feed;
