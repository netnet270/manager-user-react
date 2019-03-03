import React, { Component } from 'react';

class AddUser extends Component {
    kiemtratrangthai = () => {
        if(this.props.hienThiForm === false)
            return (
                <div className="col">
                    <div className="card border-primary">
                        <h5 className="card-header">Thêm mới user<span className="fl-right close" onClick={()=> this.props.closeForm()}>x</span></h5>
                        <div className="card-body">
                            <div className="form-group">
                                <label htmlFor>Tên</label>
                                <input type="text" name id className="form-control" placeholder="Nhập tên" aria-describedby="helpId" />
                                <label htmlFor>Điện thoại</label>
                                <input type="text" name id className="form-control" placeholder="Nhập phone" aria-describedby="helpId" />
                                <label htmlFor>Quyền</label>
                                <select className="form-control" name id>
                                    <option>Chọn quyền </option>
                                    <option>Admin</option>
                                    <option>Moderator</option>
                                    <option>Normal</option>
                                </select>
                                <div className="btn btn-info btn-block mt-3 them">Thêm</div>
                            </div>
                        </div>
                    </div>
                </div>
            )
    }
    render() {
        return (
           <div>
                {this.kiemtratrangthai()}
            </div>
          
        );
    }
}

export default AddUser;