import express from "express";
import cors from "cors";
import { doctorsRouter } from "./routes/doctors.routes";
import { appointmentsRouter } from "./routes/appointments.routes";
import { consultationsRouter } from "./routes/consultations.routes";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get("/api/v1/health", (_request, response) => {
  response.status(200).json({ status: "ok", service: "MediClinic API" });
});

app.use("/api/v1/doctors", doctorsRouter);
app.use("/api/v1/appointments", appointmentsRouter);
app.use("/api/v1/consultations", consultationsRouter);

app.use((_request, response) => {
  response.status(404).json({ message: "Ruta no encontrada" });
});

app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}/api/v1`);
});
