import React from 'react';
import Loader from 'react-loader-spinner'
export default class Spinner extends React.Component {
    //other logic
    render() {
        return(
            <Loader
                type="Oval"
                color="#E9507E"
                height="100"
                width="100"
            />
        );
    }
}