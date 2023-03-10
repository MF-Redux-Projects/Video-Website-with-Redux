import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    tags: [],
    search: '',
    author: ''
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
        searchFilter: (state, action) => {
            state.search = action.payload
        },
        authorFilter: (state, action) => {
            state.author = action.payload
        },
        resetTagsSearchFilter: state => {
            state.tags = [];
            state.search = '';
        },
        resetAllFilters: state => {
            state.tags = [];
            state.search = '';
            state.author = '';
        }
    }
})

export default filterSlice.reducer;
export const {tagSelected, tagRemoved, searchFilter, authorFilter, resetTagsSearchFilter, resetAllFilters} = filterSlice.actions;
