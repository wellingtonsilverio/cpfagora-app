import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { SearchService } from '../search.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'plan-hire-modal',
  templateUrl: './plan-hire-modal.component.html',
  styleUrls: ['./plan-hire-modal.component.css']
})
export class PlanHireModalComponent implements OnInit {
  requestPlan: FormGroup;
  cpfcnpjType: string;

  constructor(
    public fb: FormBuilder,
    public searchService: SearchService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService
  ) {
    this.requestPlan = fb.group({
      informations: fb.group({
        cpfcnpj: ['', [Validators.required, Validators.minLength(8)]],
        nome: [''],
        nacimento: [''],
        fantasia: [''],
        atividade: [''],
        email: ['', [Validators.required, Validators.email]],
        senha: ['', [Validators.required, Validators.minLength(6)]],
        resenha: ['', [Validators.required, Validators.minLength(6)]]
      }),
      describles: fb.group({
        describle: ['', Validators.required],
        terms: [false, Validators.requiredTrue]
      }),
      payments: fb.group({
        date: ['', [Validators.required]]
      })
    });
  }

  ngOnInit() {
  }

  cpfcnpjMask(rawValue) {
    rawValue = rawValue.replace(/[^\d]+/g, '');    
    if (rawValue.length <= 11){
      return [ /\d/ , /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/ , /\d/, /\d/, '-', /\d/, /\d/ ];  
    }
    else {
      return [ /\d/ , /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/ , /\d/, /\d/, '/', /\d/, /\d/,/\d/, /\d/, '-', /\d/, /\d/ ];
    }
  }

  passwordEquals() {
    if (this.senha.value.length <= 0 && this.resenha.value.length <= 0) return true;

    return this.senha.value == this.resenha.value;
  }

  setPayment() {
    this.paymentDate.patchValue((new Date()).toISOString());
  }

  async save(PlanProModel) {
    this.spinner.show();

    try {
      const response = await this.searchService.saveForm(1, this.requestPlan.value).toPromise();

      if (response.status == true) {
        this.toastr.success("Compra realizada com sucesso!", "Sua conta foi criada, enviaremos um e-mail em breve, muito obrigado.");
      }
      console.log(response);
    } catch (error) {
      console.log(error);      
    }

    PlanProModel.close();

    this.spinner.hide();
  }

  get informations() { return this.requestPlan.get('informations'); }
  get cpfcnpj() { return this.informations.get('cpfcnpj'); }
  get nome() { return this.informations.get('nome'); }
  get nacimento() { return this.informations.get('nacimento'); }
  get fantasia() { return this.informations.get('fantasia'); }
  get atividade() { return this.informations.get('atividade'); }
  get email() { return this.informations.get('email'); }
  get senha() { return this.informations.get('senha'); }
  get resenha() { return this.informations.get('resenha'); }

  get describles() { return this.requestPlan.get('describles'); }
  get describle() { return this.describles.get('describle'); }
  get terms() { return this.describles.get('terms'); }

  get payments() { return this.requestPlan.get('payments'); }
  get paymentDate() { return this.payments.get('date'); }
}