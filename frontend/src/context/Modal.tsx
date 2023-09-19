import React, {
  useContext,
  createContext,
  useState,
  useRef,
  useEffect,
} from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

type ModalContextValue = HTMLDivElement | null;

export const ModalContext = createContext<ModalContextValue>(null);

export function ModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const [value, setValue] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    setValue(modalRef.current);
  }, []);

  return (
    <>
      <ModalContext.Provider value={value}>
        {children}
      </ModalContext.Provider>
      <div ref={modalRef} />
    </>
  );
}

export function Modal({
  onClose,
  children,
}: {
  onClose: () => void;
  children: React.ReactNode;
}) {
  const modalNode = useContext(ModalContext);
  if (!modalNode) return null;

  return ReactDOM.createPortal(
    <div id="modal">
      <div
        id="modal-background"
        onClick={onClose}
        className="fade-in"
      />
      <div id="modal-content" className="fade-in-grow">
        {children}
      </div>
    </div>,
    modalNode
  );
}
