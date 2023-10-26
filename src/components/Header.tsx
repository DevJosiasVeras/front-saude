import User from "./User";

export default function Header() {
  return (
    <header className="p-2 bg-white/50 shadow-2xl rounded-b-xl fixed inset-0 h-16 w-full">
      <section className="flex justify-around items-center h-full px-8">
        <div className="cursor-pointer mr-2">
          <h1 className="text-2xl text-violet-900 font-bold">My<span className="text-green-700">Plan</span></h1>
        </div>
        <div className="
        hidden
        md:flex-1 md:flex items-center justify-center">
          <input type="text" placeholder="Bradesco" 
          className="
          w-2/6
          p-2 
          rounded-lg 
          bg-transparent 
          shadow-2xl
          border border-b-white border-r-white border-opacity-75
          focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent 
           "
          />
        </div>
        <div>
          <User name="User" image="" />
        </div>
      </section>
    </header>
  )
}