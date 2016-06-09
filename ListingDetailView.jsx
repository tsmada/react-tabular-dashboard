import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBarExampleIconMenu from './Appbar.jsx';
import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FontIcon from 'material-ui/FontIcon';
import Paper from 'material-ui/Paper';
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';
const injectTapEventPlugin = require('react-tap-event-plugin');
const style = {
  height: 1920,
  width: 1080,
  margin: 40,
  textAlign: 'center',
  display: 'inline-block',
};

const PropertyCard = () => (
  <div>
  <MuiThemeProvider muiTheme={getMuiTheme()}>
  <div>
    <Paper style={style} zDepth={1} />
    </div>
    </MuiThemeProvider>
  </div>
);

export default class ListingDetailView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          expanded: false,
          listingdata: []
        }
        this.componentDidMount = this.componentDidMount.bind(this);
    }
    componentDidMount(props, state) {
    this.serverRequest = $.get("http://localhost:8000/api/listings/" + String(this.props.params.id), function (result) {
      this.setState({ listingdata: result
      });
    }.bind(this));
  }
    render(props) {
      let listingdata = JSON.stringify(this.state.listingdata);

      //var tableRows = this.props.data.map((row, index) => {
        var listingData = this.state.listingdata.map((rows, index) => {
           return (<div>
       {rows.fcl_id}
       </div>
       )});
        return (

            <div>
            <AppBarExampleIconMenu/>
            <TabsExampleIconText/>
            <div>
            <PropertyCard/>
            {listingData}
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
