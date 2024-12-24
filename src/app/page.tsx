export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="flex">
        <img src="./image/home.png" className="flex-1 relative" alt="" />
        <div className="absolute md:top-72 top-20 ml-10 md:ml-10">
          <h2 className="text-white md:text-6xl text-3xl font-bold md:mb-28">JUROS ABUSIVOS </h2>

          <p className="md:text-xl text-sm text-center  bg-yellow-600 p-2 rounded-xl font-semibold px-5">  Saiba se você está pagando juros abusivos ou taxas indevidas. </p>
        </div>
      </section>
      <section className="flex">
        <img src="./image/page2.png" className="flex-1" alt="" />
      </section>
      <section className="flex flex-col">
        <header className="flex flex-col bg-yellow-600 w-screen h-[30vh]">
          <h2 className="text-5xl font-bold ml-10 text-black mt-28">O que fazer?</h2>
        </header>
        <article className="flex flex-col md:flex-row gap-2 bg-zinc-900 w-screen h-[80vh]">
          <article className="flex-1 md:p-8 flex md:flex-col bg-zinc-900">
              <img className="self-center" src="image/icon-balanca.png" width={100} alt="" />
              <hr className="mb-5 mt-5" />
              <h2 className="text-white mb-5">1º Passo</h2>
              <p className="text-white">Agenda uma consulta com nossos advogados especialistas e faça uma análise gratuita 
                do seu contrato.</p>   

          </article>
          <article className="flex-1 md:p-8 flex md:flex-col bg-zinc-900">    
              <img className="self-center" src="image/icone-money.png" width={100} alt="" />
              <hr className="mb-5 mt-5" />
              <h2 className="text-white mb-5">2º Passo</h2>
              <p className="text-white">Agenda uma consulta com nossos advogados especialistas e faça uma análise gratuita 
                do seu contrato.</p>
          </article>
          <article className="flex-1 md:p-8 flex md:flex-col bg-zinc-900">
            <img className="self-center" src="image/icon-arrow.png" width={100} alt="" />
              <hr className="mb-5 mt-5" />
              <h2 className="text-white mb-5">3º Passo</h2>
              <p className="text-white">Agenda uma consulta com nossos advogados especialistas e faça uma análise gratuita 
                do seu contrato.</p>
          </article>
        </article>
      </section>
    </div>
  );
}
