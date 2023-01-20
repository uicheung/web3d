import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'
// import {GetListRoutes} from './router/index.jsx'
import GetListRoutes from './router/list.jsx'
import { BrowserRouter as Router } from 'react-router-dom';
//编写函数组件
function Hello() {
    return (
        <Router>
           <GetListRoutes />
        </Router>

    )
}
//进行渲染
const root = createRoot(document.getElementById("root"));
root.render(<Hello/>);