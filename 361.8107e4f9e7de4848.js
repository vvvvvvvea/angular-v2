"use strict";(self.webpackChunkmain_angular_java_techni2=self.webpackChunkmain_angular_java_techni2||[]).push([[361],{9181:(S,Z,i)=>{i.r(Z),i.d(Z,{DemoModule:()=>p});var c=i(6895),a=i(2386),b=i(262),C=i(9646),e=i(8256),A=i(7521);class s{constructor(t){this._pokeService=t}resolve(t,o){return this._pokeService.getPikachu().pipe((0,b.K)(f=>(0,C.of)({error:f})))}}s.\u0275fac=function(t){return new(t||s)(e.LFG(A.t))},s.\u0275prov=e.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"});class u{}u.\u0275fac=function(t){return new(t||u)},u.\u0275cmp=e.Xpm({type:u,selectors:[["app-demo-banner"]],decls:8,vars:0,consts:[[1,"demo_banner"],["routerLink","./routing"],["routerLink","./subject"],["routerLink","./http"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"a",1),e._uU(2,"Demo Routing"),e.qZA(),e.TgZ(3,"a",2),e._uU(4,"Subject"),e.qZA(),e.TgZ(5,"a",3),e._uU(6,"HttpClient"),e.qZA()(),e._UZ(7,"router-outlet"))},dependencies:[a.lC,a.rH],styles:['a[_ngcontent-%COMP%]{color:#fff;background-color:#228b22;text-decoration:none;font-size:1.2em;font-weight:600;text-transform:uppercase;letter-spacing:.1em;position:relative;display:inline-block;padding:.5em 1em;overflow:hidden;transition:.5s;z-index:1;border-radius:5px;margin:.5em 0 .5em 10px}a[_ngcontent-%COMP%]:before{content:"";position:absolute;top:0;left:0;width:100%;height:0%;background:#bebebe;transition:.5s;z-index:-1}a[_ngcontent-%COMP%]:hover{color:#000}a[_ngcontent-%COMP%]:hover:before{height:180%}a[_ngcontent-%COMP%]:after{content:"";position:absolute;top:0;left:0;width:0%;height:100%;background:#bebebe;transition:.5s;z-index:-1}']});class r{constructor(){this.animals=[{id:1,name:"Bobby",birthdate:new Date("2019-01-01"),race:"Bichon Argentin",coat:"Bleu marine",owner:"Gislaine"},{id:2,name:"Venus",birthdate:new Date("2018-01-01"),race:"Dogue Allemand",coat:"Blanc",owner:"Roger"},{id:3,name:"Rex",birthdate:new Date("2009-01-01"),race:"Bichon Argentin",coat:"Noir",owner:"Gislaine"},{id:4,name:"Luna",birthdate:new Date("2016-01-01"),race:"Chat Persan",coat:"Blanc",owner:"Roger"},{id:5,name:"Milo",birthdate:new Date("2015-01-01"),race:"Maincoon",coat:"Noir",owner:"Roger"}]}}r.\u0275fac=function(t){return new(t||r)},r.\u0275prov=e.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"});const T=function(n){return["./",n]};function x(n,t){if(1&n&&(e.TgZ(0,"li")(1,"p"),e._uU(2),e.TgZ(3,"a",1),e._uU(4,"Consulter"),e.qZA()()()),2&n){const o=t.$implicit;e.xp6(2),e.AsE("",o.name," - ",o.race," - "),e.xp6(1),e.Q6J("routerLink",e.VKq(3,T,o.id))}}class m{constructor(t){this._animalService=t,this.animals=[],this.animals=t.animals}}function k(n,t){if(1&n&&(e.TgZ(0,"div")(1,"h4"),e._uU(2),e.qZA(),e.TgZ(3,"ul")(4,"li"),e._uU(5),e.qZA(),e.TgZ(6,"li"),e._uU(7),e.qZA(),e.TgZ(8,"li"),e._uU(9),e.ALo(10,"date"),e.qZA(),e.TgZ(11,"li"),e._uU(12),e.qZA()()()),2&n){const o=e.oxw();e.xp6(2),e.hij("El ",o.selectedAnimal.name,"ito"),e.xp6(3),e.hij("Race: ",o.selectedAnimal.race,""),e.xp6(2),e.hij("Robe: ",o.selectedAnimal.coat,""),e.xp6(2),e.hij("Date de naissance: ",e.xi3(10,5,o.selectedAnimal.birthdate,"dd-MM-yyyy"),""),e.xp6(3),e.hij("Propri\xe9taire: ",o.selectedAnimal.owner,"")}}function y(n,t){1&n&&(e.TgZ(0,"div")(1,"h4"),e._uU(2,"Animal non trouv\xe9"),e.qZA()())}m.\u0275fac=function(t){return new(t||m)(e.Y36(r))},m.\u0275cmp=e.Xpm({type:m,selectors:[["app-read-all"]],decls:5,vars:1,consts:[[4,"ngFor","ngForOf"],[3,"routerLink"]],template:function(t,o){1&t&&(e._UZ(0,"br"),e.TgZ(1,"h3"),e._uU(2,"Animals"),e.qZA(),e.TgZ(3,"ul"),e.YNc(4,x,5,5,"li",0),e.qZA()),2&t&&(e.xp6(4),e.Q6J("ngForOf",o.animals))},dependencies:[c.sg,a.rH]});class d{constructor(t,o){this._activatedRoute=t,this._animalService=o;let f=this._activatedRoute.snapshot.params.id;this.selectedAnimal=this._animalService.animals.find(v=>v.id==f)}}function U(n,t){if(1&n&&(e.TgZ(0,"li"),e._uU(1),e.qZA()),2&n){const o=t.$implicit;e.xp6(1),e.Oqu(o.type.name)}}function j(n,t){if(1&n&&(e.TgZ(0,"li"),e._uU(1),e.qZA()),2&n){const o=t.$implicit;e.xp6(1),e.Oqu(o.ability.name)}}function q(n,t){if(1&n&&(e.TgZ(0,"li"),e._uU(1),e.qZA()),2&n){const o=t.$implicit;e.xp6(1),e.AsE("",o.stat.name,": ",o.base_stat,"")}}function O(n,t){if(1&n&&(e.TgZ(0,"div")(1,"h1"),e._uU(2,"Mon Pokemon"),e.qZA(),e.TgZ(3,"h2"),e._uU(4),e.qZA(),e._UZ(5,"img",1),e.TgZ(6,"h4"),e._uU(7),e.qZA(),e.TgZ(8,"h4"),e._uU(9),e.qZA(),e.TgZ(10,"h4"),e._uU(11),e.qZA(),e.TgZ(12,"h4"),e._uU(13),e.qZA(),e.TgZ(14,"h4"),e._uU(15,"Types:"),e.qZA(),e.TgZ(16,"ul"),e.YNc(17,U,2,1,"li",2),e.qZA(),e.TgZ(18,"h4"),e._uU(19,"Abilities:"),e.qZA(),e.TgZ(20,"ul"),e.YNc(21,j,2,1,"li",2),e.qZA(),e.TgZ(22,"h4"),e._uU(23,"Stats"),e.qZA(),e.TgZ(24,"ul"),e.YNc(25,q,2,2,"li",2),e.qZA()()),2&n){const o=e.oxw();e.xp6(4),e.Oqu(o.monPokemon.name),e.xp6(1),e.Q6J("src",o.monPokemon.sprites.front_default,e.LSH),e.xp6(2),e.hij("ID: ",o.monPokemon.id,""),e.xp6(2),e.hij("Height: ",o.monPokemon.height," cm"),e.xp6(2),e.hij("Weight: ",o.monPokemon.weight," kg"),e.xp6(2),e.hij("Experience: ",o.monPokemon.base_experience," XP"),e.xp6(4),e.Q6J("ngForOf",o.monPokemon.types),e.xp6(4),e.Q6J("ngForOf",o.monPokemon.abilities),e.xp6(4),e.Q6J("ngForOf",o.monPokemon.stats)}}function M(n,t){if(1&n&&(e.TgZ(0,"div")(1,"h1",3),e._uU(2),e.qZA()()),2&n){const o=e.oxw();e.xp6(2),e.Oqu(o.errorMessage)}}d.\u0275fac=function(t){return new(t||d)(e.Y36(a.gz),e.Y36(r))},d.\u0275cmp=e.Xpm({type:d,selectors:[["app-read-one"]],decls:5,vars:2,consts:[[4,"ngIf"],["routerLink","../"]],template:function(t,o){1&t&&(e._UZ(0,"br"),e.YNc(1,k,13,8,"div",0),e.YNc(2,y,3,0,"div",0),e.TgZ(3,"a",1),e._uU(4,"retour"),e.qZA()),2&t&&(e.xp6(1),e.Q6J("ngIf",null!=o.selectedAnimal),e.xp6(1),e.Q6J("ngIf",null==o.selectedAnimal))},dependencies:[c.O5,a.rH,c.uU]});class h{constructor(t,o){this._pokeService=t,this._activatedRoute=o,this.errorMessage="",this.pikachu=this._activatedRoute.snapshot.data.pikachu,this.monPokemon=this.pikachu}ngOnInit(){let t=this._activatedRoute.snapshot.data.pikachu;t.error?(console.log(t.error.message),this.errorMessage=t.error.message):this.monPokemon=t}}h.\u0275fac=function(t){return new(t||h)(e.Y36(A.t),e.Y36(a.gz))},h.\u0275cmp=e.Xpm({type:h,selectors:[["app-http-client"]],decls:2,vars:2,consts:[[4,"ngIf"],["alt","",3,"src"],[4,"ngFor","ngForOf"],[2,"color","red"]],template:function(t,o){1&t&&(e.YNc(0,O,26,9,"div",0),e.YNc(1,M,3,1,"div",0)),2&t&&(e.Q6J("ngIf",!o.errorMessage),e.xp6(1),e.Q6J("ngIf",o.errorMessage))},dependencies:[c.sg,c.O5]});var R=i(1135),_=i(433);class g{constructor(){this.valueInput="",this.monSubject=new R.X("Hello World")}ngOnDestroy(){this.observer.unsubscribe()}ngOnInit(){this.observer=this.monSubject.subscribe({next:t=>{console.log(t)},error(t){console.error(t)},complete(){console.log("complete")}})}sendData(){""==this.valueInput?this.monSubject.error("CPT"):"stop"==this.valueInput?this.monSubject.complete():this.monSubject.next(this.valueInput)}}g.\u0275fac=function(t){return new(t||g)},g.\u0275cmp=e.Xpm({type:g,selectors:[["app-subject"]],decls:4,vars:1,consts:[["type","text",3,"ngModel","ngModelChange"],[3,"click"]],template:function(t,o){1&t&&(e.TgZ(0,"div")(1,"input",0),e.NdJ("ngModelChange",function(v){return o.valueInput=v}),e.qZA(),e.TgZ(2,"button",1),e.NdJ("click",function(){return o.sendData()}),e._uU(3,"Send"),e.qZA()()),2&t&&(e.xp6(1),e.Q6J("ngModel",o.valueInput))},dependencies:[_.Fj,_.JJ,_.On]});const P=[{path:"",component:u,children:[{path:"routing",component:m},{path:"routing/:id",component:d},{path:"subject",component:g},{path:"http",resolve:{pikachu:s},component:h}]}];class l{}l.\u0275fac=function(t){return new(t||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[a.Bz.forChild(P),a.Bz]});class p{}p.\u0275fac=function(t){return new(t||p)},p.\u0275mod=e.oAB({type:p}),p.\u0275inj=e.cJS({imports:[c.ez,l,_.u5]})}}]);