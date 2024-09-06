import { GlobalStyle } from './styles/globalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <header className="header">
          <div>로고</div>
          <div>유저 프로필</div>
        </header>

        <aside className="left-sidebar">
          <nav>
            <ul>
              <li>이력서 관리 대시보드</li>
              <li>이력서 업로드</li>
              <li>사용자 설정</li>
            </ul>
          </nav>
        </aside>

        <main className="main">
          <section className="resume-list">
            <h1>이력서 리스트</h1>
            <ul>
              {/**
               * 클릭하면 이력서 상세 페이지로 이동
               */}
              <li>
                <h2>이력서 1</h2>
                <p>지원자 1 이름</p>
                <p>지원 직무</p>
                <p>이력서 업로드 날짜</p>
                <p>진행 상태 (서류 검토 중, 서류 합격, 불합격)</p>
              </li>
            </ul>
          </section>

          {/**
           * DnD나 버튼 클릭으로 이력서 업로드
           */}
          <section className="upload-resume">
            <button>이력서 업로드</button>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
