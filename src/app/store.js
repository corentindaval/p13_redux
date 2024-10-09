import { configureStore } from '@reduxjs/toolkit';
import token from '../features/token/token';
import utilisateur from "../features/utilisateurs/utilisateurs";

export const store = configureStore({
    reducer: {
        Token: token,
        Utilisateur:utilisateur,
    },
});
