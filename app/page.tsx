"use client";

import FeaturesSection from "@/components/layouts/features-section";
import HeroSection from "../components/layouts/hero-section";
import PostSection from "@/components/layouts/post-section";
import { POSTS } from "@/utils/posts";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center justify-between p-24">
      <div className="absolute bottom-4 left-4">
        <span className="sm:hidden">XS</span>
        <span className="hidden sm:block md:hidden">SM</span>
        <span className="hidden md:block lg:hidden ">MD</span>
        <span className="hidden lg:block xl:hidden">LG</span>
        <span className="hidden xl:block 2xl:hidden">XL</span>
      </div>
      <HeroSection />  
      <FeaturesSection />
      <PostSection posts={POSTS} />

    </main>
  );
}
