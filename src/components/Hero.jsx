import fotoRosto from '../assets/img/fotoRosto.jpeg'

export default function Hero() {
  return (
    <section className="h-[90dvh] flex items-center justify-center font-[Fonte_Rosto]">
      <div className='absolute z-50 w-[80%]'>
        <p className="text-7xl text-white">Olá, eu sou <strong className='text-blue-300'>Lucas Laino</strong>.</p>
        <p className='text-2xl text-white'>Desenvolvedor Web - Entusiasta de IA e Automação</p>
      </div>

      <div className='fixed right-20 z-40'>
        <img
          src={fotoRosto}
          alt="Retrato do rosto de Lucas Laino sorrindo"
          width={450}
          height={350}
        />
      </div>
    </section>
  );
}