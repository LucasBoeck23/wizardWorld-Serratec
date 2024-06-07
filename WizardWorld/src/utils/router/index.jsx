import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Login from "../../pages/Login/index.jsx";
import Gryffindor from "../../pages/Gryffindor/index.jsx";
import Slytherin from "../../pages/Slytherin/index.jsx";
import Ravenclaw from "../../pages/Ravenclaw/index.jsx";
import Hufflepuff from "../../pages/Hufflepuff/index.jsx";
import Potion from "../../pages/Potion/index.jsx";
// import Spell from "../../pages/Spell/index.jsx"; 
// import Quidditch from "../../pages/Quidditch/index.jsx";
import Founders from "../../pages/Founders/index.jsx";  

export const router = createBrowserRouter([
    {
        path:"/",
        element:<Login />,
    },
    {
        path:"/gryffindor",
        element:<Gryffindor/>,
    },
    {
        path:"/slytherin",
        element:<Slytherin/>,
    },
    {
        path:"/ravenclaw",
        element:<Ravenclaw/>,
    },
    {
        path:"/hufflepuff",
        element:<Hufflepuff/>,
    },
    {
        path:"/potion",
        element:<Potion/>,
    },
    // {
    //     path:"/spell",
    //     element:<Spell/>,
    // },
    // {
    //     path:"/quidditch",
    //     element:<Quidditch/>,
    // },
    {
        path:"/founders",
        element:<Founders/>,
    }
]);