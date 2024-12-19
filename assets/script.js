// Issue 1 : Belum Layak Deploy, Tech Col Menurun Ketika Tampilan Phone
// Issue 2 : Kombinasi Dengan Main Section

function GenerateStack() {
  let techstack = ["python", "tensorflow", "docker", "mysql", "flask", "googlebigquery", "googledataflow"]
  // Tambah BigQuery, DataFlow
  const mainrow = document.querySelector("#techside")
  techstack.forEach(tech => {
    const colDiv = document.createElement("div");
    colDiv.className = "col-4 col-md-1";

    const img = document.createElement("img");
    img.src = `https://cdn.simpleicons.org/${tech}/black`;

    colDiv.appendChild(img);
    mainrow.appendChild(colDiv);
  });
}

function Yearly() {
  let tanggal = new Date().getFullYear();
  console.log(tanggal);
}

GenerateStack()

Yearly()