import {Component, forwardRef, input, model} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';

@Component({
  selector: 'app-text-input',
  imports: [
    MatFormField,
    MatInput,
    MatLabel
  ],
  templateUrl: './text-input.component.html',
  styleUrl: './text-input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextInputComponent),
      multi: true
    }
  ]
})
export class TextInputComponent implements ControlValueAccessor {
  label = input<string>("");
  placeholder = input<string>("");
  type = input<'text' | 'email' | 'password'>('text');
  disabled = model<boolean>(false);
  inputId = model<string>('');
  inputClass = model<string>('');

  value = '';

  // Callback functions for changes and touched status
  onChange: (value: string) => void = () => {};
  onTouched: () => void = () => {};

  // Called when the form model changes programmatically
  writeValue(value: string): void {
    this.value = value;
  }

  // Registers a function to call when the control value changes
  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  // Registers a function to call when the control is touched
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  // Optionally handle the disabled state
  setDisabledState?(isDisabled: boolean): void {
    this.disabled.set(isDisabled);
  }

  onInputEvent(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.onInput(inputElement.value);
  }

  // Called when the user types into the input field
  onInput(value: string): void {
    this.value = value;
    this.onChange(value);
  }
}
