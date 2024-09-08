import ResumeList from './features/resumeList/ui';
import { GlobalStyle } from './styles/globalStyle';
import Gnb from './widgets/gnb/ui';
import Sidebar from './widgets/sidebar/ui';

function App() {
  return (
    <>
      <GlobalStyle />
      <Gnb />
      <div className="App">
        <Sidebar />
        <main className="main">
          <ResumeList />
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
