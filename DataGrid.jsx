import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import React from 'react';

export default class TableExampleSimple extends React.Component {
	render(props) {
		return (
	<MuiThemeProvider muiTheme={getMuiTheme()}>
  <Table>
    <TableHeader>
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
    <TableBody>
      <TableRow>
        <TableRowColumn>Accepting Proxy (Bid)</TableRowColumn>
        <TableRowColumn>07/10/2017</TableRowColumn>
        <TableRowColumn>32254</TableRowColumn>
        <TableRowColumn>3022 Brougham Ave</TableRowColumn>
        <TableRowColumn>Single Family</TableRowColumn>
        <TableRowColumn>$24,700.00</TableRowColumn>
        <TableRowColumn>Duval</TableRowColumn>
        <TableRowColumn>$32,000.00</TableRowColumn>
        <TableRowColumn>$18,200.00</TableRowColumn>
        <TableRowColumn>1668870000</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>Accepting Proxy (Bid)</TableRowColumn>
        <TableRowColumn>07/11/2017</TableRowColumn>
        <TableRowColumn>32205</TableRowColumn>
        <TableRowColumn>382 Stockton Ave</TableRowColumn>
        <TableRowColumn>Single Family</TableRowColumn>
        <TableRowColumn>$80,700.00</TableRowColumn>
        <TableRowColumn>Duval</TableRowColumn>
        <TableRowColumn>$32,000.00</TableRowColumn>
        <TableRowColumn>$18,200.00</TableRowColumn>
        <TableRowColumn>1622370000</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>Accepting Proxy (Bid)</TableRowColumn>
        <TableRowColumn>07/12/2017</TableRowColumn>
        <TableRowColumn>32210</TableRowColumn>
        <TableRowColumn>1800 Southside Blvd</TableRowColumn>
        <TableRowColumn>Commercial</TableRowColumn>
        <TableRowColumn>$240,700.00</TableRowColumn>
        <TableRowColumn>Duval</TableRowColumn>
        <TableRowColumn>$320,000.00</TableRowColumn>
        <TableRowColumn>$180,200.00</TableRowColumn>
        <TableRowColumn>12049934933</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>Accepting Proxy (Bid)</TableRowColumn>
        <TableRowColumn>07/13/2017</TableRowColumn>
        <TableRowColumn>32206</TableRowColumn>
        <TableRowColumn>4500 Atlantic Ave</TableRowColumn>
        <TableRowColumn>Single Family</TableRowColumn>
        <TableRowColumn>$100,700.00</TableRowColumn>
        <TableRowColumn>Duval</TableRowColumn>
        <TableRowColumn>$89,000.00</TableRowColumn>
        <TableRowColumn>$78,200.00</TableRowColumn>
        <TableRowColumn>1930343000</TableRowColumn>
      </TableRow>
    </TableBody>
  </Table>
  </MuiThemeProvider>
  );
}
};