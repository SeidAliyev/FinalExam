import UserRoot from '../Layout/UserRoot/index'
import Basket from '../Pages/Basket'
import Detail from '../Pages/DetailPage'
import Favorite from '../Pages/Favorite'
import Home from '../Pages/Home/index'
import Add from '../Pages/Add/index'

const routes =[
    {
        path: "/",
        element: <UserRoot/>,
        children:[{
            path: "/",
            element: <Home/>,
        },
        {
            path: "/detail/:id",
            element: <Detail/>,
        },
        {
            path: "/favorite",
            element: <Favorite/>,
        },
        {
            path: "/basket",
            element: <Basket/>,
        },
    ]
      },
      {
        path: "/",
        element: <UserRoot/>,
        children:[{
            path: "/admin",
            element: <Add/>,
        },
        
    ]
      }
]

export default routes