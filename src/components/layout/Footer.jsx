import { useState } from 'react'
import { Icon } from '../ui/Icon'

export function Footer() {
  const [openSection, setOpenSection] = useState(null)

  const footerSections = [
    {
      id: 'shop',
      title: 'Shop',
      links: ['Gift cards', 'Toyove Registry', 'Sitemap', 'Toyove blog', 'Toyove United Kingdom', 'Toyove Germany', 'Toyove Canada']
    },
    {
      id: 'sell',
      title: 'Sell',
      links: ['Sell on Toyove', 'Teams', 'Forums', 'Affiliates & Creators']
    },
    {
      id: 'about',
      title: 'About',
      links: ['Toyove India, Inc.', 'Policies', 'Investors', 'Careers', 'Press', 'Impact', 'Legal imprint']
    },
    {
      id: 'help',
      title: 'Help',
      links: ['Help Centre', 'Privacy settings']
    }
  ]

  const toggleSection = (id) => {
    setOpenSection(openSection === id ? null : id)
  }

  return (
    <footer className="bg-footer-bg text-white pb-10">
      <div className="container-shell pt-10">
        
        {/* 1. Renewable Notice (Dotted Line match per Screenshot) */}
        <div className="flex flex-col items-center justify-center text-center px-4 mb-10">
          <Icon name="region" className="h-10 w-10 mb-3 opacity-90" />
          <div className="inline-block border-b border-dotted border-white/60 pb-1">
            <a href="#" className="text-[14px] font-medium hover:text-white transition-colors">
              Toyove is powered by 100% renewable electricity.
            </a>
          </div>
        </div>

        {/* 2. Mobile Accordions (Clean - No Borders - Glassmorphism Hover) */}
        <div className="flex flex-col gap-1 md:grid md:grid-cols-4 md:gap-8">
          {footerSections.map((section) => (
            <div key={section.id} className="relative">
              <button 
                onClick={() => toggleSection(section.id)}
                className="group w-full py-4 px-4 flex items-center justify-between text-[16px] font-bold rounded-xl transition-all hover:bg-white/5 active:bg-white/10 md:cursor-default md:pointer-events-none md:p-0 md:bg-transparent md:mb-5"
              >
                <span>{section.title}</span>
                <Icon 
                  name="chevronDown" 
                  className={`h-4 w-4 transition-transform md:hidden ${openSection === section.id ? 'rotate-180' : ''}`} 
                />
              </button>
              
              <ul className={`overflow-hidden transition-all duration-300 ${openSection === section.id ? 'max-h-[400px] py-2 px-6' : 'max-h-0 md:max-h-none'} md:space-y-3`}>
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-[14px] text-white/70 hover:text-white hover:underline block py-2 md:py-0 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 3. Social & App Block (Glassmorphism Icon Hover) */}
        <div className="mt-12 flex flex-col items-center gap-8 pt-8">
          <div className="flex items-center gap-3">
            {['instagram', 'facebook', 'pinterest', 'youtube'].map((social) => (
              <a key={social} href="#" className="h-12 w-12 grid place-items-center rounded-full transition-all hover:bg-white/10 active:bg-white/20">
                <Icon name={social} className="h-6 w-6 opacity-90" />
              </a>
            ))}
          </div>

          <div className="flex flex-col items-center gap-4">
             {/* Exact Brand Logo Match (Orange match per Screenshot) */}
             <div className="flex items-center gap-2 mb-2">
                <div className="bg-orange p-3 rounded-lg shadow-lg">
                   <span className="text-white font-serif-display font-bold text-[18px]">Toyove</span>
                </div>
             </div>
             
             <button className="h-11 px-8 rounded-full bg-white/10 border border-white/20 text-[14px] font-bold text-white hover:bg-white/20 transition-all active:scale-95 shadow-lg backdrop-blur-sm">
                Download the Toyove App
             </button>
          </div>
        </div>

        {/* 4. Bottom Legal Strip */}
        <div className="mt-12 text-center text-[12px] font-medium text-white/60 px-4 space-y-4">
          <div className="flex items-center justify-center gap-2 text-white/90">
             <Icon name="region" className="h-4 w-4" />
             <span className="border-b border-dotted border-white/40 pb-0.5">India | English (IN) | ₹ (INR)</span>
          </div>
          <p>© 2026 Toyove India, Inc.</p>
          <div className="flex flex-wrap items-center justify-center gap-4 opacity-70">
            <a href="#" className="hover:underline">Terms of Use</a>
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Interest-based ads</a>
            <a href="#" className="hover:underline">Regions</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
