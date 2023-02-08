import { ADD_MESSAGE } from "../Actiontypes/action"

export const addMessage = (data) => {
    return{
        type: ADD_MESSAGE,
        payLoad:data

    }
}