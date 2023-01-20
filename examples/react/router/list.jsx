import { useRoutes } from 'react-router-dom'
import { lazy } from 'react'
// 因为Layout是公共部分 所以预加载
 import ReactMode from '../components/ReactMode'

console.log('ReactMode');
console.log(ReactMode);
function GetListRoutes(){
    const routes = useRoutes([
        {
            path: "/",
            element: <ReactMode />,
        },
        {
            path: "/base",
            element: <ReactMode />,
        },
        {
            path:'/a', 
            element: <div>aaa</div>
        }

    ]);
    return routes
  }
  

export default GetListRoutes
