import UserRoot from '../Layout/UserRoot/index'
import Basket from '../Pages/Basket'
import Detail from '../Pages/DetailPage'
import Favorite from '../Pages/Favorite'
import Home from '../Pages/Home/index'

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
      }
]

export default routes