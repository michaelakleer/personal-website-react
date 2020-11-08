import React from "react";
import HTML from "./HTML.png"
import CSS from "./CSS.png"
import Javascript from "./Javascript.png"
import Editor from "./Editor.png"
import API from "./API.png"
import GitHub from "./GitHub.png"
import Bootstrap from "./Bootstrap.png"
import Hosting from "./Hosting.png"
import ReactLogo from "./React.png"


export default function Technologies() {
    return(
        <img src={HTML} alt="" width={360}> </img>
        <img src={CSS} alt="" width={360}> </img>
        <img src={Javascript} alt="" width={360}></img>
        <img src={Editor} alt="" width={360}></img>
        <img src={API} alt="" width={360}></img>
        <img src={GitHub} alt="" width={360}></img>
        <img src={Bootstrap} alt="" width={360}></img>
        <img src={Hosting} alt="" width={360}></img>
        <img src={ReactLogo} alt="" width={360}></img>
    )
}