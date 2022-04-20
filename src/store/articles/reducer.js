import { FETCH_STATUSES } from '../../components/utils/constants';
import { GET_ARTICLES_FAILURE, GET_ARTICLES_REQUEST, GET_ARTICLES_SUCCESS } from './actions';

const initialState = {
  data: [],
  status: FETCH_STATUSES.IDLE,
  error: null,
};

export const articleReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ARTICLES_REQUEST:
      return { ...state, status: FETCH_STATUSES.REQUEST, error: null };
    case GET_ARTICLES_FAILURE:
      console.log(payload);
      return { ...state, status: FETCH_STATUSES.FAILURE, error: payload };
    case GET_ARTICLES_SUCCESS:
      return { ...state, status: FETCH_STATUSES.SUCCESS, data: payload };
    default:
      return state;
  }
};
