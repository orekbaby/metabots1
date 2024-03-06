import React from "react";
import Image from "next/image";
import { IoCloseSharp } from "react-icons/io5";
import { FaHome } from "react-icons/fa";

export default function SideBar() {
  return (
    <div className="flex flex-col fixed top-0 left-0 w-[80px] h-[100vh] p-3 md:p-4 lg:p-4 flex-shrink-0 items-center z-50 border-r-[1px] border-[#101720]">
      <Image
        src="/Metadapplogo.png"
        alt="Logo"
        width={20}
        height={20}
        className="mb-10"
      />
      <div className=" hidden md:flex lg:flex flex-col gap-10 items-center justify-center border-r-[2px] border-[#101720] w-full">
        <div className="text-white">
          <FaHome />
        </div>
        <div className="flex flex-col items-center py-6 border-y-2 border-[#212E40] w-full">
          <div className="mb-10 mt-8">
            <Image
              src="/hovering-text.png"
              width={12}
              height={8}
              alt="hovering"
            />
          </div>
          <div>
            <Image
              src="/hovering-text.png"
              width={12}
              height={8}
              alt="hovering"
            />
          </div>
        </div>
        <div className=" pb-2">
          <Image
            src="/account-balance.png"
            width={12}
            height={8}
            alt="account-bal"
          />
        </div>
        <div className=" pb-2">
          <Image src="/payments.png" width={12} height={8} alt="payments" />
        </div>
        <div className=" pb-2">
          <Image src="/Vector.png" width={12} height={8} alt="vector" />
        </div>
        <div className=" pb-2">
          <Image src="/settings.png" width={12} height={8} alt="settings" />
        </div>
        <div className=" pb-2">
          <IoCloseSharp className="w-[12 h-[8] text-white" />
        </div>
        <div className=" pb-2">
          <Image src="/message.png" width={12} height={8} alt="message" />
        </div>
      </div>
    </div>
  );
}

// <div
//   style={{
//     width: "80px",
//     height: "100vh",
//     backgroundColor: "#0B0F16",
//     padding: "5px",
//     margin: "0",
//     flexShrink: "0",
//   }}
// >

//   <div className="flex flex-col gap-10 items-center justify-center mb-10 border-[#212E40] w-full">
//     <div>
//       <FaHome />
//     </div>
//     <div className="flex flex-col items-center py-6 border-y-2 border-[#212E40] w-full">
//       <div className="mb-10">
//         <Image
//           src="/hovering-text.png"
//           width={12}
//           height={8}
//           alt="hovering"
//         />
//       </div>
//       <div>
//         <Image
//           src="/hovering-text.png"
//           width={12}
//           height={8}
//           alt="hovering"
//         />
//       </div>
//     </div>
//     <div className=" pb-2">
//       <Image
//         src="/account-balance.png"
//         width={12}
//         height={8}
//         alt="account-bal"
//       />
//     </div>
//     <div className=" pb-2">
//       <Image src="/payments.png" width={12} height={8} alt="payments" />
//     </div>
//     <div className=" pb-2">
//       <Image src="/Vector.png" width={12} height={8} alt="vector" />
//     </div>
//     <div className=" pb-2">
//       <Image src="/settings.png" width={12} height={8} alt="settings" />
//     </div>
//     <div className=" pb-2">
//       <IoCloseSharp className="w-[12 h-[8]" />
//     </div>
//     <div className=" pb-2">
//       <Image src="/message.png" width={12} height={8} alt="message" />
//     </div>
//   </div>
// </div>
//   );
// }
