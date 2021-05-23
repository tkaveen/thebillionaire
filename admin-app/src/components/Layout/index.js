import React from "react";
import Header from "../Navbar/Navbar";

const Layout = (props)=>{
    return(
        <>
        <Header/>
        {props.children}
        </>
    )
}

export default Layout;