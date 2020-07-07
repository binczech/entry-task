import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { PostAuthorRequestAction, PostAuthorSuccessAction } from '../actions/authors-form.actions';
import { AuthorModel } from '../models/api/author.model';
import { map, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthorsFormEffects {
  @Effect() readonly postAuthor$ = this.actions$.pipe(
    ofType(PostAuthorRequestAction.type),
    switchMap(({author}: PostAuthorRequestAction) => this.http.post<AuthorModel>('/authors', author).pipe(
      map(response => new PostAuthorSuccessAction(response))
    ))
  );

  constructor(private readonly actions$: Actions,
              private readonly http: HttpClient) { }
}
