import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import {
    Table,
    TableBody,
    TableFooter,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
import guid from './../utils/Guid';
import connection from './../services/Connection';
import commands from './../services/Commands';

class RulesTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            preview: [],
            token: undefined
        }
        connection.onConnectedEvent.push(this.updateRulesPreview.bind(this));
    }

    updateRulesPreview = () => {
        this.state.token = guid();
        var t = this.state.token;
    }

    handleRowSelection = () => {

    }

    render() {
        return (
            <div id='network-table'>
                <Table
                    onRowSelection={this.handleRowSelection.bind(this)}
                    fixedHeader={true}
                    fixedFooter={true}>
                    <TableHeader
                        displaySelectAll={false}
                        adjustForCheckbox={false}>
                        <TableRow>
                            <TableHeaderColumn style={{ width: '30px' }}>ID</TableHeaderColumn>
                            <TableHeaderColumn>URL</TableHeaderColumn>
                            <TableHeaderColumn style={{ width: '40px' }}>Status</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody
                        displayRowCheckbox={false}>
                        {
                            this.state.preview.map((x, i) => {
                                return (<TableRow key={i}>
                                    <TableRowColumn style={{ width: '30px' }}>{i + 1}</TableRowColumn>
                                    <TableRowColumn>{x.url}</TableRowColumn>
                                    <TableRowColumn style={{ width: '40px' }}>{x.status}</TableRowColumn>
                                </TableRow>)
                            })
                        }
                    </TableBody>
                </Table>
            </div>
        );
    }
}
export default RulesTable;