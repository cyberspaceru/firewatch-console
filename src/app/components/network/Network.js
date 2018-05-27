import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import nerworkPaper from './../../../css/network-css';
import NetworkTable from './NetworkTable';
import NetworkFilterToolbar from './NetworkFilterToolbar';

class Network extends Component {
    render() {
        return (
            <div>
                <NetworkFilterToolbar />
                <div style={nerworkPaper.network}>
                    <Paper style={nerworkPaper.tablePaper}>
                        <NetworkTable />
                    </Paper>
                    <div style={nerworkPaper.viwerPaper}>
                        <Paper id='network-request'
                            style={nerworkPaper.requestPaper}>
                        </Paper>
                        <Paper id='network-response'
                            style={nerworkPaper.resposePaper}>
                        </Paper>
                    </div>
                </div>
            </div>
        );
    }
}

export default Network;