# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# **WOD (Workout Of the Day) - 오운완**

### **프로젝트 개요**
WOD(Workout Of the Day)는 사용자가 자신의 운동 기록을 매일 업데이트하고 다른 사용자와 건강 정보를 공유할 수 있는 플랫폼입니다.  
이 프로젝트는 운동 목표를 설정하고, 친구들과 공유하며 동기부여와 참여를 자연스럽게 유도하는 것을 목표로 합니다.

---

# **WOD (Workout Of the Day) - 오운완**

### **프로젝트 개요**
WOD(Workout Of the Day)는 사용자가 자신의 운동 기록을 매일 업데이트하고 다른 사용자와 건강 정보를 공유할 수 있는 플랫폼입니다.  
이 프로젝트는 운동 목표를 설정하고, 친구들과 공유하며 동기부여와 참여를 자연스럽게 유도하는 것을 목표로 합니다.

---

## **목차**
1. [기술 스택](#기술-스택)  
2. [주요 기능](#주요-기능)

---

### **기술 스택**
- **Frontend**: React  
  사용자 인터페이스를 구축하는 프론트엔드 프레임워크로, 컴포넌트 재사용과 상태 관리를 통해 UI를 효율적으로 관리합니다.
  
- **State Management**: Context API  
  전역 상태 관리를 통해 뉴스피드, 사용자 정보 등의 데이터를 효율적으로 관리합니다.
  
- **Database**: Supabase  
  실시간 데이터베이스로 운동 기록 및 건강 정보를 동기화하고, 사용자 피드 업데이트를 지원합니다.
  
- **Styling**: Styled-components  
  CSS-in-JS 접근 방식을 사용하여 컴포넌트 단위의 스타일링을 효율적으로 관리합니다.

---

### **주요 기능**
1. **회원 관리**  
   - 사용자 로그인 및 회원가입 기능 제공  
   - 개인 프로필 설정 가능  

2. **게시글 관리 (CRUD)**  
   - 사용자 운동 기록 및 건강 정보 게시글 작성  
   - 게시글 수정 및 삭제 가능  
   - 사용자의 개인 게시글은 "마이 페이지"에서 관리 가능  

3. **공유 및 소통**  
   - 홈 화면에서 운동 기록 및 건강 정보를 뉴스피드 형태로 공유  
   - 다른 사용자와 실시간으로 소통 및 공유  
