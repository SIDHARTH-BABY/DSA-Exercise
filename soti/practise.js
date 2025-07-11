const http = require("http");

// Placeholder for the rec function
function rec(id) {
  // Return some mock or fetched unique IDs
  return [id]; // Example
}

// Simulate database fetch
function fetchTranslationAmounts(ids) {
  // Dummy data simulating DB results
  return [
    { id: ids[0], amount: 120 },
    { id: ids[0], amount: 250 },
    { id: ids[0], amount: 90 },
  ];
}

// Calculates the max amount for given IDs
function dec(id) {
  const uniqueIds = rec(id);

  const dbObj = fetchTranslationAmounts(uniqueIds);

  let max = -1;
  dbObj.forEach((val) => {
    if (val.amount > max) {
      max = val.amount;
    }
  });

  return [id, max];
}

// Filters duplicate values up to first repetition
function res(val) {
  const obj = [];
  let flag = false;

  for (let i = 0; i < val.length; i++) {
    if (obj.includes(val[i])) {
      flag = true;
    }
    if (!flag) {
      obj.push(val[i]);
    }
  }

  return obj;
}

// Create HTTP server
http.createServer((req, res) => {
  if (req.url === "/" && req.method === "POST") {
    let body = "";

    req.on("data", chunk => {
      body += chunk;
    });

    req.on("end", () => {
      try {
        const { userIds, role } = JSON.parse(body);

        if (role === "ADMIN") {
          const result = dec(userIds);
          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ result }));
        } else {
          res.writeHead(403, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ error: "Unauthorized role" }));
        }
      } catch (e) {
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Invalid JSON" }));
      }
    });
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Not found" }));
  }
}).listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
