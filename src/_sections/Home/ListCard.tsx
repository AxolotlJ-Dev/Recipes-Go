"use client"
import { Card } from "@/components/Cards";
import { useEffect, useState } from "react";

export function ListCard() {
    const url: string = "https://api-recipes-d99v.onrender.com/recipes";
    const [cards, setCards] = useState<Card[]>([]);

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                setCards(data);
            })
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 text-lg md:text-xl lg:text-2xl xl:text-2xl text-center">
            {cards.map((card) => (
                <Card key={card.ID} image={card.image} title={card.title} desc={card.description} />
            ))}
        </div>
    );
}
