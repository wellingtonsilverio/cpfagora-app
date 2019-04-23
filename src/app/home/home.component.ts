import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { SearchService } from '../search.service';

import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  searchCpfCnpj: FormGroup;
  cpf: any;
  error: any;

  constructor(
    public fb: FormBuilder,
    public searchService: SearchService,
    private spinner: NgxSpinnerService
  ) {
    this.searchCpfCnpj = fb.group({
      cpfcnpj: ['', [Validators.required, Validators.minLength(8)]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit() {
  }

  async search(form: any) {
    this.spinner.show();

    await this.getCPFOrCNPJ(form.email, form.cpfcnpj);
  }

  async getCPFOrCNPJ(email: string, cpfcnpj: string) {
    this.error = undefined;
    this.cpf = undefined;

    try {
      const cpfOrCnpj = await this.searchService.getCPFOrCNPJ(email, cpfcnpj).toPromise();
      if (!cpfOrCnpj || cpfOrCnpj.status === false) {
        throw cpfOrCnpj.data.error;
      } else {
        if (cpfOrCnpj.data.cpf) {
          this.cpf = cpfOrCnpj.data;
          this.goto('searchcpf');
        }
      }
    } catch (error) {
      console.log('[ERROR 001] ', error);
      this.error = error;
      this.goto('searcherror');
    }
    
    this.spinner.hide();
  }

  goto(hashtag: string) {
    const link = document.createElement('a');
    link.setAttribute('class', 'nav-link js-scroll-trigger');
    link.href = '#' + hashtag;
    setTimeout(() => {
      link.click();
    }, 100);
  }

  get cpfcnpj() { return this.searchCpfCnpj.get('cpfcnpj'); }
  get email() { return this.searchCpfCnpj.get('email'); }

}
