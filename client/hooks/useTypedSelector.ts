import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../redux/store";

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export default useTypedSelector;
