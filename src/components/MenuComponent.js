import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

//function that renders dishes on their respective cards
function RenderMenuItem({ dish, onClick }) {
    return (
        <Card key={dish.id} onClick={() => onClick(dish.id)}>
            <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
            <CardImgOverlay>
                <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    );
}

//function that displays RenderMenuItem on screen
function Menu(props){

    const menu = props.dishes.map((dish) => {
        return (
            //mt-5 means "give a t op margin of 5"
            /*tag li means each list of items*/
            <div key={dish.id} className="col-12 col-md-5 m-1">
                <RenderMenuItem dish={dish} onClick={props.onClick}></RenderMenuItem>
            </div>
        );
    });
    
    
    return (
        <div class="container">
            <div class="row">
                {menu}
            </div>
        </div>
    );
}





export default Menu