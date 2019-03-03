import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state ={
            tuKhoa: ''
        }
    }
    
    
    hienThiNutThemMoi =()=>{
        if(this.props.hienThiForm=== true)
            return(
                <div className="button-group">
                    <div className="btn btn-success" onClick ={()=> this.props.adduser()}>Thêm mới user</div>
                </div>
            )
    }

    layTuKhoa =(event) =>{
        this.setState({tuKhoa:event.target.value});
        
    }

   
    render() {
        return (
            <div className="col-12">
                <div className="form-group">
                    <input type="text" className="form-control searchInput mt-1" name id placeholder="Nhập từ khóa" onChange={(event)=> this.layTuKhoa(event)} />
                    <div className="btn btn-info ml-2 timkiem" onClick={()=> this.props.searchKey(this.state.tuKhoa)}>Tìm kiếm</div>
                </div>
                {this.hienThiNutThemMoi()}
                <hr/>
            </div>
            
        );
    }
}

export default Search;