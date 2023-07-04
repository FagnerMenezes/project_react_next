
export default function Contact(){
    return (
        <>
            <section className="flex flex-col p-4 gap-4">          
                <h2 className="text-2xl uppercase ">Contato</h2>
                <form className=" flex flex-col flex-wrap bg-white border rounded-xl p-4">
                    <label className="font-bold">Nome</label>
                    <input type="text" className="border w-auto h-10 rounded-lg outline-stone-200 xl:w-96 "></input>
                    <label className="font-bold">Telefone</label>
                    <input type="tel" className="border w-auto h-10 rounded-lg outline-stone-200 xl:w-96"></input>
                    <label className="font-bold">E-mai</label>
                    <input type="email" className="border w-auto h-10 rounded-lg outline-stone-200 xl:w-96"></input>
                    
                    <button type="submit" className="bg-blue-300 rounded-xl text-white mt-4 w-16 px-2 py-2">Enviar</button>
                </form>

            </section>
        </>
    )
}