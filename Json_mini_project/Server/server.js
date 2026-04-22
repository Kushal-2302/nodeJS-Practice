//!-------
const http = require("http");
const fs = require("fs");

let server = http.createServer((req, res) => {
  // 🟢 Handle POST request
  if (req.method === "POST" && req.url === "/submit") {
    let body = "";

    req.on("data", (chunk) => (body += chunk));

    req.on("end", () => {
      const parts = body.split("&");

      const first = parts[0].split("=")[1];
      const last = parts[1].split("=")[1];
      const dob = parts[2].split("=")[1];
      const place = parts[3].split("=")[1];

      const newUser = { first, last, dob, place };

      fs.readFile("../Client/appdata.json", "utf-8", (err, data) => {
        let users = [];

        if (!err && data) {
          const parsed = JSON.parse(data);

          // ✅ ensure array
          users = Array.isArray(parsed) ? parsed : [parsed];
        }

        users.push(newUser);

        fs.writeFile(
          "../Client/appdata.json",
          JSON.stringify(users, null, 2),
          (err) => {
            if (err) throw err;
            res.end("User Added");
          },
        );
      });
    });
  }

  // 🟢 Serve HTML
  else if (req.url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    fs.createReadStream("../Client/index.html").pipe(res);
  }
  else if (req.url === "/view") {
    res.writeHead(200, { "content-type": "text/html" });
    fs.createReadStream("../Client/view.html").pipe(res);
  }

  // 🟢 Serve JS
  else if (req.url === "/scriptfile") {
    res.writeHead(200, { "content-type": "application/javascript" }); // fixed type
    fs.createReadStream("../Client/app.js").pipe(res);
  }

  // 🟢 Serve JSON file
  else if (req.url === "/jsonfile") {
    res.writeHead(200, { "content-type": "application/json" });
    fs.createReadStream("../Client/appdata.json").pipe(res);
  }
});

const PORT = 5000;
server.listen(PORT, () => {
  console.log(`Server is Started : http://localhost:${PORT}`);
});
