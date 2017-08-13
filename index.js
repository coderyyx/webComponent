import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Table from './components/table/index.js';
require('./components/style/index.css');

class Root extends Component {
    constructor (props, context) {
        super(props, context)
        this.state={};
        this.ondbclick=this.ondbclick.bind(this);
    }
    ondbclick(row){
        console.log(row);
        
    }
    render () {
        let dataSource=[{key:"1",name:'yyx',age:'24',sex:'M'},{key:"2",name:'yyx2',age:'21',sex:'W'},{key:"3",name:'yyx3',age:'24',sex:'M'}];
        let columns=[
            {
                title:'name',
                dataIndex:'name',
                width:'40',
                render:(text,row,index)=>{
                    return text+"zzz";
                }
            },
            {
                title:'age',
                dataIndex:'age',
                width:'30'
            },
            {
                title:'sex',
                dataIndex:'sex',
                width:'40'
            }
        ]
        let rowSelection ={
            onChange: (selectedRowKeys, selectedRows) => {
                console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            }
        }
        return (
            <div>
                <Table dataSource={dataSource} columns={columns} ondbclick={this.ondbclick} rowSelection={rowSelection}/>
            </div>
        )
    }
}


ReactDOM.render(<Root/>,document.getElementById('root'));