import perfumeImg from "../assets/asesoria.webp";

export default function Asesoria() {
    const whatsappNumber = "549XXXXXXXXXX"; // <-- poné el número real
    const message = encodeURIComponent(
        "Hola! Me gustaría recibir asesoramiento para elegir una fragancia."
    );

    return (
        <section className="w-full bg-gradient-to-b from-white to-gray-50 py-20 px-6 font-serif">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                {/* TEXTO */}
                <div className="flex flex-col gap-6">

                    <span className="text-sm uppercase tracking-widest text-amber-500 font-medium">
                        Asesoramiento
                    </span>

                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight">
                        Encontrá tu próxima fragancia
                    </h2>

                    <p className="text-gray-600 text-lg leading-relaxed">
                        Cada fragancia tiene una personalidad única y una historia que contar.
                        En nuestra tienda seleccionamos perfumes pensados para distintos estilos, momentos y ocasiones.
                    </p>

                    <p className="text-gray-600 text-lg leading-relaxed">
                        Si querés encontrar el aroma que mejor te represente, podemos asesorarte y ayudarte a descubrir la fragancia ideal para vos.
                    </p>

                    <a
                        href={`https://wa.me/${whatsappNumber}?text=${message}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block w-fit px-8 py-4 rounded-xl text-lg font-medium text-black bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-600 hover:bg-gradient-to-r hover:from-[#d4af37] hover:via-[#f5d76e] hover:to-[#b8962e] transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                        Solicitar asesoramiento
                    </a>

                </div>

                {/* IMAGEN */}
                <div className="relative">

                    <div className="rounded-2xl overflow-hidden shadow-xl">
                        <img
                            src={perfumeImg}
                            alt="Perfume elegante"
                            className="w-full h-[420px] object-cover"
                        />
                    </div>

                    {/* efecto decorativo */}
                    <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-200 rounded-full blur-3xl opacity-40"></div>
                </div>

            </div>
        </section>
    );
}