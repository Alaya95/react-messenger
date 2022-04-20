import { Error, ErrorOutlined } from "@mui/icons-material";
import { CircularProgress } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FETCH_STATUSES } from "../../components/utils/constants";
import { getArticles } from "../../store/articles/actions";
import { selectArticles, selectArticlesError, selectArticlesStatus } from "../../store/articles/selectors";


export const Articles = () => {
    const dispatch = useDispatch();
    const articles = useSelector(selectArticles);
    const error = useSelector(selectArticlesError);
    const status = useSelector(selectArticlesStatus);

    const sendRequest = () => {
        dispatch(getArticles());
    };

    useEffect(() => {
        sendRequest();
    }, [])

    return (
        <>
            <div> articles </div>
            <button onClick={sendRequest}>Get</button>

            {status === FETCH_STATUSES.REQUEST && <CircularProgress />}
            {error && <div>{error}</div>}

            <ul>
                {articles.map((article) => (
                    <li key={article.id}>{article.title}</li>
                ))}
            </ul>
        </>
    );
}