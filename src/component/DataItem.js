import React, { Component } from 'react';
import dulieu from '../dulieu.json';

class DataItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            status : true
        }
    }

    renderEditDel =() => (
        <div className="btn-group" data-toggle="buttons">
            <div className="btn btn-warning" onClick = {() => this.EditData()} >Sửa</div>
            <div className="btn btn-danger" onClick={() => this.DeleteData()}>Xóa</div>
        </div>
    )

    renderSave =() => (
        <div className="btn-group" data-toggle="buttons">
           <div className="btn btn-success luu" style={{width: '104px'}} onClick={() => this.SaveData()} >Lưu</div>
        </div>
    )

    EditData = () => (
        this.setState({status: false})
    )

    SaveData = () => {
        this.setState({status:true})
    }
    
    DeleteData =()=> {
        console.log(this.props.id);
        const dulieu1 = dulieu.filter(value => value.id !== this.props.id);
        console.log(dulieu1);
        // console.log(dulieu);
    }

    changeOutput = () =>{
        if(this.state.status){
            return this.renderEditDel();
        }
        return this.renderSave();
    }

    quyenShow =() => {
        if (this.props.quyen===1) {
            return "Admin"
        }
        else if (this.props.quyen===2) {
            return "Moderator"
        }
        else return "Normal"
    }

    render() {
        return (
            <tr>
                <td>{this.props.stt}</td>
                <td>{this.props.ten}</td>
                <td>{this.props.sdt}</td>
                <td>
                {
                    this.quyenShow()
                }
    
                </td>
                <td>
                    {this.changeOutput()}
                </td>
            </tr>
        );
    }
}

export default DataItem;