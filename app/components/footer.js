/**
 * Created by zyc on 2016/6/23.
 */

import React from 'react';


let headerStyle = {
    backgroundColor: 'red',
    width: '100%',
    height: '80px',
    margin: '0 auto',
    padding: '0',
    overflow: 'hidden',
    textAlign: 'center',
}

class Footer extends React.Component{
    constructor(){
        super()
    }
    render(){
        return (<div style={headerStyle}>
        </div>);
    }
}

export default Footer