import { configureStore, createSlice } from "@reduxjs/toolkit";
import data from './data';

let datas = createSlice ({
    name: 'datas',
    initialState: data
})

let st = createSlice ({
    name: 'aa',
    initialState: 'dffff'
});

export default configureStore({
    reducer: {
        datas: datas.reducer,
        st: st.reducer
    }
})