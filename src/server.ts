import express from "express";
import path from "path";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "../frontend/dist")));

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from backend!" });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
