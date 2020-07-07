import { Action } from '@ngrx/store';
import { AuthorModel } from '../models/api/author.model';

export class PostAuthorRequestAction implements Action {
    static readonly type = 'PostAuthorRequest';
    readonly type = PostAuthorRequestAction.type;

    constructor(public readonly author: AuthorModel) { }
  }

export class PostAuthorSuccessAction implements Action {
    static readonly type = 'PostAuthorSuccess';
    readonly type = PostAuthorSuccessAction.type;

    constructor(public readonly author: AuthorModel) { }
}

export type AuthorFormActions
= PostAuthorRequestAction
| PostAuthorSuccessAction;
