import{_ as N}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{c as V,w as e,r as s,o as a,a as o,b as r,d as n,f as B,g as C,F as P,t as h}from"./index-DZiq-qe7.js";const j={__name:"ConditionsView",setup(F){const p=[{symbol:"==",title:"Рівність",description:"Перевіряє, чи два значення рівні"},{symbol:"!=",title:"Нерівність",description:"Перевіряє, чи два значення не рівні"},{symbol:"<",title:"Менше",description:"Перевіряє, чи перше значення менше за друге"},{symbol:">",title:"Більше",description:"Перевіряє, чи перше значення більше за друге"},{symbol:"<=",title:"Менше або рівне",description:"Перевіряє, чи перше значення менше або рівне другому"},{symbol:">=",title:"Більше або рівне",description:"Перевіряє, чи перше значення більше або рівне другому"},{symbol:"is",title:"Ідентичність",description:"Перевіряє, чи два об'єкти є тим самим об'єктом в пам'яті"},{symbol:"in",title:"Входження",description:"Перевіряє, чи елемент входить до послідовності"}];return(z,t)=>{const d=s("v-card-title"),l=s("v-sheet"),m=s("v-chip"),u=s("v-list-item"),_=s("v-list"),c=s("v-alert"),f=s("v-card-text"),b=s("v-btn"),v=s("v-card-actions"),y=s("v-card"),g=s("v-col"),x=s("v-row"),w=s("v-container");return a(),V(w,null,{default:e(()=>[o(x,{justify:"center"},{default:e(()=>[o(g,{cols:"12",md:"10"},{default:e(()=>[o(y,{class:"mx-auto",elevation:"2"},{default:e(()=>[o(d,{class:"text-h4 font-weight-bold text-center py-4"},{default:e(()=>t[0]||(t[0]=[r(" Умовні конструкції ")])),_:1}),o(f,{class:"text-body-1"},{default:e(()=>[t[6]||(t[6]=n("h2",{class:"text-h5 mb-4"},"if-elif-else",-1)),t[7]||(t[7]=n("p",{class:"mb-4"},"Умовні конструкції дозволяють виконувати різні блоки коду залежно від умов. В Python для цього використовується конструкція if-elif-else:",-1)),o(l,{color:"grey-lighten-4",class:"pa-4 mb-4 rounded"},{default:e(()=>t[1]||(t[1]=[n("pre",null,[n("code",null,`age = 18

if age < 18:
    print("Ви неповнолітній")
elif age == 18:
    print("Вам щойно виповнилось 18!")
else:
    print("Ви повнолітній")`)],-1)])),_:1}),t[8]||(t[8]=n("h2",{class:"text-h5 mb-4"},"Оператори порівняння",-1)),o(_,null,{default:e(()=>[(a(),B(P,null,C(p,(i,k)=>o(u,{key:k,title:i.title,subtitle:i.description},{prepend:e(()=>[o(m,{color:"primary",variant:"flat"},{default:e(()=>[r(h(i.symbol),1)]),_:2},1024)]),_:2},1032,["title","subtitle"])),64))]),_:1}),t[9]||(t[9]=n("h2",{class:"text-h5 my-4"},"Логічні оператори",-1)),o(l,{color:"grey-lighten-4",class:"pa-4 mb-4 rounded"},{default:e(()=>t[2]||(t[2]=[n("pre",null,[n("code",null,`# and - логічне "І"
if age >= 18 and has_passport:
    print("Можете голосувати")

# or - логічне "АБО"
if is_weekend or is_holiday:
    print("Можна відпочивати")

# not - логічне "НЕ"
if not is_working:
    print("Зараз не робочий час")`)],-1)])),_:1}),t[10]||(t[10]=n("h2",{class:"text-h5 mb-4"},"Тернарний оператор",-1)),t[11]||(t[11]=n("p",{class:"mb-4"},"Python підтримує тернарний оператор - скорочену форму запису умовної конструкції:",-1)),o(l,{color:"grey-lighten-4",class:"pa-4 mb-4 rounded"},{default:e(()=>t[3]||(t[3]=[n("pre",null,[n("code",null,`# Звичайний запис
if age >= 18:
    status = "повнолітній"
else:
    status = "неповнолітній"

# Тернарний оператор
status = "повнолітній" if age >= 18 else "неповнолітній"`)],-1)])),_:1}),t[12]||(t[12]=n("h2",{class:"text-h5 mb-4"},"Вкладені умови",-1)),t[13]||(t[13]=n("p",{class:"mb-4"},"Умовні конструкції можуть бути вкладеними одна в одну:",-1)),o(l,{color:"grey-lighten-4",class:"pa-4 mb-4 rounded"},{default:e(()=>t[4]||(t[4]=[n("pre",null,[n("code",null,`if age >= 18:
    if has_passport:
        if not is_banned:
            print("Можете голосувати")
        else:
            print("Ви в чорному списку")
    else:
        print("Потрібен паспорт")
else:
    print("Ви надто молоді")`)],-1)])),_:1}),o(c,{color:"info",icon:"mdi-lightbulb",title:"Порада",text:"Намагайтеся уникати глибокого вкладення умов - це ускладнює читання коду. Краще розбивати складну логіку на окремі функції або використовувати ранні повернення.",class:"mb-4"}),t[14]||(t[14]=n("h2",{class:"text-h5 mb-4"},"Перевірка на наявність значення",-1)),o(l,{color:"grey-lighten-4",class:"pa-4 mb-4 rounded"},{default:e(()=>t[5]||(t[5]=[n("pre",null,[n("code",null,`# Перевірка на None
if value is None:
    print("Значення не встановлено")

# Перевірка на пустоту
if not text:  # працює для рядків, списків, словників
    print("Пусте значення")

# Перевірка на входження
if "python" in languages:
    print("Python знайдено!")

# Перевірка типу
if isinstance(value, str):
    print("Це рядок")`)],-1)])),_:1})]),_:1}),o(v,{class:"justify-center pa-4"},{default:e(()=>[o(b,{color:"primary",size:"large",to:"/loops","prepend-icon":"mdi-arrow-right"},{default:e(()=>t[15]||(t[15]=[r(" Перейти до циклів ")])),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}},I=N(j,[["__scopeId","data-v-cf22d97e"]]);export{I as default};
