import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [
        { id: 1, first_name: 'Tony', last_name: 'Stark', email: 'tony@stark.com', password:'password123' },
        { id: 2, first_name: 'Steve', last_name: 'Roger', email: 'steve@rogers.com', password: 'password456' },
        { id: 3, first_name: 'test', last_name: 'test', email: 'test.test.com', password: 'test123' },
    ]
};
let nextId = 4
export const slice_utilisateur = createSlice({
    name: 'utilisateur',
    initialState,

    reducers: {
        addItemToUtilisateur: (state, action) => {
            console.log('in')
            state.items = [...state.items, { id: nextId, name: action.payload.name }]
            nextId += 1
        },
        removeItemFromUtilisateur: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload.id)
        },
    },
});

export const { addItemToUtilisateur, removeItemFromUtilisateur } = slice_utilisateur.actions;

export const selectItems = (state) => state.utilisateur.items;

export default slice_utilisateur.reducer;