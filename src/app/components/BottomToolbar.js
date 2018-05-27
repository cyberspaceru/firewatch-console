import React from 'react';
import IconButton from 'material-ui/IconButton';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';

class BottomToolbar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Toolbar>
                <ToolbarGroup >
                </ToolbarGroup>
                <ToolbarGroup >
                    <IconButton iconClassName="muidocs-icon-custom-github" />
                </ToolbarGroup>
            </Toolbar>)
    }
}

export default BottomToolbar;