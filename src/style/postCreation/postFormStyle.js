import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 630px; /* 다른 컴포넌트들과 동일한 max-width 설정 */
  margin-left: auto;
  margin-right: auto; /* 중앙 정렬 */
  padding: 20px;
  box-sizing: border-box;

  display: flex; /* Flexbox 사용 */
  flex-direction: column; /* 요소들을 세로로 배치 */
  align-items: center; /* 수평 중앙 정렬 */
  justify-content: center; /* 수직 중앙 정렬 */
  min-height: 100vh; /* 전체 화면 중앙에 위치하도록 높이 설정 */
`;