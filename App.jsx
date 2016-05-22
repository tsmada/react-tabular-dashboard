import React from 'react';
import ReactDOM from 'react-dom';
import Griddle from 'griddle-react';
import DetailViewDialogConfirm from './DetailViewDialogConfirm.jsx';
import AppBarExampleIconMenu from './Appbar.jsx';
import DrawerSimpleExample from './SlideFilter.jsx';

const injectTapEventPlugin = require('react-tap-event-plugin');

injectTapEventPlugin();

export default class App extends React.Component {
  constructor() {
    super();
    this.state = { open: false };
    this.update = this.update.bind(this);
  }

    update(){
        this.setState({open: true});
    }
    render() {
        return (
           <div>
           <div>
           <AppBarExampleIconMenu />
           <DrawerSimpleExample />
            <DetailViewDialogConfirm open={this.state.open} />
             <Griddle results={this.props.data} useFixedHeader={true} resultsPerPage={10} onRowClick={this.update}
             />
           </div>
           </div>
        );
    }
};


var fakeData =  [
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


ReactDOM.render(<App data={fakeData}/>, app);
//ReactDOM.render(<DetailViewDialogConfirm/>, app);