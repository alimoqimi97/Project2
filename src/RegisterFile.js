
import React from "react";

class RegisterFile extends React.Component
{
    constructor(props)
    {
        super(props);

        this.insertRegistersValue = this.insertRegistersValue.bind(this);
        this.registersPercentUse = this.registersPercentUse.bind(this);
    }

    render()
    {
        return (
            {/* <div className="Register-file" > */},
            <div className=" container">
                <div className="Register-file">
                    <h3 className="font-italic text-center text-dark border border-light rounded font-weight-bold" >RegisterFile</h3>
                    <p className="text-capitalize text-center font-italic font-weight-bolder text-info" > {"Registers Use: " + this.registersPercentUse() + "%"} </p>
                    <ul className="list-group"> { this.insertRegistersValue().map(function(e,index){
                        return (<li className="list-group-item text-center font-italic font-weight-bolder" key={index} >{e}</li>);
                        }) } 
                    </ul>
                </div>
            </div>
        );
    }

    registersPercentUse()
    {
        return (((this.insertRegistersValue().length - 1) / 16) * 100);
    }

    insertRegistersValue()
    {
        return this.props.RegVals.split(";");
    }
}

export default RegisterFile;
