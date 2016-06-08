import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBarExampleIconMenu from './Appbar.jsx';
import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';
const injectTapEventPlugin = require('react-tap-event-plugin');


export default class ListingDetailView extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount(props, state) {
    this.serverRequest = $.get("http://localhost:8000/api/listings/" + String(this.props.params.id), function (result) {
      this.setState({ listingdata: result
      });
    }.bind(this));
  }
    render(state) {
        return (

            <div>
            <AppBarExampleIconMenu/>
            <TabsExampleIconText/>
            <div>
            {this.props.listingdata}
            </div>
            </div>
        );
    }
}

const TabsExampleIconText = () => (
    <MuiThemeProvider muiTheme={getMuiTheme()}>
  <Tabs>
    <Tab
      icon={<FontIcon className="material-icons">home</FontIcon>}
      label="Property Details"
    />
    <Tab
      icon={<FontIcon className="material-icons">assessment</FontIcon>}
      label="CMA Underwriting"
    />
    <Tab
      icon={<FontIcon className="material-icons">search</FontIcon>}
      label="Title Search"
    />
    <Tab
      icon={<MapsPersonPin />}
      label="Nearby Listings"
    />
  </Tabs>
  </MuiThemeProvider>
);
