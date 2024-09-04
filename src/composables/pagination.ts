import { ref } from "vue";
import useApi from "./api";
const { getResource } = useApi();

export default function usePagination(path: string, q?:any ,query?: any) {
  const totalPage = ref<number>(0);
  const currentPage = ref<number>(1);
  const result = ref<any[]>([]);
  const pageList = ref<number[]>([]);
  const limitPage = ref<number>(10);
  const totalData = ref<number>(0);
  const startNumber = ref<number>(0);
  const endNumber = ref<number>(0);

  async function nextPage() {
    if (currentPage.value < totalPage.value) {
      currentPage.value++;
    }
    await fetchData();
  }

  async function prevPage() {
    if (currentPage.value > 1) {
      currentPage.value--;
    }
    await fetchData();
  }

  async function goToPage(page: number) {
   if(page > 0 && page <= totalPage.value){
     currentPage.value = page;
   }
   await fetchData();
  }

  async function goToFirstPage() {
    currentPage.value = 1;
    await fetchData();
  }

  async function goToLastPage() {
    currentPage.value = totalPage.value;
    await fetchData();
  }

  function generateButtons() {
    pageList.value = [];
    if (currentPage.value > 3 && currentPage.value < (totalPage.value - 1)) {
      pageList.value = [currentPage.value - 1, currentPage.value, currentPage.value + 1];
    } else if (currentPage.value > 3 && currentPage.value >= totalPage.value - 1) {
      pageList.value = [totalPage.value - 3, totalPage.value - 2, totalPage.value - 1, totalPage.value];
    } else if (currentPage.value === 1 && currentPage.value === totalPage.value) {
      pageList.value = [1];
    } else if (currentPage.value > 1 && currentPage.value === totalPage.value) {
      pageList.value = [totalPage.value - 1, totalPage.value];
    } else if (totalPage.value <= 4) {
      for (let i = 1; i <= totalPage.value; i++) {
        pageList.value.push(i);
      }
    } else {
      pageList.value = [1, 2, 3, 4];
    }
  }

  async function fetchData() {
    let query = [];
    if(q.value){
      query.push(`${path}${q.value}&page=${currentPage.value}&paginate=${limitPage.value}`);
    } else {
      query.push(`${path}?page=${currentPage.value}&paginate=${limitPage.value}`);
    }
    const response:any = await getResource(query[0]);
    console.log(response.data.data.current);
    result.value = response.data.data;
    totalPage.value = response.data.total;
    totalData.value = Math.ceil(response.data.total / limitPage.value);
    currentPage.value = Number(response.data.current_page);
    generateButtons();
    startNumber.value = (currentPage.value - 1) * limitPage.value + 1;
    endNumber.value = totalData.value
  }


  async function search() {
    let search = [];
    console.log(q.value);
    if(q != '' && q.value){
      search.push(`${path}${q.value}&page=${currentPage.value}&paginate=${limitPage.value}&search=${query.value}`);
    } else {
      search.push(`${path}?page=${currentPage.value}&paginate=${limitPage.value}&search=${query.value}`);
    }
    const response = await getResource(search[0]);
    const data: any = await response;
    result.value = data.data.data;
    totalPage.value = data.data.totalPage;
    totalData.value = data.data.totalRows;
    currentPage.value = data.data.pageNumber;

    generateButtons();
    startNumber.value = (currentPage.value - 1) * limitPage.value + 1;


  }

  function isLastPage() {
    return currentPage.value === totalPage.value;
  }

  async function changeLimit(limit: number) {
    currentPage.value = 1;
    limitPage.value = limit;
    await fetchData();
  }

  function isFirstPage() {
    return currentPage.value === 1;
  }

  return {
    result,
    startNumber,
    currentPage,
    totalPage,
    totalData,
    pageList,
    limitPage,
    changeLimit,
    nextPage,
    prevPage,
    goToPage,
    goToFirstPage,
    goToLastPage,
    search,
    isLastPage,
    isFirstPage,
    fetchData,
    endNumber
  }

}