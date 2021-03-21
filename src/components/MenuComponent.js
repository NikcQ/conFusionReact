import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';


class Menu extends Component{

    constructor(props){
        super(props);
    }



    

    render(){

        const menu = this.props.dishes.map((dish) => {
            return(
                //mt-5 means "give a t op margin of 5"
                /*tag li means each list of items*/
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card key={dish.id} onClick={() => this.props.onClick(dish.id)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });


        return(
            <div class="container">
                <div class="row">
                        {menu}
                </div>
            </div>
        );
    }
}

export default Menu