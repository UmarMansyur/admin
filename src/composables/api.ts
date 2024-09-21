import router from "../router";
import useNotify from "./notify";

export default function useApi() {
  const baseURL = import.meta.env.VITE_API_URL;
  const { notifyError } = useNotify();
  async function request(method: string, url: string, body?: any) {
      try {
        const response = await fetch(`${baseURL}${url}`, {
          method,
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + sessionStorage.getItem("token") || "",
          },
          body: JSON.stringify(body),
        });
        const data = await response.json();
        if (!response.ok) {
          if(response.status === 401) {
            sessionStorage.removeItem('token');
            notifyError("Sesi anda telah berakhir, silahkan login kembali");
            router.push({ name: 'Login' });
          }
          throw new Error(data.message || "Something went wrong");
        }
        return data;
      } catch (error: any) {
        notifyError(error.message);
      }
  }

  async function requestFormData(method: string, url: string, body?: any) {
    try {
      const formData = new FormData();
      for (const key in body) {
        formData.append(key, body[key]);
      }
      const response = await fetch(`${baseURL}${url}`, {
        method,
        headers: {
          Authorization: "Bearer " + sessionStorage.getItem("token") || "",
        },
        body: formData,
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }
      return data;
    } catch (error: any) {
      notifyError(error.message);
    }
  }

  async function getResource(url: string) {
    return await request("GET", url);
  }

  async function postResource(url: string, body: any) {
    return await request("POST", url, body);
  }

  async function putResource(url: string, body: any) {
    return await request("PUT", url, body);
  }

  async function deleteResource(url: string) {
    return await request("DELETE", url);
  }

  async function postResourceFormData(url: string, body: any) {
    return await requestFormData("POST", url, body);
  }

  async function putResourceFormData(url: string, body: any) {
    return await requestFormData("PUT", url, body);
  }

  return {
    getResource,
    postResource,
    putResource,
    deleteResource,
    postResourceFormData,
    putResourceFormData,
  };
}
