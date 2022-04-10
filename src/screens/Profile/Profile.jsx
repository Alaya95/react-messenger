import { useDispatch, useSelector } from "react-redux";
import Form from "../../components/Form/Form";
import { setName, toggleCheckbox } from "../../store/profile/actions";

export const Profile = () => {
    const state = useSelector(state => state);
    const dispatch = useDispatch();
    const handleClick = () => { dispatch(toggleCheckbox) };
    const handleSubmit = (text) => { dispatch(setName(text)) };
    return (
        <>
            <div>Profile</div>
            <div>
                <button onClick={handleClick} > {state.showName ? 'off' : 'on'}</button>
                {state.showName && <p>{state.name}</p>}
            </div>
            <Form onSubmit={handleSubmit} />
        </>
    );
}