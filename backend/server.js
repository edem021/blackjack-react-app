import express from "express";
import axios from "axios";
import cors from "cors";
import { configDotenv } from "dotenv";

configDotenv();

const app = express();
const PORT = 4004;

app.use(express.json());
app.use(cors({ origin: "http://localhost:5173" }));

//GET a new deck
app.get("/api/deck/new", async (req, res) => {
  try {
    const response = await axios.get(
      `${process.env.DECK_OF_CARDS_API}/deck/new/shuffle/?deck_count=1`
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch deck!" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is listening to http://localhost:${PORT}`);
});
