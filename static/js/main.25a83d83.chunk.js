(this.webpackJsonpquiz=this.webpackJsonpquiz||[]).push([[0],{164:function(n,t,e){},165:function(n,t,e){},273:function(n,t,e){"use strict";e.r(t);var i,a=e(2),c=e.n(a),r=e(64),o=e.n(r),s=(e(164),e(6)),l=e(7),d=(e(165),e(15)),b=e(12),u=e(9),h=e(26),p=e(3);var f,m=Object(l.a)(i||(i=Object(s.a)(["\n    width: 750px;\n    min-height: 500px;\n    padding: 20px 30px;\n    background-color: var(--color-light-black);\n    box-shadow: var(--shadow-2);\n\n    @media screen and (max-width: 800px) {\n        width: calc(100vw - 100px);\n        min-height: 500px;\n    }\n"]))),x=function(n){var t=n.quizList,e=n.onSelected,i=n.onFinished,c=n.onNext,r=Object(a.useState)(0),o=Object(h.a)(r,2),s=o[0],l=o[1];return Object(p.b)("div",{css:m,children:t.length>0?Object(p.b)(N,{quiz:t[s],quizNumber:s,size:t.length,onClickNext:function(){var n=s===t.length-1;l((function(t){return n?t:t+1})),c(),n&&i()},onFactorSelected:function(n){var i=s===t.length-1;e(n,i)}},s):null})},j=e(39),v=e.n(j),O=e(69),g={request:function(){var n=Object(O.a)(v.a.mark((function n(t){var e;return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch(t);case 3:if(200===(e=n.sent).status){n.next=6;break}throw new Error("\ubb38\uc81c\uac00 \ubc1c\uc0dd\ud558\uc600\uc2b5\ub2c8\ub2e4.");case 6:return n.abrupt("return",e.json());case 9:n.prev=9,n.t0=n.catch(0),console.error(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(t){return n.apply(this,arguments)}}(),rand:function(n){return Math.floor(10*Math.random())%n},localeStringToTime:function(n){var t=n.split(".").join("").split(":").join(" ").split(" ").map((function(n){return"\uc624\uc804"===n?-1:"\uc624\ud6c4"===n?1:Number(n)}));return new Date(t[0],t[1]-1,t[2],t[3]>0?t[4]+12:t[4],t[5],t[6]).getTime()}};var w,y=Object(l.a)(f||(f=Object(s.a)(["\n    width: 100%;\n    height: 100%;\n    font-weight: bold;\n    color: white;\n    .header {\n        background-color: var(--color-dark-navy);\n        padding: 20px 0 3px 20px;\n        box-shadow: var(--shadow-1);\n    }\n    .num {\n        font-size: 23px;\n    }\n    .question {\n        width: calc(100% - 60px);\n        min-height: 80px;\n        font-size: 18px;\n        line-height: 35px;\n        margin: 15px 0;\n    }\n    section {\n        height: calc(100% - 160px);\n        display: flex;\n        flex-direction: column;\n        justify-content: space-between;\n        margin-top: 10px;\n        .button {\n            margin: 0 auto;\n            width: 220px;\n            text-align: center;\n            margin-top: 10px;\n        }\n    }\n    .factors {\n        margin-left: 10px;\n        .txt {\n            display: flex;\n            span {\n                margin-right: 15px;\n                font-size: 20px;\n            }\n        }\n        .fact {\n            width: fit-content;\n            transition: .2s;\n            line-height: 40px;\n            padding: 0 10px;\n            margin-bottom: 15px;\n            &:hover {\n                cursor: pointer;\n                .line {\n                    width: 100% !important;\n                    height: 2px;\n                }\n            }\n            .line {\n                width: 0px;\n                height: 2px;\n                background-color: var(--color-orange);\n                transition: .3s;\n            }\n        }\n        .selected {\n            color: var(--color-orange);\n            .line {\n                width: 100%;\n            }\n        }\n    }\n\n    @media screen and (max-width: 800px) {\n        .header {\n            .question {\n                height: unset;\n            }\n        }\n    }\n"]))),N=function(n){var t=n.quiz,e=n.quizNumber,i=n.size,c=n.onClickNext,r=n.onFactorSelected,o=t.question,s=t.correct_answer,l=t.incorrect_answers,d=Object(a.useState)({selected:!1,correct:!1,factors:[]}),b=Object(h.a)(d,2),f=b[0],m=b[1],x=function(n){var t=n.currentTarget.dataset.fact,e=t===s;f.selected||(n.currentTarget.classList.add("selected"),r({question:o,answer:s,pick:t,correct:e}),m({selected:!0,correct:e,factors:f.factors}))};return Object(a.useEffect)((function(){var n=l.slice();n.splice(g.rand(3),0,s),m(Object(u.a)(Object(u.a)({},f),{},{factors:n}))}),[t]),Object(p.c)("div",{css:y,children:[Object(p.c)("div",{className:"header",children:[Object(p.b)("div",{className:"num",children:"\ubb38\uc81c ".concat(e+1,".")}),Object(p.b)("div",{className:"question",children:o})]}),Object(p.c)("section",{children:[Object(p.b)("div",{className:"factors",children:f.factors.map((function(n,t){return Object(p.c)("div",{className:"fact",onClick:x,"data-fact":n,children:[Object(p.c)("div",{className:"txt",children:[Object(p.b)("span",{"data-testid":"f1",children:"".concat(t+1,".")}),Object(p.b)("div",{children:n})]}),Object(p.b)("div",{className:"line"})]},n)}))}),f.selected?Object(p.b)("div",{className:"button",onClick:c,children:i===e+1?"\uacb0\uacfc \ud655\uc778!":"\ub2e4\uc74c \ubb38\ud56d"}):null]})]})},k=e(134);var z,L=Object(l.a)(w||(w=Object(s.a)(["\n    font-size: 40px;\n    color: white;\n    transform: scaleY(1.1);\n    > svg {\n        margin-right: 20px;\n        animation-name: rotate;\n        animation-duration: 2.5s;\n        animation-timing-function: ease;\n        animation-iteration-count: infinite;\n    }\n    @keyframes rotate {\n        from {transform: rotate(0deg);}\n        to {transform: rotate(360deg);}\n    }\n"]))),T=function(n){var t=n.startTimer,e=n.getCurrentTime,i=Object(a.useState)("00:00.0"),c=Object(h.a)(i,2),r=c[0],o=c[1],s=Object(a.useRef)(0),l=(new Date).getTime(),d=function(n){return n<10?"0"+n:""+n};return Object(a.useEffect)((function(){return t&&(s.current=window.setInterval((function(){return function(){var n=(new Date).getTime(),t=new Date(n-l),e=d(t.getMinutes()),i=d(t.getSeconds()),a=Math.floor(t.getMilliseconds()/100);o("".concat(e,":").concat(i,".").concat(a))}()}),100)),t||e(r),function(){clearInterval(s.current)}}),[t]),Object(p.c)("div",{css:L,children:[Object(p.b)(k.a,{size:"32",color:"rgb(0, 140, 255)"}),r]})},q=e(40);var C,I=function(n){return Object(l.a)(z||(z=Object(s.a)(["\n    z-index: 100;\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    display: flex;\n    align-items: center;\n    width: 310px;\n    height: 100px;\n    background-color: white;\n    text-align: center;\n    color: black;\n    border-radius: var(--radius-2);\n    // border-top: 6px solid var(--color-light-green);\n    box-shadow: var(--shadow-2);\n    .txt {\n        width: 100%;\n        font-weight: bold;\n        font-size: 30px;       \n        svg {\n            margin-right: 15px;\n        }\n    }\n    animation-name: ",";\n    animation-duration: ",";\n    animation-timing-function: ease;\n"])),n?"appear":"vanish",n?"1s":"3s")},S=function(n){var t=n.msg,e=void 0===t?"":t,i=n.type,c=n.onVanish,r=Object(a.useRef)(null);return Object(a.useEffect)((function(){i||setTimeout((function(){r.current.style.visibility="hidden",c()}),2900)}),[]),Object(p.b)("div",{css:I(i),ref:r,children:"o"===i?Object(p.c)("div",{className:"txt",children:[Object(p.b)(q.a,{size:"35",color:"rgb(0 174 0)"}),e]}):"x"===i?Object(p.c)("div",{className:"txt",children:[Object(p.b)(q.b,{size:"35",color:"red"}),e]}):Object(p.b)("div",{className:"txt",children:e})})};var D,E=Object(l.a)(C||(C=Object(s.a)(["\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    display: flex;\n    align-items: center;\n    width: 310px;\n    height: 100px;\n    background-color: white;\n    text-align: center;\n    color: black;\n    border-radius: var(--radius-2);\n    // border-top: 6px solid var(--color-light-green);\n    box-shadow: var(--shadow-2);\n    .txt {\n        width: 100%;\n        font-weight: bold;\n        font-size: 35px;       \n        svg {\n            margin-right: 15px;\n        }\n    }\n"]))),_=function(n){var t=n.msg;return Object(p.b)("div",{css:E,children:Object(p.b)("div",{className:"txt",children:t})})},F=e(277);var R,Y=Object(l.a)(D||(D=Object(s.a)(["\n    > .info {\n        display: flex;\n        justify-content: center;\n        margin-bottom: 30px;\n        > .wrapper {\n            color: white;\n            font-weight: bold;\n            display: flex;\n            align-items: center;\n            margin-right: 20px;\n            .name {\n            }\n            .color {\n                margin-right: 10px;\n                width: 16px;\n                height: 16px;\n                border-radius: var(--radius-2);\n            }\n        }\n    }\n\n    @media screen and (max-width: 800px) {\n        display: flex;\n        > .info {\n            flex-direction: column;\n            > .wrapper {\n                min-width: 100px;\n                height: 35px;\n            }\n        }\n\n    }\n"]))),U=function(n){var t=n.dataList,e=n.colorList,i=n.showLabel,a=void 0===i||i;return Object(p.c)("div",{css:Y,children:[Object(p.b)(F.a,{colorScale:e,data:t,innerRadius:70,labelRadius:function(n){n.innerRadius;return 100},startAngle:180,endAngle:540,style:{labels:{fontSize:35,fontWeight:"bold",fill:"white"}}}),a?Object(p.b)("div",{className:"info",children:t.map((function(n,t){return Object(p.c)("div",{className:"wrapper",children:[Object(p.b)("div",{className:"color",style:{backgroundColor:e[t]}}),Object(p.b)("div",{className:"name",children:n.name})]},t)}))}):null]})};var M,B=Object(l.a)(R||(R=Object(s.a)(["\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n\n    > .header {\n        display: flex;\n        justify-content: flex-end;\n        align-items: center;\n        height: 50px;\n        margin-bottom: 10px;\n    }\n    > .note-wrapper {\n        overflow: auto;\n        flex-grow: 1;\n    }\n"]))),A=function(n){var t=n.resultList,e=n.onSave,i=n.onOpinionChanged;return Object(p.c)("div",{css:B,children:[Object(p.b)("div",{className:"header",children:Object(p.b)("div",{className:"button",onClick:function(){e()},children:"\uc800\uc7a5"})}),Object(p.b)("div",{className:"note-wrapper",children:t.map((function(n,t){return Object(p.b)(P,{resultFactor:n,index:t,onOpinionChanged:i},n.question)}))})]})};var H,J=Object(l.a)(M||(M=Object(s.a)(["\n    position: relative;\n    margin-bottom: 50px;\n    padding: 0 20px;\n    .idx {\n        display: flex;\n        align-items: center;\n        font-size: 18px;\n        font-weight: bold;\n        margin: 0 0 10px 15px;\n        svg {\n            margin-left: 15px;\n            transform: scale(1.1);\n        }\n    }\n    section {\n        box-shadow: 0 2px 20px -5px black;\n        font-weight: bold;\n        .row {\n            display: flex;\n            min-height: 60px;\n            > div {\n                display: flex;\n                align-items: center;\n                padding-left: 20px;\n            }\n            .txt {\n                width: 140px;\n                background-color: var(--color-dark-navy);\n            }\n            .val {\n                flex-grow: 1;\n                background-color: var(--color-light-black);\n                padding-right: 5px;\n                width: calc(100% - 150px);\n            }\n            .ta {\n                flex-grow: 1;\n                width: calc(100% - 150px);\n                background-color: var(--color-light-black);\n            }\n            textarea {\n                height: 40px;\n                width: calc(100% - 30px);\n                resize: none;\n                border-radius: var(--radius-2);\n                background-color: var(--color-dark-gray);\n                color: white;\n                font-weight: bold;\n            }\n        }\n    }\n    animation-name: showUp;\n    animation-duration: 1s;\n    animation-timing-function: ease;\n"]))),P=function(n){var t=n.resultFactor,e=n.index,i=n.onOpinionChanged,a=t.question,c=t.answer,r=t.pick,o=t.correct,s=t.opinion;return Object(p.c)("div",{css:J,children:[Object(p.c)("div",{className:"idx",children:["\ubb38\uc81c ".concat(e+1,"."),o?Object(p.b)(q.a,{color:"var(--color-green)"}):Object(p.b)(q.b,{color:"var(--color-red)"})]}),Object(p.c)("section",{children:[Object(p.c)("div",{className:"row",children:[Object(p.b)("div",{className:"txt",children:"\ubb38\uc81c"}),Object(p.b)("div",{className:"val",children:a})]}),Object(p.c)("div",{className:"row",children:[Object(p.b)("div",{className:"txt",children:"\ub2f5"}),Object(p.b)("div",{className:"val",children:c})]}),Object(p.c)("div",{className:"row",children:[Object(p.b)("div",{className:"txt",children:"\ub098\uc758 \ub2f5"}),Object(p.b)("div",{className:"val",children:r})]}),Object(p.c)("div",{className:"row",children:[Object(p.b)("div",{className:"txt",children:"\uae30\ub85d\ud560 \ub0b4\uc6a9"}),Object(p.b)("div",{className:"ta",children:Object(p.b)("textarea",{value:s,onChange:function(n){i(n.currentTarget.value,e)}})})]})]})]})};var Q,W=Object(l.a)(H||(H=Object(s.a)(["\n    > .msg-box {\n        z-index: 100;\n        position: fixed;\n        top: 50%;\n        left: 50%;\n        transform: translate(-50%, -50%);\n        display: flex;\n        flex-direction: column;\n        justify-content: space-between;\n        width: 340px;\n        height: 140px;\n        background-color: white;\n        color: black;\n        border-radius: var(--radius-2);\n        // border-top: 6px solid var(--color-orange);\n        box-shadow: 0 20px 20px -10px black;\n        .txt {\n            display: flex;\n            justify-content: center;\n            width: calc(100% - 20px);\n            height: 30px;\n            align-items: center;\n            flex-grow: 1;\n            font-weight: bold;\n            font-size: 18px;       \n            svg {\n                margin-right: 15px;\n            }\n        }\n        .btn-wrapper {\n            display: flex;\n            .btn {\n                display: flex;\n                justify-content: center;\n                align-items: center;\n                text-align: center;\n                font-size: 20px;\n                font-weight: bold;\n                height: 40px;\n                background-color: var(--color-light-gray);\n                cursor: pointer;\n                transition: .2s;\n            }\n            .btn:first-child {\n                flex-grow: 1;\n                border-bottom-left-radius: var(--radius-2);\n                &:hover {\n                    color: white;\n                    background-color: var(--color-blue);\n                }\n            }\n            .btn:last-child {\n                flex-grow: 1;\n                border-bottom-right-radius: var(--radius-2);\n                &:hover {\n                    color: white;\n                    background-color: var(--color-red);\n                }\n            }\n        }\n    }\n\n"]))),V=function(n){var t=n.onClickButton,e=n.msg,i=function(n){t(n)};return Object(p.c)("div",{css:W,children:[Object(p.c)("div",{className:"msg-box",children:[Object(p.b)("div",{className:"txt",children:e}),Object(p.c)("div",{className:"btn-wrapper",children:[Object(p.b)("div",{className:"btn","data-type":"Y",onClick:i,children:"\uc608"}),Object(p.b)("div",{className:"btn","data-type":"N",onClick:i,children:"\uc544\ub2c8\uc624"})]})]}),Object(p.b)("div",{className:"modal"})]})};var Z,G=Object(l.a)(Q||(Q=Object(s.a)(["\n    height: 100%;\n    padding: 15px;\n    > .empty {\n        font-size: 20px;\n        text-align: center;\n        margin-top: 50px;\n        > .txt {\n            height: 50px;\n        }\n    }\n"]))),K=function(n){var t=n.historyList,e=n.onClickCard;return Object(p.c)("div",{css:G,children:[t.map((function(n){return Object(p.b)(nn,{resultList:n.resultList,resultDate:n.resultDate,resultTime:n.resultTime,category:n.category,onClickCard:e},n.resultDate)})),0===t.length?Object(p.b)("div",{className:"empty",children:Object(p.b)("div",{className:"txt",children:"\uc544\uc9c1 \uc800\uc7a5\ub41c \ud034\uc988 \uacb0\uacfc\uac00 \uc5c6\uc5b4\uc694."})}):null]})};var X,$=Object(l.a)(Z||(Z=Object(s.a)(["\n    display: flex;\n    font-size: 21px;\n    margin-bottom: 20px;\n    cursor: pointer;\n    box-shadow: var(--shadow-1);\n    transition: .2s;\n    .info {\n        display: flex;\n        flex-direction: column;\n        justify-content: space-evenly;\n        background-color: var(--color-dark-navy);\n        width: 400px;\n        > div {\n            padding-left: 15px;\n            margin-left: 20px;\n            border-left: 3px solid var(--color-blue);\n        }\n    }\n    > .chart {\n        width: 140px;\n        background-color: var(--color-light-black);\n    }\n    &:hover {\n        box-shadow: 0 0 0 2px var(--color-dark-blue);\n    }\n\n    @media screen and (max-width: 800px){\n        > .info {\n            font-size: 19px;\n            width: 300px;\n        }\n    }\n"]))),nn=function(n){var t=n.resultList,e=n.resultDate,i=n.resultTime,a=n.category,c=n.onClickCard,r=i.split(":").map((function(n){return Number(n)}));return Object(p.c)("div",{css:$,onClick:function(){c&&c({resultList:t,resultDate:e,resultTime:i,category:a})},children:[Object(p.c)("div",{className:"info",children:[Object(p.b)("div",{className:"date",children:e}),Object(p.b)("div",{className:"cate",children:a}),Object(p.b)("div",{className:"time",children:"".concat(r[0],"\ubd84 ").concat(r[1],"\ucd08")})]}),Object(p.b)("div",{className:"chart",children:Object(p.b)(Nn,{list:t,showLabel:!1})})]})},tn=e(73);var en,an=Object(l.a)(X||(X=Object(s.a)(["\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    background-color: rgb(57 57 57);\n    padding: 0 20px 20px 20px;\n    border-radius: var(--radius-2);\n    box-shadow: 0 0 20px -5px black;\n    z-index: 11;\n    > .header {\n        height: 50px;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        svg {\n            cursor: pointer;\n            margin-top: 10px;\n        }\n    }\n    > .content {\n        height: calc(100% - 50px);\n    }\n\n    @media screen and (max-width: 800px){\n        width: calc(100% - 100px) !important;\n    }\n"]))),cn=function(n){var t=n.width,e=void 0===t?"50%":t,i=n.height,a=void 0===i?"50%":i,c=n.onClose,r=n.children;return Object(p.c)(p.a,{children:[Object(p.c)("div",{css:an,style:{width:e,height:a},children:[Object(p.b)("div",{className:"header",children:Object(p.b)(tn.a,{size:"50",color:"white",onClick:function(){c()}})}),Object(p.b)("div",{className:"content",children:r})]}),Object(p.b)("div",{className:"modal"})]})};var rn=Object(l.a)(en||(en=Object(s.a)(["\n    position: relative;\n    .tooltip-text {\n        z-index: 1;\n        position: absolute;\n        top: 0;\n        left: 50%;\n        transform: translate(-50%, calc(-100% - 14px));\n        display: none;\n        width: fit-content;\n        font-size: 12px;\n        color: white;\n        padding: 3px 10px;\n        background-color: var(--color-blue);\n        border-radius: var(--radius-2);\n    }\n    .triangle {\n        z-index: 2;\n        position: absolute;\n        top: 0;\n        left: 50%;\n        transform: translate(-50px, calc(-50% - 14px)) rotate(45deg);\n        display: none;\n        width: 7px;\n        height: 7px;\n        background-color: var(--color-blue);\n    }\n    &:hover {\n        .tooltip-text, .triangle {\n            display: unset;\n        }\n    }\n"]))),on=function(n){var t=n.text,e=n.children;return Object(p.c)("div",{css:rn,children:[e,Object(p.b)("div",{className:"tooltip-text pos",children:t}),Object(p.b)("div",{className:"triangle pos"})]})},sn="quizList/SET_QUIZ_LIST",ln="quizList/ADD_RESULT",dn="quizList/RESET_RESULT",bn="quizList/SET_RESULT_TIME",un="quizList/SET_RESULT_DATE",hn="quizList/UPDATE_OPINION",pn={quizList:[],resultInfo:{resultList:[],resultTime:"00:00.0",resultDate:""}};var fn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pn,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case sn:return Object(u.a)(Object(u.a)({},n),{},{quizList:t.payload.slice()});case ln:return Object(u.a)(Object(u.a)({},n),{},{resultInfo:Object(u.a)(Object(u.a)({},n.resultInfo),{},{resultList:n.resultInfo.resultList.concat(Object(u.a)({},t.payload))})});case dn:return Object(u.a)(Object(u.a)({},n),{},{resultInfo:{resultTime:"00:00.0",resultList:[],resultDate:""}});case bn:return Object(u.a)(Object(u.a)({},n),{},{resultInfo:Object(u.a)(Object(u.a)({},n.resultInfo),{},{resultTime:t.payload})});case un:return Object(u.a)(Object(u.a)({},n),{},{resultInfo:Object(u.a)(Object(u.a)({},n.resultInfo),{},{resultDate:t.payload})});case hn:return Object(u.a)(Object(u.a)({},n),{},{resultInfo:Object(u.a)(Object(u.a)({},n.resultInfo),{},{resultList:t.payload})});default:return n}},mn="app/SHOW_CONFIRM",xn="app/SHOW_TOAST",jn=function(n){return{type:mn,payload:n}},vn=function(n){return{type:xn,payload:n}},On={confirmInfo:{msg:"",show:!1,confirmCallback:void 0},toastInfo:{msg:"",show:!1,type:void 0}};var gn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:On,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case mn:return Object(u.a)(Object(u.a)({},n),{},{confirmInfo:{msg:t.payload.msg||"",show:t.payload.show,confirmCallback:t.payload.show?t.payload.confirmCallback:void 0}});case xn:return Object(u.a)(Object(u.a)({},n),{},{toastInfo:{msg:t.payload.msg||"",show:t.payload.show,type:t.payload.show?t.payload.type:void 0}});default:return n}},wn=e(14);var yn=function(n){var t=n.onQuizFinished,e=n.onLastSelected,i=Object(b.b)(),c=Object(b.c)((function(n){return n.quizList})).quizList;return Object(a.useEffect)((function(){return i({type:dn,payload:null}),function(){i(vn({show:!1}))}}),[]),Object(wn.jsx)(x,{quizList:c,onSelected:function(n,t){i(vn({msg:n.correct?"\uc815\ub2f5!":"\uc624\ub2f5..",show:!0,type:n.correct?"o":"x"})),i({type:ln,payload:n}),t&&e()},onFinished:function(){t()},onNext:function(){i(vn({show:!1}))}})};var Nn=function(n){var t=n.list,e=n.showLabel,i=Object(b.c)((function(n){return n.quizList.resultInfo})).resultList,a=(i=t||i).reduce((function(n,t){return t.correct?n+1:n}),0),c=i.length-a,r=[{x:""+a,y:a,name:"\uc815\ub2f5"},{x:""+c,y:c,name:"\uc624\ub2f5"}];return Object(wn.jsx)(U,{dataList:r,colorList:["#008cff","#ff3e3e"],showLabel:e})};var kn=function(n){var t=n.info,e=Object(b.c)((function(n){return n.quizList})),i=t||e.resultInfo,a=i.resultList,c=i.resultTime,r=i.resultDate,o=t?t.category:e.quizList.length>0?e.quizList[0].category:"",s=Object(b.b)(),l=function(){var n="quiz-"+r.split(" ").join("-"),t={resultList:a,resultTime:c,resultDate:r,category:o};sessionStorage.setItem(n,JSON.stringify(t)),s(vn({msg:"\uc800\uc7a5 \ub418\uc5c8\uc2b5\ub2c8\ub2e4!",show:!0}))};return Object(wn.jsx)(A,{resultList:a,onSave:function(){s(jn({msg:t?"\ub0b4\uc6a9\uc744 \uc218\uc815\ud560\uae4c\uc694?":"\uacb0\uacfc\ub97c \uc800\uc7a5\ud560\uae4c\uc694?",show:!0,confirmCallback:l}))},onOpinionChanged:function(n,t){console.log(a);var e=a.map((function(e,i){return e.opinion=i===t?n:e.opinion,e}));s({type:hn,payload:e})}})};var zn=function(){var n=Object(b.b)(),t=Object(b.c)((function(n){return n.app.confirmInfo})),e=t.msg,i=t.confirmCallback;return Object(wn.jsx)(V,{onClickButton:function(t){"Y"===t.currentTarget.dataset.type&&i&&i(),n(jn({show:!1}))},msg:e})};var Ln=function(){var n=Object(b.b)(),t=Object(b.c)((function(n){return n.app.toastInfo})),e=t.msg,i=t.type;return Object(wn.jsx)(S,{msg:e,type:i,onVanish:function(){n(vn({show:!1}))}})};var Tn,qn=function(n){var t=n.onClickCard,e=Object(b.c)((function(n){return n.quizHistoryList})).historyList;return e.sort((function(n,t){return g.localeStringToTime(t.resultDate)-g.localeStringToTime(n.resultDate)})),Object(wn.jsx)(K,{historyList:e,onClickCard:t})};var Cn,In=Object(l.a)(Tn||(Tn=Object(s.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    min-height: 100vh;\n    .quiz-wrapper {\n        > .header {\n            display: flex;\n            align-items: center;\n            justify-content: space-between;\n            height: 70px;\n            width: 100%;\n            transition: .3s;\n        }\n    }\n\n    @media screen and (max-width: 800px) {\n        .quiz-wrapper {\n            > .header {\n                flex-direction: column;\n                align-items: flex-start;\n                height: 100px;\n                transform: translateY(-20px);\n            }\n        }\n    }\n"]))),Sn=function(){var n=Object(d.f)(),t=Object(b.b)(),e=Object(a.useRef)(0),i=Object(a.useState)({start:!1,startTimer:!1,readyTime:3}),c=Object(h.a)(i,2),r=c[0],o=c[1];return Object(a.useEffect)((function(){return e.current=window.setInterval((function(){o((function(n){return n.readyTime<0&&clearInterval(e.current),{startTimer:n.readyTime<1,start:n.readyTime<1,readyTime:n.readyTime-1}}))}),1e3),function(){clearInterval(e.current)}}),[]),Object(p.b)("div",{css:In,children:r.start?Object(p.c)("div",{className:"quiz-wrapper",children:[Object(p.c)("div",{className:"header",children:[Object(p.b)(T,{startTimer:r.startTimer,getCurrentTime:function(n){t({type:bn,payload:n}),t(function(n){return{type:un,payload:n}}((new Date).toLocaleString()))}}),Object(p.b)("div",{className:"button",onClick:function(){n.push("/")},children:"\ucc98\uc74c\uc73c\ub85c"})]}),Object(p.b)(yn,{onQuizFinished:function(){n.push("/result")},onLastSelected:function(){o(Object(u.a)(Object(u.a)({},r),{},{startTimer:!1}))}})]}):Object(p.b)(_,{msg:"".concat(r.readyTime,"\ucd08 \ud6c4 \uc2dc\uc791!")})})};var Dn,En=Object(l.a)(Cn||(Cn=Object(s.a)(["\n    width: 400px;\n    height: 350px;\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    text-align: center;\n    color: white;\n    .txt {\n        font-size: 25px;\n    }\n    svg {\n        margin: 30px 0;   \n        animation-name: upDown;\n        animation-duration: 2s;\n        animation-timing-function: ease;\n        animation-iteration-count: infinite;\n    }\n    .btn-wrapper {\n        width: 100%;\n        .menu-btn {\n            margin-bottom: 15px;\n            width: 100%;\n            height: 55px;\n            line-height: 55px;\n            font-size: 28px;\n            box-sizing: content-box;\n            border-radius: var(--radius-2);\n            background-color: var(--color-orange);\n            color: white;\n            font-weight: bold;\n            cursor: pointer;\n            transition: .3s;\n            &:hover {\n                transform: translateY(-3px);\n                box-shadow: var(--shadow-3);\n            }\n        }\n    }\n    @keyframes upDown {\n        0% {transform: translateY(-13px);}\n        50% {transform: translateY(13px);}\n        100% {transform: translateY(-13px);}\n    }\n"]))),_n=function(){var n=Object(d.f)(),t=Object(b.b)(),e=function(){var n=Object(O.a)(v.a.mark((function n(){var e;return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,g.request("mock.json");case 2:e=n.sent,t((i=e[g.rand(5)].results,{type:sn,payload:i}));case 4:case"end":return n.stop()}var i}),n)})));return function(){return n.apply(this,arguments)}}();Object(a.useEffect)((function(){e()}),[]);var i=function(t){"quiz"===t.currentTarget.dataset.type?n.push("/main"):n.push("/history")};return Object(p.c)("div",{css:En,children:[Object(p.b)("div",{className:"txt",children:"\ud074\ub9ad\ud558\uc5ec \ud034\uc988\ub97c \ud480\uc5b4\ubcf4\uc138\uc694!"}),Object(p.b)(tn.b,{size:"40"}),Object(p.c)("div",{className:"btn-wrapper",children:[Object(p.b)(on,{text:"\ud034\uc988\ub294 5\uac00\uc9c0 \uce74\ud14c\uace0\ub9ac\uc911 \ud558\ub098\uac00 \uc120\ud0dd\ub429\ub2c8\ub2e4.",children:Object(p.b)("div",{className:"menu-btn","data-type":"quiz",onClick:i,children:"\ud034\uc988 \ud480\uae30"})}),Object(p.b)(on,{text:"\ud034\uc988\ub97c \ud480\uace0 \uc800\uc7a5\ud55c \uacb0\uacfc\ub97c \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4.",children:Object(p.b)("div",{className:"menu-btn","data-type":"hist",onClick:i,children:"\uae30\ub85d \ubcf4\uae30"})})]})]})};var Fn,Rn=Object(l.a)(Dn||(Dn=Object(s.a)(["\n    position: fixed;\n    top: 40%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    font-weight: bold;\n    font-size: 50px;\n    text-align: center;\n    color: white;\n    .btn-wrapper {\n        width: 100%;\n        display: flex;\n        justify-content: center;\n        .button {\n            margin-top: 30px;\n        }\n    }\n    .txt {\n        min-width: 390px;\n    }\n"]))),Yn=function(){var n=Object(d.f)();return Object(p.c)("div",{css:Rn,children:[Object(p.b)("div",{className:"txt",children:"\uc798\ubabb\ub41c \uacbd\ub85c\uc5d0\uc694!"}),Object(p.b)("div",{className:"btn-wrapper",children:Object(p.b)("div",{className:"button",onClick:function(){n.goBack()},children:"\uc774\uc804 \ud398\uc774\uc9c0"})})]})};var Un,Mn=Object(l.a)(Fn||(Fn=Object(s.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    min-height: 100vh;\n    color: white;\n    overflow-x: hidden;\n    > .wrapper {\n        width: 900px;\n        height: 600px;\n        > .header {\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n            transform: translateY(-5px);\n            font-size: 35px;\n            font-weight: bold;\n            transition: .3s;\n            > .txt span {\n                font-size: 18px;\n                margin-left: 20px;\n            }\n            > .btn-wrapper {\n                display: flex;\n                .button {\n                    margin-left: 15px;\n                }\n            }\n        }\n        > .content {\n            display: flex;\n            box-shadow: var(--shadow-2);\n            transition: .3s;\n            > .result-info {\n                display: flex;\n                flex-direction: column;\n                justify-content: space-between;\n                width: 400px;\n                font-size: 25px;\n                font-weight: bold;\n                padding: 40px 0 0 40px;\n                background-color: var(--color-dark-navy);\n                > .info {\n                    position: relative;\n                    margin-bottom: 50px;\n                    padding-left: 20px;\n                    border-left: 5px solid var(--color-blue);\n                    animation-name: showUp;\n                    animation-duration: 1s;\n                    animation-timing-function: ease;\n                    .desc {\n                        display: flex;\n                        align-items: center;\n                    }\n                }\n            }\n            > .chart-wrapper {\n                position: relative;\n                flex-grow: 1;\n                animation-name: showUp;\n                animation-duration: 1s;\n                animation-timing-function: ease;\n            }\n        }\n    }\n\n    @media screen and (max-width: 800px) {\n        align-items: unset;\n        .wrapper {\n            > .header {\n                flex-direction: column;\n                align-items: flex-start;\n                padding: 10px;\n                > .txt {\n                    margin-bottom: 10px;\n                }\n            }\n        }\n        .content {\n            flex-direction: column;\n            > .result-info {\n                width: 100% !important;\n                font-size: 20px !important;\n                > .info {\n                    margin-bottom: 30px !important;\n                }\n            }\n            > .chart-wrapper {\n                display: flex;\n                justify-content: center;\n            }\n        }\n    }\n"]))),Bn=function(){var n=Object(d.f)(),t=Object(b.c)((function(n){return n.quizList})),e=t.resultInfo.resultTime.split(":").map((function(n){return Number(n)})),i=t.resultInfo.resultDate;return Object(p.b)("div",{css:Mn,children:Object(p.c)("div",{className:"wrapper",children:[Object(p.c)("div",{className:"header",children:[Object(p.c)("div",{className:"txt",children:["\ud83d\udccc\uacb0\uacfc",Object(p.b)("span",{children:i})]}),Object(p.c)("div",{className:"btn-wrapper",children:[Object(p.b)("div",{className:"button",onClick:function(){n.push("/main")},children:"\ub2e4\uc2dc\ud480\uae30"}),Object(p.b)("div",{className:"button",onClick:function(){n.push("/")},children:"\ucc98\uc74c\uc73c\ub85c"}),Object(p.b)(on,{text:"\uc624\ub2f5\ub178\ud2b8\ub97c \uc791\uc131\ud558\uace0 \uae30\ub85d\uc744 \ub0a8\uaca8\ubcf4\uc138\uc694.",children:Object(p.b)("div",{className:"button",onClick:function(){n.push("/note")},children:"\uc624\ub2f5\ub178\ud2b8 \uc791\uc131"})})]})]}),Object(p.c)("div",{className:"content",children:[Object(p.c)("div",{className:"result-info",children:[Object(p.c)("div",{className:"info",children:[Object(p.b)("div",{className:"desc",children:"\uc18c\uc694\uc2dc\uac04"}),Object(p.b)("div",{className:"val",children:"".concat(e[0],"\ubd84 ").concat(e[1],"\ucd08")})]}),Object(p.c)("div",{className:"info",children:[Object(p.b)("div",{className:"desc",children:"\uce74\ud14c\uace0\ub9ac"}),Object(p.b)("div",{className:"val",children:t.quizList[0]&&t.quizList[0].category})]}),Object(p.c)("div",{className:"info",children:[Object(p.b)("div",{className:"desc",children:"\ub09c\uc774\ub3c4"}),Object(p.b)("div",{className:"val",children:t.quizList[0]&&t.quizList[0].difficulty})]}),Object(p.c)("div",{className:"info",children:[Object(p.b)("div",{className:"desc",children:"\ucd1d \ubb38\uc81c\uc218"}),Object(p.b)("div",{className:"val",children:t.resultInfo.resultList.length})]})]}),Object(p.b)("div",{className:"chart-wrapper",children:Object(p.b)(Nn,{})})]})]})})};var An=Object(l.a)(Un||(Un=Object(s.a)(["\n    position: relative;\n    display: flex;\n    justify-content: center;\n    min-height: 100vh;\n    padding-top: 30px;\n    > .wrapper {\n        width: 800px;\n        height: calc(100vh - 50px);\n        color: white;\n        > .header {\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n            transform: translateY(-5px);\n            > .txt {\n                font-size: 30px;\n                font-weight: bold;\n            }\n        }\n        > .content {\n            box-shadow: var(--shadow-1);\n            width: 100%;\n            height: calc(100% - 80px);\n            padding: 20px;\n        }\n    }\n\n    @media screen and (max-width: 800px) {\n        > .wrapper {\n            > .header {\n                flex-direction: column;\n                align-items: flex-start;\n                height: 90px;\n                margin-bottom: 10px;\n                > .button {\n\n                }\n            }\n        }\n    }\n"]))),Hn=function(){var n=Object(d.f)();return Object(p.b)("div",{css:An,children:Object(p.c)("div",{className:"wrapper",children:[Object(p.c)("div",{className:"header",children:[Object(p.b)("div",{className:"txt",children:"\ud83d\udcd5\uc624\ub2f5\ub178\ud2b8"}),Object(p.b)("div",{className:"button",onClick:function(){n.goBack()},children:"\uc774\uc804\uc73c\ub85c"})]}),Object(p.b)("div",{className:"content",children:Object(p.b)(kn,{})})]})})},Jn="quizHistoryList/SET_HISTORY_LIST",Pn={historyList:[]};var Qn,Wn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Pn,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Jn:return Object(u.a)(Object(u.a)({},n),{},{historyList:t.payload.slice()});default:return n}};var Vn,Zn=Object(l.a)(Qn||(Qn=Object(s.a)(["\n    display: flex;\n    justify-content: center;\n    min-height: 100vh;\n    padding: 20px 0;\n    color: white;\n    > .wrapper {\n        width: 900px;\n        height: calc(100vh - 50px);\n        > .header {\n            display: flex;\n            justify-content: space-between;\n            margin-bottom: 5px;\n            .txt {\n                font-size: 30px;\n                font-weight: bold;\n            }\n        }\n        > .content {\n            display: flex;\n            justify-content: center;\n            height: calc(100% - 50px);\n            box-shadow: 0 10px 30px -7px black;\n            overflow: auto;\n        }\n    }\n\n    @media screen and (max-width: 800px){\n        > .wrapper {\n            width: unset;\n            height: calc(100vh - 85px);\n            > .header {\n                flex-direction: column;\n                height: 90px;\n                margin-bottom: 10px;\n            }\n        }\n    }\n"]))),Gn=function(){var n=Object(d.f)(),t=Object(b.b)(),e=Object(a.useState)({show:!1,hisInfo:void 0}),i=Object(h.a)(e,2),c=i[0],r=i[1],o=function(){var n=[];Object.keys(sessionStorage).forEach((function(t){if(-1!==t.indexOf("quiz-")){var e=sessionStorage.getItem(t);n.push(JSON.parse(e))}})),t({type:Jn,payload:n})};return Object(a.useEffect)((function(){o()}),[]),Object(p.c)("div",{css:Zn,children:[Object(p.c)("div",{className:"wrapper",children:[Object(p.c)("div",{className:"header",children:[Object(p.b)("div",{className:"txt",children:"\ud83d\udcd1\ud034\uc988\uc774\ub825"}),Object(p.b)("div",{className:"button",onClick:function(){n.goBack()},children:"\uc774\uc804\uc73c\ub85c"})]}),Object(p.b)("div",{className:"content",children:Object(p.b)(qn,{onClickCard:function(n){var t=n.resultList,e=n.resultTime,i=n.resultDate,a=n.category;r({show:!0,hisInfo:{resultList:t.slice(),resultTime:e,resultDate:i,category:a}})}})})]}),c.show?Object(p.b)(cn,{width:"600px",height:"80%",onClose:function(){r({show:!1,hisInfo:void 0})},children:Object(p.b)(kn,{info:c.hisInfo})}):null]})};var Kn=Object(l.a)(Vn||(Vn=Object(s.a)(["\n  background-color: #282c34;\n  min-height: 100vh;\n"]))),Xn=function(){var n=Object(d.f)(),t=Object(b.c)((function(n){return n})),e=t.app,i=e.confirmInfo,c=e.toastInfo,r=t.quizList.quizList;return Object(a.useEffect)((function(){var t=window.location.pathname.replace("/quiz-deploy","");"/main"!==t&&"/result"!==t&&"/note"!==t&&"/history"!==t||0===r.length&&n.push("/")}),[]),Object(p.c)("div",{css:Kn,children:[Object(p.c)(d.c,{children:[Object(p.b)(d.a,{path:"/",exact:!0,render:function(){return Object(p.b)(_n,{})}}),Object(p.b)(d.a,{path:"/main",render:function(){return Object(p.b)(Sn,{})}}),Object(p.b)(d.a,{path:"/result",render:function(){return Object(p.b)(Bn,{})}}),Object(p.b)(d.a,{path:"/note",render:function(){return Object(p.b)(Hn,{})}}),Object(p.b)(d.a,{path:"/history",render:function(){return Object(p.b)(Gn,{})}}),Object(p.b)(d.a,{component:Yn})]}),i.show?Object(p.b)(zn,{}):null,c.show?Object(p.b)(Ln,{}):null]})},$n=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,278)).then((function(t){var e=t.getCLS,i=t.getFID,a=t.getFCP,c=t.getLCP,r=t.getTTFB;e(n),i(n),a(n),c(n),r(n)}))},nt=e(74),tt=Object(nt.a)({app:gn,quizList:fn,quizHistoryList:Wn}),et=e(29),it=Object(nt.b)(tt);o.a.render(Object(wn.jsx)(c.a.StrictMode,{children:Object(wn.jsx)(et.a,{basename:"/quiz-deploy",children:Object(wn.jsx)(b.a,{store:it,children:Object(wn.jsx)(Xn,{})})})}),document.getElementById("root")),$n()}},[[273,1,2]]]);
//# sourceMappingURL=main.25a83d83.chunk.js.map