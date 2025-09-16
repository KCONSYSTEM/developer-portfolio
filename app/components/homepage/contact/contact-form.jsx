"use client";
import { useState } from "react";
import axios from "axios";
import { TbMailForward } from "react-icons/tb";
import { toast } from "react-toastify";
import { isValidEmail } from "@/utils/check-email";

export default function ContactForm() {
  const [userInput, setUserInput] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState({ email: false, required: false });
  const [isLoading, setIsLoading] = useState(false);

  const checkRequired = () => {
    if (userInput.name && userInput.email && userInput.message) {
      setError({ ...error, required: false });
    }
  };

  const handleSendMail = async (e) => {
    e.preventDefault();

    if (!userInput.name || !userInput.email || !userInput.message) {
      setError({ ...error, required: true });
      return;
    }
    if (error.email) return;

    try {
      setIsLoading(true);
      const res = await axios.post("/api/contact", userInput);

      if (!res.data.success) throw new Error(res.data.message);

      toast.success("Message sent successfully!");
      setUserInput({ name: "", email: "", message: "" });
    } catch (err) {
      toast.error(err?.response?.data?.message || err.message || "Failed to send message.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">Contact with me</p>
      <div className="max-w-3xl text-white rounded-lg border border-[#464c6a] p-3 lg:p-5">
        <p className="text-sm text-[#d3d8e8]">
          If you have any questions or work inquiries, feel free to contact me.
        </p>

        <div className="mt-6 flex flex-col gap-4">
          {/* Name */}
          <div className="flex flex-col gap-2">
            <label className="text-base">Your Name:</label>
            <input
              type="text"
              value={userInput.name}
              onChange={(e) => setUserInput({ ...userInput, name: e.target.value })}
              onBlur={checkRequired}
              className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] px-3 py-2"
              maxLength={100}
              required
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label className="text-base">Your Email:</label>
            <input
              type="email"
              value={userInput.email}
              onChange={(e) => setUserInput({ ...userInput, email: e.target.value })}
              onBlur={() => setError({ ...error, email: !isValidEmail(userInput.email) })}
              className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] px-3 py-2"
              maxLength={100}
              required
            />
            {error.email && <p className="text-sm text-red-400">Please provide a valid email!</p>}
          </div>

          {/* Message */}
          <div className="flex flex-col gap-2">
            <label className="text-base">Your Message:</label>
            <textarea
              value={userInput.message}
              onChange={(e) => setUserInput({ ...userInput, message: e.target.value })}
              onBlur={checkRequired}
              rows={4}
              className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] px-3 py-2"
              maxLength={500}
              required
            />
          </div>

          {/* Submit */}
          <div className="flex flex-col items-center gap-3">
            {error.required && <p className="text-sm text-red-400">All fields are required!</p>}
            <button
              onClick={handleSendMail}
              disabled={isLoading}
              className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-5 md:px-12 py-2.5 md:py-3 text-white font-medium uppercase"
            >
              {isLoading ? "Sending Message..." : <><span>Send Message</span><TbMailForward size={20} /></>}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
