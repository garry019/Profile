import { combineReducers } from 'redux'; 

const item = {
    nombre: 'Primer Item',
    cantidad: 10,
    precio: 500
};

export const Incrementar = (cantidad) => {
    return {
        type: 'Incrementar',
        payload: cantidad
    }
}

export const ItemReducer = (state = item, action) => {
    
    switch(action.type){
        case 'Incrementar': {
            return {
                ...state,
                cantidad: state.cantidad + action.payload
            }
        }
        default:
            return {
                ...state
            }
    }  
}

const category = {
    nombre: 'Primer Item',
    descripcion: 'Descripcion primera categoría'
};
export const ChangeDescription = (descripcion) => {
    return {
        type: 'ChangeDescription',
        payload: descripcion
    }
}
export const CategoryReducer = (state = category, action) => {
    
    switch(action.type){
        case 'ChangeDescription': {
            return {
                ...state,
                descripcion: action.payload
            }
        }
        default:
            return {
                ...state
            }
    }  
}

export const RootReducers = combineReducers({
    ItemReducer,
    CategoryReducer
});