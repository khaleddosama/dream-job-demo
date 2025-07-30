 let darkMode = false;

  function toggleDarkMode() {
    if (!darkMode) {
      document.body.style.backgroundColor = "#121212";
      document.body.style.color = "#f0f0f0";

      let headers = document.querySelectorAll("header, footer");
      headers.forEach(el => {
        el.style.backgroundColor = "#1e1e1e";
        el.style.color = "#f0f0f0";
      });

      let buttons = document.querySelectorAll("button, a");
      buttons.forEach(btn => {
        btn.style.backgroundColor = "#333";
        btn.style.color = "#fff";
      });

      let inputs = document.querySelectorAll("input, textarea");
      inputs.forEach(input => {
        input.style.backgroundColor = "#2b2b2b";
        input.style.color = "#fff";
        input.style.border = "1px solid #888";
      });

      document.getElementById("darkModeBtn").innerText = "☀️ Light Mode";
      darkMode = true;
    } else {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";

      let headers = document.querySelectorAll("header, footer");
      headers.forEach(el => {
        el.style.backgroundColor = "";
        el.style.color = "";
      });

      let buttons = document.querySelectorAll("button, a");
      buttons.forEach(btn => {
        btn.style.backgroundColor = "";
        btn.style.color = "";
      });

      let inputs = document.querySelectorAll("input, textarea");
      inputs.forEach(input => {
        input.style.backgroundColor = "";
        input.style.color = "";
        input.style.border = "";
      });

      document.getElementById("darkModeBtn").innerText = "🌙 Dark Mode";
      darkMode = false;
    }
  }