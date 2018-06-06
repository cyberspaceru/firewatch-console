import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import guid from './../../utils/Guid';
import nerworkPaper from './../../../css/network-css';
import NetworkTable from './NetworkTable';
import NetworkFilterToolbar from './NetworkFilterToolbar';
import commands from './../../services/Commands';
import connection from './../../services/Connection';

class Network extends Component {

    constructor(props) {
        super(props);
        this.state = {
            preview: [],
            token: undefined
        }
        connection.onConnectedEvent.push(this.updatePreview.bind(this));
    }

    updatePreview = () => {
        this.state.token = guid();
        var t = this.state.token;
        commands.getPreview(x => {
            if (t == this.state.token) {
                this.state.preview = x;
                this.setState(this.state);
            }
        });
    }

    render() {
        return (
            <div>
                <NetworkFilterToolbar />
                <div style={nerworkPaper.network}>
                    <Paper style={nerworkPaper.tablePaper}>
                        <NetworkTable preview={this.state.preview} />
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