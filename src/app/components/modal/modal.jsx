export default function Modal() {
  return (
    <div className="relative z-10 bg-slate-600 h-full">
      teste
      <div className="fixed inset-0 z-10  bg-slate-100">
        <div className="relative overflow-hidden w-full flex justify-center items-center bg-slate-500">
          <h3>TITUTLO</h3>
          <h4>BODY</h4>
        </div>
      </div>
    </div>
  );
}
