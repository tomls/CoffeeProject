import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers/index';

export default function configureStore(){
    return createStore(
        rootReducer,
        compose(
            window.devToolsExtension ? window.devToolsExtension() : f => f
        )
    );
}
