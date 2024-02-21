import './App.css';
import TopNavigation from './components/TopNavigation';
import TodoList from './components/TodoList';
import AboutPage from './components/AboutPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
    
    <div className='container-fluid'>
    <BrowserRouter>
    <TopNavigation></TopNavigation>
      <Routes>
        
        <Route path="" element={<TodoList />}/>
        <Route path="about" element={<AboutPage />}/>
        
      </Routes>
    </BrowserRouter>
    </div>
    </>
    
  );
}

export default App;
