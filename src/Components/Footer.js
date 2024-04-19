import React from "react";
export const Footer = () => {
  return (
    <div className="bg-white text-black flex w-full justify-between items-center p-[50px]  text-[#565656] max-md:hidden">
      <div className="flex  gap-[50px] items-center">
        <div>
          <span>Policies: Return Policy |</span>
          <span> Terms of use |</span>
          <span> Secuirty |</span>
          <span> Privacy |</span>
          <span> Infrigment |</span>
        </div>

        <div>
          <span>© 2007-2024 brandName.com</span>
        </div>
      </div>

      <div>
        <span>
          Need help? Visit the{" "}
          <span className="text-blue-500">Help Center</span> or{" "}
          <span className="text-blue-500">Contact Us</span>
        </span>
      </div>
    </div>
  );
};
