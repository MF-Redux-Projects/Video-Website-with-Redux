import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    tags: [],
    search: ''
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        tagSelected: (state, action) => {
            state.tags.push(action.payload)
        },
        tagRemoved: (state, action) => {
            state.tags = state.tags.filter(tag => tag !== action.payload)
        },
        searchChanged: (state, action) => {
            state.search = action.payload
        },
        clearAllFilters: state => {
            state.tags = [];
            state.search = '';
        }
    }
})

export default filterSlice.reducer;
export const {tagSelected, tagRemoved, searchChanged, clearAllFilters} = filterSlice.actions;
