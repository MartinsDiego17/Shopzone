import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { createPreference } from "./mercado_pago_payment/mercado-pago-payment.js";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("Hello world");
}); 

app.post("/api/mercadopago/create_preference", async (req, res) => {
    
    try {
        const response = await createPreference(req.body);
        res.status(200).json(response); 
    } catch (error) {
        res.status(500).json({ error: error.message });
    }

}
);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});