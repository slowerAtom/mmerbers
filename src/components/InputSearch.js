function InputSearch() {
    return (
      <div className="relative overflow-hidden rounded-lg bg-white shadow-md">
        <input 
          type="text" 
          placeholder="Find anything..." 
          className="block w-full appearance-none bg-transparent py-4 pl-4 pr-12 text-base text-slate-900 placeholder:text-slate-600 focus:outline-none sm:text-sm sm:leading-6" 
          aria-label="Search components"
          id="headlessui-combobox-input-305"
        />
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="pointer-events-none absolute right-4 top-4 h-6 w-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
      </div>
    )
  }
  
  export default InputSearch;