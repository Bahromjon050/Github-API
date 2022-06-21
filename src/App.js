import './App.css';
import AOS from 'aos'
import { Account, Navbar } from './components/All';
import ResponsiveDrawer from './components/Mui';
import { Batafsil } from './components/Youtube';
import { Github } from './components/Malumot';
AOS.init()
function App() {
  return (
    <>
      <div className="padding">
        {/* <Navbar /> */}
        {/* <Batafsil /> */}
        <Github />
      </div>
    </>
  );
}

export default App;
