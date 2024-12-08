require("dotenv").config();

const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    credentials: true,
  })
);
app.use(express.json());

const users = [];

// Routes
app.get("/test", (req, res) => {
  res.json({ message: "Server is running!" });
});

app.post("/register", (req, res) => {
  try {
    console.log("Received registration request:", req.body);

    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      console.log("Missing required fields");
      return res.status(400).json({
        message: "Missing required fields",
        received: {
          name,
          email,
          password: password ? "[REDACTED]" : undefined,
        },
      });
    }

    if (users.find((user) => user.email === email)) {
      console.log("User already exists:", email);
      return res.status(400).json({ message: "User already exists" });
    }

    users.push({ name, email, password });
    const token = jwt.sign(
      { email },
      "2f72e556e9ffc6564c5e168aa9bdd855a991b01e3d36681d0c6884f96e57cfaf0d1e96"
    );

    console.log("Registration successful for:", email);
    res.json({ token, message: "Registration successful" });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const user = users.find((u) => u.email === email && u.password === password);

  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign({ email }, "your-secret-key");
  res.json({ token });
});

app.post("/forgot-password", (req, res) => {
  const { email } = req.body;
  const user = users.find((u) => u.email === email);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.json({ message: "Password reset instructions sent" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
