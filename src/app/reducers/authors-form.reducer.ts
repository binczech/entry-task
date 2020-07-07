import { AuthorsFormState } from '../models/helper/app-state.model';
import { AuthorFormActions, PostAuthorRequestAction, PostAuthorSuccessAction } from '../actions/authors-form.actions';

const INITIAL_STATE: AuthorsFormState = {
    data: [],
    loading: false
};

export function authorsFormReducer(state: AuthorsFormState = INITIAL_STATE,
                                   action: AuthorFormActions): AuthorsFormState {
  switch (action.type) {
    case PostAuthorRequestAction.type:
      return {
        ...state,
        loading: true
      };

    case PostAuthorSuccessAction.type:
      return {
        ...state,
        data: [
          ...state.data,
          action.author
        ],
        loading: false
      };

    default:
      return state;
  }
}
