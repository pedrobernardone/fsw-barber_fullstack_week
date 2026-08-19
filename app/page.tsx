"use client";

import Header from "./_components/ui/header";
import { Input } from "@/app/_components/ui/input";
import { Button } from "@/app/_components/ui/button";
import { SearchIcon } from "lucide-react";
import Image from "next/image";

// SERVER COMPONENTS WHEN NO USE CLIENT SET
const Home = () => {
  return (
    <div>
      <Header />
      <div className="p-5">
        <h2 className="text-2xl font-bold">Olá, Pedro!</h2>
        <p>Terça feira, 18 de Agosto</p>

        <div className="flex items-center gap-2 mt-6">
          <Input placeholder="Faça sua busca aqui..." />
          <Button>
            <SearchIcon />
          </Button>
        </div>

        <div className="relative w-full h-[150px] mt-6">
          <Image
            alt="banner"
            src="/banner-pizza.png"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
