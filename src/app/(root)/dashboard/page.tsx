"use client";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Home, Search } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

export default function Dashboard() {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(1);
  return (
    <section className="p-3">
      <div className="max-w-3xl mx-auto flex flex-row  gap-8">
        <div className="flex flex-[0.8] items-center gap-2 relative shadow-md">
          <Input
            name="search"
            placeholder="Search for excercises..."
            className="rounded py-5 pl-6 pr-3 text-lg placeholder:text-primary"
          />
          <Search className="text-primary absolute right-3 cursor-pointer" />
        </div>
        <div className="flex items-center gap-2 flex-[0.2]">
          <ArrowLeft className="size-6" />
          <Home className="size-6" />
        </div>
      </div>
      <div className="p-6 max-w-4xl mx-auto flex items-center gap-4 flex-wrap">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <div
            className={` rounded-md  border-4  border-[#99F6E4] py-1.5 px-10 text-base w-fit ${
              item === selectedCategory
                ? "bg-primary text-white font-semibold"
                : "text-primary bg-transparent"
            } transition-all cursor-pointer duration-300`}
            key={item}
            onClick={() => setSelectedCategory(item)}
          >
            Category {item}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3  gap-4 py-5 px-10">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <Card key={item}>
            <CardContent className="flex flex-col items-center gap-4">
              <Image src="/image.png" alt="image" width={200} height={200} />
              <CardTitle className="text-xl my-2">Excersise-{item}</CardTitle>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
