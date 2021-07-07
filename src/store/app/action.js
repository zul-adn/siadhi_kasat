import axios from 'axios'

const storeDatas = (payload) => ({ type : 'STORE_DATAS', datas: payload }) 
const storeDatasDetail = (payload) => ({type: 'STORE_DATAS_DETAIL', datas: payload})
export const setMainButtonTriGatra = () => ({type: 'MAIN_BUTTON_TRIGATRA'})
export const setMainButtonPancaGatra = () => ({type: 'MAIN_BUTTON_PANCAGATRA'})
export const resetDetails = () => ({ type: 'RESET_DETAIL' }) 

export const getAllDatas = () => {
    return (dispatch) => {
        axios.get('https://dinartech.com/tog/public/api/getall')
            .then(response => {
                dispatch(storeDatas(response.data))
            })

    }
}

export const getDetails = (payload) => {
    console.log(payload)
    const datas = {
        id_nama : payload
    }
    return (dispatch) => {
        axios.post('https://dinartech.com/tog/public/api/getdetail', datas)
            .then(response => {
                dispatch(storeDatasDetail(response.data.data))
            })
    }
}