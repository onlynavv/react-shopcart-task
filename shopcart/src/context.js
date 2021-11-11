import React,{useContext,useReducer} from 'react';


const AppContext = React.createContext();

const initialState = {
    cart:[],
    total:0
}

const reducer = (state, action) => {
    if(action.type === 'ADD_ITEM'){

        return {...state, cart:[...state.cart, action.payload]}
    }

    if(action.type === 'REMOVE_ITEM'){
        const newCartValue = state.cart.filter((item)=>{
                return item.id !== action.payload
        })
        return {...state, cart:newCartValue}
    }

    return state
}

const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const addItem = (id, name, price, rating, image, setShowAddBtn,showAddBtn) => {

        dispatch({type:'ADD_ITEM', payload:{
            id:id,
            name:name,
            price:price,
            rating:rating,
            image:image,
            showAddBtn:showAddBtn,
            setShowAddBtn:setShowAddBtn
        }})

        setShowAddBtn(true)
        
    }

    const removeItem = (id,setShowAddBtn,showAddBtn) => {
        
        dispatch({type:'REMOVE_ITEM', payload:id})

        setShowAddBtn(showAddBtn)
    }

    return(
        <AppContext.Provider value={{...state,addItem,removeItem}}>{children}</AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppProvider, AppContext}