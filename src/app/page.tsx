import React from "react";
import HeroSection from "./components/HeroSection";
import LatestQuestions from "./components/LatestQuestions";
import TopContributers from "./components/TopContributers";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen">
        <HeroSection />
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Latest Questions - Takes up 2 columns on large screens */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-3xl font-bold text-center lg:text-left">
              Latest Questions
            </h2>
            <LatestQuestions />
          </div>

          {/* Top Contributors - Takes up 1 column */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-center">
              Top Contributors
            </h2>
            <div className="flex justify-center">
              <TopContributers />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}