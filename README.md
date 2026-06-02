# AI Engineering Cohort · انجنیری هوش مصنوعی

**Afghan Geeks Education** — Orientation 2026

Build real AI applications on your own laptop. **Free · Local · No API Key · Powered by Ollama.**

---

## Why this track

Claude, OpenAI, and Gemini are blocked or unaffordable in Afghanistan. So we learn with **Ollama** — models that run locally on your laptop, free, forever, even offline.

Everything you learn transfers directly: switching from Ollama to Claude or OpenAI after you graduate takes about **3 lines of code** (same `messages` array, same streaming pattern, same RAG pipeline, same architecture).

## What is an AI Engineer?

This course trains **AI Engineers**, not ML researchers.

| ML Researcher | AI Engineer ← *us* |
|---|---|
| Trains models from scratch | Uses trained models as components |
| Needs months, GPUs, millions $ | Calls APIs · writes JavaScript |
| Writes custom neural networks | Builds apps for real users |
| Needs a PhD | No PhD — just curiosity + a laptop |

## The 4 pillars

1. **LLM Apps** — chat, Q&A, translation, summarisation, classification
2. **RAG Systems** — AI over your own documents (embeddings · Postgres + pgvector)
3. **AI Agents** — AI that uses tools (ReAct loop · tool calling)
4. **MLOps** — deploy, monitor, evaluate (Docker · CI/CD)

---

## Your 20-session journey

| Sessions | Weeks | Phase | Focus |
|---|---|---|---|
| 01–05 | 1–3 | **Understanding AI** | The language of AI — tokens, parameters, context window, temperature, hallucination, RAG, agents. Model names & pricing decoded. 30+ terms. |
| 06–09 | 3–5 | **Working with Models** | First code: Ollama API · streaming · structured output · prompt engineering · Modelfiles · model routing · caching. |
| 10–14 | 5–7 | **RAG — Knowledge & Retrieval** ★ | Embeddings · Postgres + pgvector · document ingestion · complete RAG pipeline. **★ Capstone 1** |
| 15–20 | 8–10 | **Full-Stack & Ship** ★ | Next.js + Ollama · streaming UI · agents overview · RAG in browser · Docker · deployment. **★ Capstone 2** |

Weekly exercises live in [`sessions/`](sessions/) — one folder per session (`session-01` … `session-20`).

---

## Capstone projects

### ★ Capstone 1 · Session 14 — [Document Q&A System](projects/01-document-qa-system/)
Upload any Dari or English PDF, ask questions, and the AI answers from the document only. A full RAG pipeline built from scratch — 100% offline, zero cost. Deliverables: GitHub repo · demo video · README.

### ★ Capstone 2 · Session 20 — [Smart Chat App](projects/02-smart-chat-app/)
Full-stack Next.js with a streaming UI, multi-turn memory, system prompt, AI agents with tool calling, and Docker so it deploys anywhere. Deliverables: GitHub repo · demo video · README.

---

## Tech stack

| Tool | Role |
|---|---|
| **JavaScript** | Language — all sessions |
| **Ollama** | AI runtime — local models |
| **llama3.2 · qwen · deepseek** | The models we use |
| **nomic-embed-text** | Embeddings for RAG |
| **Postgres + pgvector** | Vector database |
| **Next.js · React 19** | Full-stack web app |
| **Docker** | Deployment |

## Why Ollama

- **$0** — no API key, no credit card, no cloud.
- **Offline** — download once, works forever without internet.
- **500+ free models** — Llama, Qwen, Mistral, DeepSeek.
- **3 lines** — switch to Claude or OpenAI when you're ready.

---

## Is this course for you?

**✓ This is for you if you…**
- want to *build* AI apps, not just read about them
- know basic JavaScript
- can run `npm install`
- have a laptop with 8 GB+ RAM
- are Afghan or learning for Afghan communities
- want real skills — a GitHub portfolio + demo videos

**✗ Not required**
- a PhD or mathematics background
- cloud API keys or credit cards
- a GPU — your laptop CPU is enough
- prior AI or ML experience
- Python — we use JavaScript only
- fast internet — Ollama works offline

---

## Models

We favour small, light models so they run on modest laptops. Pick one that fits your RAM:

| Model | Size | RAM | Pull |
|---|---|---|---|
| `qwen3.5:0.8b` | ~500 MB | 2–4 GB | `ollama pull qwen3.5:0.8b` |
| `qwen3.5:2b` | ~1.5 GB | 4 GB | `ollama pull qwen3.5:2b` |
| `phi3:mini` | ~2.2 GB | 4 GB | `ollama pull phi3:mini` |
| `llama3.2` | ~2.0 GB | 4–8 GB | already have ✅ |
| `qwen3.5:4b` | ~2.5 GB | 4–8 GB | `ollama pull qwen3.5:4b` |

For RAG, also pull the embedding model: `ollama pull nomic-embed-text`.

## Getting started

1. Install [Ollama](https://ollama.com/download).
2. Pull a model from the table above (e.g. `ollama pull qwen3.5:2b`).
3. Start the server (if not already running):
   ```bash
   ollama serve
   ```

## Repository structure

```
.
├── projects/                     # Capstone projects
│   ├── 01-document-qa-system/    # Capstone 1 — Session 14
│   └── 02-smart-chat-app/        # Capstone 2 — Session 20
│
├── sessions/                     # Weekly exercises, session by session
│   ├── session-01/ … session-20/
│
├── .gitignore
└── README.md
```

---

**بیا بسازیم — Let's build.** Free · Local · Powerful · Yours.

Afghan Geeks Education · [lms.afghangeeksedu.org](https://lms.afghangeeksedu.org)
