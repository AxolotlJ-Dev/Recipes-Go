"use client";
import { About } from "@/_sections/Home/About";
import Hero from "@/_sections/Home/Hero";
import { ListCard } from "@/_sections/Home/ListCard";
import Navbar from "@/components/NavBar";
import { useEffect, useState } from "react";

export default function Home() {
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    // Este código se ejecutará solo en el lado del cliente
    const savedItems = localStorage.getItem("items");
    if (savedItems) {
      setItems(JSON.parse(savedItems));
    }
  }, []);

  useEffect(() => {
    // Actualiza localStorage cada vez que cambien los items
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <main className="">
      <Hero />
      <About />
    </main>
  );
}
