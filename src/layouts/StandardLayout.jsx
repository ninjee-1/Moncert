import AuditBg from "../assets/img/AuditBg.png";

export default function StandardLayout({ children }) {
    return (
        <div className="container xl mx-auto border-l border-r">
            <div
                className="relative h-[500px] bg-cover bg-center"
                style={{ backgroundImage: `url(${AuditBg})` }}
            >
                {/* Overlay: цэнхэр өнгө + opacity */}
                <div className="absolute inset-0 bg-black bg-opacity-50" />

                {/* Text container */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Our Platform</h1>
                    <p className="text-lg md:text-2xl">Your success starts here. Let’s build it together.</p>
                </div>
            </div>

            <main className="flex-grow">{children}</main>
        </div>
    );
} 