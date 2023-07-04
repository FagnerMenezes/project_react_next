import Modal from "../../../components/modal/modalUser";
import { getUserById } from "../services/get-by-userId";

export default async function UserDetailPage({ params }) {
  const user = await getUserById(params.userId);
  
  return (
    <>
      <Modal title={"USUARIO"} isOpen={true}>
      <div className="bg-white rounded-xl p-4 ">
        <h1 className="text-2xl font-bold uppercase">{user.first_name}</h1>
  
        <p>Sobrenome: {user.last_name}</p>
        <p>Email: {user.email}</p>
        <br />
  
        <figure>
          <img src={user.avatar} alt="avatar" className="rounded-full" />
        </figure>
      </div>
      </Modal>
    </>
  );
}
