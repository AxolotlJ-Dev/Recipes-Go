"use client";
import { About } from "@/_sections/Home/About";
import { Footer } from "@/_sections/Home/Footer";
import Hero from "@/_sections/Home/Hero";
import { useEffect, useState } from "react";

export default function Home() {
  const [items, setItems] = useState(() => {
    if (typeof window !== "undefined") {
      const savedItems = localStorage.getItem("items");
      return savedItems ? JSON.parse(savedItems) : [];
    }
    return [];
  });
  
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedItems = localStorage.getItem("items");
      if (savedItems) {
        setItems(JSON.parse(savedItems));
      }
    }
  }, []);
  
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("items", JSON.stringify(items));
    }
  }, [items]);

  return (
    <main className="">
      <Hero />
      <About />
      <Footer />
    </main>
  );
}
