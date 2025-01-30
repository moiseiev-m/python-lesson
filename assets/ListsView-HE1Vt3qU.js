import{_ as j}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{e as z,c as C,w as t,r as o,o as c,a as e,b as i,d as s,f as F,g as U,F as D,t as E}from"./index-DZiq-qe7.js";const G={__name:"ListsView",setup(I){const r=z("lists"),_=[{icon:"mdi-plus-circle",name:"append()",description:"Додає елемент в кінець списку"},{icon:"mdi-plus-box",name:"insert()",description:"Вставляє елемент за вказаним індексом"},{icon:"mdi-minus-circle",name:"remove()",description:"Видаляє перше входження вказаного значення"},{icon:"mdi-pop",name:"pop()",description:"Видаляє і повертає останній елемент (або елемент за вказаним індексом)"},{icon:"mdi-sort",name:"sort()",description:"Сортує список на місці"},{icon:"mdi-flip-horizontal",name:"reverse()",description:"Розвертає список на місці"},{icon:"mdi-eraser",name:"clear()",description:"Видаляє всі елементи зі списку"},{icon:"mdi-content-copy",name:"copy()",description:"Створює поверхневу копію списку"}];return(M,n)=>{const b=o("v-card-title"),u=o("v-tab"),v=o("v-tabs"),d=o("v-sheet"),f=o("v-icon"),m=o("v-list-item"),a=o("v-list"),p=o("v-window-item"),x=o("v-alert"),y=o("v-window"),g=o("v-card-text"),w=o("v-btn"),V=o("v-card-actions"),k=o("v-card"),B=o("v-col"),L=o("v-row"),T=o("v-container");return c(),C(T,null,{default:t(()=>[e(L,{justify:"center"},{default:t(()=>[e(B,{cols:"12",md:"10"},{default:t(()=>[e(k,{class:"mx-auto",elevation:"2"},{default:t(()=>[e(b,{class:"text-h4 font-weight-bold text-center py-4"},{default:t(()=>n[2]||(n[2]=[i(" Списки та кортежі ")])),_:1}),e(g,{class:"text-body-1"},{default:t(()=>[e(v,{modelValue:r.value,"onUpdate:modelValue":n[0]||(n[0]=l=>r.value=l),color:"primary"},{default:t(()=>[e(u,{value:"lists"},{default:t(()=>n[3]||(n[3]=[i("Списки")])),_:1}),e(u,{value:"tuples"},{default:t(()=>n[4]||(n[4]=[i("Кортежі")])),_:1})]),_:1},8,["modelValue"]),e(y,{modelValue:r.value,"onUpdate:modelValue":n[1]||(n[1]=l=>r.value=l),class:"mt-4"},{default:t(()=>[e(p,{value:"lists"},{default:t(()=>[n[7]||(n[7]=s("h2",{class:"text-h5 mb-4"},"Списки (Lists)",-1)),n[8]||(n[8]=s("p",{class:"mb-4"},"Списки - це впорядковані колекції об'єктів, які можуть змінюватися. Вони можуть містити елементи різних типів:",-1)),e(d,{color:"grey-lighten-4",class:"pa-4 mb-4 rounded"},{default:t(()=>n[5]||(n[5]=[s("pre",null,[s("code",null,`# Створення списків
numbers = [1, 2, 3, 4, 5]
mixed = [1, "hello", 3.14, True]
nested = [1, [2, 3], [4, 5, 6]]

# Доступ до елементів
first = numbers[0]      # перший елемент
last = numbers[-1]      # останній елемент
sub = numbers[1:4]      # зріз [2, 3, 4]

# Зміна елементів
numbers[0] = 10         # [10, 2, 3, 4, 5]
numbers.append(6)       # додати в кінець
numbers.insert(1, 1.5)  # вставити за індексом
numbers.remove(3)       # видалити значення
del numbers[0]         # видалити за індексом`)],-1)])),_:1}),n[9]||(n[9]=s("h3",{class:"text-h6 mb-3"},"Корисні методи списків",-1)),e(a,null,{default:t(()=>[(c(),F(D,null,U(_,(l,N)=>e(m,{key:N,title:l.name,subtitle:l.description},{prepend:t(()=>[e(f,null,{default:t(()=>[i(E(l.icon),1)]),_:2},1024)]),_:2},1032,["title","subtitle"])),64))]),_:1}),n[10]||(n[10]=s("h3",{class:"text-h6 my-4"},"Операції зі списками",-1)),e(d,{color:"grey-lighten-4",class:"pa-4 mb-4 rounded"},{default:t(()=>n[6]||(n[6]=[s("pre",null,[s("code",null,`# Конкатенація списків
list1 = [1, 2, 3]
list2 = [4, 5, 6]
combined = list1 + list2  # [1, 2, 3, 4, 5, 6]

# Повторення списку
repeated = list1 * 2    # [1, 2, 3, 1, 2, 3]

# Сортування
numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3]
numbers.sort()          # сортування за зростанням
numbers.sort(reverse=True)  # сортування за спаданням
sorted_numbers = sorted(numbers)  # створює новий відсортований список

# Пошук
index = numbers.index(5)  # перше входження числа 5
count = numbers.count(1)  # кількість входжень числа 1`)],-1)])),_:1})]),_:1}),e(p,{value:"tuples"},{default:t(()=>[n[13]||(n[13]=s("h2",{class:"text-h5 mb-4"},"Кортежі (Tuples)",-1)),n[14]||(n[14]=s("p",{class:"mb-4"},"Кортежі - це незмінні послідовності, схожі на списки. Вони використовуються для групування пов'язаних значень:",-1)),e(d,{color:"grey-lighten-4",class:"pa-4 mb-4 rounded"},{default:t(()=>n[11]||(n[11]=[s("pre",null,[s("code",null,`# Створення кортежів
point = (3, 4)
person = ("Іван", 25, "Київ")
single = (1,)  # кортеж з одного елемента

# Розпакування кортежів
x, y = point
name, age, city = person

# Використання в функціях
def get_coordinates():
    return (10, 20)

x, y = get_coordinates()`)],-1)])),_:1}),n[15]||(n[15]=s("h3",{class:"text-h6 mb-3"},"Переваги кортежів",-1)),e(a,null,{default:t(()=>[e(m,{"prepend-icon":"mdi-lock",title:"Незмінність",subtitle:"Елементи кортежу не можна змінити після створення"}),e(m,{"prepend-icon":"mdi-memory",title:"Ефективність",subtitle:"Кортежі займають менше пам'яті ніж списки"}),e(m,{"prepend-icon":"mdi-key",title:"Хешованість",subtitle:"Кортежі можна використовувати як ключі словників"})]),_:1}),n[16]||(n[16]=s("h3",{class:"text-h6 my-4"},"Методи кортежів",-1)),e(d,{color:"grey-lighten-4",class:"pa-4 mb-4 rounded"},{default:t(()=>n[12]||(n[12]=[s("pre",null,[s("code",null,`# Доступні методи
numbers = (1, 2, 2, 3, 4, 2)
count = numbers.count(2)    # кількість двійок
index = numbers.index(3)    # індекс першої трійки

# Перетворення
list_from_tuple = list(numbers)  # перетворення в список
tuple_from_list = tuple([1, 2, 3])  # перетворення списку в кортеж`)],-1)])),_:1}),e(x,{color:"info",icon:"mdi-lightbulb",title:"Коли використовувати?",text:"Використовуйте кортежі для даних, які не повинні змінюватися (наприклад, координати точки, RGB-кольори). Для даних, які потрібно модифікувати, використовуйте списки.",class:"mb-4"})]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(V,{class:"justify-center pa-4"},{default:t(()=>[e(w,{color:"primary",size:"large",to:"/dictionaries","prepend-icon":"mdi-arrow-right"},{default:t(()=>n[17]||(n[17]=[i(" Перейти до словників ")])),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}},q=j(G,[["__scopeId","data-v-c1df01bb"]]);export{q as default};
