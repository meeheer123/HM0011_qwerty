import todoListReducer from './slice/todoListSlice';
import rainReducer from './slice/rainSlice';
import moodReducer from './slice/moodSlice';
import modeReducer from './slice/modeSlice';
import changeVolumeReducer from './slice/changeVolumeSlice';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

const rootReducer = combineReducers({
    todoList: todoListReducer,
    rain: rainReducer,
    mood: moodReducer,
    mode: modeReducer,
    volume: changeVolumeReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
});

export default store;
