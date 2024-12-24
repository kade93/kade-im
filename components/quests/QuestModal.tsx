import React , {useState } from "react";
import Modal from "@/components/ui/modal";
import QuestForm from "@/components/quests/QuestForm";

interface QuestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const QuestModal: React.FC<QuestModalProps> = ({ isOpen, onClose }) => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleFormSuccess = () => {
    setShowSuccessMessage(true); // Show success message
    setTimeout(() => {
      setShowSuccessMessage(false); // Reset success message after a delay
      onClose(); // Close the modal
    }, 3000); // 3-second delay
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h3 className="text-xl font-bold mb-4 text-gray-800 text-center">
        Request a Quest to Kade
      </h3>
      {showSuccessMessage ? (
        <p className="text-sm text-green-600 mb-4">
          Thank you! Your request has been submitted successfully.
        </p>
      ) : (
        <>
          <p className="text-sm text-gray-600 mb-4">
            You can contact through this form, and Kade will develop your idea and get back to you{" "}
            <strong>(if possible, depending on the situation).</strong>
            <br />
            Your request may also be shared on the project section.
          </p>
          <QuestForm onClose={onClose} onSubmitSuccess={handleFormSuccess} />
        </>
      )}
    </Modal>
  );
};

export default QuestModal;
