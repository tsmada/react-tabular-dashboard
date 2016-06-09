import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import React from 'react';
const injectTapEventPlugin = require('react-tap-event-plugin');

export default class TableExampleSimple extends React.Component {

    update(e) {
        console.log('updating',e);
    }

    constructor(props) {
        super(props);
        this.update = this.update.bind(this);
        this.state = {
      fixedHeader: true,
      fixedFooter: true,
      stripedRows: false,
      showRowHover: true,
      selectable: false,
      multiSelectable: true,
      enableSelectAll: true,
      deselectOnClickaway: true,
      showCheckboxes: false
    }
  }
    render(props) {
        if (!this.props.data) {
            return null
        }
        var tableRows = this.props.data.map((row, index) => {
      return (<TableRow key={index}>
        <TableRowColumn>{row.casestatus}</TableRowColumn>
        <TableRowColumn>{row.saledate}</TableRowColumn>
        <TableRowColumn>{row.propertyzip}</TableRowColumn>
        <TableRowColumn>{row.propertyaddress}</TableRowColumn>
        <TableRowColumn>{row.propertyuse}</TableRowColumn>
        <TableRowColumn>{row.finaljudgement}</TableRowColumn>
        <TableRowColumn>{row.county}</TableRowColumn>
        <TableRowColumn>{row.assessedvalue}</TableRowColumn>
        <TableRowColumn>{row.maxbid}</TableRowColumn>
        <TableRowColumn>{row.parcelid}</TableRowColumn>
      </TableRow>)});

        return (
    <MuiThemeProvider muiTheme={getMuiTheme()}>
  <Table
    onCellClick={this.props.update}
    fixedHeader={this.state.fixedHeader}
    fixedFooter={this.state.fixedFooter}
    selectable={this.state.selectable}
    multiSelectable={this.state.multiSelectable}
  >
    <TableHeader
    displaySelectAll={this.state.showCheckboxes}
    adjustForCheckbox={this.state.showCheckboxes}
    enableSelectAll={this.state.enableSelectAll}
    >
      <TableRow>
        <TableHeaderColumn>Case Status</TableHeaderColumn>
        <TableHeaderColumn>Auction Date</TableHeaderColumn>
        <TableHeaderColumn>Zip</TableHeaderColumn>
        <TableHeaderColumn>Address</TableHeaderColumn>
        <TableHeaderColumn>Property Use</TableHeaderColumn>
        <TableHeaderColumn>Final Judgement</TableHeaderColumn>
        <TableHeaderColumn>County</TableHeaderColumn>
        <TableHeaderColumn>Assessed Value</TableHeaderColumn>
        <TableHeaderColumn>Max Bid</TableHeaderColumn>
        <TableHeaderColumn>Parcel ID</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody
displayRowCheckbox={this.state.showCheckboxes}
deselectOnClickaway={this.state.deselectOnClickaway}
showRowHover={this.state.showRowHover}
stripedRows={this.state.stripedRows}
    >
      {tableRows}
    </TableBody>
  </Table>
  </MuiThemeProvider>
  );
}
};