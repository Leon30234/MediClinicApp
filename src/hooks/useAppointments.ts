import { useCallback, useEffect, useMemo, useState } from "react";
import { apiClient } from "../api/client";
import type { Appointment, AppointmentPayload } from "../types";

export function useAppointments() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const scheduledCount = useMemo(
    () => appointments.filter((item) => item.status === "scheduled").length,
    [appointments]
  );

  const loadAppointments = useCallback(async () => {
    try {
      setLoading(true);
      setError("");
      const data = await apiClient.getAppointments();
      setAppointments(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al cargar citas");
    } finally {
      setLoading(false);
    }
  }, []);

  const createAppointment = useCallback(async (payload: AppointmentPayload) => {
    const created = await apiClient.createAppointment(payload);
    setAppointments((current) => [...current, created]);
  }, []);

  const cancelAppointment = useCallback(async (id: number) => {
    await apiClient.deleteAppointment(id);
    setAppointments((current) =>
      current.map((appointment) =>
        appointment.id === id ? { ...appointment, status: "cancelled" } : appointment
      )
    );
  }, []);

  useEffect(() => {
    loadAppointments();
  }, [loadAppointments]);

  return {
    appointments,
    loading,
    error,
    scheduledCount,
    retry: loadAppointments,
    createAppointment,
    cancelAppointment
  };
}
