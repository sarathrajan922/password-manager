import { createBrowserRouter}  from 'react-router-dom' ;
import UserDash from './components/user/dash';
import App from './App';
const AppRouter = createBrowserRouter([
    {
        path: "/",
        Element: <App/>,
        children: [
            {
                path: '/',
                element: <UserDash/>
            }
        ]
    }
])

export default AppRouter;