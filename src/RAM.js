// created at 9:12 in 1398/03/22        //

/// <reference path="E:/VSCode_projects/project2/typings/globals/jquery/index.d.ts" />

import React from "react";
import "./Tyt.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import $ from "../node_modules/jquery/dist/jquery.min.js";

// use jquery in react : //
// const $ = window.$;

class RAM extends React.Component
{
    constructor(props){
        super(props);

        this.calculatePercent = this.calculatePercent.bind(this);
    }

    componentDidMount()
    {
        $("#prg").width(this.calculatePercent());
        // document.getElementById("prg").style.width(this.calculatePercent());
    }

    render(){
        return (
            <div className="container" >
                <div className="ram" >
                    <h3 className="font-italic text-center text-dark border border-light rounded font-weight-bold">RAM</h3>
                    <div className="progress" >
                        <div className="progress progress-bar progress-bar-striped progress-bar-animated" id="prg"></div>
                    </div>
                    <div className="font-italic text-center font-weight-bold text-info" > {this.calculatePercent() + "% Used"} </div>
                    <p className="font-italic text-center font-weight-bold text-dark" > {this.props.instCounter + " Instructions"} </p>
                </div>
            </div>
        );
    }

    calculatePercent(){
        return ((this.props.used / 16000) * 100);
    }

    // setProgressValue()
    // {
    //     $("#prg").width(this.calculatePercent());
    // }
}

export default RAM;

