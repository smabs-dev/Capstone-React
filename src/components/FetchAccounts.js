import React, { Component } from "react";


class FetchAccounts extends Component {

    constructor(props) {
        super(props);

        this.state = {
            error: null,
            isLoaded: false,
            checking: {}
        };
    }

    

    componentDidMount() {
        fetch("http://localhost:8080/AccountHolders/1", {
            method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        } 
            

        })
            .then(res => res.json())
            .then(
                result => {
                    console.log(result);
                    this.setState({
                        isLoaded: true,
                        checking: result.checking
                    });
                },
                error => {
                    console.log(error);
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            );
    }

    createTable = () => {
        const checking = this.state;
        let ratesArr = Object.keys(checking).map(i => checking[i])[2];
        let table = [];
        let children = [];
        let accountInfo = ["firstName", "middleName", "lastName", "ssn"]

        for (var key in ratesArr) {
            if (ratesArr.hasOwnProperty(key) && accountInfo.includes(key)) {
              children.push(
                <tr>
                  <td>{key}</td>
                  <td>{(ratesArr[key], 0)}</td>
                  <td>{(ratesArr[key])}</td>
                  <td>{(ratesArr[key], 1)}</td>
                </tr>
              );
            }
          }


       

        table.push(<tbody>{children}</tbody>);

        return table;
    };

    render() {
      
            return (
                <main>
                    <div className="App-body">
                            <thead>
                                <tr>
                                    <th>&nbsp;</th>
                                    <th>WE BUY</th>
                                    <th>EXCHANGE RATE</th>
                                    <th>WE SELL</th>
                                </tr>
                            </thead>


                    </div>
                </main>
            );
        }
    



}

export default FetchAccounts;