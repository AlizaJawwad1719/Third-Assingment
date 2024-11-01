import { Children } from "react"

export default function Footer () {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow"> 
        <h1 className="text-center text-3xl font-bold p-0"> Portfolio </h1>
      </main>

      <footer className="bg-rose-200 text-rose-950 py-8 text-center"> &copy; Aliza Jawwad 

<ul className="flex gap-4 justify-center font-bold">
    <li>Gmail: jawwadaliza@gmail.com</li>
    <li>Discord: alizajawwad1719</li>
    <li>Linked.in: Aliza Jawwad</li>
    <li>Instagram: Aliza Jawwad Qureshi</li>
</ul>

      </footer>
    </div>
  )
}
