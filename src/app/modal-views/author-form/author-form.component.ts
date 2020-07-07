import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { AuthorModel } from '../../models/api/author.model';
import { PostAuthorRequestAction } from '../../actions/authors-form.actions';
import { Store } from '@ngrx/store';
import { AppStateModel } from '../../models/helper/app-state.model';

@Component({
  selector: 'app-author-form',
  templateUrl: './author-form.component.html',
  styleUrls: ['./author-form.component.scss']
})
export class AuthorFormComponent implements OnInit {

  myForm: FormGroup;

  constructor(private readonly fb: FormBuilder,
              private readonly store: Store<AppStateModel>,
              private readonly dialogRef: MatDialogRef<AuthorFormComponent>) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: ['', [
        Validators.required, Validators.pattern('[a-zA-Z \-]*')
      ]],
      email: ['', [
        Validators.required, Validators.email
      ]],
      skill: [0, [
        Validators.required, Validators.pattern('[0-9]*'), Validators.min(0), Validators.max(10)
      ]]

    });
  }

  get name(): AbstractControl | null {
    return this.myForm.get('name');
  }

  get email(): AbstractControl | null {
    return this.myForm.get('email');
  }

  get skill(): AbstractControl | null {
    return this.myForm.get('skill');
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  submitAuthor(): void {
    const {value} = this.myForm;
    const author: AuthorModel = {
      id: '_' + Math.random().toString(36).substr(2, 9),
      name: value['name'],
      email: value['email'],
      avatar: '',
      skill: value['skill']
    };
    this.store.dispatch(new PostAuthorRequestAction(author));
    this.closeDialog();
  }

}
