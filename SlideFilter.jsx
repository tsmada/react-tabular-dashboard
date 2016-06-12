import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider'
import Paper from 'material-ui/Paper';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
import DatePicker from 'material-ui/DatePicker';
import AutoComplete from 'material-ui/AutoComplete';
import Badge from 'material-ui/Badge';

export class AutoCompleteExampleNoFilter extends React.Component {

  constructor() {
    super();
  }

  render() {
    const filterdata = [];
    this.props.propertycity.forEach( function(item,index){
      filterdata.push(item['route'])
    });
    return (
  <div>
  {}
    <AutoComplete
      hintText="Jacksonville"
      filter={AutoComplete.fuzzyFilter}
      dataSource={filterdata}
    />
  </div>
  )}
  };

export default class DrawerSimpleExample extends React.Component {

  constructor() {
    super();
    this.state = {open: false};
    this.handleToggle = this.handleToggle.bind(this)
    this.handleChangeDate = this.handleChangeDate.bind(this)
  }

  getInitalState() {
    console.log('prob get some kind of remote data here');
  }

  handleToggle() {
    this.setState({open: !this.state.open});
    console.log('toggling filter slide');
}

    handleChangeDate(a,b) {
        this.setState({date: 'some picked value'});
        console.log('toggling changedate');
    }

  render() {
    return (
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <div>
        <RaisedButton
          label="Filters"
          onClick={this.handleToggle}
        />
        <Drawer open={this.state.open}>
        <Paper>
          <MenuItem onClick={this.handleToggle}>Filters</MenuItem>
           <Divider />
          <MenuItem
          primaryText="Property Use"
          checked={true}
          rightIcon={<ArrowDropRight />}
          menuItems={[
                <MenuItem primaryText="0100 SINGLE FAMILY" checked={true} />,
                <MenuItem primaryText="0200 COMMERCIAL" checked={true} />,
                <MenuItem primaryText="0300 INSTITUTIONAL" checked={true} />,
                <MenuItem primaryText="0400 GAS STATION" checked={true} />,
              ]}
            />
          <MenuItem
          primaryText="Neighborhood"
          checked={true}
          rightIcon={<ArrowDropRight />}
          menuItems={[
                <MenuItem primaryText="COURTYARDS AT BARDMOOR" checked={true} />,
                <MenuItem primaryText="RANCHESTER UNIT II" checked={true} />,
                <MenuItem primaryText="01004 RIVERSIDE GARDENS" checked={true} />,
                <MenuItem primaryText="COUNTRY CHASE" checked={true} />,
              ]}
            />
        <MenuItem>Sale Date:<DatePicker
        hintText="2016-04-04"
        mode="landscape"
        onChange={this.handleChangeDate}
        />
        </MenuItem>
        <MenuItem>Property City:<AutoCompleteExampleNoFilter propertycity={this.props.propertycity}/></MenuItem>
        <MenuItem onClick={this.handleToggle}>Close</MenuItem>
        </Paper>
        </Drawer>
      </div>
    </MuiThemeProvider>
    );
  }
}