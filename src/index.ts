import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());

const corsOptions = {
    origin: "*"
}

app.use(cors(corsOptions));

app.get("/healthy", (req, res) => {
    res.status(200).json({ message: "Server is healthy" });
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
