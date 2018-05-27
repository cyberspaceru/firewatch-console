import React, { Component } from 'react';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';
import FilterList from 'material-ui/svg-icons/content/filter-list';
import TextField from 'material-ui/TextField';
import textFieldStyle from './../../css/text-field-css';

class NetworkFilterToolbar extends Component {
    render() {
        return (
            <div>
                <Toolbar>
                    <ToolbarGroup >
                        <FilterList />
                        <TextField style={textFieldStyle.large}
                            hintText="URL Filter"
                        />
                    </ToolbarGroup>
                </Toolbar>
            </div>
        );
    }
}

export default NetworkFilterToolbar;