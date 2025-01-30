import{_ as k}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{c as z,w as e,r as o,o as P,a as t,b as i,d as l}from"./index-DM-fA1X4.js";const V={};function q(B,n){const d=o("v-card-title"),r=o("v-sheet"),s=o("v-expansion-panel-title"),u=o("v-expansion-panel-text"),a=o("v-expansion-panel"),f=o("v-expansion-panels"),p=o("v-list-item"),m=o("v-list"),_=o("v-alert"),v=o("v-card-text"),c=o("v-btn"),b=o("v-card-actions"),g=o("v-card"),x=o("v-col"),y=o("v-row"),w=o("v-container");return P(),z(w,null,{default:e(()=>[t(y,{justify:"center"},{default:e(()=>[t(x,{cols:"12",md:"10"},{default:e(()=>[t(g,{class:"mx-auto",elevation:"2"},{default:e(()=>[t(d,{class:"text-h4 font-weight-bold text-center py-4"},{default:e(()=>n[0]||(n[0]=[i(" Цикли в Python ")])),_:1}),t(v,{class:"text-body-1"},{default:e(()=>[n[14]||(n[14]=l("h2",{class:"text-h5 mb-4"},"Цикл for",-1)),n[15]||(n[15]=l("p",{class:"mb-4"},"Цикл for в Python використовується для ітерації по послідовностях (списках, кортежах, рядках тощо) або інших ітерованих об'єктах:",-1)),t(r,{color:"grey-lighten-4",class:"pa-4 mb-4 rounded"},{default:e(()=>n[1]||(n[1]=[l("pre",null,[l("code",null,`# Ітерація по списку
fruits = ["яблуко", "банан", "апельсин"]
for fruit in fruits:
    print(fruit)

# Ітерація по діапазону чисел
for i in range(5):  # 0, 1, 2, 3, 4
    print(i)

# Ітерація по рядку
for char in "Python":
    print(char)

# Ітерація з індексом
for index, value in enumerate(fruits):
    print(f"Індекс {index}: {value}")`)],-1)])),_:1}),n[16]||(n[16]=l("h2",{class:"text-h5 mb-4"},"Цикл while",-1)),n[17]||(n[17]=l("p",{class:"mb-4"},"Цикл while виконується доти, доки умова істинна:",-1)),t(r,{color:"grey-lighten-4",class:"pa-4 mb-4 rounded"},{default:e(()=>n[2]||(n[2]=[l("pre",null,[l("code",null,`# Простий приклад
count = 0
while count < 5:
    print(count)
    count += 1

# Нескінченний цикл з break
while True:
    response = input("Введіть 'вихід' для завершення: ")
    if response == "вихід":
        break

# Цикл з умовою та лічильником
number = 1
while number <= 10:
    if number % 2 == 0:
        print(f"{number} - парне число")
    number += 1`)],-1)])),_:1}),n[18]||(n[18]=l("h2",{class:"text-h5 mb-4"},"Керування циклами",-1)),t(f,null,{default:e(()=>[t(a,null,{default:e(()=>[t(s,null,{default:e(()=>n[3]||(n[3]=[i(" break ")])),_:1}),t(u,null,{default:e(()=>[n[5]||(n[5]=l("p",null,"Оператор break повністю припиняє виконання циклу:",-1)),t(r,{color:"grey-lighten-4",class:"pa-4 mt-2 rounded"},{default:e(()=>n[4]||(n[4]=[l("pre",null,[l("code",null,`for i in range(10):
    if i == 5:
        break  # вихід з циклу при i = 5
    print(i)`)],-1)])),_:1})]),_:1})]),_:1}),t(a,null,{default:e(()=>[t(s,null,{default:e(()=>n[6]||(n[6]=[i(" continue ")])),_:1}),t(u,null,{default:e(()=>[n[8]||(n[8]=l("p",null,"Оператор continue пропускає решту коду в поточній ітерації і переходить до наступної:",-1)),t(r,{color:"grey-lighten-4",class:"pa-4 mt-2 rounded"},{default:e(()=>n[7]||(n[7]=[l("pre",null,[l("code",null,`for i in range(5):
    if i == 2:
        continue  # пропуск ітерації при i = 2
    print(i)`)],-1)])),_:1})]),_:1})]),_:1}),t(a,null,{default:e(()=>[t(s,null,{default:e(()=>n[9]||(n[9]=[i(" else в циклах ")])),_:1}),t(u,null,{default:e(()=>[n[11]||(n[11]=l("p",null,"Блок else в циклі виконується, якщо цикл завершився нормально (без break):",-1)),t(r,{color:"grey-lighten-4",class:"pa-4 mt-2 rounded"},{default:e(()=>n[10]||(n[10]=[l("pre",null,[l("code",null,`for i in range(5):
    if i == 10:
        break
else:
    print("Цикл завершився нормально")`)],-1)])),_:1})]),_:1})]),_:1})]),_:1}),n[19]||(n[19]=l("h2",{class:"text-h5 my-4"},"Корисні функції для циклів",-1)),t(m,null,{default:e(()=>[t(p,{"prepend-icon":"mdi-function",title:"range()",subtitle:"Створює послідовність чисел: range(start, stop, step)"}),t(p,{"prepend-icon":"mdi-function",title:"enumerate()",subtitle:"Повертає пари (індекс, значення) для ітерованого об'єкта"}),t(p,{"prepend-icon":"mdi-function",title:"zip()",subtitle:"Об'єднує елементи з кількох послідовностей"})]),_:1}),t(r,{color:"grey-lighten-4",class:"pa-4 my-4 rounded"},{default:e(()=>n[12]||(n[12]=[l("pre",null,[l("code",null,`# Приклад використання zip()
names = ["Анна", "Петро", "Марія"]
ages = [25, 30, 22]

for name, age in zip(names, ages):
    print(f"{name} має {age} років")`)],-1)])),_:1}),t(_,{color:"info",icon:"mdi-lightbulb",title:"Порада",text:"У Python часто використовують генератори списків (list comprehension) замість простих циклів for - вони компактніші та часто більш читабельні",class:"mb-4"}),t(r,{color:"grey-lighten-4",class:"pa-4 mb-4 rounded"},{default:e(()=>n[13]||(n[13]=[l("pre",null,[l("code",null,`# Звичайний цикл
squares = []
for i in range(5):
    squares.append(i ** 2)

# Те саме з використанням генератора списків
squares = [i ** 2 for i in range(5)]`)],-1)])),_:1})]),_:1}),t(b,{class:"justify-center pa-4"},{default:e(()=>[t(c,{color:"primary",size:"large",to:"/functions","prepend-icon":"mdi-arrow-right"},{default:e(()=>n[20]||(n[20]=[i(" Перейти до функцій ")])),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}const C=k(V,[["render",q],["__scopeId","data-v-3f5e1794"]]);export{C as default};
