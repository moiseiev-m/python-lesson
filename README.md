# Python підказки

Веб-підручник з Python для учнів: теорія та практичні завдання. SPA на Vue 3 + Vite + Vuetify, бекенд-налаштування в Firebase (Auth, Firestore).

## Стек

- **Vue 3** (Composition API), **Vue Router**, **Pinia**
- **Vuetify 3**, **Vite 6**
- **Firebase** (Authentication, Firestore — налаштування сторінок, адмін)

## Структура

- `src/views/` — сторінки теорії (VariablesView, BranchingView, ArraysView тощо) та практики (`practice/`)
- `src/components/` — BaseLayout, TaskChecker, OperatorsTable, FunctionsList
- `src/stores/` — auth, pages (видимість сторінок з Firestore)
- `src/firebase/` — ініціалізація Firebase
- `src/assets/pdf/` — PDF для завдань

## Команди

```bash
# Залежності
npm install

# Розробка (локально)
npm run dev

# Збірка для продакшену
npm run build

# Перегляд збірки
npm run preview
```

## Деплой

- **GitHub Pages**: при пуші в гілку `master` запускається workflow `.github/workflows/deploy.yml` (build → deploy).
- Сайт: https://moiseiev-m.github.io/python-lesson/
- У репозиторії: **Settings → Pages → Source: GitHub Actions**; у **Environments → github-pages** дозволені гілки `master` та `gh-pages`.

## Локальна розробка

Потрібен **Node.js 18+**. Після `npm install` та `npm run dev` додаток доступний на `http://localhost:5173` (або інший порт з виводу Vite).
