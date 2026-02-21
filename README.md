# 💸 SpendWise — Expense Tracker

الـ README ده هيشرحلكم هيكل المشروع، كل فولدر بيعمل إيه، وإزاي هنشتغل مع بعض على GitHub.

---

## 📁 هيكل المشروع

```
spendwise-web/
├── public/                  # ملفات static (favicon, صور ثابتة...)
├── src/
│   ├── assets/              # صور وأيقونات بتتاستخدم جوه الكومبوننتس
│   ├── components/
│   │   ├── layout/          # كومبوننتس الهيكل العام (Navbar, Sidebar, Footer...)
│   │   └── ui/              # كومبوننتس صغيرة reusable (Button, Input, Card...)
│   ├── context/             # Global State — الـ CRUD والفانكشنز الأساسية
│   ├── features/            # كل feature ليها فولدر خاص بيها
│   ├── hooks/               # Custom React Hooks
│   ├── pages/               # صفحات الـ App المربوطة بالـ Routes
│   ├── utils/               # Helper functions (تنسيق تواريخ، حسابات...)
│   ├── App.jsx              # Root component — بيحدد الـ Routes والـ Layout العام
│   └── main.jsx             # Entry point — بيـ render الـ App في الـ DOM
├── index.html
├── vite.config.js
├── package.json
└── .gitignore
```

---

## 📂 شرح كل فولدر

### `public/`
ملفات static بتتعمل serve زي ما هي. حطوا فيها حاجات زي الـ favicon أو صور مش محتاجين تـ import هم في الكود. **متحطوش فيها React components**.

---

### `src/assets/`
الصور والـ SVGs والأيقونات اللي بتتـ import جوه الكومبوننتس. مثلاً:
```jsx
import logo from '../assets/logo.svg'
```

---

### `src/components/layout/`
كومبوننتس الهيكل العام اللي بتظهر في كل الصفحات أو معظمها. أمثلة:
- `Navbar.jsx`
- `Sidebar.jsx`
- `Footer.jsx`
- `PageWrapper.jsx`

دي عظمة الـ UI — مش بتتغير من صفحة لصفحة.

---

### `src/components/ui/`
كومبوننتس صغيرة **reusable** ومفيهاش business logic. أمثلة:
- `Button.jsx`
- `Input.jsx`
- `Card.jsx`
- `Modal.jsx`
- `Badge.jsx`

القاعدة: لو لقيت نفسك copy-paste نفس العنصر أكتر من مرة → حطه هنا.

---

### `src/context/`
ده قلب الـ App. بنستخدم الـ React Context كـ **Global State** — مش بس لتمرير البيانات، لكن كمان بنحط فيه الـ CRUD والفانكشنز الأساسية اللي أي كومبوننت في الـ App ممكن يحتاجها.

مثلاً:
```
context/
├── ExpenseContext.jsx      # بيانات المصاريف + addExpense, deleteExpense, updateExpense
├── CategoryContext.jsx     # بيانات الكاتيجوريز + CRUD بتاعها
```

**الـ Context بيتكون من:**
- الـ **State** — البيانات اللي محتاجين نشاركها
- الـ **Functions** — الـ CRUD وأي عمليات على البيانات دي
- الـ **Provider** — اللي بيلف الـ App ويوصل البيانات للكل

```jsx
// مثال على ExpenseContext.jsx
const ExpenseContext = createContext();

export const ExpenseProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([]);

  const addExpense    = (expense)  => { /* ... */ };
  const deleteExpense = (id)       => { /* ... */ };
  const updateExpense = (id, data) => { /* ... */ };

  return (
    <ExpenseContext.Provider value={{ expenses, addExpense, deleteExpense, updateExpense }}>
      {children}
    </ExpenseContext.Provider>
  );
};

export const useExpenses = () => useContext(ExpenseContext);
```

> ✅ أي كومبوننت محتاج يعمل عملية على المصاريف → بيـ import الـ `useExpenses` hook بس، مش محتاج يعرف أي حاجة تانية.

---

### `src/features/`
كل feature في الـ App ليها فولدر خاص بيها فيه كل اللي يخصها من كومبوننتس ومنطق. ده بيخلي الشغل منفصل ومحدش بيعدي على شغل التاني.

مثال:
```
features/
├── expenses/
│   ├── ExpenseList.jsx
│   ├── ExpenseForm.jsx
│   ├── ExpenseCard.jsx
│   └── index.js
├── categories/
│   ├── CategoryList.jsx
│   └── CategoryForm.jsx
└── reports/
    ├── ReportChart.jsx
    └── ReportSummary.jsx
```

> ✅ لو شغال على feature معينة، شغلك كله يبقى جوه فولدرها.

---

### `src/hooks/`
Custom React Hooks — منطق reusable متقطع من الكومبوننتس عشان تبقى نضيفة. أمثلة:
- `useLocalStorage.js` — تخزين بيانات في الـ localStorage
- `useFilter.js` — منطق الفلترة
- `useDateRange.js` — التعامل مع نطاقات التواريخ

> الـ Hooks لازم اسمها يبدأ بـ `use`.

---

### `src/pages/`
صفحات الـ App المربوطة بالـ Routes في `App.jsx`. دي بتكون خفيفة — بتـ import وبتـ compose كومبوننتس وfeatures بس، مش بتحتوي على logic كتير. أمثلة:
- `DashboardPage.jsx`
- `ExpensesPage.jsx`
- `ReportsPage.jsx`
- `CategoriesPage.jsx`

---

### `src/utils/`
فانكشنز JavaScript عادية مفيهاش React. أمثلة:
- `formatDate.js`
- `formatCurrency.js`
- `calculateTotal.js`
- `constants.js`

---

## 🌿 Git Workflow

بنشتغل بنظام **branches** عشان محدش يعدي على شغل التاني ويبقى الكود منظم.

### الـ Branches الأساسية

| Branch | الغرض |
|--------|--------|
| `main` | الكود النهائي الجاهز للـ production. **متـ push عليه مباشرةً**. |
| `develop` | البراتش الرئيسية للشغل. كل حاجة بتتمرج هنا الأول. |

---

### إزاي تبدأ تشتغل على feature جديدة؟

**1. ابدأ دايمًا من `develop` وجيب آخر تحديث:**
```bash
git checkout develop
git pull origin develop
```

**2. عمل branch جديد:**
```bash
git checkout -b feature/اسم-الفيتشر
```

سمي الـ branch بشكل واضح. أمثلة:
- `feature/expense-form`
- `feature/dashboard-charts`
- `feature/category-filter`
- `fix/card-layout-bug`

**3. اشتغل وـ commit بانتظام:**
```bash
git add .
git commit -m "feat: add expense form with validation"
```

**4. ارفع الـ branch على GitHub:**
```bash
git push origin feature/اسم-الفيتشر
```

**5. افتح Pull Request على `develop` ومتمرجش لوحدك.**

> ⚠️ **متـ push مباشرةً على `develop` أو `main` أبدًا.** دايمًا من خلال PR عشان حد من الفريق يراجع الكود.

---

### صيغة الـ Commit Messages

```
feat:     إضافة فيتشر جديد
fix:      تصليح bug
style:    تغيير في الـ CSS أو الألوان بس
refactor: تعديل كود من غير ما تتغير الوظيفة
docs:     تعديل في الـ README أو التوثيق
```

أمثلة:
```
feat: add delete expense button
fix: correct total calculation in utils
refactor: move expense logic to context
```

---

### إزاي تـ sync مع `develop` وتتجنب الـ Conflicts؟

وانت شغال على الـ feature بتاعتك، اعمل ده بانتظام:
```bash
git checkout develop
git pull origin develop
git checkout feature/اسم-الفيتشر
git merge develop
```

لو في conflicts، صلحها وبعدين كمل شغلك.

---

## ⚙️ إزاي تشغل المشروع محلياً؟

```bash
# 1. Clone الـ repo
git clone <رابط الريبو>
cd spendwise-web

# 2. روح على develop
git checkout develop

# 3. نصّب الـ dependencies
npm install

# 4. شغّل الـ dev server
npm run dev
```

---

## 👥 تنظيم الشغل

احنا 6 ناس على المشروع ده، عشان كده:
- **اتكلموا قبل ما تبدأ** على feature عشان محدش يشتغل على نفس الحاجة
- **اراجعوا الـ PRs** بعض قبل الـ merge
- **خلوا الـ branches قصيرة** — متسيبوش branch مفتوح أسابيع من غير ما يتمرج
