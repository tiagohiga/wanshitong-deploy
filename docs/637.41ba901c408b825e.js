"use strict";(self.webpackChunkwst_front=self.webpackChunkwst_front||[]).push([[637],{637:(mt,x,s)=>{s.r(x),s.d(x,{BooksModule:()=>lt});var p=s(6814),E=s(893),h=s(2787),O=s(6306),y=s(2096),q=s(8326),t=s(5879),v=s(1374),g=s(7337),N=s(9862);let C=(()=>{class e{constructor(o){this.httpClient=o,this.BASE_URL=g.N.baseUrl,this.API="v1/livro",this.API_ISBN="v1/livro/isbn",this.API_EDIT="v1/livro/edit",this.API_PUBLISHER="v1/editora/all",this.API_AUTHOR="v1/autor/all",this.API_GENRE="v1/genero/all"}listAll(){return this.httpClient.get(`${this.BASE_URL}`+this.API).pipe((0,v.P)())}listAllGenres(){return this.httpClient.get(`${this.BASE_URL}`+this.API_GENRE).pipe((0,v.P)())}listAllPublishers(){return this.httpClient.get(`${this.BASE_URL}`+this.API_PUBLISHER).pipe((0,v.P)())}listAllAuthors(){return this.httpClient.get(`${this.BASE_URL}`+this.API_AUTHOR).pipe((0,v.P)())}save(o){return this.httpClient.post(`${this.BASE_URL}`+this.API,o)}loadByIsbn(o){return this.httpClient.get(`${this.BASE_URL}${this.API_ISBN}/${o}`)}update(o,n){return this.httpClient.put(`${this.BASE_URL}${this.API_EDIT}/${n}`,o)}loadDetailByIsbn(o){return this.httpClient.get(`${this.BASE_URL}${this.API_ISBN}/${o}`)}}return e.\u0275fac=function(o){return new(o||e)(t.LFG(N.eN))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var I=s(7700),c=s(5195),d=s(1274),P=s(5940),u=s(5313),_=s(2296),S=s(617),f=s(9157),b=s(2032);function w(e,i){1&e&&(t.TgZ(0,"mat-header-cell"),t._uU(1,"ISBN"),t.qZA())}function Y(e,i){if(1&e){const o=t.EpF();t.TgZ(0,"mat-cell")(1,"button",15),t.NdJ("click",function(){const a=t.CHM(o).$implicit,m=t.oxw();return t.KtG(m.onView(a))}),t._uU(2),t.qZA()()}if(2&e){const o=i.$implicit;t.xp6(2),t.Oqu(o.isbn)}}function D(e,i){1&e&&(t.TgZ(0,"mat-header-cell"),t._uU(1,"Livro"),t.qZA())}function M(e,i){if(1&e&&(t.TgZ(0,"mat-cell"),t._uU(1),t.qZA()),2&e){const o=i.$implicit;t.xp6(1),t.Oqu(o.nomeLivro)}}function F(e,i){1&e&&(t.TgZ(0,"mat-header-cell"),t._uU(1,"Autor"),t.qZA())}function J(e,i){if(1&e&&(t.TgZ(0,"mat-cell"),t._uU(1),t.qZA()),2&e){const o=i.$implicit;t.xp6(1),t.Oqu(o.idAutor.nomeAutor)}}function G(e,i){1&e&&(t.TgZ(0,"mat-header-cell"),t._uU(1,"Editora"),t.qZA())}function $(e,i){if(1&e&&(t.TgZ(0,"mat-cell"),t._uU(1),t.qZA()),2&e){const o=i.$implicit;t.xp6(1),t.Oqu(o.idEditora.nomeEditora)}}function Q(e,i){1&e&&(t.TgZ(0,"mat-header-cell"),t._uU(1,"Dispon\xedveis"),t.qZA())}function R(e,i){if(1&e&&(t.TgZ(0,"mat-cell"),t._uU(1),t.qZA()),2&e){const o=i.$implicit;t.xp6(1),t.Oqu(o.qtdDisponivel)}}function j(e,i){if(1&e){const o=t.EpF();t.TgZ(0,"mat-header-cell",16)(1,"button",17),t.NdJ("click",function(){t.CHM(o);const r=t.oxw();return t.KtG(r.onAdd())}),t.TgZ(2,"mat-icon"),t._uU(3,"add"),t.qZA()()()}}function z(e,i){if(1&e){const o=t.EpF();t.TgZ(0,"mat-cell",18)(1,"button",19),t.NdJ("click",function(){const a=t.CHM(o).$implicit,m=t.oxw();return t.KtG(m.onEdit(a))}),t.TgZ(2,"mat-icon"),t._uU(3,"edit"),t.qZA()()()}}function H(e,i){1&e&&t._UZ(0,"mat-header-row")}function K(e,i){1&e&&t._UZ(0,"mat-row")}let X=(()=>{class e{constructor(){this.books=[],this.add=new t.vpe(!1),this.edit=new t.vpe(!1),this.view=new t.vpe(!1),this.displayedColumns=["isbn","nomeLivro","nomeAutor","nomeEditora","qtdDisponivel","actions"],this.dataSource=new u.by}ngOnInit(){this.dataSource.data=this.books}onAdd(){this.add.emit(!0)}onEdit(o){this.edit.emit(o)}onView(o){this.view.emit(o)}applyFilter(o){this.dataSource.filter=o.target.value.trim().toLowerCase()}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-books-list"]],inputs:{books:"books"},outputs:{add:"add",edit:"edit",view:"view"},decls:26,vars:3,consts:[["matInput","","placeholder","Orgulho e Preconceito",3,"keyup"],["input",""],[3,"dataSource"],["matColumnDef","isbn"],[4,"matHeaderCellDef"],[4,"matCellDef"],["matColumnDef","nomeLivro"],["matColumnDef","nomeAutor"],["matColumnDef","nomeEditora"],["matColumnDef","qtdDisponivel"],["matColumnDef","actions"],["class","action-column-header",4,"matHeaderCellDef"],["class","action-column",4,"matCellDef"],[4,"matHeaderRowDef"],[4,"matRowDef","matRowDefColumns"],[1,"link-button",3,"click"],[1,"action-column-header"],["mat-mini-fab","","color","primary","aria-label","Adicionar um livro",3,"click"],[1,"action-column"],["mat-icon-button","","color","primary","aria-label","Editar um livro",3,"click"]],template:function(o,n){1&o&&(t.TgZ(0,"mat-form-field")(1,"mat-label"),t._uU(2,"Buscar"),t.qZA(),t.TgZ(3,"input",0,1),t.NdJ("keyup",function(a){return n.applyFilter(a)}),t.qZA()(),t.TgZ(5,"mat-table",2),t.ynx(6,3),t.YNc(7,w,2,0,"mat-header-cell",4),t.YNc(8,Y,3,1,"mat-cell",5),t.BQk(),t.ynx(9,6),t.YNc(10,D,2,0,"mat-header-cell",4),t.YNc(11,M,2,1,"mat-cell",5),t.BQk(),t.ynx(12,7),t.YNc(13,F,2,0,"mat-header-cell",4),t.YNc(14,J,2,1,"mat-cell",5),t.BQk(),t.ynx(15,8),t.YNc(16,G,2,0,"mat-header-cell",4),t.YNc(17,$,2,1,"mat-cell",5),t.BQk(),t.ynx(18,9),t.YNc(19,Q,2,0,"mat-header-cell",4),t.YNc(20,R,2,1,"mat-cell",5),t.BQk(),t.ynx(21,10),t.YNc(22,j,4,0,"mat-header-cell",11),t.YNc(23,z,4,0,"mat-cell",12),t.BQk(),t.YNc(24,H,1,0,"mat-header-row",13),t.YNc(25,K,1,0,"mat-row",14),t.qZA()),2&o&&(t.xp6(5),t.Q6J("dataSource",n.dataSource),t.xp6(19),t.Q6J("matHeaderRowDef",n.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",n.displayedColumns))},dependencies:[u.BZ,u.fO,u.as,u.w1,u.Dz,u.nj,u.ge,u.ev,u.XQ,u.Gk,_.RK,_.nh,S.Hw,f.KE,f.hX,b.Nt],styles:["mat-table[_ngcontent-%COMP%]{overflow:auto;max-height:600px}.action-column[_ngcontent-%COMP%], .action-column-header[_ngcontent-%COMP%]{flex:0 0 75px}.link-button[_ngcontent-%COMP%]{background:none!important;border:none;padding:0!important;color:#069;text-decoration:underline;cursor:pointer}mat-form-field[_ngcontent-%COMP%]{overflow:auto;width:100%}"]}),e})();function V(e,i){if(1&e){const o=t.EpF();t.TgZ(0,"app-books-list",4),t.NdJ("add",function(){t.CHM(o);const r=t.oxw();return t.KtG(r.onAdd())})("edit",function(r){t.CHM(o);const a=t.oxw();return t.KtG(a.onEdit(r))})("view",function(r){t.CHM(o);const a=t.oxw();return t.KtG(a.onView(r))}),t.qZA()}2&e&&t.Q6J("books",i.ngIf)}function W(e,i){1&e&&(t.TgZ(0,"div",5),t._UZ(1,"mat-spinner"),t.qZA())}let tt=(()=>{class e{constructor(o,n,r,a){this.booksService=o,this.dialog=n,this.router=r,this.route=a,this.displayedColumns=["isbn","nomeLivro","nomeAutor","nomeEditora","qtdDisponivel","actions"],this.books$=this.booksService.listAll().pipe((0,O.K)(m=>(this.onError("Erro ao carregar cursos."),(0,y.of)([]))))}onError(o){this.dialog.open(q.I,{data:o})}ngOnInit(){}onAdd(){this.router.navigate(["new"],{relativeTo:this.route})}onEdit(o){this.router.navigate(["edit",o.isbn],{relativeTo:this.route})}onView(o){this.router.navigate(["view",o.isbn],{relativeTo:this.route})}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(C),t.Y36(I.uw),t.Y36(h.F0),t.Y36(h.gz))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-books"]],decls:8,vars:4,consts:[["color","primary"],[1,"column-flex","mat-elevation-z8"],[3,"books","add","edit","view",4,"ngIf","ngIfElse"],["loading",""],[3,"books","add","edit","view"],[1,"loading-spinner"]],template:function(o,n){if(1&o&&(t.TgZ(0,"mat-card")(1,"mat-toolbar",0),t._uU(2," Livros Cadastrados "),t.qZA(),t.TgZ(3,"div",1),t.YNc(4,V,1,1,"app-books-list",2),t.ALo(5,"async"),t.YNc(6,W,2,0,"ng-template",null,3,t.W1O),t.qZA()()),2&o){const r=t.MAs(7);t.xp6(4),t.Q6J("ngIf",t.lcZ(5,2,n.books$))("ngIfElse",r)}},dependencies:[p.O5,c.a8,d.Ye,P.Ou,X,p.Ov],styles:["mat-card[_ngcontent-%COMP%]{max-width:100%;margin:2em auto}.column-flex[_ngcontent-%COMP%]{display:flex;flex-direction:column}.loading-spinner[_ngcontent-%COMP%]{background-color:#d4d4d4;display:flex;align-items:center;justify-content:center;padding:25px}"]}),e})();var A=s(7921),k=s(3620),Z=s(3997),B=s(4664),T=s(7398),l=s(6223),L=s(2939),ot=s(3680),U=s(6381);function et(e,i){if(1&e&&(t.TgZ(0,"mat-option",17),t._uU(1),t.qZA()),2&e){const o=i.$implicit;t.Q6J("value",o.nomeAutor),t.xp6(1),t.hij(" ",o.nomeAutor," ")}}function nt(e,i){if(1&e&&(t.TgZ(0,"mat-option",17),t._uU(1),t.qZA()),2&e){const o=i.$implicit;t.Q6J("value",o.nomeEditora),t.xp6(1),t.hij(" ",o.nomeEditora," ")}}function it(e,i){if(1&e&&(t.TgZ(0,"mat-option",17),t._uU(1),t.qZA()),2&e){const o=i.$implicit;t.Q6J("value",o.nomeGenero),t.xp6(1),t.hij(" ",o.nomeGenero," ")}}const rt=[{path:"",component:tt},{path:"new",component:(()=>{class e{constructor(o,n,r,a){this.formBuilder=o,this.booksService=n,this.snackBar=r,this.location=a,this.form=this.formBuilder.group({isbn:[""],imgLivro:[""],nomeLivro:[""],descricaoLivro:[""],idAutor:[""],idEditora:[""],idGenero:[""],qtdDisponivel:[0],matriculaBibliotecario:[""]}),this.authorOptions=[],this.genreOptions=[],this.publisherOptions=[],this.filteredAuthorOptions=this.form.controls.idAutor.valueChanges.pipe((0,A.O)(""),(0,k.b)(400),(0,Z.x)(),(0,B.w)(m=>this.filterAuthor(m||""))),this.filteredGenreOptions=this.form.controls.idGenero.valueChanges.pipe((0,A.O)(""),(0,k.b)(400),(0,Z.x)(),(0,B.w)(m=>this.filterGenre(m||""))),this.filteredPublisherOptions=this.form.controls.idEditora.valueChanges.pipe((0,A.O)(""),(0,k.b)(400),(0,Z.x)(),(0,B.w)(m=>this.filterPublisher(m||"")))}filterAuthor(o){return this.booksService.listAllAuthors().pipe((0,T.U)(n=>n.filter(r=>0===r.nomeAutor.toLowerCase().indexOf(o.toLowerCase()))))}filterGenre(o){return this.booksService.listAllGenres().pipe((0,T.U)(n=>n.filter(r=>0===r.nomeGenero.toLowerCase().indexOf(o.toLowerCase()))))}filterPublisher(o){return this.booksService.listAllPublishers().pipe((0,T.U)(n=>n.filter(r=>0===r.nomeEditora.toLowerCase().indexOf(o.toLowerCase()))))}ngOnInit(){}onSubmit(){this.booksService.save(this.form.value).subscribe(o=>this.onSuccess(),o=>{this.onError()})}onCancel(){this.location.back()}onSuccess(){this.snackBar.open("Livro cadastrado com sucesso","",{duration:3e3}),this.onCancel()}onError(){this.snackBar.open("Erro ao salvar Livro","",{duration:3e3})}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(l.j3),t.Y36(C),t.Y36(L.ux),t.Y36(p.Ye))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-book-form"]],decls:52,vars:13,consts:[["color","primary"],[1,"min-width",3,"formGroup"],["appearance","outline",1,"full-width"],["matInput","","placeholder","9781234567890","formControlName","isbn"],["matInput","","placeholder","A volta dos que nao foram","formControlName","nomeLivro"],["matInput","","placeholder","A volta dos que nao foram","formControlName","descricaoLivro"],["type","text","placeholder","Marco Cervantes","aria-label","Autor","matInput","","formControlName","idAutor",3,"matAutocomplete"],["autoActiveFirstOption",""],["autoAuthor","matAutocomplete"],[3,"value",4,"ngFor","ngForOf"],["type","text","placeholder","Pick one","aria-label","Editora","matInput","","formControlName","idEditora",3,"matAutocomplete"],["autoPublisher","matAutocomplete"],["type","text","placeholder","Romance","aria-label","Genero","matInput","","formControlName","idGenero",3,"matAutocomplete"],["autoGenre","matAutocomplete"],["matInput","","placeholder","5","formControlName","qtdDisponivel"],["mat-raised-button","","color","primary",3,"click"],["mat-raised-button","",3,"click"],[3,"value"]],template:function(o,n){if(1&o&&(t.TgZ(0,"mat-card")(1,"mat-toolbar",0)(2,"mat-toolbar-row")(3,"span"),t._uU(4,"Cadastrar Livro"),t.qZA()()(),t.TgZ(5,"mat-card-content")(6,"form",1)(7,"mat-form-field",2)(8,"mat-label"),t._uU(9,"ISBN"),t.qZA(),t._UZ(10,"input",3),t.qZA(),t.TgZ(11,"mat-form-field",2)(12,"mat-label"),t._uU(13,"Nome do Livro"),t.qZA(),t._UZ(14,"input",4),t.qZA(),t.TgZ(15,"mat-form-field",2)(16,"mat-label"),t._uU(17,"Descri\xe7\xe3o"),t.qZA(),t._UZ(18,"input",5),t.qZA(),t.TgZ(19,"mat-form-field",2)(20,"mat-label"),t._uU(21,"Autor"),t.qZA(),t._UZ(22,"input",6),t.TgZ(23,"mat-autocomplete",7,8),t.YNc(25,et,2,2,"mat-option",9),t.ALo(26,"async"),t.qZA()(),t.TgZ(27,"mat-form-field",2)(28,"mat-label"),t._uU(29,"Editora"),t.qZA(),t._UZ(30,"input",10),t.TgZ(31,"mat-autocomplete",7,11),t.YNc(33,nt,2,2,"mat-option",9),t.ALo(34,"async"),t.qZA()(),t.TgZ(35,"mat-form-field",2)(36,"mat-label"),t._uU(37,"Genero"),t.qZA(),t._UZ(38,"input",12),t.TgZ(39,"mat-autocomplete",7,13),t.YNc(41,it,2,2,"mat-option",9),t.ALo(42,"async"),t.qZA()(),t.TgZ(43,"mat-form-field",2)(44,"mat-label"),t._uU(45,"Quantidade"),t.qZA(),t._UZ(46,"input",14),t.qZA()()(),t.TgZ(47,"mat-card-actions")(48,"button",15),t.NdJ("click",function(){return n.onSubmit()}),t._uU(49," Salvar "),t.qZA(),t.TgZ(50,"button",16),t.NdJ("click",function(){return n.onCancel()}),t._uU(51,"Cancelar"),t.qZA()()()),2&o){const r=t.MAs(24),a=t.MAs(32),m=t.MAs(40);t.xp6(6),t.Q6J("formGroup",n.form),t.xp6(16),t.Q6J("matAutocomplete",r),t.xp6(3),t.Q6J("ngForOf",t.lcZ(26,7,n.filteredAuthorOptions)),t.xp6(5),t.Q6J("matAutocomplete",a),t.xp6(3),t.Q6J("ngForOf",t.lcZ(34,9,n.filteredPublisherOptions)),t.xp6(5),t.Q6J("matAutocomplete",m),t.xp6(3),t.Q6J("ngForOf",t.lcZ(42,11,n.filteredGenreOptions))}},dependencies:[p.sg,c.a8,c.hq,c.dn,d.Ye,d.rD,_.lW,f.KE,f.hX,ot.ey,b.Nt,U.XC,U.ZL,l._Y,l.Fj,l.JJ,l.JL,l.sg,l.u,p.Ov],styles:[".full-width[_ngcontent-%COMP%]{width:80%;padding:3px}mat-card[_ngcontent-%COMP%]{max-width:80%;margin:2em auto;text-align:center}mat-card-actions[_ngcontent-%COMP%]{justify-content:center}button[_ngcontent-%COMP%]{margin:5px}"]}),e})()},{path:"edit/:isbn",component:(()=>{class e{constructor(o,n,r,a,m){this.formBuilder=o,this.booksService=n,this.snackBar=r,this.location=a,this.route=m,this.routeIsbn="",this.form=this.formBuilder.group({isbn:[""],imgLivro:[""],nomeLivro:[""],descricaoLivro:[""],qtdDisponivel:[0],matriculaBibliotecario:[""]})}onSubmit(){this.booksService.update(this.form.value,this.routeIsbn).subscribe(o=>this.onSuccess(),o=>{this.onError()})}ngOnInit(){this.route.params.subscribe(o=>{const n=o.isbn;this.routeIsbn=n,this.booksService.loadByIsbn(n).subscribe(a=>{this.form.patchValue({isbn:a.isbn,nomeLivro:a.nomeLivro,descricaoLivro:a.descricaoLivro,qtdDisponivel:a.qtdDisponivel,matriculaBibliotecario:a.matriculaBibliotecario})})}),this.form.get("isbn")?.disable()}onCancel(){this.location.back()}onSuccess(){this.snackBar.open("Livro cadastrado com sucesso","",{duration:3e3}),this.onCancel()}onError(){this.snackBar.open("Erro ao salvar Livro","",{duration:3e3})}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(l.j3),t.Y36(C),t.Y36(L.ux),t.Y36(p.Ye),t.Y36(h.gz))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-book-form-edit"]],decls:28,vars:1,consts:[["color","primary"],[1,"margin-content"],[1,"min-width",3,"formGroup"],["appearance","outline",1,"full-width"],["matInput","","placeholder","9781234567890","formControlName","isbn"],["matInput","","placeholder","A volta dos que nao foram","formControlName","nomeLivro"],["matInput","","placeholder","A volta dos que nao foram","formControlName","descricaoLivro"],["matInput","","placeholder","5","formControlName","qtdDisponivel"],["mat-raised-button","","color","primary",3,"click"],["mat-raised-button","",3,"click"]],template:function(o,n){1&o&&(t.TgZ(0,"mat-card")(1,"mat-toolbar",0)(2,"mat-toolbar-row")(3,"span"),t._uU(4,"Cadastrar Livro"),t.qZA()()(),t.TgZ(5,"mat-card-content",1)(6,"form",2)(7,"mat-form-field",3)(8,"mat-label"),t._uU(9,"ISBN"),t.qZA(),t._UZ(10,"input",4),t.qZA(),t.TgZ(11,"mat-form-field",3)(12,"mat-label"),t._uU(13,"Nome do Livro"),t.qZA(),t._UZ(14,"input",5),t.qZA(),t.TgZ(15,"mat-form-field",3)(16,"mat-label"),t._uU(17,"Descri\xe7\xe3o"),t.qZA(),t._UZ(18,"input",6),t.qZA(),t.TgZ(19,"mat-form-field",3)(20,"mat-label"),t._uU(21,"Quantidade"),t.qZA(),t._UZ(22,"input",7),t.qZA()()(),t.TgZ(23,"mat-card-actions")(24,"button",8),t.NdJ("click",function(){return n.onSubmit()}),t._uU(25," Salvar "),t.qZA(),t.TgZ(26,"button",9),t.NdJ("click",function(){return n.onCancel()}),t._uU(27,"Cancelar"),t.qZA()()()),2&o&&(t.xp6(6),t.Q6J("formGroup",n.form))},dependencies:[c.a8,c.hq,c.dn,d.Ye,d.rD,_.lW,f.KE,f.hX,b.Nt,l._Y,l.Fj,l.JJ,l.JL,l.sg,l.u],styles:[".full-width[_ngcontent-%COMP%]{width:80%;padding:3px}mat-card[_ngcontent-%COMP%]{max-width:80%;margin:2em auto;text-align:center}mat-card-actions[_ngcontent-%COMP%]{justify-content:center}button[_ngcontent-%COMP%]{margin:5px}.margin-content[_ngcontent-%COMP%]{margin:10px}"]}),e})()},{path:"view/:isbn",component:(()=>{class e{constructor(o,n,r,a){this.booksService=o,this.snackBar=n,this.location=r,this.route=a,this.nomeLivro="",this.isbnLivro="",this.nomeAutor="",this.nomeEditora="",this.nomeGenero="",this.qtd=0,this.descricaoLivro=""}ngOnInit(){this.route.params.subscribe(o=>{this.booksService.loadDetailByIsbn(o.isbn).subscribe(a=>{this.isbnLivro=a.isbn,this.nomeLivro=a.nomeLivro,this.nomeAutor=a.idAutor.nomeAutor,this.nomeEditora=a.idEditora.nomeEditora,this.nomeGenero=a.idGenero.nomeGenero,this.qtd=a.qtdDisponivel,this.descricaoLivro=a.descricaoLivro})})}onSubmit(){g.N.livrosEmprestimo.length<=3&&!g.N.livrosEmprestimo.includes(this.isbnLivro)&&(console.log("Ok"),g.N.livrosEmprestimo.push(this.isbnLivro))}onCancel(){this.location.back()}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(C),t.Y36(L.ux),t.Y36(p.Ye),t.Y36(h.gz))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-book-detail"]],decls:24,vars:7,consts:[["color","primary"],[1,"font-size-20"],[1,"font-size-15"],["mat-raised-button","","color","primary",3,"click"],["mat-raised-button","",3,"click"]],template:function(o,n){1&o&&(t.TgZ(0,"mat-card")(1,"mat-toolbar",0)(2,"mat-toolbar-row")(3,"span"),t._uU(4),t.qZA()()(),t.TgZ(5,"mat-card-header")(6,"mat-card-subtitle"),t._uU(7),t.qZA(),t.TgZ(8,"mat-card-title",1),t._uU(9),t.qZA(),t.TgZ(10,"mat-card-title",2),t._uU(11),t.qZA(),t.TgZ(12,"mat-card-title",2),t._uU(13),t.qZA(),t.TgZ(14,"mat-card-subtitle"),t._uU(15),t.qZA()(),t.TgZ(16,"mat-card-content")(17,"p"),t._uU(18),t.qZA()(),t.TgZ(19,"mat-card-actions")(20,"button",3),t.NdJ("click",function(){return n.onSubmit()}),t._uU(21," Requisitar "),t.qZA(),t.TgZ(22,"button",4),t.NdJ("click",function(){return n.onCancel()}),t._uU(23,"Voltar"),t.qZA()()()),2&o&&(t.xp6(4),t.Oqu(n.nomeLivro),t.xp6(3),t.Oqu(n.isbnLivro),t.xp6(2),t.Oqu(n.nomeAutor),t.xp6(2),t.Oqu(n.nomeEditora),t.xp6(2),t.Oqu(n.nomeGenero),t.xp6(2),t.hij("Quantidade: ",n.qtd,""),t.xp6(3),t.hij(" ",n.descricaoLivro," "))},dependencies:[c.a8,c.hq,c.dn,c.dk,c.$j,c.n5,d.Ye,d.rD,_.lW],styles:["img[_ngcontent-%COMP%]{width:100%}mat-card-content[_ngcontent-%COMP%]{margin:10px}mat-card-actions[_ngcontent-%COMP%]{justify-content:center}button[_ngcontent-%COMP%]{margin:10px}p[_ngcontent-%COMP%], .font-size-20[_ngcontent-%COMP%]{font-size:20px}.font-size-15[_ngcontent-%COMP%]{font-size:15px}"]}),e})()}];let at=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[h.Bz.forChild(rt),h.Bz]}),e})();var st=s(6208);let lt=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[p.ez,at,E.M,st.m,l.UX]}),e})()}}]);