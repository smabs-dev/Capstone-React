
import React, { useContext, useEffect, useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Button, Table } from "react-bootstrap";


function AccountDetails(props) {

    useEffect(() => {
        fetchAccountInfo();
      }, []);

  const [accountInfo, setAccountInfo] = useState({
    firstName: null,
    middleName: null,
    lastName: null,
    ssn: null,
    personalCheckingAccount: {}
  });

  const items = [

    {
      accountType: "Personal Checking",
      accountNum: `Acct. # ${accountInfo.personalCheckingAccount['id']}`,
      balance: `Balance $ ${accountInfo.personalCheckingAccount['balance']}`,
    }
  ]


  async function fetchAccountInfo() {
    
    return fetch(`http://localhost:8080/AccountHolders/1`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        }       
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setAccountInfo({
          firstName: data.firstName,
          middleName: data.middleName,
          lastName: data.lastName,
          ssn: data.ssn,
          personalCheckingAccount: data.personalCheckingAccount
        });
       
      });     
  }

  return (

    <Card>
              
    <Card.Body>
      <h5 className="justify-content-center font-weight-bold">{items.accountType}</h5>
    </Card.Body>
    <Card.Text className="px-3">
    <small className="text-muted">{items.accountNum}</small>
    </Card.Text>
    <Card.Text className="text-right px-3 mb-2">                             
      <small className="text-muted">{items.balance}</small>
    </Card.Text>

  </Card>
    
  );


}


  export default AccountDetails;  