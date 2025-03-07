import {FormControl, FormGroup} from '@angular/forms';

export type FormGroupOf<T> = FormGroup<{
  [key in keyof T]: FormControl<T[key]>
}>
