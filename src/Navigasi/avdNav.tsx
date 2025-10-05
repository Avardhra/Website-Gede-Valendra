// import { BrowserRouter, Router } from "react-router-dom";

export default function univNav() {
    return (
        <main>
            <div className="fixed bottom-[5vh] w-full flex justify-center items-center z-[1000]">
                <div className="outlineKece w-fit p-2 px-5 bg-white rounded-[100px] shadow-lg">
                    <ul className="flex justify-center items-center gap-2">
                        <button id="#H-ome_" className="flex flex-col justify-center items-center gap-0 hoverBtnNavMain w-[12vh] h-[6vh] rounded-[100px]">
                            <i className="bx bx-home text-2xl"></i>
                            <span className="relative text-sm top-[-6px]">Home</span>
                        </button>
                        <button id="#P-roject_" className="flex flex-col items-center gap-0 hoverBtnNavMain w-[12vh] h-[6vh] rounded-[100px]">
                            <i className="bx bx-folder text-2xl"></i>
                            <span className="relative text-sm top-[-6px]">Project</span>
                        </button>
                        <button id="#E-xperience_" className="flex flex-col items-center gap-0 hoverBtnNavMain w-[12vh] h-[6vh] rounded-[100px]">
                            <i className="bx bx-briefcase text-2xl"></i>
                            <span className="relative text-sm top-[-6px]">Experience</span>
                        </button>
                    </ul>
                </div>
            </div>
        </main>
    )
}