import { PropsWithChildren, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from './store';
import { toggleDirection, toggleTheme } from './store/themeConfigSlice';

function App({ children }: PropsWithChildren) {
    const themeConfig = useSelector((state: IRootState) => state.themeConfig);
    const dispatch = useDispatch();

    useEffect(() => {
        // Initialize theme and direction from localStorage on client side only once
        if (typeof window !== 'undefined') {
            const savedTheme = localStorage.getItem('theme') || 'light';
            const savedDirection = localStorage.getItem('direction') || 'ltr';
            dispatch(toggleTheme(savedTheme));
            dispatch(toggleDirection(savedDirection));
        }
    }, [dispatch]);

    return <div className="App">{children}</div>;
}

App.displayName = 'App';
export default App;
