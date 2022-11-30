import "./styles.css";

const input = document.querySelector(".email-publisher");
const textarea = document.querySelector(".email-text");
const button = document.querySelector(".email-send");

// https://codesandbox.io/s/charming-hypatia-nwjtcx

button.addEventListener("click", async () => {
  const to = input.value;
  const text = textarea.value;

  console.log("to", to);
  console.log("text", text);

  const url = "https://my-first-web-server.onrender.com/send-order";

  const res = await fetch(url, {
    method: "POST",
    body: JSON.stringify({
      to,
      text
    }),
    headers: {
      "Content-Type": "application/json"
    }
  });

  console.log(res);
});
