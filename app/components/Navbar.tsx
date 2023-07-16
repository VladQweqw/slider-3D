import { HiMenu } from "react-icons/hi"

export function Navbar() {
  return (
    <nav
      className="text-primary flex justify-between items-center px-4 py-2
     tablet:px-8 tablet:py-4
     laptop:px-12 laptop:py-6"
    >
      <h1 className="font-primary text-4xl font-bold">Aer</h1>
      <HiMenu className="font-bold" size={48} />
    </nav>
  )
}
