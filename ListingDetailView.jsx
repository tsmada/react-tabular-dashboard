import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBarExampleIconMenu from './Appbar.jsx';
import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import Paper from 'material-ui/Paper';
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';
import { Router, Route, Link } from 'react-router'

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

    componentDidMount(props) {
       this.serverRequest = $.get("http://localhost:8000/api/listings/" + String(this.props.params.id), function (result) {
      this.setState({ listingdata: result
      });
    }.bind(this));
       this.serverRequest = $.get("http://localhost:8000/api/cma/" + String(this.props.params.id), function (result) {
      this.setState({ cmadata: result
      });
    }.bind(this));
    }
    constructor(props) {
        super(props)
        this.state = {
          expanded: false
        }
    }
    render(props) {
      let listingdata = JSON.stringify(this.state.listingdata);
      console.log(this.state.listingdata);
      const rendertabs = (this.state.listingdata && this.state.cmadata) ? <TabsExampleIconText listingData={this.state.listingdata} cmadata={this.state.cmadata}/> : '';
        return (
            <div>
            <AppBarExampleIconMenu/>
            {rendertabs}
            <div>
            </div>
            </div>
        );
    }
}

export class TabsExampleIconText extends React.Component {
  componentDidMount() {
  }
  render(props) {
    var listingdata = this.props.listingData.map((rows, index) => {
           return (<div>
            <div key={index}>
            <h1>{rows.propertyaddress}</h1>
            <h2>Plaintiff: {rows.plaintiff}</h2>
            <h2>Defendant: {rows.defendant}</h2>
            <h2>Final Judgement: {rows.finaljudgement}</h2>
            <li>Property Owner: {rows.propertyowner}</li>
            <li>Sale Date: {rows.saledate}</li>
            <li>State: {rows.state}</li>
            <li>County: {rows.county}</li>
            <li>Case Number: {rows.casenumber}</li>
            <li>Property City: {rows.propertycity}</li>
            <li>Property Zip: {rows.propertyzip}</li>
            <li>Assessed Value: {rows.asssessedvalue}</li>
            <li>Legal Description: {rows.legaldescription}</li>
            <li>Land Value: {rows.landvalue}</li>
            <li>Property Use: {rows.propertyuse}</li>
            <li>Zoning: {rows.zoning}</li>
            <li>Total Area: {rows.totalarea}</li>
            <li>Heated Square Feet: {rows.structurearea}</li>
            <li>Bedrooms: {rows.bedrooms}</li>
            <li>Bathrooms: {rows.bathrooms}</li>
            <li>Plaintiff Max Bid: {rows.maxbid}</li>
            <li>Stories: {rows.stories}</li>
            <li>Neighborhood: {rows.subdivision}</li>
            <li>Frontage: {rows.frontage}</li>
            <li>Depth: {rows.depth}</li>
            <li>Year Built: {rows.yearbuilt}</li>
            </div>
       </div>
       )})

    var cmadata = this.props.cmadata.map((rows, index) => {
      return (
            <div key={index}>
            <h1>{rows.propertyaddress}</h1>
            </div>
            )});

    return(
    <MuiThemeProvider muiTheme={getMuiTheme()}>
  <Tabs>
    <Tab
      icon={<FontIcon className="material-icons">home</FontIcon>}
      label="Property Details"
    >{listingdata}</Tab>
    <Tab
      icon={<FontIcon className="material-icons">assessment</FontIcon>}
      label="CMA Underwriting"
    >{cmadata}</Tab>
    <Tab
      icon={<FontIcon className="material-icons">search</FontIcon>}
      label="Title Search"
    >Tab Three</Tab>
    <Tab
      icon={<MapsPersonPin />}
      label="Nearby Listings"
    >Tab Four</Tab>
  </Tabs>
  </MuiThemeProvider>
  )
  }
};
