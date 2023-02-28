import { Card } from "../components/Card";
import { uniforms } from "../data/db";

export const Home = () => {
  return (
    <div className="min-h-screen py-8 px-6 flex flex-col items-center bg-black text-white">
      <h1 className="text-2xl text-center mb-6">Vate no fardamento</h1>

      <div className="flex justify-between w-full max-w-6xl mx-auto gap-6 max-[1000px]:flex-col">
        <div className="flex flex-col items-center justify-center w-full">
          <h2 className="mb-3">
            Modelo: <span className="text-amber-500">Feminino</span>
          </h2>

          <div className="flex flex-wrap gap-4 max-[552px]:justify-center">
            {uniforms.female.map((item, index) => (
              <Card key={index} data={item} />
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-full">
          <h2 className="mb-3">
            Modelo: <span className="text-amber-500">Masculino</span>
          </h2>

          <div className="flex flex-wrap gap-4 max-[552px]:justify-center">
            {uniforms.male.map((item, index) => (
              <Card key={index} data={item} />
            ))}
          </div>
        </div>
      </div>

      <p className="text-gray mt-8 px-6">
        Obs.: As blusas masculinas serão nas mesmas cores que as femininas.
      </p>
    </div>
  );
};
