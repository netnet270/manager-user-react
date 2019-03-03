import React, { Component } from 'react';
import DataItem from './DataItem';


class DataTable extends Component {
  render() {
    return (
      <div className="col">
        <table className="table table-hover table-striped table-inverse">
          <thead className="thead-inverse|thead-default">
            <tr><th>STT </th>
              <th>Tên </th>
              <th>Điện thoại</th>
              <th>Quyền</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.dataUser.map((value, key) => (
                <DataItem stt={key + 1} ten={value.ten} sdt={value.sdt} quyen={value.quyen} />
              ))
            }
          </tbody>
        </table>
      </div>
          
        );
  }
}

export default DataTable;