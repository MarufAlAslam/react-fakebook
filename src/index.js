import ReactDOM from 'react-dom/client';
import './assets/css/global.css'
import Homepage from './pages/home';
import Posts from './components/posts';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Homepage />
    <Posts />
  </>
);
