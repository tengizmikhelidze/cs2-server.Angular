import {inject, Injectable} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {FormGroupOf, IAuthentication} from '../../../shared/interfaces';

@Injectable()
export class AuthFormService {
  private readonly fb = inject(FormBuilder);

  authForm: FormGroupOf<IAuthentication> = this.fb.nonNullable.group({
    email: this.fb.nonNullable.control('', [Validators.required, Validators.email]),
    password: this.fb.nonNullable.control('', [Validators.required]),
  })
}
