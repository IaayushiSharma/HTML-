const formEl = document.querySelector("form");
      const tbodyEl = document.querySelector("tbody");
      const tableEl = document.querySelector("table");
      function onAddWebsite(e) {
        e.preventDefault();
        const Name = document.getElementById("Name").value;
        const Number = document.getElementById("Number").value;
        tbodyEl.innerHTML += `
            <tr>
                <td>${Number}</td>
                <td>${Name}</td>
                <td><button class="deleteBtn">Remove</button></td>
            </tr>
        `;
      }

      function onDeleteRow(e) {
        if (!e.target.classList.contains("deleteBtn")) {
          return;
        }

        const btn = e.target;
        btn.closest("tr").remove();
      }

      formEl.addEventListener("submit", onAddWebsite);
      tableEl.addEventListener("click", onDeleteRow);