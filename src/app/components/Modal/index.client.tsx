/**
 * @typedef {Object} ModalProps
 * @property {React.ReactNode} children - The children of the Modal component
 */
type ModalProps = {
  children?: React.ReactNode;
  onClose: () => void;
  isOpen: boolean;
};

/**
 * @description A modal that displays its children inside a modal component
 * @dev Component is position absolute and takes full width and height of parent element
 * @dev Place content of modal between modal component as children
 * @param {ModalProps} props - The props for the Modal component
 * @returns {JSX.Element} The Modal component
 */
const Modal: React.FC<ModalProps> = ({ children, onClose, isOpen }) => {
  return (
    <div
      className={`absolute top-0 left-0 w-full h-full items-center justify-center bg-gray-800 bg-opacity-75 ${
        isOpen ? "flex" : "hidden"
      }`}
    >
      {children}
    </div>
  );
};

export default Modal;
