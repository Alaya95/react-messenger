import { useDispatch, useSelector } from "react-redux";
import { toggleCheckbox } from "../../store/profile/actions";

export const Profile = () => {
    const state = useSelector(state => state);
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(toggleCheckbox)
    }
    console.log(state)
    return (<>
        <div>Profile</div>
        <div>
            <button onClick={handleClick} > {state.showName ? 'off' : 'on'}</button>
            {state.showName && <p>{state.name}</p>}
        </div>
    </>);
}