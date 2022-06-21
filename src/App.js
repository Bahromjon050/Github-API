import './App.css';
import AOS from 'aos'
import { Github } from './components/Malumot';
AOS.init()
function App() {
  return (
    <>
      <div className="padding">
        <Github />
      </div>
    </>
  );
}

export default App;
