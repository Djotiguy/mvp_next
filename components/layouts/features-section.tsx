"use client";
import { Button } from "@/components/ui/button";
import { Funcs } from "@/types";
import { FUNCS } from "@/utils/funcs";
import Link from "next/link";
      
export default function FeaturesSection() {
  return (
    <div className="flex flex-col md:flex-row justify-center mt-6 gap-2 items-center">
        {FUNCS.map((category: Funcs) => (
            <Button
                variant="outline"
                key={category.id}
            >
                <Link href={`/categories/${category.slug}`}>
                {category.name}
                </Link>
            </Button>
        ))}
    </div>
  )
}
