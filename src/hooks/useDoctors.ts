import { useCallback, useEffect, useState } from "react";
import { apiClient } from "../api/client";
import type { Doctor } from "../types";

export function useDoctors() {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadDoctors = useCallback(async () => {
    try {
      setLoading(true);
      setError("");
      const data = await apiClient.getDoctors();
      setDoctors(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error desconocido");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadDoctors();
  }, [loadDoctors]);

  return { doctors, loading, error, retry: loadDoctors };
}
