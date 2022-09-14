import { toast } from "react-toastify";

export const notifySuccess = (message: string, position?: any) => {
  return toast.success(message, {
    position: position,
  });
};

export const notifyErr = (message: string, position?: any) => {
  return toast.error(message, {
    position: position,
  });
};

export const notifyInfo = (message: string, position?: any) => {
  console.log("🚀 ~ file: notify.ts ~ line 16 ~ notifyInfo ~ message", message)
  return toast.info(message, {
    position: position,
  });
};
