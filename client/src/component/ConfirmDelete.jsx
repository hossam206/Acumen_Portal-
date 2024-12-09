import { useStateContext } from "../Contexts/ContextProvider";

function ConfirmDelete() {
  const { Deletemsg, showDeletemsg, setconfirmmsg, confirmmsg } =
    useStateContext();
 
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#1c252e7a] z-50">
      <div
        className="w-[calc(100vw-64px)] max-h-[calc(100vh-64px)] max-w-[370px] bg-white
      rounded-lg  px-[24px] py-4 [box-shadow:rgba(50,_50,_93,_0.25)_0px_50px_100px_-20px,_rgba(0,_0,_0,_0.3)_0px_30px_60px_-30px]"
      >
        <h4 className="  font-semibold">Delete</h4>
        <div className="pt-1 text-[0.875rem] leading-[1.57143] font-normal  ">
          <p>Are you sure want to delete?</p>
          <div className="flex flex-row items-center justify-end mt-4 gap-2 text-sm">
            <button
              className="bg-red-500 text-white hover:bg-[#B71D18] py-[2px]"
              onClick={() => setconfirmmsg(!confirmmsg)}
            >
              Delete
            </button>
            <button
              onClick={() => showDeletemsg(!Deletemsg)}
              className="py-[2px]"
            >
              cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfirmDelete;
