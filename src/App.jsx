
import './App.css';
// import Home from './components/Home';
// import NavigationBar from './components/NavigationBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
// import Login_2 from './components/Login_2';
import DragDrop from './components/DragDrop';
import AuthProvider from './Context/AuthContext';
import CreateSurvey from './components/CreateSurvey';
// import SurveyGrid from './components/SurveyGrid';

function App() {
  const item = ["1","2","2","3"];
  return (
    <div className="App">
      
      {/* <Basic question="Overall, how satisfied are you with communications in your company?" option1="Satisfied" option2="Neutral" option3="Dissatisfied"/>
      <Basic question="Which best describes your impression of communications within your company?" option1="Fully informed" option2="Adequately informed" option3="Doesn't much informed"/>
      <Basic question="How do you feel about information recieve"  option1="I can almost always believe it." option2="I can usually believe it" option3="I usually can't believe it"/> */}
      
      <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/dragdrop" element={<DragDrop item={item}/>}/>
          <Route path="/createsurvey" element={<CreateSurvey/>}/>
        </Routes>
      </BrowserRouter>

      </AuthProvider>
      
     </div>
  );
}

export default App;
