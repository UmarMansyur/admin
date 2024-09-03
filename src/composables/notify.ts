import useNotifyStore from "../stores/notify";
export default function useNotify() {
  const notify = useNotifyStore();
  function setNotify(message: string, type: string) {
    notify.setMessage(message, type);
  }

  function notifySuccess(message: string) {
    setNotify(message, "success");
  }

  function notifyError(message: string) {
    setNotify(message, "error");
  }

  function clear() {
    notify.$reset();
  }

  function notifyWarning(message: string) {
    setNotify(message, "warning");
  }

  function notifyInfo(message: string) {
    setNotify(message, "info");
  }

  return {
    notify,
    notifyError,
    notifySuccess,
    clear,
    notifyWarning,
    notifyInfo,
  };
}