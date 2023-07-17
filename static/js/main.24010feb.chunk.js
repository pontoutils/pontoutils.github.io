(this.webpackJsonpcalc=this.webpackJsonpcalc||[]).push([[0],{74:function(n,e,t){"use strict";t.r(e);var a=t(0),o=t.n(a),r=t(13),i=t.n(r),c=t(9),s=t(108),l=t(113),d=t(116),u=t(115),p=t(114),b=t(16),x=function(n){return{hours:g(n),minutes:O(n)}},m=function(n){var e=n.hours,t=n.minutes;return x(function(n,e){return[].concat(Object(b.a)(n.map((function(n){return 3600*n}))),Object(b.a)(e.map((function(n){return 60*n}))))}(e,t).reduce((function(n,e){return n+e}),0))},j=function(n){return 3600*n},h=function(n){return 60*n},f=function(n){return n.replaceAll("_","0")},g=function(n){return n>0?Math.floor(n/3600):-1*Math.floor(Math.abs(n)/3600)},O=function(n){return n>0?Math.floor(n%3600/60):-1*Math.floor(Math.abs(n)%3600/60)},v=function(){return 8/7},y=t(5),w=t(6),k=t(20),C=t.n(k);t(45);C.a.locale("pt-br");t(118);var S,z,A=t(111),M=t(1);Object(s.a)((function(n){return{paper:{position:"absolute",width:400,backgroundColor:n.palette.background.paper,border:"2px solid #000",boxShadow:n.shadows[5],padding:n.spacing(2,4,3)}}}));var R,q,N,F;w.b.label(S||(S=Object(y.a)(["\n    display: block;\n"]))),w.b.div(z||(z=Object(y.a)(["\n    #period {\n        padding-left: 20px;\n        .infos {\n            display: flex;\n            justify-content: space-between;\n\n            p {\n                color: black;\n                font-weight: 500;\n            }\n        }\n    }\n\n    #treatment {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        margin-top: 10px;\n        label {\n            margin-top: 20px;\n            color: black;\n        }\n         p{\n            text-align: center;\n         }\n    }\n    #div-button-leaves {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        width: 100%;\n    }\n"])));C.a.locale("pt-br");w.b.div(R||(R=Object(y.a)(["\n    border: 1px solid lightgray;\n    box-shadow: 0 0 3px 1px lightgray;\n    background-color: #797cfd;\n    border-radius: 30px;\n    min-width: 300px;\n    height: auto;\n    font-size: 20px;\n    margin: 5px 10px;\n    margin-top: 20px;\n    color: #545454;\n"]))),w.b.div(q||(q=Object(y.a)(["\n    display: flex;\n    flex-direction: column;\n    background: linear-gradient(to top, #797cfd, #9c9efe);\n    border-radius: 30px 30px 0px 0px;\n    color: white;\n    padding: 5px 0px;\n\n    #date {\n        display: flex;\n        justify-content: space-around;\n        align-items: center;\n        border-radius: 30px;\n        padding: 3px;\n        #weeklyday {\n            min-width: 130px;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n        }\n        label {\n            margin: 5px;\n            padding: 5px;\n            border-radius: 15px;\n            padding: 5px;\n        }\n        label + label {\n            background: white;\n            color: gray;\n        }\n    }\n"]))),w.b.div(N||(N=Object(y.a)(["\n    background: white;\n    border-radius: 30px 30px 0px 0px;\n    padding-top: 10px;\n    h4 {\n        color: gray;\n    }\n\n    #hours {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        margin-top: 10px;\n    }\n\n    #infos {\n        display: flex;\n        flex-direction: column;\n        h4 {\n            margin-left: 20px;\n            margin-top: 20px;\n            margin-bottom: 5px;\n            color: #454545;\n        }\n\n        div {\n            margin-left: 40px;\n            display: flex;\n            justify-content: space-between;\n            margin-right: 30px;\n\n            label {\n                color: black;\n                weight: bold;\n            }\n        }\n    }\n"]))),w.b.div(F||(F=Object(y.a)(["\n    padding-top: 30px;\n    background: white;\n    height: 94%;\n    border-bottom: 1px solid lightgray;\n    border-radius: 0px 0px 30px 30px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    #punchesInTolerance {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        min-height: 60px;\n        margin-bottom: 20px;\n        label {\n            margin-bottom: 5px;\n        }\n        label + label {\n            text-align: center;\n        }\n    }\n"]))),w.b.div(I||(I=Object(y.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: 90vw;\n    margin-top: 30px;\n\n\n    #title{\n        color: #656565;\n        margin-bottom: 40px;\n        margin-top: 10px;\n    }\n"]))),w.b.div(P||(P=Object(y.a)(["\n\n    #header {\n        display: flex;\n        justify-content: space-around;\n        position: fixed;\n        z-index: 1;\n        left: 50%;\n        transform: translateX(-50%);\n        width: 100%;\n        background-color: white;\n        border-bottom: 1px solid lightgray;\n        padding: 14px 0px;\n        border-radius: 10px;\n        h1 {\n            display: flex;\n            color: #787878;\n\n            p {\n                margin-left: 30px;\n                color: black;\n            }\n        }\n    }\n"]))),w.b.div(B||(B=Object(y.a)(["\n    display: flex;\n    padding-top: 50px;\n"])));var I,P,B,T,H,L,E,$,D,V,G,J,U,W,Q,X,Y,_,K,Z,nn,en,tn,an=t(11),on=t(29),rn=w.b.div(T||(T=Object(y.a)(["\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    justify-content: center;\n    margin: auto;\n    font-family: 'Lucida Sans Unicode','Lucida Grande',sans-serif;\n    font-size: 13px;\n    color: #757575;\n    width: 80%; // Define a largura do container\n\n    h1 {\n        margin-top: 30px;\n        font-size: 40px;\n    }\n"]))),cn=w.b.div(H||(H=Object(y.a)(["\n    display: flex;\n    flex-direction: row;\n    margin-bottom: 20px;\n    margin-top: 25px;\n"]))),sn=w.b.textarea(L||(L=Object(y.a)(["\n    resize: none;\n"]))),ln=w.b.label(E||(E=Object(y.a)(["\n    font-size: 25px;\n    font-weight: bold;\n    margin-right: 10px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n"]))),dn=w.b.p($||($=Object(y.a)(["\n    text-align: left;\n    font-size: 20px;\n"]))),un=w.b.input(D||(D=Object(y.a)(["\n    max-width: 70px;\n    text-align: center;\n    height: 30px;\n    margin-right: 20px;\n    border: 1px solid #919191\n"]))),pn=function(n){var e=n.nightlyTime,t=n.setTime,a=n.calc,o=n.result,r=n.remove,i=function(n){var e=n.target,a=e.value,o=e.name;isNaN(a)||t((function(n){return Object(on.a)(Object(on.a)({},n),{},Object(an.a)({},o,a))}))};return Object(M.jsx)(M.Fragment,{children:Object(M.jsxs)(rn,{children:[Object(M.jsx)("h1",{children:"Calculadora de adicional noturno"}),Object(M.jsxs)(cn,{children:[Object(M.jsx)(ln,{children:" Horas"}),Object(M.jsx)(un,{name:"hours",value:(null===e||void 0===e?void 0:e.hours)||"",onChange:i}),Object(M.jsx)(ln,{children:" Minutos"}),Object(M.jsx)(un,{name:"minutes",value:(null===e||void 0===e?void 0:e.minutes)||"",onChange:i})]}),Object(M.jsx)(sn,{readOnly:!0,cols:"100",rows:"10",value:Object.keys(o).length?"O resultado da opera\xe7\xe3o \xe9 ".concat(o.hours.toString().padStart(2,0),":").concat(o.minutes.toString().padStart(2,0)):""}),Object(M.jsxs)(cn,{children:[Object(M.jsx)(A.a,{style:{marginRight:20},variant:"contained",color:"primary",onClick:a,children:"Adicional Noturno"}),Object(M.jsx)(A.a,{variant:"contained",color:"secondary",onClick:r,children:"Remover adicional noturno"})]}),Object(M.jsx)(dn,{children:"Vamos considerar um exemplo pr\xe1tico para entender melhor como funciona o c\xe1lculo da hora noturna reduzida. Suponha que um trabalhador tenha trabalhado 7 horas durante o per\xedodo noturno. Em uma situa\xe7\xe3o normal, essas 7 horas seriam equivalentes a 420 minutos (7 horas * 60 minutos). No entanto, para o c\xe1lculo do adicional noturno, a hora \xe9 considerada como 52 minutos e 30 segundos. Portanto, para converter esses 420 minutos em horas noturnas reduzidas, n\xf3s dividimos os 420 minutos por 52,5 minutos (que \xe9 o equivalente em minutos de 52 minutos e 30 segundos). O resultado dessa divis\xe3o \xe9 8 horas. Portanto, para fins de c\xe1lculo do adicional noturno, as 7 horas trabalhadas no per\xedodo noturno s\xe3o consideradas como 8 horas. Isso significa que o trabalhador receber\xe1 o pagamento equivalente a 8 horas de trabalho, mesmo tendo trabalhado efetivamente 7 horas."})]})})},bn=(w.b.div(V||(V=Object(y.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    h1 {\n        margin-top: 30px;\n        color: #656565;\n    }\n"]))),w.b.div(G||(G=Object(y.a)(["\n    text-align: center;\n    height: 398px;\n    width: 600px;\n    left: 60%;\n    margin: auto;\n    border:  1px solid black;\n    background-color:  #f1f1f1;\n    font-family: 'Lucida Sans Unicode','Lucida Grande',sans-serif;\n    font-size: 13px;\n    color: #757575;\n    margin-top: 30px;\n"]))),w.b.input(J||(J=Object(y.a)(["\n    text-align: center;\n    border: 1px #042e5d solid;\n    width: 82px;\n    height: 50px;\n    margin: 10px;\n    font-size: 30px;\n"]))),w.b.input(U||(U=Object(y.a)(["\n    border: 1px #042e5d solid;\n    width: 82px;\n    height: 50px;\n    text-align:center;\n    font-size: 30px;\n    background-color: #283593;\n    color: white;\n    margin: 10px;\n"]))),w.b.div(W||(W=Object(y.a)(["\n    text-align: center;\n    margin-left: 10px;\n    font-size: 30px;\n    padding: 10px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n"]))),w.b.label(Q||(Q=Object(y.a)(["\n    color: #fff;\n    letter-spacing: 3pt;\n    font-size: 15px;\n    padding: 10px;\n    text-shadow: 0 1px 0 rgba(255,255,255,0.2);\n    border: 1px #fcfcfc solid;\n    border-radius: 10px;\n    margin-left: 15px;\n    cursor: pointer;\n"]))),w.b.div(X||(X=Object(y.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: #676767;\n    width: 80%;\n    margin: auto;\n    margin-top: 30px;\n    flex-direction: column;\n\n    div {\n        margin-top: 30px;\n\n        div {\n            margin-bottom: 0px;\n            display: flex;\n            align-items: center;\n            justify-content: space-between;\n\n\n            input{\n                height: 40px;\n                margin-left: 40px;\n                font-size: 20px;\n                text-align: center;\n            }\n        }\n    }\n\n    #result{\n        padding: 5px;\n        margin-bottom: 20px;\n        height: 50px;\n    }\n"])))),xn=w.b.p(Y||(Y=Object(y.a)(["\n    text-align: left;\n    font-size: 20px;\n"]))),mn=function(){var n=Object(a.useState)(),e=Object(c.a)(n,2),t=e[0],o=e[1],r=Object(a.useState)(),i=Object(c.a)(r,2),s=i[0],l=i[1],d=Object(a.useState)(),u=Object(c.a)(d,2),p=u[0],b=u[1],x=new Date(t),m=parseInt(s);return Object(M.jsxs)(bn,{children:[Object(M.jsx)("h1",{children:"Ciclo Banco de Horas"}),Object(M.jsxs)("div",{children:[Object(M.jsxs)("div",{children:[Object(M.jsx)("h3",{children:"Inicio do Banco"}),Object(M.jsx)("input",{onChange:function(n){return o(n.target.value)},id:"month",type:"month"})]}),Object(M.jsxs)("div",{children:[Object(M.jsx)("h3",{children:"Valor do Ciclo "}),Object(M.jsx)("input",{onChange:function(n){return l(n.target.value)}})]}),Object(M.jsxs)("div",{children:[Object(M.jsx)("h3",{children:"Final do Ciclo"}),Object(M.jsx)("input",{onChange:function(n){return l(n.target.value)},type:"month",id:"result",disabled:!0,value:p})]})]}),Object(M.jsx)(A.a,{onClick:function(){if(!t||!s)return!1;var n=x;n.setMonth(n.getMonth()+m);var e=x.getFullYear()+"-"+("0"+(n.getMonth()+1)).slice(-2);b(e),console.log(e)},variant:"contained",color:"primary",style:{marginBottom:50},children:"Calcular"}),Object(M.jsx)("p",{children:"Calcule o ciclo de banco de horas"}),Object(M.jsx)("br",{}),Object(M.jsx)(xn,{children:"O ciclo de banco de horas \xe9 o per\xedodo de tempo durante o qual as horas extras trabalhadas s\xe3o acumuladas e compensadas. Este per\xedodo pode variar dependendo do acordo de trabalho, mas geralmente \xe9 de um ano. Durante este ciclo, todas as horas extras que o trabalhador realiza s\xe3o registradas e acumuladas no banco de horas. Ao final do ciclo, o trabalhador deve ter compensado todas as horas extras acumuladas, seja por meio de folgas ou pagamento adicional. Se ao final do ciclo ainda houver horas extras n\xe3o compensadas, a empresa deve pagar ao trabalhador estas horas com o acr\xe9scimo correspondente. O ciclo de banco de horas \xe9 uma ferramenta importante para gerenciar as horas de trabalho e garantir que os trabalhadores sejam justamente compensados por qualquer trabalho extra que realizem."})]})},jn=t(30),hn=t.n(jn),fn=w.b.div(_||(_=Object(y.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: #676767;\n    width: 80%; // Ajuste este valor conforme necess\xe1rio\n    margin: auto;\n    margin-top: 30px;\n    flex-direction: column;\n\n    div {\n        margin: 20px 0px;\n\n        div {\n            margin-bottom: 30px;\n            display: flex;\n            align-items: center;\n            justify-content: space-between;\n            width: 40vw;\n\n            input{\n                height: 40px;\n                font-size: 20px;\n                text-align: center;\n                margin-left: 20px;\n            }\n            h3 {\n                margin-left: 30px;\n\n            }\n\n            div +div {\n                width: 10vw;\n            }\n        }\n    }\n"]))),gn=w.b.p(K||(K=Object(y.a)(["\n    text-align: left;\n    font-size: 20px;\n"]))),On=function(){var n=Object(a.useState)("00:00"),e=Object(c.a)(n,2),t=e[0],o=e[1],r=Object(a.useState)("0.00"),i=Object(c.a)(r,2),s=i[0],l=i[1],d=function(n){return o(function(n){if(!n)return!1;var e=f(n).split(":"),t=Object(c.a)(e,2),a=t[0],o=t[1];return"".concat(a,".").concat(Math.floor(1.67*o))}(n.target.value))},u=function(n){return l(function(n){if(!n)return!1;var e=f(n).split("."),t=Object(c.a)(e,2),a=t[0],o=t[1];return"".concat(a,":").concat(Math.round(o/1.67).toString().padStart(2,0))}(n.target.value))};return Object(M.jsxs)(fn,{children:[Object(M.jsx)("h1",{children:"Conversor de Horas"}),Object(M.jsxs)("div",{children:[Object(M.jsxs)("div",{children:[Object(M.jsxs)("div",{children:[Object(M.jsx)("h2",{children:"Valor em Sexagesimal "}),Object(M.jsx)(hn.a,{onChange:function(n){return d(n)},mask:"99:99"})]}),Object(M.jsx)("div",{children:Object(M.jsx)("h3",{children:t})})]}),Object(M.jsxs)("div",{children:[Object(M.jsxs)("div",{children:[Object(M.jsx)("h2",{children:"Valor em Centesimal "}),Object(M.jsx)(hn.a,{onChange:function(n){return u(n)},mask:"99.99"})]}),Object(M.jsx)("div",{children:Object(M.jsx)("h3",{children:s})})]})]}),Object(M.jsx)("p",{children:"*Converta horas de sexagesimal para centesimal e vice versa"}),Object(M.jsx)("br",{}),Object(M.jsx)(gn,{children:"A convers\xe3o de horas no formato sexagesimal (base 60) para o formato centesimal (base 100) \xe9 um processo comum em c\xe1lculos de tempo, especialmente em contextos de trabalho. Para converter horas sexagesimais em centesimais, voc\xea divide os minutos por 60 e adiciona o resultado \xe0s horas. Por exemplo, se voc\xea tem 1 hora e 30 minutos no formato sexagesimal, voc\xea divide 30 (minutos) por 60, o que resulta em 0,5. Adicionando isso \xe0 1 hora, voc\xea obt\xe9m 1,5 horas no formato centesimal. Para converter de centesimal para sexagesimal, voc\xea faz o processo inverso. Se voc\xea tem 1,5 horas no formato centesimal, voc\xea subtrai a parte inteira (1 hora), deixando 0,5. Multiplicando 0,5 por 60, voc\xea obt\xe9m 30 minutos. Portanto, 1,5 horas no formato centesimal \xe9 igual a 1 hora e 30 minutos no formato sexagesimal."})]})},vn=w.b.div(Z||(Z=Object(y.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: #676767;\n    width: 80%;\n    margin: auto;\n    margin-top: 30px;\n    flex-direction: column;\n\n    div {\n        margin-top: 30px;\n\n        div {\n            margin-bottom: 0px;\n            display: flex;\n            align-items: center;\n            justify-content: space-between;\n\n\n            input{\n                height: 40px;\n                margin-left: 40px;\n                font-size: 20px;\n                text-align: center;\n            }\n        }\n    }\n\n    #result{\n        padding: 5px;\n        margin-bottom: 20px;\n        height: 50px;\n    }\n"]))),yn=w.b.p(nn||(nn=Object(y.a)(["\n    text-align: left;\n    font-size: 20px;\n"]))),wn=function(){var n=Object(a.useState)(),e=Object(c.a)(n,2),t=e[0],o=e[1],r=Object(a.useState)(),i=Object(c.a)(r,2),s=i[0],l=i[1],d=Object(a.useState)(),u=Object(c.a)(d,2),p=u[0],b=u[1];return Object(M.jsxs)(vn,{children:[Object(M.jsx)("h1",{children:"Fator Multiplicador"}),Object(M.jsxs)("div",{children:[Object(M.jsxs)("div",{children:[Object(M.jsx)("h3",{children:"Quantidade de Banco"}),Object(M.jsx)(hn.a,{onChange:function(n){return o(n.target.value)},mask:"99:99"})]}),Object(M.jsxs)("div",{children:[Object(M.jsx)("h3",{children:"Fator Multiplicador "}),Object(M.jsx)(hn.a,{onChange:function(n){return l(n.target.value)},mask:"9.9"})]})]}),Object(M.jsx)("div",{id:"result",children:p&&Object(M.jsxs)("h1",{children:["Resultado: ",p]})}),Object(M.jsx)(A.a,{onClick:function(){if(!t||!s)return!1;var n,e=function(n){var e=Object(c.a)(n,2),t=e[0],a=e[1];return 3600*parseInt(t)+60*parseInt(a)}(f(t).split(":")),a=(n=function(n){return f(s)*n}(e),"".concat(g(n).toString().padStart(2,0),":").concat(O(n).toString().padStart(2,0)));b(a)},variant:"contained",color:"primary",style:{marginBottom:50},children:"Multiplicar"}),Object(M.jsx)("p",{children:"*Multiplique o banco pelo fator multiplicador"}),Object(M.jsx)("br",{}),Object(M.jsx)(yn,{children:"O fator multiplicador \xe9 um elemento crucial no c\xe1lculo do banco de horas. Ele \xe9 usado para determinar o valor das horas extras trabalhadas em rela\xe7\xe3o \xe0s horas normais de trabalho. Por exemplo, a legisla\xe7\xe3o trabalhista brasileira estabelece que as primeiras duas horas extras trabalhadas devem ser pagas com um acr\xe9scimo de 50% sobre o valor da hora normal, e as horas extras al\xe9m dessas devem ser pagas com um acr\xe9scimo de 100%. Isso significa que o fator multiplicador para as primeiras duas horas extras \xe9 1,5 (ou 150%), e para as horas extras al\xe9m dessas \xe9 2 (ou 200%). Portanto, se um trabalhador que recebe R$20,00 por hora trabalha 3 horas extras, as duas primeiras horas extras ser\xe3o pagas a R$30,00 cada (R$20,00 * 1,5) e a terceira hora extra ser\xe1 paga a R$40,00 (R$20,00 * 2). O fator multiplicador \xe9 uma ferramenta importante para garantir que os trabalhadores sejam justamente compensados pelas horas extras que trabalham."})]})},kn=t(112),Cn=t(117),Sn=w.b.div(en||(en=Object(y.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    padding-top: 30px;\n    color: #898989;\n"]))),zn=w.b.div(tn||(tn=Object(y.a)(["\n    display: flex;\n    align-items: center;\n    @media (max-width: 600px) {\n        width: 80vw;\n    }\n    justify-content: center;\n    flex-direction: column;\n    width: 40vw;\n    border: 1px solid lightgray;\n    box-shadow: 0 0 10px lightgray;\n    padding: 30px;\n    margin-top: 20px;\n    background: whitesmoke;\n\n    hr {\n        width: 80%;\n        color: #898989;\n        margin-top: 30px;\n        margin-bottom: 10px;\n    }\n\n    #div-addNewButtons {\n        width: 60%;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        justify-content: space-around;\n        @media (max-width: 600px) {\n            flex-direction: column;\n            button {\n                margin-bottom: 10px;\n            }\n        }\n    }\n\n    #div-all-input-hours {\n        margin-top: 20px;\n        width: 80%;\n\n        .div-input-hours {\n            display: flex;\n            align-items: center;\n            justify-content: space-evenly;\n            margin-bottom: 10px;\n            input {\n                background-color: white;\n            }\n            @media (max-width: 600px) {\n                flex-direction: column;\n                input {\n                    margin-bottom: 10px;\n                }\n            }\n        }\n    }\n\n    #div-buttons {\n        margin-top: 30px;\n        display: flex;\n        align-items: center;\n        justify-content: space-around;\n        width: 70%;\n        @media (max-width: 600px) {\n            flex-direction: column;\n            button {\n                margin-bottom: 10px;\n            }\n        }\n    }\n\n    #div-results {\n        width: 80%;\n        display: flex;\n        align-items: center;\n        justify-content: space-around;\n        margin-top: 10px;\n        input {\n            background-color: ghostwhite;\n        }\n        @media (max-width: 600px) {\n            flex-direction: column;\n            input {\n                margin-bottom: 10px;\n            }\n        \n    }\n"])));var An,Mn,Rn,qn,Nn,Fn,In=function(){var n=Object(a.useState)(2),e=Object(c.a)(n,2),t=e[0],o=e[1],r=Object(kn.a)("(max-width:600px)"),i=Object(a.useState)({hours:"",minutes:""}),s=Object(c.a)(i,2),l=s[0],d=s[1],u=Object(a.useRef)(new Array),p=Object(a.useRef)(new Array),j=function(n){var e=u.current.map((function(n){return null!==n&&void 0!==n&&n.value?parseInt(n.value):0})),t=p.current.map((function(n){return null!==n&&void 0!==n&&n.value?parseInt(n.value):0}));d("sum"===n?m({hours:e,minutes:t}):function(n){var e=n.hours,t=n.minutes;return x(e.map((function(n,e){return 3600*n+60*t[e]})).reduce((function(n,e){return n-e})))}({hours:e,minutes:t}))};return Object(M.jsxs)(Sn,{style:{marginTop:r?"60%":0},children:[" ",Object(M.jsx)("h1",{children:"Calculadora de Horas"}),Object(M.jsxs)(zn,{children:[Object(M.jsxs)("div",{id:"div-addNewButtons",children:[Object(M.jsx)(A.a,{style:{backgroundColor:"#a2cf6e",color:"white",minWidth:147},onClick:function(){return 31===t||o(t+1)},variant:"contained",children:"+"}),Object(M.jsx)(A.a,{style:{backgroundColor:"tomato",color:"white",minWidth:147,fontSize:"0.8rem"},onClick:function(){return o(2)},variant:"contained",children:"Limpar campos"})]}),Object(M.jsx)("div",{id:"div-all-input-hours",children:new Array(t).fill(0).map((function(n,e){return Object(M.jsxs)("div",{className:"div-input-hours",children:[Object(M.jsx)(Cn.a,{inputRef:function(n){return u.current[e]=n},className:"outlined-basic",label:"Horas",variant:"outlined"}),Object(M.jsx)(Cn.a,{inputRef:function(n){return p.current[e]=n},className:"outlined-basic",label:"Minutos",variant:"outlined"})]},e)}))}),Object(M.jsxs)("div",{id:"div-buttons",children:[Object(M.jsx)(A.a,{onClick:function(){return j("sum")},variant:"contained",color:"primary",children:"Adi\xe7\xe3o"}),Object(M.jsx)(A.a,{onClick:function(){return[].concat(Object(b.a)(u.current),Object(b.a)(p.current)).filter((function(n){return n})).forEach((function(n){return n.value=""})),void d({hours:"",minutes:""})},variant:"contained",color:"secondary",children:"Reset"}),Object(M.jsx)(A.a,{onClick:function(){return j("decrease")},variant:"contained",color:"primary",children:"Subtra\xe7\xe3o"})]}),Object(M.jsx)("hr",{}),Object(M.jsx)("h1",{children:"Resultado"}),Object(M.jsxs)("div",{id:"div-results",children:[Object(M.jsx)(Cn.a,{id:"filled-basic",inputProps:{readOnly:!0},variant:"outlined",label:"Resultado Horas",value:l.hours}),Object(M.jsx)(Cn.a,{id:"filled-basic",inputProps:{readOnly:!0},variant:"outlined",label:"Resultado Minutos",value:l.minutes})]})]})]})},Pn=(w.b.div(An||(An=Object(y.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: #3A3A45;\n    margin-top: 30px;\n    flex-direction: column;\n"]))),w.b.div(Mn||(Mn=Object(y.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n    margin-top: 30px;\n    width: 80%; // Ajuste este valor conforme necess\xe1rio\n"]))),w.b.div(Rn||(Rn=Object(y.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 50%; // Ajuste este valor conforme necess\xe1rio\n\n    img {\n        max-width: 70%;\n        height: auto;\n        object-fit: cover;\n        border-radius: 4px;\n    }\n"]))),w.b.div(qn||(qn=Object(y.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 50%; // Ajuste este valor conforme necess\xe1rio\n    margin-left: 20px; // Adicionado para dar espa\xe7o \xe0 imagem\n"]))),w.b.div(Nn||(Nn=Object(y.a)(["\n    padding: 20px;\n    background: #F9F9F9;\n    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);\n    border-radius: 4px;\n    color: #3A3A45;\n    font-size: 18px;\n    line-height: 1.6;\n    text-align: justify;\n\n    strong {\n        color: #3A3A45;\n        font-weight: 600;\n    }\n\n    em {\n        color: #3f51b5;\n    }\n\n    p {\n        margin-bottom: 10px;\n    }\n"]))),t.p,Object(s.a)({root:{flexGrow:1},tab:{textAlign:"center"}})),Bn=function(){var n=Object(a.useState)(0),e=Object(c.a)(n,2),t=e[0],o=e[1],r=Object(a.useState)({}),i=Object(c.a)(r,2),s=i[0],b=i[1],m=Object(a.useState)({}),f=Object(c.a)(m,2),g=f[0],O=f[1],y={0:Object(M.jsx)(In,{}),1:Object(M.jsx)(pn,{nightlyTime:s,setTime:b,result:g,calc:function(){var n=function(n){var e=n.hours,t=n.minutes,a=t?h(t):0,o=e?j(e)+a:a;return a||o?x(o*v()):{}}(s);O(n)},remove:function(){var n=function(n){var e=n.hours,t=n.minutes,a=t?h(t):0,o=e?j(e)+a:a;return a||o?x(Math.ceil(o/v())):{}}(s);O(n)}}),2:Object(M.jsx)(On,{}),3:Object(M.jsx)(wn,{}),4:Object(M.jsx)(mn,{})},w=Pn(),k=function(n){o((function(e){return n}))};return Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(l.a,{className:w.root,style:{position:"fixed",width:"100vw",zIndex:1},children:Object(M.jsx)(p.a,{children:Object(M.jsxs)(u.a,{container:!0,children:[Object(M.jsx)(u.a,{item:!0,xs:12,sm:2,children:Object(M.jsx)(d.a,{className:w.tab,label:"Calculadora",onClick:function(){return k(0)}})}),Object(M.jsx)(u.a,{item:!0,xs:12,sm:2,children:Object(M.jsx)(d.a,{className:w.tab,label:"Adicional Noturno",onClick:function(){return k(1)}})}),Object(M.jsx)(u.a,{item:!0,xs:12,sm:2,children:Object(M.jsx)(d.a,{className:w.tab,label:"Conversor",onClick:function(){return k(2)}})}),Object(M.jsx)(u.a,{item:!0,xs:12,sm:2,children:Object(M.jsx)(d.a,{className:w.tab,label:"Fator Multiplicador",onClick:function(){return k(3)}})}),Object(M.jsx)(u.a,{item:!0,xs:12,sm:2,children:Object(M.jsx)(d.a,{className:w.tab,label:"Banco de Horas",onClick:function(){return k(4)}})})]})})}),Object(M.jsx)("div",{style:{paddingTop:49},children:y[t]})]})},Tn=(t.p,Object(w.a)(Fn||(Fn=Object(y.a)(["\n\n@font-face {\n     font-family: 'Roboto';\n     src: url('../fonts/Roboto/Roboto-Regular.ttf') format('truetype');\n     font-weight: 400;\n     font-style: normal;\n   }\n\n     * {\n          margin:0;\n          padding:0;\n          outline: 0;\n          box-sizing: border-box;  \n          font-family: 'Roboto', sans-serif;\n         \n     }\n     #root {\n          margin: 0 auto;\n     }\n"]))));var Hn=function(){return Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(Bn,{}),Object(M.jsx)(Tn,{})]})},Ln=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,119)).then((function(e){var t=e.getCLS,a=e.getFID,o=e.getFCP,r=e.getLCP,i=e.getTTFB;t(n),a(n),o(n),r(n),i(n)}))};i.a.render(Object(M.jsx)(o.a.StrictMode,{children:Object(M.jsx)(Hn,{})}),document.getElementById("root")),Ln()}},[[74,1,2]]]);
//# sourceMappingURL=main.24010feb.chunk.js.map