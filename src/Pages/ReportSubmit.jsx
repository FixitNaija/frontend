import React from "react";
import { FaCheckCircle, FaMapMarkerAlt, FaRegImage, FaClock, FaEnvelope, FaMapPin } from "react-icons/fa";
import { useNavigate } from "react-router";
import Navbar from '../Components/navbar';
import Footer from '../Components/footer'

const ReportSubmit = () => {
  const navigate = useNavigate();

  const handleViewAllIssues = () => {
    navigate("/UserIssue");
  };

  const handleSubmitAnother = () => {
    navigate("/ReportIssue");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F9FAFB] p-6">
      <Navbar />
      {/* Success Icon & Message */}
      <div className="flex flex-col items-center mb-6 text-center">
        <FaCheckCircle className="text-green-500 text-5xl mb-2" />
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">Report Submitted Successfully!</h2>
        <p className="text-gray-500 mt-1 text-sm">Thank you for contributing to improving your community</p>
      </div>

      {/* Report Details Card */}
      <div className="bg-white rounded-lg shadow p-6 w-full max-w-md">
        <h3 className="text-gray-800 font-medium mb-4">Report Details</h3>

        <div className="text-sm text-gray-600 space-y-2">
          <p><span className="font-semibold">Reference Number:</span> REFUFV06SYAJ</p>
          <p><span className="font-semibold">Issue Title:</span> Port hole</p>
          <p><span className="font-semibold">Category:</span> Roads</p>
          <p className="flex items-center gap-1">
            <FaMapMarkerAlt className="text-gray-500" />
            Abiola Way, ABK
          </p>
          <p className="flex items-center gap-1">
            <FaRegImage className="text-gray-500" />
            1 image uploaded
          </p>
        </div>

        {/* Info Box */}
        <div className="mt-6 bg-blue-50 rounded-md p-4 text-sm text-gray-700 space-y-2">
          <p className="flex items-center gap-2">
            <FaClock className="text-blue-600" />
            Your report will be reviewed within 24–48 hours
          </p>
          <p className="flex items-center gap-2">
            <FaEnvelope className="text-blue-600" />
            You'll receive updates via email and on your dashboard
          </p>
          <p className="flex items-center gap-2">
            <FaMapPin className="text-blue-600" />
            Local authorities will be notified if necessary
          </p>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-6 flex gap-4">
        <button
          onClick={handleViewAllIssues}
          className="px-6 py-2 rounded-md border border-green-600 text-green-600 hover:bg-green-50 transition"
        >
          View All Issues
        </button>
        <button
          onClick={handleSubmitAnother}
          className="px-6 py-2 rounded-md bg-green-600 text-white hover:bg-green-700 transition"
        >
          Submit Another Report
        </button>
      </div>
      <Footer className="mt-[20px]"/>
    </div>
  );
};
export default ReportSubmit;