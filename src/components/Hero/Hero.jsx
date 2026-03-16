import fotoRosto from '../../assets/fotoRosto.jpeg'

export default function Hero() {
  return (
    <section className="relative h-[90dvh] flex items-center justify-between px-10">

      <div className="flex flex-col justify-center max-w-1xl">
        <p className="text-white font-medium text-7xl text-left">
          Olá! Eu sou Lucas Laino.
        </p>
        <p className="text-white font-medium text-2xl text-left mt-4">
          Desenvolvedor Web Fullstack - Entusiasta de IA & Automação
        </p>
      </div>

      <div className="h-full flex items-center justify-end py-15 pr-10">
        <img
          src={fotoRosto}
          alt="Foto do Lucas Laino"
          className="max-h-full w-auto object-contain rounded-2xl"
        />
      </div>

    </section>
  );
}