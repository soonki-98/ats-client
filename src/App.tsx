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
        </main>
      </div>
    </>
  );
}

export default App;
