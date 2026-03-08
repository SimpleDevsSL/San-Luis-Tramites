"use client"

import axios from "axios";
import React, { useState, useEffect } from "react"
import { GuideCard } from "@/components/guide-card"
import { motion } from "framer-motion"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

const TramitesGrid = () => {
  const [tramites, setTramites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTramites();
  }, []);

  const fetchTramites = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/tramites/`);
      setTramites(response.data);
    } catch (error) {
      console.error("Error fetching tramites:", error);
      setError("No se pudieron cargar los trámites.");
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="flex h-[200px] animate-pulse flex-col rounded-xl border border-border bg-card/50 p-6 shadow-sm" />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-xl border border-destructive/50 bg-destructive/10 p-6 text-center text-destructive">
        {error}
      </div>
    );
  }

  if (tramites.length === 0) {
    return (
      <div className="rounded-xl border border-border bg-card p-6 text-center text-muted-foreground">
        No hay trámites disponibles en este momento.
      </div>
    );
  }

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
    >
      {tramites.map((tramite: any) => (
        <motion.div key={tramite.id || Math.random()} variants={item}>
          <GuideCard guide={tramite} />
        </motion.div>
      ))}
    </motion.div>
  )
}

export default TramitesGrid;