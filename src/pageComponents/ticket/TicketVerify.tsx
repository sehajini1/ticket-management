import { useParams } from "react-router-dom";
import { Button } from "../../@/components/ui/button";
import React from "react";

export default function TicketVerify() {
    //const memberId = useParams();
    const { id } = useParams<{ id: string }>();
    console.log("id",id);
    // console.log("id",memberId);
  const handleVerifyClick = () => {
    console.log("Verifying member...");
    // console.log("my id",memberId);
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <div className="w-full max-w-md p-4 bg-white shadow-lg rounded-lg">
        <>
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
            Verify Member
          </h2>
          <Button
            onClick={handleVerifyClick}
            className="w-full bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-300"
          >
            Verify Member
          </Button>
        </>

        {/* <p className="text-center text-gray-500">Scanning QR Code...</p> */}
      </div>
    </div>
  );
}
