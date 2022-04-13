import { useSelector, useDispatch } from "react-redux";
import Form from "../../components/Form/Form";
import { setName, toggleCheckbox } from "../../store/profile/actions";
import { selectName, selectShowName } from "../../store/profile/selectors";

//версия с коннект
// const ProfileToConnect = ({ name, showName, changeName, changeCheckbox }) => {
//     const handleClick = () => {
//         changeCheckbox(showName)
//     };
//     const handleSubmit = (text) => {
//         changeName(text)
//     };
//     return (
//         <>
//             <div>Profile</div>
//             <div>
//                 <button onClick={handleClick} >{showName ? 'off' : 'on'}</button>
//                 {showName && <p>{name}</p>}
//             </div>
//             <Form onSubmit={handleSubmit} />
//         </>
//     );
// }

// const mapStateToProps = state => ({
//     name: state.profile.name,
//     showName: state.profile.showName
// });

// const mapDispatch = {
//     changeName: setName,
//     changeCheckbox: () => toggleCheckbox,
// }

// export const Profile = connect(mapStateToProps, mapDispatch)(ProfileToConnect);

//версия с селектором
export const Profile = () => {
    const name = useSelector(selectName);
    const showName = useSelector(selectShowName);
    const dispatch = useDispatch();

    const handleClick = () => { dispatch(toggleCheckbox) };
    const handleSubmit = (text) => { dispatch(setName(text)) };

    return (
        <>
            <div>Profile</div>
            <div>
                <button onClick={handleClick} > {showName ? 'off' : 'on'}</button>
                {showName && <p>{name}</p>}
            </div>
            <Form onSubmit={handleSubmit} />
        </>    );
}