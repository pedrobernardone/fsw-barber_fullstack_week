"use client";

import Image from "next/image";
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
      {/* Header */}
      <div className="p-5">
        <h2 className="text-2xl font-bold">Welcome, Pedro!</h2>
        <p>Monday, August 31</p>

        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Search" className="w-full" />
          <Button>
            <SearchIcon />
          </Button>
        </div>

        <div className="mt-6 relative h-[150px] w-full">
          <Image
            src="/banner-pizza.png"
            alt="Banner"
            fill
            className="rounded-lg object-cover"
          />
        </div>

        {/* Bookings */}
        <Card className="mt-6">
          <CardContent className="flex items-center justify-between">
            <div className="flex flex-col gap-2 py-2">
              <Badge className="w-fit">Confirmed</Badge>
              <h3 className="font-bold">Haircut</h3>
              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png" />
                </Avatar>
                <p className="text-sm">FSW Barbershop</p>
              </div>
            </div>
            <div className="ml-auto flex  min-w-[70px] flex-col items-center justify-center rounded-lg bg-muted/40 px-3 py-2 text-center">
              <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-muted-foreground">
                August
              </span>
              <span className="text-xl font-bold leading-none">31</span>
              <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-muted-foreground">
                2026
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Home;
