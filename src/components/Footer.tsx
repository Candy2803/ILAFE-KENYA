// import React from 'react';
import { Building2 } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-blue-950 text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <Building2 className="w-6 h-6" />
          <span className="text-lg font-semibold">ILAFE KENYA</span>
        </div>
        <p className="text-blue-200">© {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
}