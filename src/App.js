
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Task from './Task';

const textAlignRowStyle = {
  textAlign: "row" ,
}

function App() {
  return (
    <div className="content">
      <Header></Header>
     

      <div className="Todo-list">
        <Task></Task>
        <Task></Task>
        <Task></Task>
        

      </div>

      
      <Footer></Footer>
    </div>
  );
}

export default App;
