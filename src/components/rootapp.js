import React from 'react';
import { connect } from "react-redux";

import Questionpage from './pages/Questionpage';

function Rootapp() {
    return (
        <div>
            <Questionpage />
        </div>
    )
}

const mapStateToProps = ({ app }) => {
    return {
       
    }
}

const mapDispatchToProps = dispatch => {
    return {
       
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Rootapp);