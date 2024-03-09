import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "key-materials",
  description: "Page with data of key materials",
};

export default function KeyMaterialsPage() {
  return (
    <div>
      <h1 className="text-2xl">Key materials</h1>
    </div>
  );
}
