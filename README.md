<div align="center">

<img src="https://www.afghangeeksedu.org/favicon.ico" width="60" alt="Afghan Geeks Education" />

# AI Engineering Cohort · انجنیری هوش مصنوعی

**Afghan Geeks Education — 2026 Cohort**

Build real AI applications on your own laptop.
**Free · Local · No API Key · Powered by Ollama.**

[![Afghan Geeks Education](https://img.shields.io/badge/Afghan%20Geeks%20Education-NGO-0D1B4B?style=flat-square)](https://www.afghangeeksedu.org)
[![License](https://img.shields.io/badge/License-MIT-F59E0B?style=flat-square)](LICENSE)
[![Models](https://img.shields.io/badge/Powered%20by-Ollama-38BDF8?style=flat-square)](https://ollama.com)
[![Sessions](https://img.shields.io/badge/Sessions-20-0D1B4B?style=flat-square)](#your-20-session-journey)

</div>

---

## About Afghan Geeks Education

[Afghan Geeks Education](https://www.afghangeeksedu.org) is a nonprofit technology education initiative dedicated to Afghan women and youth. We teach web development, AI engineering, and modern coding skills through structured programs, close mentorship, and real projects — not just theory.

> *"With the onset of the new revolution in Afghanistan, unfortunately, all girls were deprived of continuing our education. Afghan Geeks opened a window toward learning."*
> — Afghan Geeks student

We have seen beginners become junior developers. We have seen women land their first freelance clients. This curriculum is the next step: training the next generation of AI Engineers — entirely free, entirely offline, entirely accessible.

---

## Why This Track Exists

Claude, OpenAI, and Gemini are blocked or unaffordable for students in Afghanistan — no international payment methods, IP restrictions, and unreliable internet make cloud AI inaccessible.

So we build with **[Ollama](https://ollama.com)** — AI models that run locally on any laptop, free, forever, even offline.

And here is the key insight: **the skills transfer completely.**

> Switching from Ollama to Claude or OpenAI after you graduate takes **3 lines of code** — same `messages` array, same streaming pattern, same RAG pipeline, same architecture. Students arrive at their first job already knowing how production AI works.

---

## What Is an AI Engineer?

This course trains **AI Engineers** — not ML researchers.

| ML Researcher | AI Engineer ← *us* |
|---|---|
| Trains models from scratch | Uses trained models as components |
| Needs months, GPUs, millions $ | Calls APIs · writes TypeScript |
| Writes custom neural networks | Builds apps for real users |
| Needs a PhD | Just curiosity + a laptop |

---

## The 4 Pillars

| # | Pillar | What you build |
|---|---|---|
| 1 | **LLM Apps** | Chat, Q&A, translation, summarisation, classification |
| 2 | **RAG Systems** | AI over your own documents — embeddings · Postgres + pgvector |
| 3 | **AI Agents** | AI that uses tools — ReAct loop · tool calling |
| 4 | **MLOps** | Deploy, monitor, evaluate — Docker · CI/CD |

---

## Your 20-Session Journey

| Sessions | Weeks | Phase | Focus |
|---|---|---|---|
| 01–05 | 1–3 | **Understanding AI** | The language of AI — tokens, parameters, context window, temperature, hallucination, RAG, agents. 30+ terms decoded. |
| 06–09 | 3–5 | **Working with Models** | First code: Ollama API · streaming · structured output · prompt engineering · Modelfiles · model routing · caching. |
| 10–14 | 5–7 | **RAG — Knowledge & Retrieval ★** | Embeddings · Postgres + pgvector · document ingestion · complete RAG pipeline. **★ Capstone 1** |
| 15–20 | 8–10 | **Full-Stack & Ship ★** | Next.js + Ollama · streaming UI · agents · RAG in the browser · Docker · deployment. **★ Capstone 2** |

Weekly exercises live in [`sessions/`](sessions/) — one folder per session, built up week by week.

---

## Capstone Projects

### ★ Capstone 1 · Session 14 — [Document Q&A System](projects/01-document-qa-system/)

Upload any Dari or English PDF. Ask questions. The AI answers using only that document — no hallucination, no internet, no cost. A complete RAG pipeline built from scratch using TypeScript, Ollama, and Postgres + pgvector.

**Deliverables:** GitHub repo · demo video · README

### ★ Capstone 2 · Session 20 — [Smart Chat App](projects/02-smart-chat-app/)

A production-ready full-stack AI chat application: Next.js frontend with streaming UI, multi-turn memory, system prompts, AI agents with tool calling, and Docker so it deploys anywhere.

**Deliverables:** GitHub repo · demo video · README

---

## Tech Stack

| Tool | Role |
|---|---|
| **TypeScript** | Language — all sessions |
| **Bun** | Runtime & package manager |
| **Ollama** | Local AI runtime — free, offline |
| **llama3.2 · qwen3.5 · phi3** | The models students use |
| **nomic-embed-text** | Embeddings for RAG |
| **Postgres + pgvector** | Vector database for RAG |
| **Next.js · React 19** | Full-stack web application |
| **Docker** | Deployment & portability |

---

## Models

We favour small, lightweight models so they run on modest hardware. Students pick based on their laptop:

| Model | Size | RAM | Pull |
|---|---|---|---|
| `qwen3.5:0.8b` | ~500 MB | 2–4 GB | `ollama pull qwen3.5:0.8b` |
| `qwen3.5:2b` | ~1.5 GB | 4 GB | `ollama pull qwen3.5:2b` |
| `phi3:mini` | ~2.2 GB | 4 GB | `ollama pull phi3:mini` |
| `llama3.2` | ~2.0 GB | 4–8 GB | `ollama pull llama3.2` |
| `qwen3.5:4b` | ~2.5 GB | 4–8 GB | `ollama pull qwen3.5:4b` |

For RAG sessions, also pull the embedding model:
```bash
ollama pull nomic-embed-text
```

---

## Is This Course for You?

**✓ You belong here if you…**
- want to *build* AI apps, not just read about them
- know basic JavaScript or TypeScript
- have a laptop with 4–8 GB RAM
- are Afghan or learning for Afghan communities
- want real skills — a GitHub portfolio and demo videos

**✗ Not required**
- a PhD or mathematics background
- cloud API keys or a credit card
- a GPU — your laptop CPU is enough
- prior AI or ML experience
- fast or stable internet — Ollama works fully offline

---

## Getting Started

**1. Install Ollama**
```bash
# Windows (PowerShell)
irm https://ollama.com/install.ps1 | iex
```
Or download from [ollama.com/download](https://ollama.com/download).

**2. Pull a model**
```bash
ollama pull qwen3.5:2b        # recommended for most laptops
```

**3. Verify it works**
```bash
ollama run qwen3.5:2b
>>> Hello!
```

**4. Clone this repo**
```bash
git clone https://github.com/jafarimurtaza/afghan-geeks-edu-ai-engineering-cohort.git
cd afghan-geeks-edu-ai-engineering-cohort
```

**5. Start with Session 01**
```bash
cd sessions/session-01
```

---

## Repository Structure

```
.
├── projects/
│   ├── 01-document-qa-system/    # ★ Capstone 1 — Session 14
│   └── 02-smart-chat-app/        # ★ Capstone 2 — Session 20
│
├── sessions/
│   ├── session-01/               # Built up week by week
│   ├── session-02/
│   └── ... session-20/
│
├── .gitignore
└── README.md
```

---

## Why Ollama

| | Cloud AI (Claude, GPT-4) | Ollama (local) |
|---|---|---|
| Cost | Paid API | **Free forever** |
| Internet | Required | **Not required** |
| Privacy | Data sent to cloud | **Stays on your machine** |
| Access from Afghanistan | Blocked / restricted | **Always works** |
| Skills transfer to cloud | — | **Yes — 3 lines of code** |

---

<div align="center">

**بیا بسازیم — Let's build.**

Free · Local · Powerful · Yours.

[Afghan Geeks Education](https://www.afghangeeksedu.org) · [LinkedIn](https://www.linkedin.com/school/afghan-geeks-education)

</div>

## License
 
This curriculum is licensed under [Creative Commons Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/).
 
You are free to use, share, and adapt this material for any purpose — **as long as you credit Afghan Geeks Education** and link to [afghangeeksedu.org](https://www.afghangeeksedu.org).
 
> If you use this curriculum, we'd love to know. Reach us at [afghangeeksedu.org/contact](https://afghangeeksedu.org/contact).



