import React from 'react';
import TextField from 'material-ui/TextField';
import guid from './../utils/Guid'
import connection from './../services/Connection'
import commands from './../services/Commands'
import textFieldStyle from './../../css/text-field-css'
import toolbarStyle from './../../css/toolbar-css'
import Avatar from 'material-ui/Avatar';
import { red500, yellow700, green500 } from 'material-ui/styles/colors';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';

class ConnectionToolbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            statusColor: yellow700,
            connection: connection,
            token: undefined
        }
        this.updateStatus();
    }

    reupdateStatus = () => {
        this.state.statusColor = yellow700;
        this.setState(this.state);
        this.updateStatus();
    }

    updateStatus = () => {
        this.state.token = guid();
        var t = this.state.token;
        commands.getStatus(x => {
            if (t == this.state.token) {
                if (x == 'available') {
                    this.state.statusColor = green500;
                } else {
                    this.state.statusColor = red500;
                }
                this.setState(this.state);
            }
        });
    }

    onChangeHost = (event) => {
        var value = event.target.value.trim();
        if (this.state.connection.host != value) {
            this.state.connection.host = value;
        }
        this.reupdateStatus();
    }

    onChangePort = (event) => {
        var value = event.target.value.trim();
        if (value.length <= 5 && !Number.isNaN(value)) {
            this.state.connection.port = event.target.value;
        }
        this.reupdateStatus();
    }

    render() {
        return (
            <Toolbar>
                <ToolbarGroup style={toolbarStyle.group} firstChild={true}>
                    <TextField style={textFieldStyle.medium}
                        hintText="host adress"
                        value={this.state.connection.host}
                        onChange={this.onChangeHost.bind(this)} />
                    <TextField style={textFieldStyle.small}
                        hintText="port"
                        value={this.state.connection.port}
                        onChange={this.onChangePort.bind(this)} />
                </ToolbarGroup>
                <ToolbarGroup style={toolbarStyle.group}>
                    <ToolbarTitle text="Connection Status" />
                    <Avatar size={10} backgroundColor={this.state.statusColor} />
                </ToolbarGroup>
            </Toolbar>
        );
    }

}

export default ConnectionToolbar;