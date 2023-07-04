'use client'
import { FaLock, FaEnvelope } from "react-icons/fa";
import {useRouter,redirect} from "next/navigation";
import { useForm } from "react-hook-form";

export default function Login() {
  const route = useRouter();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  function sign_in(data) {
    route.push("/dashboard");
  } ;

  return (
    <div className="flex items-center justify-center w-screen h-screen">
      
      <div className="sm:grid sm:grid-cols-2 border border-1 rounded-xl shadow-xl sm:max-w-4xl flex flex-row flex-wrap ">
        <img
          className="object-cover border border-1 rounded-s-xl sm:w-full sm:h-full"
          src="https://png.pngtree.com/background/20220818/original/pngtree-simple-blue-background-picture-image_1915883.jpg"
          alt="login"
        />

        <div className="flex flex-wrap justify-between items-center p-4 ml-8 ">
          <div className="flex flex-wrap justify-start " >
            <h1 className="font-bold w-full text-3xl mb-2">Bem-vindo!</h1>
            <h6 className="font-serif text-sm text-slate-300">
              Faça login na sua conta
            </h6>
          </div>
          <form
            className="flex flex-row flex-wrap"
            onSubmit={handleSubmit(sign_in)}
          >
            <span className="w-full mb-4 mt-4">Email</span>
            <div className="flex justify-around items-center border border-1 rounded-xl h-10 w-full">
              <FaEnvelope className="text-sky-500 ml-4" />
              <input
                {...register("email", { required: true })}
                aria-invalid={errors.email ? "true" : "false"}
                className=" outline-none w-72 ml-4"
                type="text"
                placeholder="Informe seu email"
              ></input>
            </div>
            {errors.email?.type === "required" && (
              <p className="font-light text-sm text-red-400" role="alert">
                Campo Email obrigatório
              </p>
            )}
            <span className="w-full mb-4">Senha</span>
            <div className="flex justify-around items-center border border-1 rounded-xl h-10 w-full ">
              <FaLock className="ml-4 text-sky-500" />
              <input
                {...register("password", { required: true })}
                aria-invalid={errors.password ? "true" : "false"}
                className="outline-none ml-4 w-72"
                type="password"
                placeholder="Informe sua senha"
              ></input>
            </div>
            {errors.password?.type === "required" && (
              <p className="text-red-500 font-extralight text-sm" role="alert">
                Campo senha obrigatório
              </p>
            )}
            <div className="flex justify-between w-full">
              <label className="text-sm mt-4">
                <input type="checkbox"></input> Relembre-me
              </label>
              <span className="-ml-12 text-sm mt-4">Esqueceu a senha?</span>
            </div>
            <div className="flex justify-center items-center w-full">
              <button
                className="bg-sky-500 mt-4 border border-1 rounded-md w-full h-10 text-white hover:bg-sky-900"
                type="submit"
              >
                Entrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
//  TODO:Fazer a inpelmentação do sitema de autenticação
