import React from 'react';
import { connect } from "react-redux";
import './../style/style.css';
import {
    setMainButtonPancaGatra,
    setMainButtonTriGatra
} from '../../store/app/action';

function Questionpage({ question, button_all, button_init, setMainButtonPancaGatra, setMainButtonTriGatra, isTrigatra, button_main_trigatra, button_main_pancagatra }) {
    const [i, setI] = React.useState(0)
    const [color, setColor] = React.useState('#f368e0')

    const next = () => {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        if (i === question.length - 1) {
            alert("Last")
        } else {
            setI(i + 1)
            setColor(`#${randomColor}`)
        }
    }

    const prev = () => {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        if (i === 0) {
            alert("limit")
        } else {
            setI(i - 1)
            setColor(`#${randomColor}`)
        }
    }

    const getDetail = (jenis) => {
        if (jenis === 'Trigatra') {
            setMainButtonTriGatra()
        } else {
            setMainButtonPancaGatra()
        }

        document.querySelector('.footer').style.bottom = '-300px'


        document.querySelector('.footer').style.bottom = '20px'


    }

    return (
        <div className="q-container" >
            <div className="option">
                {/* {question[i].o.map((opt, i) =>
                    <div>{opt.o}</div>
                )} */}
            </div>
            <div className="footer2">
                {
                    button_init.map((data, i) =>
                        <div>
                            <div className="btn2" onClick={() => getDetail(data.name)}>
                                <img src={data.icon} />
                                <span>{data.name}</span>
                            </div>
                        </div>
                    )
                }
            </div>



            <div className="footer" style={{ width: isTrigatra ? "31%" : "52%" }}>

                {
                    isTrigatra ?
                        button_main_trigatra.map((data, i) =>
                            <div>
                                <div className="btn2" >
                                    <img src={data.icon} />
                                    <span>{data.name}</span>
                                </div>
                            </div>
                        )
                        :
                        button_main_pancagatra.map((data, i) =>
                            <div>
                                <div className="btn2" >
                                    <img src={data.icon} />
                                    <span>{data.name}</span>
                                </div>
                            </div>
                        )

                }
            </div>

        </div>
    )
}

const mapStateToProps = ({ app }) => {
    return {
        question: app.question,
        button_init: app.button_init,
        button_main_trigatra: app.button_main_trigatra,
        button_main_pancagatra: app.button_main_pancagatra,
        isTrigatra: app.isTrigatra,
        isPancaGatra: app.isPancaGatra,

    }
}

const mapDispatchToProps = dispatch => {
    return {
        setMainButtonPancaGatra: () => dispatch(setMainButtonPancaGatra()),
        setMainButtonTriGatra: () => dispatch(setMainButtonTriGatra())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Questionpage);
