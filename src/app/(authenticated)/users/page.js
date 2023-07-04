import { getUsers } from "./services/get-users";

export default async function UsersPage() {
   
  const users = await getUsers();

  return (
    <>
      <div>
        <div className="flex flex-1 flex-wrap px-4 py-2 ">
          <h2 className="text-2xl font-bold font-serif pb-4">Usuários</h2>

          <div
            className="
       container
       mx-auto
       flex
       flex-wrap
       gap-4 
       md:grid
       md:gap-4
       md:grid-cols-3
       sm:grid
       sm:gap-4
       sm:grid-cols-3
       "
          >
            {users.map((user) => (
              <a
                href={`/users/${user.id}`}
                key={user.id}
                // href={''}   
                // onClick={(e) =>modalOpen(e,user.id)}            
                className="
                flex 
                flex-col
                items-center 
                p-2
                bg-white 
                border 
                border-gray-200 
                rounded-lg 
                shadow-md 
                md:flex-row 
                md:max-w-lg 
                hover:bg-gray-100 
                dark:border-gray-700 
                dark:bg-gray-800 
                dark:hover:bg-gray-700"
              >
                <img
                  class="object-cover w-36 h-36 rounded-full"
                  src={user.avatar}
                  alt="avatar"
                />
                <div class="flex flex-col justify-between p-4 leading-normal">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {user.first_name}
                  </h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {user.last_name}
                  </p>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {user.email}
                  </p>
                </div>
              </a>
            
            ))}
          </div>
        </div>
        {/* <Modal title={"Usuário"} isOpen={open}>
          <div className="bg-white rounded-xl p-4 " key={user.id}>
            <h1 className="text-2xl font-bold uppercase">{user.first_name}</h1>

            <p>Sobrenome: {user.last_name}</p>
            <p>Email: {user.email}</p>
            <br />

            <figure>
              <img src={user.avatar} alt="avatar" className="rounded-full" />
            </figure>
          </div>
        </Modal> */}
      </div>
    </>
  );
}
