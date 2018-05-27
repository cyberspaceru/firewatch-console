import React, { Component } from 'react';
import rulesStyle from './../../css/rules-css';
import RulesTable from './RulesTable';
import Paper from 'material-ui/Paper';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';

class Rules extends Component {
    render() {
        return (
            <div>
                <Toolbar>
                </Toolbar>
                <div style={rulesStyle.rules}>
                    <Paper style={rulesStyle.tablePaper}>
                        <RulesTable />
                    </Paper>
                    <div style={rulesStyle.viwerPaper}>
                        <Paper id='rules-request'
                            style={rulesStyle.requestPaper}>
                        </Paper>
                        <Paper id='rules-response'
                            style={rulesStyle.resposePaper}>
                        </Paper>
                    </div>
                </div>
            </div>
        );
    }
}

export default Rules;