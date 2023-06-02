function showLoading() {
  const div = document.createElement("div");
  div.classList.add("loading", "centralize");
  document.body.appendChild(div);

  const label = document.createElement("label");
  label.innerText = "Carregango...";
  div.appendChild(label);
  document.body.appendChild(label);

  setTimeout(() => hideLoading(), 2000);
}

function hideLoading() {
  const loading = document.getElementsByClassName("loading");
  if (loading.length) {
    loading[0].remove();
  }
}
