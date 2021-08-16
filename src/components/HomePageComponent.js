import React from 'react';
import {
    Card, CardImg, CardText, CardBody, CardDeck,
    CardTitle, CardSubtitle, Button, CardHeader
} from 'reactstrap';




const Home = (props) => {

    return (
        <CardDeck style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
            <Card style={{flex: .5}}>
                <CardHeader className="card-header">Special Offers</CardHeader>
                <CardBody>
                    <CardTitle tag="h5">Card title</CardTitle>
                    <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                    <Button>Button</Button>
                </CardBody>
            </Card>
            <Card style={{flex: .5}}>
            <CardHeader className="card-header">CD Account</CardHeader>
                <CardBody>
                    <CardTitle tag="h5">Card title</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                    <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
                    <Button>Button</Button>
                </CardBody>
            </Card>
            <Card style={{flex: .5}}>
            <CardHeader className="card-header">IRA Account</CardHeader>
                <CardBody>
                    <CardTitle tag="h5">Card title</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                    <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
                    <Button>Button</Button>
                </CardBody>
            </Card>
            <Card style={{flex: .5}}>
                <CardBody>
                    <CardImg src="logo2.jpg" height="200px"/>
                </CardBody>
            </Card>
            <Card style={{flex: .5}}>
            <CardHeader className="card-header">Mobile Banking</CardHeader>
                <CardBody>
                    <CardTitle tag="h5">Card title</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                    <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
                    <Button>Button</Button>
                </CardBody>
                
            </Card>
        </CardDeck>


    )
}

export default Home;