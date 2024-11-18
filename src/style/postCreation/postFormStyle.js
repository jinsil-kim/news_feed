import styled from 'styled-components';

export const Container = styled.div`
  width: calc(100% - 260px); /* 사이드바를 고려하여 전체 너비에서 사이드바를 제외한 영역 설정 */
  margin-left: 260px; /* 사이드바의 너비만큼 왼쪽에 공간을 두어 정렬 */
  padding: 20px;
  box-sizing: border-box;

  display: flex; /* Flexbox 사용 */
  flex-direction: column; /* 요소들을 세로로 배치 */
  align-items: center; /* 수평 중앙 정렬 */
  justify-content: center; /* 수직 중앙 정렬 */
  min-height: 100vh; /* 전체 화면 중앙에 위치하도록 높이 설정 */
`;
