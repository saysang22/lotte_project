import { configureStore, createSlice } from "@reduxjs/toolkit";
import data from './data';
import faq_data from './faq_data';
import notice_data from './notice_data';

let datas = createSlice ({
    name: 'datas',
    initialState: data
})

let faqData = createSlice ({
    name: 'faq_datas',
    initialState: faq_data
});

let noticeData = createSlice({
    name: 'notice_datas',
    initialState: notice_data
})

export default configureStore({
    reducer: {
        datas: datas.reducer,
        faqData: faqData.reducer,
        noticeData:noticeData.reducer
    }
})