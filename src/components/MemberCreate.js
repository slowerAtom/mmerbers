function MemberCreate() {
    return (
        <div className="relative isolate overflow-hidden h-full bg-slate-200 py-10 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl gap-x-8 lg:max-w-none">
                <div className="mt-6 border-t border-gray-100">
                    <ul className="divide-y divide-gray-100">
                        <li className="px-4 py-6 sm:gap-4 sm:px-0">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="inline mr-1 w-4 h-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
                            </svg>
                            <span className="text-lg align-middle mr-2 text-sm font-bold leading-6 text-gray-900">요추-골반 복합체</span>
                        </li>
                    </ul>
                </div>
            </div>    
          </div>
        </div>
    )
}

export default MemberCreate;