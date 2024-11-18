import styled from 'styled-components'
const ProfileName = styled.div`
  border: 1px solid red;
`
// 수정을 안내하는 박스 영역
const UpdateBox = styled.div`
border: 1px solid black;
width: 500px;
height: 500px;
margin: 20px auto;
   display: flex;
   
`
const UserInfo = styled.div`
    border: 1px solid gray;
    border-radius: 8px;
    box-shadow: 1px 1px 1px 1px gray;
    width: 500px;
    height: 150px;
    margin-top:  20px;
`
// 닉네임 변경과 비밀번호 변경 영역
const PushBox = styled.div`
    font-size: 20px;
    width: 500px;
    height: 100px;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    justify-content: center;
`
// 버튼 스타일링 
const ButtonStyled = styled.button`
    width: 150px;
    height: 50px;
    margin: 20px auto;
    margin-left: 54%;
    border: none;
    background-color: black;
    border-radius: 8px;
    font-size: 20px;
    color: white;
`
// 미니 버튼 컨트롤 
const ControlMiniButtonStyled = styled.div`
    width: 300px;
    height: 100px;
    margin: 20px auto;
    margin-left: 20%;
    display:flex;
`
const MiniButtonStyled = styled.button`
    font-size: 20px;
    margin-left: 10px;
    height: 40px;
    margin-top: 30px;
    border: 1px solid gray;
    border-radius: 5px;
    cursor: pointer;
`
// 사용자 프로필 사진(원)
const ControlCircle = styled.div`
    display: flex;
    align-items: center;
    margin-right: 20px;
`
const Circle = styled.div`
    width: 100px;
    height: 100px;
    border: 1px solid gray;
    border-radius: 50%;
    transition: all 0.3s ease;
    &:hover{
        transform: scale(1,1);
        background-color: gray;
        box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    }
    
`
const UpdateProfile = () => {
    const data = [
        { id: 1, label: "닉네임 변경" },
        { id: 2, label: "비밀번호 변경" },
      ];
      const inputButtonWorld = ["사진 변경", "삭제"]
    return (
      <div>
        <ProfileName>프로필 설정</ProfileName>
        {/* <Sidebar/> */}
        <UpdateBox>
          <UserInfo>
            <ControlMiniButtonStyled>
            <ControlCircle>
                <Circle/>
                </ControlCircle>
            {inputButtonWorld.map((world, index)=>{
              return <MiniButtonStyled key={index}>{world}</MiniButtonStyled>
            })}
            </ControlMiniButtonStyled>
          
          
          </UserInfo>
         
          {data.map(({ id, label }) => {
            return (
              <PushBox key={id}>
                {label}
                <input type="text" style={{height:"30px"}}/>
              </PushBox>
            );
          })}
        </UpdateBox>
        <ButtonStyled>저장하기</ButtonStyled>
      </div>
    );
  };

export default UpdateProfile