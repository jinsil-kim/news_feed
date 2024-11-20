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

export const PostContentDiv = styled.div`
  display: inline-block;
  background-color: #f1f1f1;
  padding: 5px 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  border-radius: 20px;
  font-size: 14px;
  color: #555;
  transition: background-color 0.3s ease;
`;
