"use client";

import Image from "next/image";
import Header from "./_components/ui/header";
import { Card } from "./_components/ui/card";
import { SearchIcon } from "lucide-react";
import { Input } from "@/app/_components/ui/input";
import { CardContent } from "./_components/ui/card";
import { Avatar, AvatarImage } from "@/app/_components/ui/avatar";
import { Button } from "@/app/_components/ui/button";
import { Badge } from "@/app/_components/ui/badge";

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

        <Card className="mt-6">
          <CardContent className="flex justify-between p-0">
            <div className="flex flex-col gap-2 py-2">
              <Badge className="w-fit">Confirmado</Badge>
              <h3>Corte de cabelo</h3>
              <div className="flex items-center gap-2 py-5 pl-5">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png"></AvatarImage>
                </Avatar>
                <p className="text-sm">Barbearia FSW</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center border-l-2 border-solid px-5">
              <p className="text-sm">Agosto</p>
              <p className="text-2xl">18</p>
              <p className="text-sm">01:10</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Home;
