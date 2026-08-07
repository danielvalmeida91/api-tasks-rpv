import express from "express";
import cors from "cors";
import { db } from "./database/connection";
import { AddTaskInput, addTaskSchema } from "./schemas";

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

app.post("/task", async (req, res) => {
    const { title, description, statusId, priorityId, categoryId } = req.body as AddTaskInput;

    // 1. Validar o body da requisição ( zod validação de entrada )
    const validatedData = addTaskSchema.safeParse({ title, description, statusId, priorityId, categoryId });

    if (!validatedData.success) {
        const errors = validatedData.error.issues.map((err) => ({
            field: err.path[0],
            message: err.message
        }));

        return res.status(400).json({ message: "Existem erros ao enviar sua requisição.", errors });
    }


    // 2. Insere no banco 
    await db("tasks").insert({ title, description, status_id: statusId, priority_id: priorityId, category_id: categoryId });

    // 3. Retorna status 201, com as infomações criadas
    return res.status(201).json({ message: "Task criada com sucesso !", data: { title, description, statusId, priorityId, categoryId } });
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
