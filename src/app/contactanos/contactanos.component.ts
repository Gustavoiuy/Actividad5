
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrls: ['./contactanos.component.css']
})
export class ContactanosComponent implements OnInit {

  contactForm!: FormGroup;

  constructor(private readonly fb: FormBuilder) { }

  ngOnInit(): void {
    this.contactForm = this.initForm();
    // this.onPathValue();
    // this.onSetValue();
  }

  onPathValue(): void {
    this.contactForm.patchValue({ name: 'Bezael' });
  }

  onSetValue(): void {
    // this.contactForm.setValue({ comment: 'Hola mundo' });
  }

  onSubmit(): void {
    console.log('Form ->', this.contactForm.value);
  }

  initForm(): FormGroup {
    return this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
     correo: ['', [Validators.required]],
      department: [''],
      comment: ['', [Validators.required]],
    })
  }
}
