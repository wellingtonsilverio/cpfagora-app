import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'plan-hire-modal',
  templateUrl: './plan-hire-modal.component.html',
  styleUrls: ['./plan-hire-modal.component.css']
})
export class PlanHireModalComponent implements OnInit {
  requestPlan: FormGroup;

  constructor(
    public fb: FormBuilder,
    private spinner: NgxSpinnerService
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
        describle: ['', Validators.required, Validators.minLength(15)],
        terms: [false, Validators.requiredTrue]
      }),
      payments: fb.group({
        boleto: ['']
      })
    });
  }

  ngOnInit() {
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
  get boleto() { return this.payments.get('boleto'); }

}