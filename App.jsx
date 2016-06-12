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
import { GoogleMap, Marker, SearchBox, GoogleMapLoader} from "react-google-maps";
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import ReactRoot from './ReactRoot.jsx';
import SimpleMap from './SimpleMap.jsx';


const injectTapEventPlugin = require('react-tap-event-plugin');

injectTapEventPlugin();

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { open: false, data: this.props.data, listing: null, id: 0, listingdata: [], completed: 0, propertycityac: [{}]};
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
    this.serverRequest = $.get("http://localhost:8000/api/top/propertycity", function (result) {
      this.setState({ propertycityac: result
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
    handleSubmit() {
        const path = '/listing/' + String(this.state.id)
        browserHistory.push(path)
        this.setState({open: false});
    }
    render() {
        const rendertable = this.state.data ? <TableExampleSimple data={this.state.data} update={this.update}/> : '';
        return (
           <div>
           <div>
           <AppBarExampleIconMenu />
           <DrawerSimpleExample propertycity={this.state.propertycityac}/>
           {rendertable}
            <DetailViewDialogConfirm open={this.state.open} handleClose={this.handleClose} handleSubmit={this.handleSubmit} listing={this.state.listing}/>
           </div>
           </div>
        );
    }
};

const About1 = (props) => <div><h1>Hello</h1></div>;
const NoMatch = (props) => <div><h1>woah patna 404 <Link to="about">Click Me</Link> </h1></div>;


const metadata = [{
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