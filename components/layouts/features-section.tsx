"use client";
import { Button } from "@/components/ui/button";
import { Category } from "@/types";
import { CATEGORIES } from "@/utils/categories";
import Link from "next/link";
      
export default function FeaturesSection() {
  return (
    <div className="flex flex-col md:flex-row justify-center mt-6 gap-2 items-center">
        {CATEGORIES.map((category: Category) => (
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
