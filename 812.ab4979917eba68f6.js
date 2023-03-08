"use strict";(self.webpackChunkmain_angular_java_techni2=self.webpackChunkmain_angular_java_techni2||[]).push([[812],{5812:(q,x,i)=>{i.r(x),i.d(x,{ExerciceModule:()=>s});var u=i(6895),c=i(2386),e=i(8256),C=i(6256);class l{constructor(t){this._authService=t}canActivate(t,n){return this._authService.isConnect}}l.\u0275fac=function(t){return new(t||l)(e.LFG(C.e))},l.\u0275prov=e.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"});class m{}m.\u0275fac=function(t){return new(t||m)},m.\u0275cmp=e.Xpm({type:m,selectors:[["app-exercice-banner"]],decls:6,vars:0,consts:[["routerLink","article"],["routerLink","pokemon"]],template:function(t,n){1&t&&(e.TgZ(0,"div")(1,"a",0),e._uU(2,"Article"),e.qZA(),e.TgZ(3,"a",1),e._uU(4,"Pokemon"),e.qZA()(),e._UZ(5,"router-outlet"))},dependencies:[c.lC,c.rH],styles:['a[_ngcontent-%COMP%]{color:#fff;background-color:#228b22;text-decoration:none;font-size:1.2em;font-weight:600;text-transform:uppercase;letter-spacing:.1em;position:relative;display:inline-block;padding:.5em 1em;overflow:hidden;transition:.5s;z-index:1;border-radius:5px;margin:.5em 0 .5em 10px}a[_ngcontent-%COMP%]:before{content:"";position:absolute;top:0;left:0;width:100%;height:0%;background:#bebebe;transition:.5s;z-index:-1}a[_ngcontent-%COMP%]:hover{color:#000}a[_ngcontent-%COMP%]:hover:before{height:180%}a[_ngcontent-%COMP%]:after{content:"";position:absolute;top:0;left:0;width:0%;height:100%;background:#bebebe;transition:.5s;z-index:-1}']});var o=i(433);class a{constructor(t){this._router=t,this.articles=[{id:1,name:"Article 1",category:"Cat\xe9gorie 1",price:10,creationDate:new Date,description:"Description de l'article 1",note:1},{id:2,name:"Article 2",category:"Cat\xe9gorie 2",price:20,creationDate:new Date,description:"Description de l'article 2",note:2},{id:3,name:"Article 3",category:"Cat\xe9gorie 3",price:30,creationDate:new Date,description:"Description de l'article 3",note:3},{id:4,name:"Article 4",category:"Cat\xe9gorie 4",price:40,creationDate:new Date,description:"Description de l'article 4",note:4},{id:5,name:"Article 5",category:"Cat\xe9gorie 5",price:50,creationDate:new Date,description:"Description de l'article 5",note:5}],this.cpt=this.articles.length+1}getById(t){return this.articles.find(n=>n.id==t)}getAll(){return this.articles}createArticle(t){t.id=this.cpt,this.cpt++,this.articles.push(t),this._router.navigate(["exercice/article"])}updateArticle(t){this.articles[this.articles.findIndex(n=>n.id==t.id)]=t,this._router.navigate(["exercice/article"])}deleteArticle(t){this.articles.splice(this.articles.findIndex(n=>n.id==t),1)}}a.\u0275fac=function(t){return new(t||a)(e.LFG(c.F0))},a.\u0275prov=e.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"});class g{constructor(t,n){this._artcileService=t,this._formBuilder=n,this.articleForm=this._formBuilder.group({name:["",[o.kI.required]],description:["",[o.kI.required]],price:["",[o.kI.required,o.kI.min(0)]],category:["",[o.kI.required]],note:["",[o.kI.required,o.kI.min(0),o.kI.max(5)]]})}createArticle(){this.article=this.articleForm.value,this.article.creationDate=new Date,this._artcileService.createArticle(this.article)}}g.\u0275fac=function(t){return new(t||g)(e.Y36(a),e.Y36(o.qu))},g.\u0275cmp=e.Xpm({type:g,selectors:[["app-create"]],decls:26,vars:2,consts:[[1,"form_group",3,"formGroup","submit"],["type","text","formControlName","name"],["type","text","formControlName","category"],["type","number","formControlName","price","min","0"],["cols","30","rows","10","formControlName","description"],["type","number","formControlName","note","min","0","max","5"],["type","submit",1,"btn",3,"disabled"],["routerLink","../",1,"btn"]],template:function(t,n){1&t&&(e._UZ(0,"br"),e.TgZ(1,"form",0),e.NdJ("submit",function(){return n.createArticle()}),e.TgZ(2,"label"),e._uU(3,"Name"),e.qZA(),e._UZ(4,"input",1)(5,"br"),e.TgZ(6,"label"),e._uU(7,"Category"),e.qZA(),e._UZ(8,"input",2)(9,"br"),e.TgZ(10,"label"),e._uU(11,"Price"),e.qZA(),e._UZ(12,"input",3)(13,"br"),e.TgZ(14,"label"),e._uU(15,"Description"),e.qZA(),e._UZ(16,"textarea",4)(17,"br"),e.TgZ(18,"label"),e._uU(19,"Note"),e.qZA(),e._UZ(20,"input",5)(21,"br"),e.TgZ(22,"button",6),e._uU(23,"Create"),e.qZA(),e.TgZ(24,"a",7),e._uU(25,"Annuler"),e.qZA()()),2&t&&(e.xp6(1),e.Q6J("formGroup",n.articleForm),e.xp6(21),e.Q6J("disabled",!n.articleForm.valid))},dependencies:[c.rH,o._Y,o.Fj,o.wV,o.JJ,o.JL,o.qQ,o.Fd,o.sg,o.u],styles:["form[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;width:100%;background-color:#f5f5f5;padding:20px;box-sizing:border-box;border-radius:5px;box-shadow:0 0 10px #0003}form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;width:100%;margin-bottom:20px;justify-content:center}form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{width:100%;text-align:left;font-size:1.2em;margin-bottom:10px}form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;height:40px;border:1px solid #ccc;border-radius:5px;padding:0 10px;box-sizing:border-box;font-size:1.2em;margin-bottom:10px}form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{outline:none;border-color:#2196f3}form[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{width:20%;height:40px;border:none;border-radius:5px;background-color:#2196f3;color:#fff;font-size:1.2em;cursor:pointer}form[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover{background-color:#0d47a1}form[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:disabled{background-color:#ccc;cursor:not-allowed}form[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{width:20%;text-align:center;height:40px;border:none;border-radius:5px;background-color:#2196f3;color:#fff;font-size:1.2em;text-decoration:none;cursor:pointer}form[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background-color:#0d47a1}"]});const A=function(r){return["./",r]},Z=function(r){return["./update",r]};function M(r,t){if(1&r){const n=e.EpF();e.TgZ(0,"li")(1,"p"),e._uU(2),e.TgZ(3,"span"),e._uU(4,"|"),e.qZA(),e._uU(5," \xa0 "),e.TgZ(6,"a",2),e._uU(7,"Details"),e.qZA(),e._uU(8," - "),e.TgZ(9,"a",2),e._uU(10,"Update"),e.qZA(),e._uU(11," - "),e.TgZ(12,"button",3),e.NdJ("click",function(){const k=e.CHM(n).$implicit,T=e.oxw();return e.KtG(T.deleteArticle(k))}),e._uU(13,"Delete"),e.qZA()(),e.TgZ(14,"p"),e._uU(15),e.qZA()()}if(2&r){const n=t.$implicit;e.xp6(2),e.AsE("name: ",n.name," - price: ",n.price,"\u20ac \u{1f4b0} \xa0 "),e.xp6(4),e.Q6J("routerLink",e.VKq(5,A,n.id)),e.xp6(3),e.Q6J("routerLink",e.VKq(7,Z,n.id)),e.xp6(6),e.hij("note: ",n.note," \u2b50")}}class f{constructor(t){this._articleService=t,this.articles=[],this.articles=t.getAll()}deleteArticle(t){confirm("Are you sure you want to delete "+t.name+" ?")&&this._articleService.deleteArticle(t.id)}}function P(r,t){if(1&r&&(e.TgZ(0,"div")(1,"h4"),e._uU(2),e.qZA(),e.TgZ(3,"ul")(4,"li"),e._uU(5),e.qZA(),e.TgZ(6,"li"),e._uU(7),e.qZA(),e.TgZ(8,"li"),e._uU(9),e.ALo(10,"date"),e.qZA(),e.TgZ(11,"li"),e._uU(12),e.qZA(),e.TgZ(13,"li"),e._uU(14),e.qZA()()()),2&r){const n=e.oxw();e.xp6(2),e.hij("Nom: ",n.selectedArticle.name,""),e.xp6(3),e.hij("Prix: ",n.selectedArticle.price,""),e.xp6(2),e.hij("Categorie: ",n.selectedArticle.category,""),e.xp6(2),e.hij("Date de cr\xe9ation: ",e.xi3(10,6,n.selectedArticle.creationDate,"dd-MM-yyyy"),""),e.xp6(3),e.hij("Description: ",n.selectedArticle.description,""),e.xp6(2),e.hij("Note: ",n.selectedArticle.note,"")}}function v(r,t){1&r&&(e.TgZ(0,"div")(1,"h4"),e._uU(2,"Article non trouv\xe9"),e.qZA()())}f.\u0275fac=function(t){return new(t||f)(e.Y36(a))},f.\u0275cmp=e.Xpm({type:f,selectors:[["app-read-all-article"]],decls:8,vars:1,consts:[[4,"ngFor","ngForOf"],["routerLink","./create",1,"btn_add"],[3,"routerLink"],[3,"click"]],template:function(t,n){1&t&&(e._UZ(0,"br"),e.TgZ(1,"h3"),e._uU(2,"Articles"),e.qZA(),e.TgZ(3,"ul"),e.YNc(4,M,16,9,"li",0),e.qZA(),e.TgZ(5,"div")(6,"a",1),e._uU(7,"+"),e.qZA()()),2&t&&(e.xp6(4),e.Q6J("ngForOf",n.articles))},dependencies:[u.sg,c.rH],styles:["ul[_ngcontent-%COMP%]{list-style-type:none;padding:0;margin:0}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:10px;border:1px solid #ccc;margin-bottom:10px;border-radius:5px;background-color:#f5f5f5}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;padding:0;font-size:1.2em;color:#333}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;padding:0;font-size:1em;color:#666}ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#2196f3;text-decoration:none;font-size:1.2em;margin-top:20px}ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background-color:#0d47a1}ul[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:#2196f3;text-decoration:none;font-size:1.2em;margin-top:20px;border:none;cursor:pointer}ul[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#0d47a1}ul[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:600}.btn_add[_ngcontent-%COMP%]{padding:5px 10px;background-color:#2196f3;color:#fff;border:none;border-radius:5px;font-size:1.2em;text-decoration:none;margin-left:50px}.btn_add[_ngcontent-%COMP%]:hover{background-color:#0d47a1}"]});class _{constructor(t,n){this._activatedRoute=t,this._articleService=n,this.selectedArticle=this._articleService.getById(this._activatedRoute.snapshot.params.id)}}function O(r,t){if(1&r){const n=e.EpF();e.TgZ(0,"div")(1,"form",1),e.NdJ("submit",function(){e.CHM(n);const b=e.oxw();return e.KtG(b.updateArticle())}),e.TgZ(2,"label"),e._uU(3,"Name"),e.qZA(),e._UZ(4,"input",2)(5,"br"),e.TgZ(6,"label"),e._uU(7,"Category"),e.qZA(),e._UZ(8,"input",3)(9,"br"),e.TgZ(10,"label"),e._uU(11,"Price"),e.qZA(),e._UZ(12,"input",4)(13,"br"),e.TgZ(14,"label"),e._uU(15,"Description"),e.qZA(),e._UZ(16,"input",5)(17,"br"),e.TgZ(18,"label"),e._uU(19,"Note"),e.qZA(),e._UZ(20,"input",6)(21,"br"),e.TgZ(22,"button",7),e._uU(23,"Update"),e.qZA(),e.TgZ(24,"a",8),e._uU(25,"Annuler"),e.qZA()()()}if(2&r){const n=e.oxw();e.xp6(1),e.Q6J("formGroup",n.articleForm),e.xp6(21),e.Q6J("disabled",!n.articleForm.valid||n.articleForm.value.name==n.article.name&&n.articleForm.value.category==n.article.category&&n.articleForm.value.price==n.article.price&&n.articleForm.value.description==n.article.description&&n.articleForm.value.note==n.article.note)}}function y(r,t){1&r&&(e.TgZ(0,"div")(1,"h4"),e._uU(2,"Article non trouv\xe9"),e.qZA()())}_.\u0275fac=function(t){return new(t||_)(e.Y36(c.gz),e.Y36(a))},_.\u0275cmp=e.Xpm({type:_,selectors:[["app-read-article"]],decls:5,vars:2,consts:[[4,"ngIf"],["routerLink","../"]],template:function(t,n){1&t&&(e._UZ(0,"br"),e.YNc(1,P,15,9,"div",0),e.YNc(2,v,3,0,"div",0),e.TgZ(3,"a",1),e._uU(4,"Retour"),e.qZA()),2&t&&(e.xp6(1),e.Q6J("ngIf",n.selectedArticle),e.xp6(1),e.Q6J("ngIf",null==n.selectedArticle))},dependencies:[u.O5,c.rH,u.uU],styles:["a[_ngcontent-%COMP%]{text-decoration:none;background-color:#2196f3;font-size:1.2em;margin-top:20px;color:#fff;font-weight:600;text-transform:uppercase;padding:.5em 1em}a[_ngcontent-%COMP%]:hover{background-color:#0d47a1}"]});class h{constructor(t,n,p){this._artcileService=t,this._formBuilder=n,this._activatedRoute=p,this.articleForm=this._formBuilder.group({name:["",[o.kI.required]],description:["",[o.kI.required]],price:["",[o.kI.required,o.kI.min(0)]],category:["",[o.kI.required]],note:["",[o.kI.required,o.kI.min(0),o.kI.max(5)]]}),this.article=this._artcileService.getById(this._activatedRoute.snapshot.params.id),this.updateForm=this._formBuilder.group({name:[this.article?.name,[o.kI.required]],description:[this.article?.description,[o.kI.required]],price:[this.article?.price,[o.kI.required,o.kI.min(0)]],category:[this.article?.category,[o.kI.required]],note:[this.article?.note,[o.kI.required,o.kI.min(0),o.kI.max(5)]]})}updateArticle(){let t=this.updateForm.value;null!=this.article&&(t.id=this.article.id,t.creationDate=this.article.creationDate,this._artcileService.updateArticle(t))}}h.\u0275fac=function(t){return new(t||h)(e.Y36(a),e.Y36(o.qu),e.Y36(c.gz))},h.\u0275cmp=e.Xpm({type:h,selectors:[["app-update"]],decls:3,vars:2,consts:[[4,"ngIf"],[1,"form_group",3,"formGroup","submit"],["type","text","formControlName","name"],["type","text","formControlName","category"],["type","number","formControlName","price","min","0"],["type","text","formControlName","description"],["type","number","formControlName","note","min","0","max","5"],["type","submit",1,"btn",3,"disabled"],["routerLink","../../",1,"btn"]],template:function(t,n){1&t&&(e._UZ(0,"br"),e.YNc(1,O,26,2,"div",0),e.YNc(2,y,3,0,"div",0)),2&t&&(e.xp6(1),e.Q6J("ngIf",n.article),e.xp6(1),e.Q6J("ngIf",!n.article))},dependencies:[u.O5,c.rH,o._Y,o.Fj,o.wV,o.JJ,o.JL,o.qQ,o.Fd,o.sg,o.u],styles:["form[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;width:100%;background-color:#f5f5f5;padding:20px;box-sizing:border-box;border-radius:5px;box-shadow:0 0 10px #0003}form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;width:100%;margin-bottom:20px;justify-content:center}form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{width:100%;text-align:left;font-size:1.2em;margin-bottom:10px}form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;height:40px;border:1px solid #ccc;border-radius:5px;padding:0 10px;box-sizing:border-box;font-size:1.2em;margin-bottom:10px}form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{outline:none;border-color:#2196f3}form[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{width:20%;height:40px;border:none;border-radius:5px;background-color:#2196f3;color:#fff;font-size:1.2em;cursor:pointer}form[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover{background-color:#0d47a1}form[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:disabled{background-color:#ccc;cursor:not-allowed}form[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{width:20%;height:40px;text-align:center;border:none;border-radius:5px;background-color:#2196f3;color:#fff;font-size:1.2em;text-decoration:none;cursor:pointer}form[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background-color:#0d47a1}"]});const U=[{path:"",component:m,children:[{path:"article",canActivate:[l],component:f},{path:"article/create",component:g},{path:"article/:id",component:_},{path:"article/update/:id",component:h}]},{path:"pokemon",loadChildren:()=>Promise.all([i.e(592),i.e(181)]).then(i.bind(i,5181)).then(r=>r.PokeApiModule)}];class d{}d.\u0275fac=function(t){return new(t||d)},d.\u0275mod=e.oAB({type:d}),d.\u0275inj=e.cJS({imports:[c.Bz.forChild(U),c.Bz]});class s{}s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({providers:[a],imports:[u.ez,d,o.u5,o.UX]})}}]);