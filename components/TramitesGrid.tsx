"use client"

import axios from "axios";
import React from "react"
import { GuideCard } from "@/components/guide-card"



const tramitesGrid = () => {


  // use states
  const [tramites, setTramites] = React.useState([]);

  // use effects
  React.useEffect(() => {

    
    fetchTramites();
  }, []);

  //functions
  const fetchTramites = () => {
    // fetch tramites from backend
    axios.get(`http://localhost:8000/tramites/`).then((response) => {
      console.log(response.data);
      setTramites(response.data);
    }).catch((error) => {
      console.error("Error fetching tramites:", error);
    });
  }


  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {tramites.map((tramite) => (
        <GuideCard key={tramite} guide={tramite} />
      ))}
    </div>
  )
}

export default tramitesGrid;