import { createBrowserRouter}  from 'react-router-dom' ;

import App from './App';
import Body from './components/pages/body';




const AppRouter = createBrowserRouter([
    {
        path: "/",
        Element: <App/>,
        children: [
            {
                path: '/',
                element: <Body/>
            }
            
        ]
    }
])

export default AppRouter;