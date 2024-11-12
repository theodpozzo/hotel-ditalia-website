import React from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Image from 'next/image'

export function Footer() {
  // Social media links configuration
  const socialLinks = [
    {
      name: 'Facebook',
      icon: '/social/facebook.svg',
      url: 'https://facebook.com/hotelditalia'
    },
    {
      name: 'Instagram',
      icon: '/social/instagram.svg',
      url: 'https://instagram.com/hotelditalia'
    },
    {
      name: 'WhatsApp',
      icon: '/social/whatsapp.svg',
      url: 'https://wa.me/5551912345678'
    }
  ]

  return (
    <footer className="bg-blue-800 text-white py-16">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gold">Contato</h3>
            <p className="mb-2">WhatsApp: +55 12 3456-7890</p>
            <p className="mb-2">Email: contato@hotelditaliaas.com.br</p>
            <p>Endereço: Av. Assis Brasil, 1234 - Arroio do Sal, RS</p>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gold">Redes Sociais</h3>
            <div className="flex space-x-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  <Image
                    src={social.icon}
                    alt={social.name}
                    width={32}
                    height={32}
                    className="w-8 h-8"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gold">Newsletter</h3>
            <p className="mb-4">Receba nossas novidades e ofertas especiais.</p>
            <div className="flex">
              <Input type="email" placeholder="Seu e-mail" className="rounded-r-none bg-white text-black" />
              <Button className="rounded-l-none bg-gold text-white hover:bg-gold-600">Inscrever-se</Button>
            </div>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="mt-12 pt-8 border-t border-blue-700 text-center text-sm">
          © 2024 Hotel D&apos;Italia. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  )
} 