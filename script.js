const form = document.getElementById("configurator-form");
const configuredPc = document.getElementById("configured-pc");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const cpu = document.getElementById("cpu").value;
  const gpu = document.getElementById("gpu").value;
  const memory = document.getElementById("memory").value;
  const storage = document.getElementById("storage").value;

  configuredPc.innerHTML = `
    <h2>Configured PC:</h2>
    <p>CPU: ${cpu}</p>
    <p>GPU: ${gpu}</p>
    <p>Memory: ${memory}</p>
    <p>Storage: ${storage}</p>
  `;
});