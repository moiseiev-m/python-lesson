import{_ as y}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{c as w,w as e,r as o,o as k,a as t,b as s,d as l}from"./index-DZiq-qe7.js";const V={};function q(B,n){const i=o("v-card-title"),r=o("v-sheet"),a=o("v-expansion-panel-title"),u=o("v-expansion-panel-text"),d=o("v-expansion-panel"),p=o("v-expansion-panels"),_=o("v-alert"),f=o("v-card-text"),m=o("v-btn"),g=o("v-card-actions"),x=o("v-card"),c=o("v-col"),b=o("v-row"),v=o("v-container");return k(),w(v,null,{default:e(()=>[t(b,{justify:"center"},{default:e(()=>[t(c,{cols:"12",md:"10"},{default:e(()=>[t(x,{class:"mx-auto",elevation:"2"},{default:e(()=>[t(i,{class:"text-h4 font-weight-bold text-center py-4"},{default:e(()=>n[0]||(n[0]=[s(" Функції в Python ")])),_:1}),t(f,{class:"text-body-1"},{default:e(()=>[n[11]||(n[11]=l("h2",{class:"text-h5 mb-4"},"Визначення функцій",-1)),n[12]||(n[12]=l("p",{class:"mb-4"},"Функції в Python визначаються за допомогою ключового слова def. Вони можуть приймати параметри та повертати значення:",-1)),t(r,{color:"grey-lighten-4",class:"pa-4 mb-4 rounded"},{default:e(()=>n[1]||(n[1]=[l("pre",null,[l("code",null,`# Проста функція
def greet(name):
    return f"Привіт, {name}!"

# Функція з декількома параметрами
def add_numbers(a, b):
    return a + b

# Функція без повернення значення
def print_info(name, age):
    print(f"Ім'я: {name}, Вік: {age}")

# Виклик функцій
message = greet("Іван")
result = add_numbers(5, 3)
print_info("Марія", 25)`)],-1)])),_:1}),n[13]||(n[13]=l("h2",{class:"text-h5 mb-4"},"Параметри функцій",-1)),t(p,null,{default:e(()=>[t(d,null,{default:e(()=>[t(a,null,{default:e(()=>n[2]||(n[2]=[s(" Позиційні та іменовані аргументи ")])),_:1}),t(u,null,{default:e(()=>[t(r,{color:"grey-lighten-4",class:"pa-4 mt-2 rounded"},{default:e(()=>n[3]||(n[3]=[l("pre",null,[l("code",null,`def user_info(name, age, city):
    return f"{name}, {age} років, місто {city}"

# Позиційні аргументи
print(user_info("Іван", 25, "Київ"))

# Іменовані аргументи
print(user_info(age=25, city="Київ", name="Іван"))`)],-1)])),_:1})]),_:1})]),_:1}),t(d,null,{default:e(()=>[t(a,null,{default:e(()=>n[4]||(n[4]=[s(" Значення за замовчуванням ")])),_:1}),t(u,null,{default:e(()=>[t(r,{color:"grey-lighten-4",class:"pa-4 mt-2 rounded"},{default:e(()=>n[5]||(n[5]=[l("pre",null,[l("code",null,`def greet(name, greeting="Привіт"):
    return f"{greeting}, {name}!"

print(greet("Іван"))          # Привіт, Іван!
print(greet("Марія", "Вітаю")) # Вітаю, Марія!`)],-1)])),_:1})]),_:1})]),_:1}),t(d,null,{default:e(()=>[t(a,null,{default:e(()=>n[6]||(n[6]=[s(" *args та **kwargs ")])),_:1}),t(u,null,{default:e(()=>[t(r,{color:"grey-lighten-4",class:"pa-4 mt-2 rounded"},{default:e(()=>n[7]||(n[7]=[l("pre",null,[l("code",null,`# *args для довільної кількості позиційних аргументів
def sum_all(*numbers):
    return sum(numbers)

print(sum_all(1, 2, 3, 4, 5))  # 15

# **kwargs для довільної кількості іменованих аргументів
def print_info(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")

print_info(name="Іван", age=25, city="Київ")`)],-1)])),_:1})]),_:1})]),_:1})]),_:1}),n[14]||(n[14]=l("h2",{class:"text-h5 my-4"},"Області видимості",-1)),t(r,{color:"grey-lighten-4",class:"pa-4 mb-4 rounded"},{default:e(()=>n[8]||(n[8]=[l("pre",null,[l("code",null,`x = 10  # глобальна змінна

def test_scope():
    x = 20  # локальна змінна
    print(f"Локальна x: {x}")

def use_global():
    global x  # використання глобальної змінної
    x = 30

test_scope()
print(f"Глобальна x: {x}")  # 10
use_global()
print(f"Змінена глобальна x: {x}")  # 30`)],-1)])),_:1}),n[15]||(n[15]=l("h2",{class:"text-h5 mb-4"},"Лямбда-функції",-1)),n[16]||(n[16]=l("p",{class:"mb-4"},"Лямбда-функції - це анонімні функції, які можуть містити лише один вираз:",-1)),t(r,{color:"grey-lighten-4",class:"pa-4 mb-4 rounded"},{default:e(()=>n[9]||(n[9]=[l("pre",null,[l("code",null,`# Звичайна функція
def square(x):
    return x ** 2

# Те саме як лямбда-функція
square = lambda x: x ** 2

# Використання з вбудованими функціями
numbers = [1, 2, 3, 4, 5]
squares = list(map(lambda x: x ** 2, numbers))
evens = list(filter(lambda x: x % 2 == 0, numbers))`)],-1)])),_:1}),n[17]||(n[17]=l("h2",{class:"text-h5 mb-4"},"Документація функцій",-1)),n[18]||(n[18]=l("p",{class:"mb-4"},"Документація функцій (docstring) допомагає пояснити, що робить функція:",-1)),t(r,{color:"grey-lighten-4",class:"pa-4 mb-4 rounded"},{default:e(()=>n[10]||(n[10]=[l("pre",null,[l("code",null,`def calculate_area(width, height):
    """
    Обчислює площу прямокутника.

    Args:
        width (float): Ширина прямокутника
        height (float): Висота прямокутника

    Returns:
        float: Площа прямокутника
    """
    return width * height

# Отримання документації
help(calculate_area)
print(calculate_area.__doc__)`)],-1)])),_:1}),t(_,{color:"info",icon:"mdi-lightbulb",title:"Порада",text:"Завжди додавайте документацію до функцій - це допоможе іншим розробникам (і вам у майбутньому) зрозуміти, як використовувати вашу функцію",class:"mb-4"})]),_:1}),t(g,{class:"justify-center pa-4"},{default:e(()=>[t(m,{color:"primary",size:"large",to:"/lists","prepend-icon":"mdi-arrow-right"},{default:e(()=>n[19]||(n[19]=[s(" Перейти до списків ")])),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}const C=y(V,[["render",q],["__scopeId","data-v-09e52a76"]]);export{C as default};
