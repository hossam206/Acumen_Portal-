import { useState } from "react";
// import icons
import { LuDot } from "react-icons/lu";
import { GoPlus } from "react-icons/go";
import { MdDelete } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Search,
  Page,
  Inject,
  Toolbar,
} from "@syncfusion/ej2-react-grids";

import Addaccountant from "../../component/Addaccountant";
import ConfirmDelete from "../../component/ConfirmDelete";
import { useStateContext } from "../../Contexts/ContextProvider";
import ConfrmMessage from "../../component/ConfrmMessage";
export default function Accountants() {
  // Context imports
  const { Deletemsg, showDeletemsg, setconfirmmsg, confirmmsg } =
    useStateContext();
  const routes = ["Dashboard", "Admin", "Accountants"];
  // Display show or hide add accountant form
  const [addAccountant, showaddAccontant] = useState(false);
  const handleShowAddaccountant = () => {
    showaddAccontant((prev) => !prev);
  };
  const ordersGrid = [
    {
      id: "SANDARUWAN ESHAN PERERA MALLAWA ARACHCHIGE",
      customerName: "b.leung@acumenaccountants.co.uk",
      email: "07480895596",
      avatar: "https://via.placeholder.com/32",
      date: "30 Nov 2024, 2:29 PM",
      items: 6,
      price: "Annual accounts, CT and Director department",
      status: "Refunded",
    },
    {
      id: 6011,
      customerName: "Lucian Obrien",
      email: "ashlynn.ohara62@gmail.com",
      avatar: "https://via.placeholder.com/32",
      date: "29 Nov 2024, 1:29 PM",
      items: 1,
      price: 83.74,
      status: "Completed",
    },
    {
      id: "BARI & SONS INVESTMENTS LIMITED",
      customerName: "Acumen Accountants",
      email: "shafiul@bigmak.co.uk, motin@bigmak.co.uk",
      avatar: "https://via.placeholder.com/32",
      date: "20 Nov 2024, 4:29 AM",
      items: 5,
      price: "01069136665",
      status: "Pending",
    },
  ];

  const customerTemplate = ({ avatar, customerName, email }) => (
    <div className="flex items-center space-x-3">
      <img
        src={avatar}
        alt={`${customerName}'s avatar`}
        className="w-8 h-8 rounded-full"
      />
      <div>
        <p className="font-semibold">{customerName}</p>
        <p className="text-sm text-gray-500">{email}</p>
      </div>
    </div>
  );

  const actionTemplate = () => (
    <div>
      <ul className="flex items-center justify-center space-x-2">
        <TooltipComponent content={"Delete"} position="TopCenter">
          <li
            className="w-8 h-8 text-md rounded-full flex items-center justify-center bg-[#F7DDD8] text-[#CC5B56] hover:bg-[#CC5B56] hover:text-white transition-all duration-300 ease-in-out cursor-pointer"
            onClick={() => showDeletemsg(!Deletemsg)}
          >
            <MdDelete />
          </li>
        </TooltipComponent>
      </ul>
    </div>
  );

  return (
    <div className="py-10  dark:bg-secondary-dark-bg">
      {/* start Page Header */}
      <div>
        <div className="flex flex-row items-start justify-between">
          <h4 className="text-xl font-semibold leading-[1.5] dark:text-white">
            Accountants
          </h4>
          <button
            className="flex items-center gap-1 bg-[#1C252E] text-white px-3 py-2 rounded-md hover:shadow-lg hover:opacity-[.8] font-semibold text-[13px] transition"
            onClick={handleShowAddaccountant}
          >
            <GoPlus className="text-lg" />
            Add Accountant
          </button>
        </div>
        <ul className="flex flex-row items-center space-x-1 text-sm py-2">
          {routes.map((route, index) => (
            <li
              key={index}
              className={`flex flex-row items-center  ${
                index === routes.length - 1
                  ? "text-gray-400"
                  : "text-slate-900 dark:text-gray-200"
              }`}
            >
              <LuDot className="text-lg text-gray-400 font-bold" /> {route}
            </li>
          ))}
        </ul>
      </div>
      {/* start Page Header */}
      <div className="my-4">
        <div className="overflow-hidden border-none">
          <GridComponent
            dataSource={ordersGrid}
            allowPaging={true}
            allowSorting
            toolbar={["Search"]}
            width="100%"
            pageSettings={{ pageSize: 10 }}
            //className="custom-grid"
          >
            <ColumnsDirective>
              <ColumnDirective
                field="id"
                headerText="Accountant Name "
                width="auto"
                textAlign="Left"
              />
              <ColumnDirective
                field="customerName"
                headerText="Email"
                width="auto"
                textAlign="Left"
              />
              <ColumnDirective
                field="email"
                headerText="Phone"
                width="auto"
                textAlign="Left"
              />
              <ColumnDirective
                field="price"
                headerText="Department"
                width="auto"
                textAlign="Left"
                format="C2"
              />
              <ColumnDirective
                headerText="Action"
                width="100"
                textAlign="Left"
                template={actionTemplate}
              />
            </ColumnsDirective>
            <Inject services={[Page, Search, Toolbar]} />
          </GridComponent>
        </div>
      </div>

      {/* Add accountant */}
      {addAccountant && (
        <Addaccountant handleShowform={handleShowAddaccountant} />
      )}
      {Deletemsg}
      {Deletemsg && <ConfirmDelete />}
      {confirmmsg && <ConfrmMessage />}
    </div>
  );
}
