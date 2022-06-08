import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { People, PeopleForm } from '../../models/people.model';
import { PersonForm, PersonFormGroup } from './form';

@Component({
  selector: 'sfeir-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @Input() person: People;
  @Output() cancel: EventEmitter<void> = new EventEmitter();
  @Output() save: EventEmitter<PeopleForm> = new EventEmitter();
  personForm: FormGroup<PersonFormGroup>;

  ngOnInit(): void {
    this.personForm = new PersonForm(this.person);
  }

  onSave(): void {
    // this.save.emit(this.personForm.getRawValue());
  }

  onCancel(): void {
    this.cancel.emit();
  }
}
