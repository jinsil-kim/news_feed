import styled from 'styled-components';
export const Section = styled.section`
  left: 450px;
  position: relative;
  margin: 50px 0 80px 0;
  max-width: 1280px;
`;
export const PostHomeDiv = styled.div`
  padding: 20px;
  background-color: #fff;
  margin-bottom: 40px;
`;
export const PostFeedDiv = styled.div`
  margin-left: 125px;
  img {
    text-align: left;
    width: 850px;
    height: 450px;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
  }
`;
// export const PostContentDiv = styled.div`
//   display: inline-block;
//   padding: 5px 10px;
// `;

export const Content = styled.p`
  margin-top: 50px;
  font-size: 25px;
`;
export const Tags = styled.div`
  margin-top: 60px;
  display: flex;
  gap: 10px;
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  span {
    color: #c7c7c7;
    font-size: 14px;
    position: absolute;
    left: 1100px;
  }
`;
export const ProfileImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
`;
export const Nickname = styled.h3`
  font-size: 30px;
  font-weight: 700;
`;
