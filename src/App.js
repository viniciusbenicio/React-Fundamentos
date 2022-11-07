import {BrowserRouter} from 'react-router-dom';
import AppRoutes from './Routes';

import './styles/App.css';

export default function App(){
    
    return (
        <div className="wrapper">
            <BrowserRouter>
          <AppRoutes />
          </BrowserRouter>
        </div>
    );
}