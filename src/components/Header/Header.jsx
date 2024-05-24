export default function Header() {
  return (
    <header className="bg-hero-desktop bg-cover bg-no-repeat h-56 flex items-center bg-darkCyan xxs:bg-hero-mobile">
      <div className="container">
        <div className="flex items-center">
          <input type="text" className="py-1 w-full px-3 rounded-l-md" placeholder="Search" />
          <button className="bg-lightCyan rounded-r-md transition duration-300 ease-in-out p-1 hover:brightness-110">
            <svg xmlns="http://www.w3.org/2000/svg" className="" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" className="stroke-darkCyan" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </button>
        </div>
      </div>

    </header>
  )
}
