export default function header() {
    return (
        <main>
            <div className="fixed top-0 header w-full h-[6vh] bg-white shadow-lg rounded-b flex items-center px-5 z-[999]">
                <ul className="w-full flex justify-between items-center">
                    <li>
                        <h1>Avardhra</h1>
                    </li>
                    <li className="flex items-center gap-4">
                        <button>
                            <i className="outlineKece rounded-[100%] p-2 text-yellow-400 bx bxs-sun"></i>
                        </button>
                    </li>
                </ul>
            </div>
        </main>
    )
}