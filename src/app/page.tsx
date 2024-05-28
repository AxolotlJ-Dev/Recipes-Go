"use client";
import { About } from "@/_sections/Home/About";
import { Footer } from "@/_sections/Home/Footer";
import Hero from "@/_sections/Home/Hero";
import { useEffect, useState } from "react";

export default function Home() {
  const [items, setItems] = useState(() => {
    const savedItems = localStorage.getItem("items");
    return savedItems ? JSON.parse(savedItems) : [];
  });

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
      <Footer />
    </main>
  );
}
