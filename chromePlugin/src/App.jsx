import { useRoutes } from 'react-router-dom';
import routes from './router/index.jsx'


function App() {
  return (
    <div>
      { useRoutes(routes) }
    </div>
  );
}

export default App;