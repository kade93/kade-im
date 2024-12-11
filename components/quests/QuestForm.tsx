import React, { useState } from "react";

interface QuestFormProps {
  onClose: () => void;
}
const FORM_ENDPOINT = "https://script.google.com/macros/s/AKfycbwRbm9hGoHIcAznwVPrKnX1C9Z1DWMHhBft-AaOfYPflwr3ndjBZcZgCkkFsdhxaEY2/exec"; // Web App URL

const QuestForm: React.FC<QuestFormProps> = ({ onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    const formData = new URLSearchParams({
      name,
      email,
      description,
    });

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        if (result.result === "success") {
          setMessage("Your request has been successfully submitted!");
          setName("");
          setEmail("");
          setDescription("");
        } else {
          throw new Error(result.error || "Unknown error");
        }
      } else {
        throw new Error("Failed to submit the form. Please try again.");
      }
    } catch (error:any) {
      setMessage(error.message || "An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleFormSubmit} className="space-y-4">
      {message && <p className="text-sm text-gray-700">{message}</p>}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Your Name (NickName)
        </label>
        <input
          name="Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded-lg"
          placeholder="Enter your name"
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Your Email
        </label>
        <input
          name="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded-lg"
          placeholder="Enter your email"
          required
        />
      </div>
      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
          Description
        </label>
        <textarea
          name="Description"
          id="description"
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border rounded-lg text-black bg-white overflow-y-auto"
          placeholder="Describe your request"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
};

export default QuestForm;
