import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { makeStore } from "../redux/store";
import { userReducer } from "../redux/slices/UserSlice";

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(userReducer.actions, dispatch);
};
