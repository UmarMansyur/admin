export default function useApi() {
  const baseURL = import.meta.env.BASE_URL;

  async function request(method: string, url: string, body?: any) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch(`${baseURL}${url}`, {
          method,
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
        });
        const data = await response.json();
        if(!response.ok) {
          throw new Error(data.message || 'Something went wrong');
        }
        resolve(data);
      } catch (error) {
        reject(error);
      }
    })
  }

  async function getResource(method: string, url: string) {
    return await request(method, url);
  }

  async function postResource(method: string, url: string, body: any) {
    return await request(method, url, body);
  }

  async function putResource(method: string, url: string, body: any) {
    return await request(method, url, body);
  }

  async function deleteResource(method: string, url: string) {
    return await request(method, url);
  }

  return {
    getResource,
    postResource,
    putResource,
    deleteResource,
  }
}