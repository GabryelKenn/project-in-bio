export default function Hero() {
  return (
    <div className="flex border">
      <div className="w-full flex flex-col gap-2 mt-[35vh] border">
        <h1 className="text-5xl font-bold text-white leading-[64px]">
          Seus projetos e redes sociais em um único link
        </h1>
        <h2 className="text-xl leading-6">
          Crie sua própria pagina de projetos e compatilhe com o mundo.
          <br />
          Acompanhe o  engajamento com Analytics de cliques
        </h2>
        <div className="flex items-center gap-2 w-full -mt-[10vh]">
          <span className="text-white text-xl">projectinbio.com</span>
          <input type="text" />
          <button>Criar agora</button>
        </div>
      </div>
      <div className="w-full flex items-center justify-center bg-[radial-gratiant(circle_at_50%_50%,#4B2DBB, transparent_50%)]">
        <div className="relative">
          {/* <UseCard /> */}
          <div className="absolute  -bottom-[7%] -right-[45%]">
            {/* <TotalVisits /> */}
            <div className="absotule top-[20%] -left-[45%] -z-10">
              {/* <ProjectCard /> */}
            </div>
            <div className="absotule -top-[5%] -left-[55%] -z-10">
              {/* <ProjectCard /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}