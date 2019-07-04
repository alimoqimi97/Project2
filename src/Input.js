

import React from "react";
import "./Tyt.css";

class Input extends React.Component
{
    // constructor(props)
    // {
        // super(props);

        // var myref = React.createRef();

        // this.sendToBackEnd = this.sendToBackEnd.bind(this);
    // }

    render()
    {
        return (
            {/* <div className="Input" > */},
            <div className="container">
                <div className="jumbotron">
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className=" input-group-text">File path: </span>
                    </div>
                    <input id="path" type="text" className="form-control" placeHolder="Address" />
                    <button className="btn btn-primary start-btn"  >Process</button>
                </div>
                </div>
            </div>
        );
    }

    // getFileAddress()
    // {
    //     console.log(this.refs.myref.nodeValue);
    // }

    // sendToBackEnd(){
    //     var path = this.getFileAddress();
    //     // send file path to backend to process
    // }
}

export default Input;