import React from 'react';
import { connect } from "react-redux";
import './../style/style.css'

function Questionpage({question}) {
    const [i, setI] = React.useState(0)
    const [color, setColor] = React.useState('#f368e0')

    const next = () => {         
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        if(i === question.length-1){
            alert("Last")
        }else{
            setI(i+1)
            setColor(`#${randomColor}`)
        }
    }

    const prev = () => {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        if(i===0){
            alert("limit")
        }else{
            setI(i-1)
            setColor(`#${randomColor}`)
        }
    }

    return (
        <div className="q-container" style={{ backgroundColor: color }}>
        
            <div className="question">
                <span>{question[i].q}</span>
            </div>
            <div className="option">
                {question[i].o.map((opt, i) => 
                    <div>{opt.o}</div>
                )}
            </div>
            <div className="footer">
                <div style={{ width : '25%' }}>
                    <button className="btn" style={{ backgroundColor: '#ee5253' }} onClick={prev}>Back</button>
                </div>
                <div style={{ width : '50%' }}>

                </div>
                <div style={{ width : '25%' }}>
                    <button className="btn" style={{ backgroundColor: '#54a0ff', float:'right' }} onClick={next}>Next</button>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = ({ app }) => {
    return {
       question : app.question
    }
}

const mapDispatchToProps = dispatch => {
    return {
       
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Questionpage);
