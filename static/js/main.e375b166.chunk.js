(this["webpackJsonpikm-app"]=this["webpackJsonpikm-app"]||[]).push([[0],{26:function(a,n,t){},27:function(a,n,t){},33:function(a,n,t){},53:function(a,n,t){"use strict";t.r(n);var e=t(0),i=t.n(e),o=t(5),r=t.n(o),s=(t(26),t.p,t(27),t(4)),c=t(6),u=t(20),d=t(3),p=t.p+"static/media/002-speech bubble.0b9db525.svg",g={datas:[],datas_detail:[],question:[{q:"Jenis Kelamin",o:[{o:"Laki - laki"},{o:"Perempuan"}]},{q:"Usia",o:[{o:"Dibawah 18 tahun"},{o:"18 - 24 tahun"},{o:"25 - 34 tahun"},{o:"35 - 59 tahun"},{o:"60 tahun keatas"}]},{q:"Pendidikan Terakhir",o:[{o:"SD"},{o:"SMP"},{o:"SMA / SMK"},{o:"Diploma"},{o:"Sarjana (S1)"},{o:"Pasca Sarjana (S2 / S3)"}]},{q:"Pekerjaan",o:[{o:"PNS"},{o:"TNI / POLRI"},{o:"Karyawan BUMN"},{o:"Karyawan Swasta"},{o:"Wirausaha"},{o:"Pelajar / Mahasiswa"},{o:"Belum Bekerja"},{o:"Lain - lain"}]},{q:"Jenis Layanan",o:[{o:"DPMTK"},{o:"DUKCAPIL"},{o:"KEMENAG"},{o:"BPN"},{o:"BPJS KESEHATAN"},{o:"BPJS KETENAGAKERJAAN"},{o:"KEJAKSAAN"},{o:"PENGADILAN NEGERI"},{o:"KPP PRATAMA"},{o:"SAMSAT"},{o:"POLRES SINGKAWANG"},{o:"IMIGRASI"},{o:"BKD"},{o:"BANK KALBAR"},{o:"BRI"}]},{q:"Bagaimana pendapat saudara tentang kesesuaian persyaratan pelayanan dengan jenis pelayanannya?",o:[{o:"Tidak Cepat"},{o:"Kurang Cepat"},{o:"Cepat"},{o:"Sangat Cepat"}]},{q:"Bagaimana pendapat saudara tentang kewajaran biaya / tarif dalam pelayanan (Khusus izin yang terdapat retribusi)",o:[{o:"Tidak Sesuai"},{o:"Kurang Sesuai"},{o:"Sesuai"},{o:"Sangat Sesuai"}]},{q:"Bagaimana pendapat saudara tentang kompetensi / kemampuan petugas dalam pelayanan?",o:[{o:"Tidak Kompeten"},{o:"Kurang Kompeten"},{o:"Kompeten"},{o:"Sangat Kompeten"}]},{q:"Bagaimana pendapat saudara tentang perilaku petugas dalam pelayanan terkait kesopanan dan keramahan? ",o:[{o:"Tidak Sopan dan Ramah"},{o:"Kurang Sopan"},{o:"Sopan dan Ramah"},{o:"Sangat Sopan dan Ramah"}]},{q:"Bagaimana pendapat saudara tentang kualitas sarana dan prasarana?",o:[{o:"Sangat Baik"},{o:"Cukup Baik"},{o:"Baik"},{o:"Buruk"}]},{q:"Bagaimana pendapat saudara tentang penanganan pengaduan pengguna layanan?",o:[{o:"Tidak Ada"},{o:"Ada Tetapi Tidak Berfungsi"},{o:"Berfungsi Kurang Maksimal"},{o:"Dikelola Bengan Baik"}]},{q:"Bagaimana pemahaman Saudara tentang kemudahan prosedur pelayanan?",o:[{o:"Tidak Mudah"},{o:"Kurang Mudah"},{o:"Mudah"},{o:"Sangat Mudah"}]},{q:"Penilaian Kepuasan",o:[{o:"Sangat Puas"},{o:"Cukup Puas"},{o:"Puas"},{o:"Tidak Puas"},{o:"Sangat Tidak Puas"}]}],button_all:[],button_init:[{id:1,name:"Trigatra",icon:t.p+"static/media/017-web browser.0e0bef72.svg"},{id:2,name:"Panca Gatra",icon:t.p+"static/media/037-bank.2ae0616e.svg"}],button_main_trigatra:[{id:1,name:"Geografi",icon:t.p+"static/media/029-find my gadget app.469a6447.svg"},{id:2,name:"Topografi",icon:t.p+"static/media/026-tips.721760dd.svg"},{id:3,name:"Demografi",icon:p}],button_main_pancagatra:[{id:1,name:"Ideologi",icon:t.p+"static/media/012-daily health app.62a35713.svg"},{id:2,name:"Politik",icon:t.p+"static/media/009-tv app.fcefc63a.svg"},{id:2,name:"Ekonomi",icon:t.p+"static/media/016-stock exchange app.8eed351e.svg"},{id:2,name:"Sosial Budaya",icon:p},{id:2,name:"Pertahanan",icon:t.p+"static/media/069-linkedin.8196bdf1.svg"}],isTrigatra:!1,isPancaGatra:!1},m=Object(c.b)({app:function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"STORE_DATAS":return Object(d.a)(Object(d.a)({},a),{},{datas:n.datas});case"STORE_DATAS_DETAIL":return Object(d.a)(Object(d.a)({},a),{},{datas_detail:n.datas});case"RESET_DETAIL":return Object(d.a)(Object(d.a)({},a),{},{datas_detail:[]});case"MAIN_BUTTON_TRIGATRA":return Object(d.a)(Object(d.a)({},a),{},{isTrigatra:!0,isPancaGatra:!1});case"MAIN_BUTTON_PANCAGATRA":return Object(d.a)(Object(d.a)({},a),{},{isTrigatra:!1,isPancaGatra:!0});default:return a}}}),b=Object(c.c)(m,Object(c.a)(u.a)),l=t(21),j=t(11),h=(t(33),t(10),t(1));var T=Object(s.b)((function(a){var n=a.app;return{question:n.question,button_init:n.button_init,button_main_trigatra:n.button_main_trigatra,button_main_pancagatra:n.button_main_pancagatra,isTrigatra:n.isTrigatra,isPancaGatra:n.isPancaGatra}}),(function(a){return{setMainButtonPancaGatra:function(){return a({type:"MAIN_BUTTON_PANCAGATRA"})},setMainButtonTriGatra:function(){return a({type:"MAIN_BUTTON_TRIGATRA"})}}}))((function(a){a.question,a.button_all;var n=a.button_init,t=a.setMainButtonPancaGatra,e=a.setMainButtonTriGatra,o=a.isTrigatra,r=a.button_main_trigatra,s=a.button_main_pancagatra,c=i.a.useState(0),u=Object(j.a)(c,2),d=(u[0],u[1],i.a.useState("#f368e0")),p=Object(j.a)(d,2);return p[0],p[1],Object(h.jsxs)("div",{className:"q-container",children:[Object(h.jsx)("div",{className:"option"}),Object(h.jsx)("div",{className:"footer2",children:n.map((function(a,n){return Object(h.jsx)("div",{children:Object(h.jsxs)("div",{className:"btn2",onClick:function(){return"Trigatra"===a.name?e():t(),document.querySelector(".footer").style.bottom="-300px",void(document.querySelector(".footer").style.bottom="20px")},children:[Object(h.jsx)("img",{src:a.icon}),Object(h.jsx)("span",{children:a.name})]})})}))}),Object(h.jsx)("div",{className:"footer",style:{width:o?"31%":"52%"},children:o?r.map((function(a,n){return Object(h.jsx)("div",{children:Object(h.jsxs)("div",{className:"btn2",children:[Object(h.jsx)("img",{src:a.icon}),Object(h.jsx)("span",{children:a.name})]})})})):s.map((function(a,n){return Object(h.jsx)("div",{children:Object(h.jsxs)("div",{className:"btn2",children:[Object(h.jsx)("img",{src:a.icon}),Object(h.jsx)("span",{children:a.name})]})})}))})]})}));var A=Object(s.b)((function(a){a.app;return{}}),(function(a){return{}}))((function(){return Object(h.jsx)("div",{children:l.isDesktop?Object(h.jsx)(T,{}):Object(h.jsxs)("div",{style:{height:"100vh",display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",padding:80,textAlign:"center"},children:[Object(h.jsx)("img",{src:"https://image.flaticon.com/icons/png/512/2659/2659980.png",style:{width:"50%",marginBottom:"20%"}}),"Mohon Maaf, untuk sementara Siadhi hanya support untuk penggunaan berbasis dekstop, Terima Kasih"]})})}));var S=function(){return Object(h.jsx)(s.a,{store:b,children:Object(h.jsx)(A,{})})},k=function(a){a&&a instanceof Function&&t.e(3).then(t.bind(null,54)).then((function(n){var t=n.getCLS,e=n.getFID,i=n.getFCP,o=n.getLCP,r=n.getTTFB;t(a),e(a),i(a),o(a),r(a)}))};r.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(S,{})}),document.getElementById("root")),k()}},[[53,1,2]]]);
//# sourceMappingURL=main.e375b166.chunk.js.map