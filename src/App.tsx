import { _resumeList } from './__mocks/resumes';
import Resume from './features/resume/ui';
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
          <section className="resume-list">
            <h1>이력서 리스트</h1>
            <ul>
              {_resumeList.map((resume) => (
                <Resume key={resume.id} {...resume} />
              ))}
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
