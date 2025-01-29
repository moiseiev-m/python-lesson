import{_ as w}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{c as C,w as e,r as l,o as N,a as t,b as a,d as o}from"./index-DZiq-qe7.js";const V={};function B(j,n){const u=l("v-card-title"),s=l("v-sheet"),i=l("v-expansion-panel-title"),d=l("v-expansion-panel-text"),p=l("v-expansion-panel"),m=l("v-expansion-panels"),r=l("v-list-item"),c=l("v-list"),_=l("v-alert"),v=l("v-card-text"),f=l("v-btn"),x=l("v-card-actions"),g=l("v-card"),b=l("v-col"),y=l("v-row"),k=l("v-container");return N(),C(k,null,{default:e(()=>[t(y,{justify:"center"},{default:e(()=>[t(b,{cols:"12",md:"10"},{default:e(()=>[t(g,{class:"mx-auto",elevation:"2"},{default:e(()=>[t(u,{class:"text-h4 font-weight-bold text-center py-4"},{default:e(()=>n[0]||(n[0]=[a(" Словники в Python ")])),_:1}),t(v,{class:"text-body-1"},{default:e(()=>[n[11]||(n[11]=o("h2",{class:"text-h5 mb-4"},"Що таке словники?",-1)),n[12]||(n[12]=o("p",{class:"mb-4"},'Словники (dictionaries) - це колекції пар "ключ-значення". Вони дозволяють зберігати та отримувати дані за унікальними ключами:',-1)),t(s,{color:"grey-lighten-4",class:"pa-4 mb-4 rounded"},{default:e(()=>n[1]||(n[1]=[o("pre",null,[o("code",null,`# Створення словника
person = {
    "name": "Іван",
    "age": 25,
    "city": "Київ"
}

# Доступ до значень
name = person["name"]      # за допомогою []
age = person.get("age")    # за допомогою get()
# get() безпечніший, бо повертає None якщо ключа немає

# Зміна значень
person["age"] = 26
person["email"] = "ivan@example.com"  # додавання нової пари`)],-1)])),_:1}),n[13]||(n[13]=o("h2",{class:"text-h5 mb-4"},"Методи словників",-1)),t(m,null,{default:e(()=>[t(p,null,{default:e(()=>[t(i,null,{default:e(()=>n[2]||(n[2]=[a(" Основні операції ")])),_:1}),t(d,null,{default:e(()=>[t(s,{color:"grey-lighten-4",class:"pa-4 mt-2 rounded"},{default:e(()=>n[3]||(n[3]=[o("pre",null,[o("code",null,`# Отримання всіх ключів
keys = person.keys()

# Отримання всіх значень
values = person.values()

# Отримання пар ключ-значення
items = person.items()

# Видалення пари
del person["age"]
removed = person.pop("city")  # видаляє і повертає значення

# Очищення словника
person.clear()`)],-1)])),_:1})]),_:1})]),_:1}),t(p,null,{default:e(()=>[t(i,null,{default:e(()=>n[4]||(n[4]=[a(" Корисні методи ")])),_:1}),t(d,null,{default:e(()=>[t(s,{color:"grey-lighten-4",class:"pa-4 mt-2 rounded"},{default:e(()=>n[5]||(n[5]=[o("pre",null,[o("code",null,`# Об'єднання словників
dict1 = {"a": 1, "b": 2}
dict2 = {"c": 3, "d": 4}
dict1.update(dict2)

# Значення за замовчуванням
age = person.get("age", 0)  # 0, якщо ключа немає

# Перевірка наявності ключа
if "name" in person:
    print("Ім'я існує")

# Безпечне отримання значення
value = person.setdefault("status", "активний")  # додає пару, якщо ключа немає`)],-1)])),_:1})]),_:1})]),_:1})]),_:1}),n[14]||(n[14]=o("h2",{class:"text-h5 my-4"},"Вкладені словники",-1)),n[15]||(n[15]=o("p",{class:"mb-4"},"Словники можуть містити інші словники як значення:",-1)),t(s,{color:"grey-lighten-4",class:"pa-4 mb-4 rounded"},{default:e(()=>n[6]||(n[6]=[o("pre",null,[o("code",null,`users = {
    "user1": {
        "name": "Іван",
        "age": 25,
        "contacts": {
            "email": "ivan@example.com",
            "phone": "+380991234567"
        }
    },
    "user2": {
        "name": "Марія",
        "age": 30,
        "contacts": {
            "email": "maria@example.com",
            "phone": "+380997654321"
        }
    }
}

# Доступ до вкладених значень
email = users["user1"]["contacts"]["email"]`)],-1)])),_:1}),n[16]||(n[16]=o("h2",{class:"text-h5 mb-4"},"Генератори словників",-1)),n[17]||(n[17]=o("p",{class:"mb-4"},"Як і списки, словники можна створювати за допомогою генераторів:",-1)),t(s,{color:"grey-lighten-4",class:"pa-4 mb-4 rounded"},{default:e(()=>n[7]||(n[7]=[o("pre",null,[o("code",null,`# Створення словника з двох списків
keys = ["a", "b", "c"]
values = [1, 2, 3]
dictionary = dict(zip(keys, values))

# Генератор словника
squares = {x: x**2 for x in range(5)}
# {0: 0, 1: 1, 2: 4, 3: 9, 4: 16}

# Фільтрація в генераторі
even_squares = {x: x**2 for x in range(10) if x % 2 == 0}
# {0: 0, 2: 4, 4: 16, 6: 36, 8: 64}`)],-1)])),_:1}),n[18]||(n[18]=o("h2",{class:"text-h5 mb-4"},"Типові застосування",-1)),t(c,null,{default:e(()=>[t(r,{"prepend-icon":"mdi-counter",title:"Підрахунок частоти",subtitle:"Підрахунок кількості входжень елементів"},{append:e(()=>[t(s,{color:"grey-lighten-4",class:"pa-2 rounded"},{default:e(()=>n[8]||(n[8]=[o("code",null,"Counter()",-1)])),_:1})]),_:1}),t(r,{"prepend-icon":"mdi-cached",title:"Кешування",subtitle:"Зберігання результатів обчислень"},{append:e(()=>[t(s,{color:"grey-lighten-4",class:"pa-2 rounded"},{default:e(()=>n[9]||(n[9]=[o("code",null,"@lru_cache",-1)])),_:1})]),_:1}),t(r,{"prepend-icon":"mdi-graph",title:"Графи",subtitle:"Представлення зв'язків між вузлами"},{append:e(()=>[t(s,{color:"grey-lighten-4",class:"pa-2 rounded"},{default:e(()=>n[10]||(n[10]=[o("code",null,"defaultdict(list)",-1)])),_:1})]),_:1})]),_:1}),t(_,{color:"info",icon:"mdi-lightbulb",title:"Порада",text:"Використовуйте collections.defaultdict для словників з значеннями за замовчуванням та collections.Counter для підрахунку елементів",class:"mt-4"})]),_:1}),t(x,{class:"justify-center pa-4"},{default:e(()=>[t(f,{color:"primary",size:"large",to:"/","prepend-icon":"mdi-home"},{default:e(()=>n[19]||(n[19]=[a(" На головну ")])),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}const D=w(V,[["render",B],["__scopeId","data-v-f3b9b59b"]]);export{D as default};
