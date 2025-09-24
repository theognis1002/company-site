import { createSlice } from '@reduxjs/toolkit';
import Aos from 'aos';

const initialState = {
    theme: 'light',
    direction: 'ltr',
};

const themeConfigSlice = createSlice({
    name: 'themeConfig',
    initialState: initialState,
    reducers: {
        toggleTheme(state, { payload }) {
            payload = payload || state.theme; // light | dark
            if (typeof window !== 'undefined') {
                localStorage.setItem('theme', payload);
            }
            state.theme = payload;
            if (typeof document !== 'undefined') {
                if (state.theme === 'dark') {
                    document.querySelector('body')?.classList.add('dark');
                } else {
                    document.querySelector('body')?.classList.remove('dark');
                }
            }
        },
        toggleDirection(state, { payload }) {
            payload = payload || state.direction; // rtl, ltr
            if (typeof window !== 'undefined') {
                localStorage.setItem('direction', payload);
            }
            state.direction = payload;

            if (typeof document !== 'undefined') {
                document.querySelector('html')?.setAttribute('dir', state.direction || 'ltr');
                Aos.refresh();
            }
        },
    },
});

export const { toggleTheme, toggleDirection } = themeConfigSlice.actions;

export default themeConfigSlice.reducer;
