import React from "react";
import ReactDOM from 'react-dom/client';
import Routing from "./component/Routing";
//ReactDOM.render(<Routing/>,document.getElementById('root'))
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<Routing/>)