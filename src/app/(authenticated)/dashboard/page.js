'use client'
import Modal from '../../components/modal/modalUser'
//import Modal1 from  '../../components/modal/modal'
const Box = ()=>{
  return(
    <div>
        <h1>MODAL BODY</h1>
    </div>
  )
}
export default function Dashboard() {
  return (
    <>
      
      <div className="w-full">
        <h2 className="text-3xl font-black">DASHBOARD</h2>
         
      </div>
      <Modal title={'TÍTULO DO MODAL'}>
          <Box/>
      </Modal>
    </>
  );
}
