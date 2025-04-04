// import React from "react";
// import { BsPeopleFill } from "react-icons/bs";
// import { FaPeopleGroup } from "react-icons/fa6";
// import { MdPets } from "react-icons/md";
// import { PiStudentBold } from "react-icons/pi";
// import { WiSmoke } from "react-icons/wi";

// const Regulation = ({ selectComp, property }) => {
//   return (
//     <div className={`pb-4 ${selectComp > 4 ? "hidden" : ""}`}>
//       <div className={`bg-white w-full rounded-lg p-3`}>
//         <p className="text-black block font-semibold text-xl">Regulations</p>
//         <div className="flex flex-wrap gap-3 ">
//           <div className="border flex p-2 rounded-lg border-black sm:mr-4 lg:mr-8 w-full sm:w-auto">
//             <PiStudentBold className="h-6 w-6 mr-2 text-black bg-white" />
//             <p className="inline font-normal">
//               Student Friendly -{" "}
//               {property.preference === "Family" ? "No" : "Yes"}
//             </p>
//           </div>

//           <div className="border flex p-2 rounded-lg border-black sm:mr-4 lg:mr-8 w-full sm:w-auto">
//             <MdPets className="h-6 w-6 mr-2 text-black bg-white" />
//             <p className="inline font-normal">
//               Pets Allowed - {property.petsAllowed ? "Yes" : "No"}
//             </p>
//           </div>
//           {/* 
//           <div className="border flex p-2 rounded-lg border-black sm:mr-4 lg:mr-8 w-full sm:w-auto">
//             <FaPeopleGroup className="h-6 w-6 mr-2 text-black bg-white" />
//             <p className="inline font-normal">Guests Allowed</p>
//           </div> */}

//           <div className="border flex p-2 rounded-lg border-black sm:mr-4 lg:mr-8 w-full sm:w-auto">
//             <BsPeopleFill className="h-6 w-6 mr-2 text-black bg-white" />
//             <p className="inline font-normal">
//               Families Allowed -{" "}
//               {property.preference === "Family" ? "Yes" : "No"}
//             </p>
//           </div>
//           {/* 
//           <div className="border flex p-2 rounded-lg border-black sm:mr-4 lg:mr-8 w-full sm:w-auto">
//             <WiSmoke className="h-6 w-6 mr-2 text-black bg-white" />
//             <p className="inline font-normal">Smokers Allowed</p>
//           </div> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Regulation;




import React from "react";
import { BsPeopleFill } from "react-icons/bs";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdPets } from "react-icons/md";
import { PiStudentBold } from "react-icons/pi";
import { WiSmoke } from "react-icons/wi";

const Regulation = ({ selectComp, property }) => {
  return (
    <div className={`pb-4 ${selectComp > 4 ? "hidden" : ""}`}>
      <div className={`bg-white w-full rounded-lg p-3 pl-4`}>
        <p className="text-black block font-semibold text-xl mb-2">
          Regulations
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:flex lg:flex-wrap lg:gap-10">
          <div className="border flex rounded-lg border-black p-2 w-full sm:w-fit items-center px-3 py-1">
            <PiStudentBold className="h-5 w-5 mr-2 text-black bg-white" />
            <p className="inline font-normal text-sm md:text-md lg:text-lg">
              Student Friendly -{" "}
              {property.preference === "Family" ? "No" : "Yes"}
            </p>
          </div>

          <div className="border flex rounded-lg border-black p-2 w-full sm:w-fit items-center px-3 py-1">
            <MdPets className="h-5 w-5 mr-2 text-black bg-white" />
            <p className="inline font-normal text-sm md:text-md lg:text-lg">
              Pets Allowed - {property.petsAllowed ? "Yes" : "No"}
            </p>
          </div>
          {/* 
          <div className="border flex p-2 rounded-lg border-black sm:mr-4 lg:mr-8 w-full sm:w-auto">
            <FaPeopleGroup className="h-6 w-6 mr-2 text-black bg-white" />
            <p className="inline font-normal">Guests Allowed</p>
          </div> */}

          <div className="border flex rounded-lg border-black p-2 w-full sm:w-fit items-center px-3 py-1">
            <BsPeopleFill className="h-5 w-5 mr-2 text-black bg-white" />
            <p className="inline font-normal text-sm md:text-md lg:text-lg">
              Families Allowed -{" "}
              {property.preference === "Family" ? "Yes" : "No"}
            </p>
          </div>
          {/* 
          <div className="border flex p-2 rounded-lg border-black sm:mr-4 lg:mr-8 w-full sm:w-auto">
            <WiSmoke className="h-6 w-6 mr-2 text-black bg-white" />
            <p className="inline font-normal">Smokers Allowed</p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Regulation;
