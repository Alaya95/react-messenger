// import { useEffect, useRef } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Form from "../../components/Form/Form";
import { logOut } from "../../services/firebase";
import { initProfileTrack, setNameFB, setShowName, stopProfileTrack } from "../../store/profile/actions";
import { selectName, selectShowName } from "../../store/profile/selectors";

export const Profile = ({ onLogout }) => {
    const dispatch = useDispatch();
    const name = useSelector(selectName);
    const showName = useSelector(selectShowName);

    const handleClick = () => {
        dispatch(setShowName(!showName));
    };
    const handleSubmit = (text) => {
        dispatch(setNameFB(text));
    };

    useEffect(() => {
        dispatch(initProfileTrack());

        return () => {
            dispatch(stopProfileTrack());
        };
    }, []);

    return (
        <>
            <div>Profile</div>
            <button onClick={logOut}>Logout</button>
            <div>
                <button onClick={handleClick} >
                    {showName ? 'off' : 'on'}
                </button>
                {showName && <p>{name}</p>}
            </div>
            <Form onSubmit={handleSubmit} />
        </>
    );
}