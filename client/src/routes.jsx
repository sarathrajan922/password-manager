import { createBrowserRouter}  from 'react-router-dom' ;

import App from './App';
import Body from './components/pages/body';
import Error from './common/error';





const AppRouter = createBrowserRouter([
    {
        path: "/",
        Element: <App/>,
        errorElement: <Error/>,
        children: [
            {
                path: '/',
                element: <Body/>,
                
            }
            
           
            
        ]
    }
])

export default AppRouter;