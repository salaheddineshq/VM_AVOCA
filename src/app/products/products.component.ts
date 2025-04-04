import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent  {

  client = {
    annee: '',
    numeroDossier: '',
    descriptionDossier: '',
    codeDossier: '',
    dateEnregistrement: null,
    dateEncaissement: null,
    referencePaiement: '',
    descriptionAffaire: '',
    natureAffaire: '',
    nomTribunal: '',
    tribunal: '',
  };

  empForm: FormGroup;
  natureOptions = ['Civil', 'Criminal', 'Family Law', 'Corporate'];
  Genres = ['Homme', 'Femme'];


  constructor(private fb: FormBuilder) {
    this.empForm = this.fb.group({
      year: [''],
      dossierNumber: [''],
      dossierDescription: [''],
      codeDossier: [''],
      dateEnregistrement: [''],
      dateEncaissement: [''],
      referencePaiement: [''],
      descriptionAffaire: [''],
      natureAffaire: [''],
      nomTribunal: [''],
      tribunal: [''],
      nom: [''],
      prenom: [''],
      cin: [''],
      genre: [''],
    });
  }

  onFormSubmit() {
    if (this.empForm.valid) {
      console.log('Form Data:', this.empForm.value);
    }
  }

  onCancel() {
    this.empForm.reset();
  }
}
