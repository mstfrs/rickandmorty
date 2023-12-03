import './App.css';
import HomePage from './pages/Home';
import AppRouter from './router/AppRouter';

function App() {
  return (
    <div className="h-[100vh] ">
      <div className='container mx-auto '>
      <AppRouter/>
      </div>
     
    </div>
  );
}

export default App;
