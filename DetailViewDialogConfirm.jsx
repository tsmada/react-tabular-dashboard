import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Dialog from 'material-ui/Dialog';

const injectTapEventPlugin = require('react-tap-event-plugin');

export default class DetailViewDialogConfirm extends React.Component {

  constructor(props) {
    super(props);
  }

  render(props) {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.props.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.props.handleSubmit}
        />
    ];

    return (
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <div>
        <Dialog
          title="Navigate to Listing Detail View?"
          actions={actions}
          modal={true}
          open={this.props.open}
          onRequestClose={this.props.handleClose}
        >
          Are you sure you want to navigate to this listing: {this.props.listing}
        </Dialog>
      </div>
    </MuiThemeProvider>
    );
  }
}
