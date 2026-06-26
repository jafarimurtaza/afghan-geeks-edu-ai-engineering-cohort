<div dir="rtl">

# جلسهٔ ۰۳ · مدل‌های هوش مصنوعی و APIها

**Afghan Geeks Education** — انجنیری هوش مصنوعی

در این جلسه با مدل‌های مهم هوش مصنوعی آشنا می‌شویم و برای نخستین بار با کد (Node.js) به یک مدل درخواست می‌فرستیم — هم ابری (Gemini) و هم محلی (Ollama).

---

## سرفصل‌ها

- آشنایی با GPT، Claude، Gemini، Llama و DeepSeek
- مقایسهٔ مدل‌ها از نظر کیفیت، سرعت و هزینه
- انتخاب مدل مناسب برای هر پروژه
- مدل‌های متن‌باز (Open) و اختصاصی (Closed)
- API چیست و قیمت‌گذاری آن چگونه است
- ارسال درخواست به Gemini API با Node.js
- آشنایی با Ollama و ارسال درخواست به Ollama API

---

## ۱) Gemini API

**گام ۱ — کلید رایگان بگیرید:** https://aistudio.google.com/apikey
کلید با `AIza...` شروع می‌شود.

**گام ۲ — نصب:**

```bash
npm install @google/genai dotenv
```

**گام ۳ — فایل `.env` در ریشهٔ پروژه:**

```env
GEMINI_API_KEY=AIza...کلید_شما
```

**گام ۴ — اجرا:**

```bash
node sessions/session-03/gemini-api.js
```

> ⚠️ کلید را هرگز داخل کد یا در گیت‌هاب نگذارید — همیشه در `.env`.

---

## ۲) Ollama (محلی · رایگان · بدون کلید)

**گام ۱ — نصب:** https://ollama.com/download

**گام ۲ — دانلود مدل و اجرای سرور:**

```bash
ollama pull qwen3.5:2b
ollama serve
```

**گام ۳ — اجرا:**

```bash
node sessions/session-03/ollama-api.js
```

---

## فایل‌ها

| فایل                             | توضیح                    |
| -------------------------------- | ------------------------ |
| [`gemini-api.js`](gemini-api.js) | درخواست به Gemini API    |
| [`ollama-api.js`](ollama-api.js) | درخواست به Ollama (محلی) |

---

## منابع

- کلید رایگان Gemini — https://aistudio.google.com/apikey
- بستهٔ `@google/genai` — https://www.npmjs.com/package/@google/genai
- مستندات Gemini — https://ai.google.dev/gemini-api/docs
- دانلود Ollama — https://ollama.com/download
- مدل‌های Ollama — https://ollama.com/library
- مستندات Ollama API — https://github.com/ollama/ollama/blob/main/docs/api.md

</div>
