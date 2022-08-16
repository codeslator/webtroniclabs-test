import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";

export { default as useAuth } from './useAuth';
export { default as useUI } from './useUI';
export { default as useTodo } from './useTodo';
export { default as usePokemon } from './usePokemon';
export { default as useForm } from './useForm';


export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;