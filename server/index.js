import express from "express"
import dotenv from "dotenv"
import connectDb from "./utils/connectDb.js"
import authRouter from "./routes/auth.route.js"
import cors from "cors";
import cookieParser from "cookie-parser"
import userRouter from "./routes/user.route.js";
import notesRouter from "./routes/generate.route.js";
import pdfRouter from "./routes/pdf.route.js";
import creditRouter from "./routes/credits.route.js";
import { stripeWebook } from "./controllers/credits.controller.js";
dotenv.config()
const app = express()

app.post(
    "/api/credits/webhook",
    express.raw({type: "application/json"}),
    stripeWebook
)

app.use(cors({
  origin: "https://examnotesaiclient-vl8k.onrender.com", 
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"]
}));



app.use(express.json())
app.use(cookieParser())

const PORT = process.env.PORT || 8000


app.get("/", (req, res) => {
    res.json({message: "ExamNotes AI Backend Running!"})
})

app.use("/api/auth", authRouter)
app.use("/api/user", userRouter)
app.use("/api/notes", notesRouter)
app.use("/api/pdf", pdfRouter)
app.use("/api/credit", creditRouter)

app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`)
    connectDb()
})
