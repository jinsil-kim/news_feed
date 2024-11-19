import styled from 'styled-components';

export const HomeSection = styled.section`
  left: 450px;
  position: relative;
  margin: 50px 0 80px 0;
  max-width: 1280px;
`;
    
export const HomeDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 30px;
  img {
    border-radius: 50%;
    width: 90px; 
    height: 90px; 
    object-fit: cover; 
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  }
  h3 {
    font-size: 28px;
  }
`;

export const FeedDiv = styled.div`
  margin-left: 100px;
  img {
    width: 850px;
    height: 450px;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
  }
`;

export const ContentDiv = styled.div`
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
