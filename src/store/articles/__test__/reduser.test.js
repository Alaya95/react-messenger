import { FETCH_STATUSES } from '../../../components/utils/constants';
import { getArticlesRequest } from '../actions';
import { articleReducer } from '../reducer';

describe('articles reducer', () => {
  it('sets error to null if called with request action', () => {
    const result = articleReducer(
      {
        data: [],
        status: FETCH_STATUSES.IDLE,
        error: null,
      },
      getArticlesRequest(),
    );
    expect(result.error).toBeNull();
  });
});
