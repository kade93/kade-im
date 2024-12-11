import React from "react";
import Modal from "@/components/ui/modal";
import QuestForm from "@/components/quests/QuestForm";

interface QuestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const QuestModal: React.FC<QuestModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h3 className="text-xl font-bold mb-4 text-gray-800 text-center">
        Request a Quest to Kade
        </h3>
      <p className="text-sm text-gray-600 mb-4">
        You can contact through this form, and Kade will develop your idea and get back to you 
        <strong> (if possible, depending on the situation).</strong>
        <br />
        Your request may also can be shared on the project section.
        <br />
    </p>
      <QuestForm onClose={onClose} />
    </Modal>
  );
};

export default QuestModal;
