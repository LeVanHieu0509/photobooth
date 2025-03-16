import { ERROR, SUCCESSFUL, TO_DO, WARNING } from "@/constants/app/message";
import { toast, ToastOptions } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export type AlertType = "SUCCESSFUL" | "ERROR" | "WARNING" | "TO_DO" | null;

export const Alert = (type: AlertType, message: string, options?: ToastOptions) => {
  switch (type) {
    case SUCCESSFUL: {
      toast.success(message, {
        position: toast.POSITION.TOP_RIGHT,
        ...options,
      });
      break;
    }
    case ERROR: {
      toast.error(message, {
        position: toast.POSITION.TOP_RIGHT,
        ...options,
      });
      break;
    }
    case WARNING: {
      toast.warn(message, {
        position: toast.POSITION.TOP_RIGHT,
        ...options,
      });
      break;
    }
    case TO_DO: {
      toast.error(message, {
        autoClose: false,
        position: toast.POSITION.TOP_RIGHT,
        ...options,
      });
      break;
    }
    default:
      toast.info(message, {
        position: toast.POSITION.TOP_RIGHT,
        ...options,
      });
  }
};
