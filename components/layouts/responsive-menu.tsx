import { Funcs } from "@/types";
import { FUNCS } from "@/utils/funcs";
import { Menu } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

export default function ResponsiveMenu() {
  return <Sheet>
        <SheetTrigger>
            <Menu className="h-6 w-6 md:hidden" />
        </SheetTrigger>
            <SheetContent side="left">
                <div className="flex flex-col gap-4">
                    <Link href="/write">
                        <Button variant="ghost">Write a post</Button>
                    </Link>
                    <p>Categories</p>
                    {FUNCS.map((func: Funcs) => (
                        <Link 
                        key={func.id}
                        href={`/categories/${func.slug}`}
                        className="block px-2 py-1 text-lg">
                            <Button variant="ghost">{func.name}</Button>
                        </Link>
                    ))}
                </div>
            </SheetContent>
    </Sheet>
  
}
