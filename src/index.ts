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

app.post("/task", (req, res) => {
    const { title, description, status_id, priority_id, category_id } = req.body;

    // 1. Validar o body da requisição ( zod validação de entrada )
    // 2. Insere no banco 
    // 3. Retorna status 201, com as infomações criadas

    return res.status(201).json({ message: "Task created successfully", data: { title, description, status_id, priority_id, category_id } });
})

app.get("/task/:id", (req, res) => {
    // 1. Verificar se o id enviado existe no banco 
    // 2. Retorna erro em caso de nao existir
    // 3. Retorna as informações se existir
})

app.patch("/task/:id", (req, res) => {
    // 1. Verificar se o id enviado existe no banco 
    // 2. Retorna erro em caso de nao existir
    // 3. Atualiza as informações conforme body da requisição
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
