"use client";
import { About } from "@/_sections/Home/About";
import Hero from "@/_sections/Home/Hero";
import { ListCard } from "@/_sections/Home/ListCard";
import Navbar from "@/components/NavBar";
import { useEffect, useState } from "react";

export default function Home() {
  const [items, setItems] = useState(() => {
    const savedItems = localStorage.getItem("items");
    if (savedItems) {
      return JSON.parse(savedItems);
    }
    return [];
  });
  
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);
  

  return (
    <main className="">
      <Hero />
      <About />
    </main>
  );
}
