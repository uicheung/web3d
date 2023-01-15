import React from 'react';
import { createRoot } from 'react-dom/client';
//编写函数组件
function Hello() {
    return (
        <div>第一个组件</div>
    )
}
//进行渲染
const root = createRoot(document.getElementById("root"));
root.render(<Hello/>);