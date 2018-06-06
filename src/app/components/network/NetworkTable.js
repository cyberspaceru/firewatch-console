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

class NetworkTable extends Component {

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
                            this.props.preview.map((x, i) => {
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
export default NetworkTable;