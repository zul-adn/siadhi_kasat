import React from 'react';
import { connect } from "react-redux";
import { isDesktop } from "react-device-detect";
import Questionpage from './pages/Questionpage';

function Rootapp() {
    return (
        <div>
            {!isDesktop ?
                <div style={{  height: '100vh', display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center', padding: 80, textAlign:'center'}}>
                    <img src='https://image.flaticon.com/icons/png/512/2659/2659980.png' style={{ width:'50%', marginBottom:100 }} />
                    Mohon Maaf, untuk sementara Siadhi hanya support untuk penggunaan berbasis dekstop, Terima Kasih
                </div>
                :
                <Questionpage />
            }

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