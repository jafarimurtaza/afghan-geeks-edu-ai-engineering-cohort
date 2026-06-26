// جلسهٔ ۰۳ — ارسال درخواست به Ollama API (محلی، رایگان، بدون API Key)
// پیش‌نیاز: Ollama نصب باشد و `ollama serve` در حال اجرا باشد.
// دانلود مدل: ollama pull llama3.2

const OLLAMA_URL = "http://localhost:11434/api/generate";

async function main() {
  const response = await fetch(OLLAMA_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "llama3.1:8b",
      prompt: "What is the capital of Afghanistan?",
      stream: false,
    }),
  });

  const data = await response.json();
  console.log(data);

  console.log(data.response);
}

main();
