import Link from "next/link";
import { Twitter, Linkedin, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0A0F1C] py-12 md:py-16 border-t border-white/10 mt-auto">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 group mb-6">
              <span className="font-bold text-2xl tracking-tight text-white group-hover:text-accent transition-colors">
                See Tree
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              See Tree represents the ability to see the structure of data like a tree and transform it into intelligence.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6">Platform</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="#" className="text-gray-400 hover:text-accent transition-colors text-sm">Data Integration</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-accent transition-colors text-sm">Real Time Analytics</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-accent transition-colors text-sm">AI Insight Engine</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-accent transition-colors text-sm">Visualization</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6">Company</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="#" className="text-gray-400 hover:text-accent transition-colors text-sm">About Us</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-accent transition-colors text-sm">Careers</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-accent transition-colors text-sm">Blog</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-accent transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6">Legal</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="#" className="text-gray-400 hover:text-accent transition-colors text-sm">Privacy Policy</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-accent transition-colors text-sm">Terms of Service</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-accent transition-colors text-sm">Cookie Policy</Link></li>
            </ul>
          </div>

        </div>
        
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} See Tree AI Data Platform. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
