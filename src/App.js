import React, { Component } from 'react';
import './App.css';
import Header from './component/Header';
import Search from './component/Search';
import AddUser from './component/AddUser';
import DataTable from './component/DataTable';
import dulieu from './dulieu.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hienThiForm: true,
      dulieu: dulieu,
      tuKhoaTimKiem: '', 
      resultSearch: []
    }
  }

  doiTrangThai = () => {
    this.setState({ hienThiForm: !this.state.hienThiForm, dulieu });
  }

  searchKey = (dl) => {
    this.setState({
      hienThiForm: true,
      dulieu: dulieu,
      tuKhoaTimKiem: dl
    });
  }

  render() {
    var resultSearch = [];
    console.log(this.state.tuKhoaTimKiem);
    this.state.dulieu.forEach(element => {
      if (element.ten.indexOf(this.state.tuKhoaTimKiem) !== -1) {
        resultSearch.push(element);
      }
    })

    console.log(resultSearch);
  
    return (
      <div>
        <Header />
        <div className="searchForm">
          <div className="container">
            <div className="row">
              <Search adduser={() => this.doiTrangThai()}
                hienThiForm={this.state.hienThiForm}
                searchKey={(dl) => this.searchKey(dl)}
              />

              <DataTable dataUser={this.state.dulieu} 
                dataSearch={this.resultSearch}
              />

              <AddUser hienThiForm={this.state.hienThiForm}
                closeForm={() => this.doiTrangThai()}
              />

            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;