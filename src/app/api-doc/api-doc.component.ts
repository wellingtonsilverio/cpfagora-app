import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api-doc',
  templateUrl: './api-doc.component.html',
  styleUrls: ['./api-doc.component.css']
})
export class ApiDocComponent implements OnInit {
  jsonExemple: any = {
    searchCPF: {"status":true,"data":{"_id":"5cc6e25ce71149002a24f128","status":1,"cpf":10000000000,"nome":"Jose Nacimento","nascimento":"1900-01-30T00:00:00.000Z","createdAt":"2019-04-29T11:39:08.445Z","updatedAt":"2019-04-29T11:39:08.445Z","__v":0}},
    searchCNPJ: {"status":true,"data":{"billing":{"free":true,"database":true},"qsa":[{"qual":"37-Sócio Pessoa Jurídica Domiciliado no Exterior","qual_rep_legal":"17-Procurador","nome_rep_legal":"YUN KI LEE","pais_origem":"ESTADOS UNIDOS","nome":"GOOGLE INTERNATIONAL LLC"},{"qual":"37-Sócio Pessoa Jurídica Domiciliado no Exterior","qual_rep_legal":"17-Procurador","nome_rep_legal":"YUN KI LEE","pais_origem":"ESTADOS UNIDOS","nome":"GOOGLE LLC"},{"qual":"05-Administrador","nome":"FABIO JOSE SILVA COELHO"}],"_id":"5cdd92ce7d7e76002acbe4ec","atividade_principal":[{"_id":"5cdd92ce7d7e76002acbe4ed","name":"Portais, provedores de conteúdo e outros serviços de informação na internet","code":"63.19-4-00"}],"data_situacao":"2004-09-01T00:00:00.000Z","complemento":"ANDAR 17 A 20 TORRE SUL ANDAR 2 TORRE NORTE ANDAR 18 A 20 TORRE NORTE","nome":"GOOGLE BRASIL INTERNET LTDA.","uf":"SP","telefone":"(11) 2395-8400","email":"googlebrasil@google.com","atividades_secundarias":[{"_id":"5cdd92ce7d7e76002acbe4f3","name":"Consultoria em publicidade","code":"73.19-0-04"},{"_id":"5cdd92ce7d7e76002acbe4f2","name":"Comércio varejista especializado de equipamentos e suprimentos de informática","code":"47.51-2-01"},{"_id":"5cdd92ce7d7e76002acbe4f1","name":"Desenvolvimento e licenciamento de programas de computador customizáveis","code":"62.02-3-00"},{"_id":"5cdd92ce7d7e76002acbe4f0","name":"Desenvolvimento de programas de computador sob encomenda","code":"62.01-5-01"},{"_id":"5cdd92ce7d7e76002acbe4ef","name":"Tratamento de dados, provedores de serviços de aplicação e serviços de hospedagem na internet","code":"63.11-9-00"},{"_id":"5cdd92ce7d7e76002acbe4ee","name":"Holdings de instituições não-financeiras","code":"64.62-0-00"}],"situacao":"ATIVA","bairro":"ITAIM BIBI","logradouro":"AV BRIGADEIRO FARIA LIMA","numero":"3477","cep":"04.538-133","municipio":"SAO PAULO","porte":"DEMAIS","abertura":"2004-09-01T00:00:00.000Z","natureza_juridica":"206-2 - Sociedade Empresária Limitada","cnpj":6990590000123,"ultima_atualizacao":"2019-05-16T12:00:54.290Z","status":"OK","tipo":"MATRIZ","fantasia":"","efr":"","motivo_situacao":"","situacao_especial":"","data_situacao_especial":"","capital_social":56758501,"createdAt":"2019-05-16T16:41:50.255Z","updatedAt":"2019-05-16T16:41:50.255Z","__v":0}}
  }

  constructor() { }

  ngOnInit() {
  }

}
