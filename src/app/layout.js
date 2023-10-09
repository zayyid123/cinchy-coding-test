import NavbarComponenet from './components/NavbarComponenet'
import './globals.css'

export const metadata = {
  title: 'Bali Motor Rental Made Easy | cinchy.life',
  description: "Rent a reliable motorbike in Bali with a few clicks. No hidden fees and delivery to most urban areas. It's that simple.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavbarComponenet/>
        {children}
      </body>
    </html>
  )
}
