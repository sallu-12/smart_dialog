const openBtn = document.getElementById("openBtn");
const dialog = document.getElementById("dialog");
const msg = document.getElementById("msg");
const okBtn = document.getElementById("okBtn");
const cancelBtn = document.getElementById("cancelBtn");

openBtn.addEventListener("click", async () => {
  dialog.classList.remove("hidden");
  msg.textContent = "Fetching message...";

  try {
    // Fetch from API
    const res = await fetch("https://api.adviceslip.com/advice", { cache: "no-cache" });
    if (!res.ok) throw new Error("Network response not OK");
    const data = await res.json();
    msg.textContent = `"${data.slip.advice}"`;
  } catch (error) {
    console.error("Fetch error:", error);
    msg.textContent = "⚠️ Could not fetch message. Please check your connection or try again.";
  }
});

okBtn.addEventListener("click", () => {
 
  dialog.classList.add("hidden");
});

cancelBtn.addEventListener("click", () => {
  
  dialog.classList.add("hidden");
});
