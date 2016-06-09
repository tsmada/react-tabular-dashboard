import React from 'react';
import ReactDOM from 'react-dom';
import Griddle from 'griddle-react';
import DetailViewDialogConfirm from './DetailViewDialogConfirm.jsx';
import AppBarExampleIconMenu from './Appbar.jsx';
import DrawerSimpleExample from './SlideFilter.jsx';
import ListingDetailView from './ListingDetailView.jsx';
import TableExampleSimple from './DataGrid.jsx';
import { Router, Route, Link, browserHistory, hashHistory } from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const injectTapEventPlugin = require('react-tap-event-plugin');

injectTapEventPlugin();

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { open: false, data: this.props.data, listing: null, id: 0, listingdata: [], completed: 0};
    this.update = this.update.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  loadCommentsFromServer() {
    $.ajax({
      url: "http://localhost:8000/api/listings",
      dataType: 'json',
      success: (data) => {
        this.setState({data: data});
      },
      error: (xhr, status, err) => {
        console.error("http://localhost:8000/api/listings", status, err.toString());
      }
    });
  }

  componentDidMount() {
    this.serverRequest = $.get("http://localhost:8000/api/listings", function (result) {
      this.setState({ data: result
      });
    }.bind(this));
    console.log('component mounted');
  }

    update(e, f){
        this.setState({open: true, listing: this.state.data[e].propertyaddress, id: this.state.data[e].fcl_id});
        console.log('updating', this.state.data[e].propertyaddress);
    }

    handleClose() {
        this.setState({open: false});
    }
    handleSubmit(e) {
        const path = '/listing/' + this.state.id
        browserHistory.push(path)
        this.setState({open: false});
    }
    render() {
        return (
           <div>
           <div>
           <AppBarExampleIconMenu />
           <DrawerSimpleExample />
           <TableExampleSimple data={this.state.data} update={this.update}/>
            <DetailViewDialogConfirm open={this.state.open} handleClose={this.handleClose} handleSubmit={this.handleSubmit} listing={this.state.listing}/>
           </div>
           </div>
        );
    }
};

const About1 = (props) => <div><h1>Hello</h1></div>;
const NoMatch = (props) => <div><h1>woah patna 404 <Link to="about">Click Me</Link> </h1></div>;

//const ListingDetailView = (props) => <div><h1>Listing Detail View: {this.props.id}</h1></div>;

var fakeData = [
  {
    "id": 0,
    "Case Status": "Accepting Proxy",
    "Auction Date": "06/10/2016",
    "Zip": "32210",
    "Physical Address": "1820 Pineapple Ave",
    "Property Use": "0100 SINGLE FAMILY",
    "Link": "link me",
    "Assessed Value": 25000,
    "Plaintiff Max Bid": 3924,
    "Zoning": "LUF20",
    "Year Built": 1946,
    "Stories": 1,
    "Bedrooms": 3,
    "Bathrooms": 2.5,
    "Heated Area": 800,
    "Features": "Pool"
  },
  {
    "id": 2,
    "Case Status": "Accepting Proxy",
    "Auction Date": "06/10/2016",
    "Zip": "32210",
    "Physical Address": "1820 Pineapple Ave",
    "Property Use": "0100 SINGLE FAMILY",
    "Link": "link me",
    "Assessed Value": 400000,
    "Plaintiff Max Bid": 39434,
    "Zoning": "PUD",
    "Year Built": 1996,
    "Stories": 1,
    "Bedrooms": 3,
    "Bathrooms": 2.5,
    "Heated Area": 1200,
    "Features": "Porch"
  },
  {
    "id": 3,
    "Case Status": "Accepting Proxy",
    "Auction Date": "06/10/2016",
    "Zip": "32210",
    "Physical Address": "1820 Pineapple Ave",
    "Property Use": "0100 SINGLE FAMILY",
    "Link": "link me",
    "Assessed Value": 23232,
    "Plaintiff Max Bid": 3943434,
    "Zoning": "PKG",
    "Year Built": 1996,
    "Stories": 1,
    "Bedrooms": 3,
    "Bathrooms": 2.5,
    "Heated Area": 1200,
    "Features": "Garage"
  },
  {
    "id": 4,
    "Case Status": "Accepting Proxy",
    "Auction Date": "06/10/2016",
    "Zip": "32210",
    "Physical Address": "1820 Pineapple Ave",
    "Property Use": "0100 SINGLE FAMILY",
    "Link": "link me",
    "Assessed Value": 23232,
    "Plaintiff Max Bid": 3943434,
    "Zoning": "RFD",
    "Year Built": 1996,
    "Stories": 1,
    "Bedrooms": 3,
    "Bathrooms": 2.5,
    "Heated Area": 1200,
    "Features": null
  },
  {
    "id": 5,
    "Case Status": "Accepting Proxy",
    "Auction Date": "06/10/2016",
    "Zip": "32210",
    "Physical Address": "1820 Pineapple Ave",
    "Property Use": "0100 SINGLE FAMILY",
    "Link": "link me",
    "Assessed Value": 23232,
    "Plaintiff Max Bid": 3943434,
    "Zoning": "PUD",
    "Year Built": 1996,
    "Stories": 1,
    "Bedrooms": 3,
    "Bathrooms": 2.5,
    "Heated Area": 1200,
    "Features": null
  },
  {
    "id": 6,
    "Case Status": "Accepting Proxy",
    "Auction Date": "06/10/2016",
    "Zip": "32210",
    "Physical Address": "1820 Pineapple Ave",
    "Property Use": "0100 SINGLE FAMILY",
    "Link": "link me",
    "Assessed Value": 23232,
    "Plaintiff Max Bid": 25000,
    "Zoning": "RFD",
    "Year Built": 1996,
    "Stories": 1,
    "Bedrooms": 3,
    "Bathrooms": 2.5,
    "Heated Area": 1200,
    "Features": null
  },
  {
    "id": 7,
    "Case Status": "Accepting Proxy",
    "Auction Date": "06/10/2016",
    "Zip": "32210",
    "Physical Address": "1820 Pineapple Ave",
    "Property Use": "0100 SINGLE FAMILY",
    "Link": "link me",
    "Assessed Value": 23232,
    "Plaintiff Max Bid": 35000,
    "Zoning": "PUD",
    "Year Built": 1996,
    "Stories": 3,
    "Bedrooms": 2,
    "Bathrooms": 1.5,
    "Heated Area": 800,
    "Features": null
  },
  {
    "id": 8,
    "Case Status": "Accepting Proxy",
    "Auction Date": "06/10/2016",
    "Zip": "32210",
    "Physical Address": "1820 Pineapple Ave",
    "Property Use": "0100 SINGLE FAMILY",
    "Link": "link me",
    "Assessed Value": 23232,
    "Plaintiff Max Bid": 20000,
    "Zoning": "PUD",
    "Year Built": 1996,
    "Stories": 1,
    "Bedrooms": 3,
    "Bathrooms": 2.5,
    "Heated Area": 500,
    "Features": null
  },
  {
    "id": 9,
    "Case Status": "Accepting Proxy",
    "Auction Date": "06/10/2016",
    "Zip": "32210",
    "Physical Address": "1820 Pineapple Ave",
    "Property Use": "0100 SINGLE FAMILY",
    "Link": "link me",
    "Assessed Value": 23232,
    "Plaintiff Max Bid": 39434,
    "Zoning": "2LG",
    "Year Built": 1996,
    "Stories": 1,
    "Bedrooms": 3,
    "Bathrooms": 2.5,
    "Heated Area": 2500,
    "Features": null
  },
  {
    "id": 22,
    "Case Status": "Accepting Proxy",
    "Auction Date": "06/10/2016",
    "Zip": "32210",
    "Physical Address": "1820 Pineapple Ave",
    "Property Use": "0100 SINGLE FAMILY",
    "Link": "link me",
    "Assessed Value": 23232,
    "Plaintiff Max Bid": 3943434,
    "Zoning": "PUD",
    "Year Built": 1996,
    "Stories": 1,
    "Bedrooms": 3,
    "Bathrooms": 2.5,
    "Heated Area": 1200,
    "Features": null
  },
  {
    "id": 10,
    "Case Status": "Accepting Proxy",
    "Auction Date": "06/10/2016",
    "Zip": "32210",
    "Physical Address": "1820 Pineapple Ave",
    "Property Use": "0100 SINGLE FAMILY",
    "Link": "link me",
    "Assessed Value": 23232,
    "Plaintiff Max Bid": 3943434,
    "Zoning": "PUD",
    "Year Built": 1996,
    "Stories": 1,
    "Bedrooms": 3,
    "Bathrooms": 2.5,
    "Heated Area": 1200,
    "Features": null
  },
  {
    "id": 12,
    "Case Status": "Accepting Proxy",
    "Auction Date": "06/10/2016",
    "Zip": "32210",
    "Physical Address": "1820 Pineapple Ave",
    "Property Use": "0100 SINGLE FAMILY",
    "Link": "link me",
    "Assessed Value": 23232,
    "Plaintiff Max Bid": 3943434,
    "Zoning": "JFT",
    "Year Built": 1996,
    "Stories": 1,
    "Bedrooms": 3,
    "Bathrooms": 2.5,
    "Heated Area": 1200,
    "Features": null
  },
  {
    "id": 13,
    "Case Status": "Accepting Proxy",
    "Auction Date": "06/10/2016",
    "Zip": "32210",
    "Physical Address": "1820 Pineapple Ave",
    "Property Use": "0100 SINGLE FAMILY",
    "Link": "link me",
    "Assessed Value": 23232,
    "Plaintiff Max Bid": 3943434,
    "Zoning": "PUD",
    "Year Built": 1996,
    "Stories": 1,
    "Bedrooms": 3,
    "Bathrooms": 2.5,
    "Heated Area": 1200,
    "Features": null
  },
  {
    "id": 14,
    "Case Status": "Accepting Proxy",
    "Auction Date": "06/10/2016",
    "Zip": "32210",
    "Physical Address": "1840 Pineapple Ave",
    "Property Use": "0900 SINGLE FAMILY",
    "Link": "link me",
    "Assessed Value": 23232,
    "Plaintiff Max Bid": 3943434,
    "Zoning": "RFD",
    "Year Built": 1996,
    "Stories": 1,
    "Bedrooms": 3,
    "Bathrooms": 2.5,
    "Heated Area": 1200,
    "Features": null
  },
  {
    "id": 15,
    "Case Status": "Accepting Proxy",
    "Auction Date": "06/10/2016",
    "Zip": "32210",
    "Physical Address": "1820 Pineapple Ave",
    "Property Use": "0800 SINGLE FAMILY",
    "Link": "link me",
    "Assessed Value": 23232,
    "Plaintiff Max Bid": 3943434,
    "Zoning": "RFD",
    "Year Built": 1932,
    "Stories": 1,
    "Bedrooms": 3,
    "Bathrooms": 2.5,
    "Heated Area": 1200,
    "Features": null
  },
  {
    "id": 16,
    "Case Status": "Cancelled",
    "Auction Date": "01/10/2016",
    "Zip": "32210",
    "Physical Address": "1850 Pineapple Ave",
    "Property Use": "0600 SINGLE FAMILY",
    "Link": "link me",
    "Assessed Value": 23232,
    "Plaintiff Max Bid": 3943434,
    "Zoning": "PUD",
    "Year Built": 1925,
    "Stories": 1,
    "Bedrooms": 3,
    "Bathrooms": 2.5,
    "Heated Area": 1200,
    "Features": null
  },
  {
    "id": 17,
    "Case Status": "Accepting Proxy",
    "Auction Date": "02/10/2016",
    "Zip": "32230",
    "Physical Address": "10 Pineapple Ave",
    "Property Use": "0500 SINGLE FAMILY",
    "Link": "link me",
    "Assessed Value": 23232,
    "Plaintiff Max Bid": 3943434,
    "Zoning": "PUD",
    "Year Built": 1925,
    "Stories": 1,
    "Bedrooms": 3,
    "Bathrooms": 2.5,
    "Heated Area": 1200,
    "Features": null
  },
  {
    "id": 18,
    "Case Status": "Accepting Proxy",
    "Auction Date": "04/10/2016",
    "Zip": "32210",
    "Physical Address": "320 Pineapple Ave",
    "Property Use": "0400 SINGLE FAMILY",
    "Link": "link me",
    "Assessed Value": 23232,
    "Plaintiff Max Bid": 3943434,
    "Zoning": "PUD",
    "Year Built": 2000,
    "Stories": 2,
    "Bedrooms": 3,
    "Bathrooms": 2.5,
    "Heated Area": 1200,
    "Features": null
  },
  {
    "id": 19,
    "Case Status": "Accepting Proxy",
    "Auction Date": "06/30/2016",
    "Zip": "32210",
    "Physical Address": "120 Pineapple Ave",
    "Property Use": "0300 SINGLE FAMILY",
    "Link": "link me",
    "Assessed Value": 23232,
    "Plaintiff Max Bid": 3943434,
    "Zoning": "PUD",
    "Year Built": 1999,
    "Stories": 4,
    "Bedrooms": 3,
    "Bathrooms": 2.5,
    "Heated Area": 1200,
    "Features": null
  },
  {
    "id": 20,
    "Case Status": "Accepting Proxy",
    "Auction Date": "06/11/2016",
    "Zip": "32210",
    "Physical Address": "1830 Pineapple Ave",
    "Property Use": "0200 SINGLE FAMILY",
    "Link": "link me",
    "Assessed Value": 23232,
    "Plaintiff Max Bid": 3943434,
    "Zoning": "PUD",
    "Year Built": 2001,
    "Stories": 2,
    "Bedrooms": 3,
    "Bathrooms": 2.5,
    "Heated Area": 1200,
    "Features": "Pool"
  }
];

var metadata = [{
    "columnName": "casestatus",
    "order": 1,
    "locked": false,
    "visible": true,
    "displayName": "Case Status"
  },
  {
    "columnName": "saledate",
    "order": 2,
    "locked": false,
    "visible": true,
    "displayName": "Auction Date"
  },
  {
    "columnName": "propertyzip",
    "order": 3,
    "locked": false,
    "visible": true,
    "displayName": "Zip"
  },
  {
    "columnName": "propertyaddress",
    "order": 4,
    "locked": false,
    "visible": true,
    "displayName": "Physical Address"
  },
  {
    "columnName": "propertyuse",
    "order": 5,
    "locked": false,
    "visible": true,
    "displayName": "Property Use"
  },
  {
    "columnName": "finaljudgement",
    "order": 6,
    "locked": false,
    "visible": true,
    "displayName": "Final Judgement"
  },
  {
    "columnName": "state",
    "order": 7,
    "locked": false,
    "visible": true,
    "displayName": "State"
  },
  {
    "columnName": "county",
    "order": 8,
    "locked": false,
    "visible": true,
    "displayName": "County"
  },
  {
    "columnName": "assessedvalue",
    "order": 9,
    "locked": false,
    "visible": true,
    "displayName": "Assessed Value"
  },
  {
    "columnName": "maxbid",
    "order": 10,
    "locked": false,
    "visible": true,
    "displayName": "Max Bid"
  },
  {
    "columnName": "parcelid",
    "order": 11,
    "locked": false,
    "visible": true,
    "displayName": "Parcel ID"
  }];

ReactDOM.render( <Router history={browserHistory}>
                <Route path="/" component={App}/>
                    <Route path="/listing/:id" component={ListingDetailView}/>
                    <Route path="/about" component={About1}/>
                <Route path="*" component={NoMatch}/>
            </Router>, app);
//ReactDOM.render(<DetailViewDialogConfirm/>, app);