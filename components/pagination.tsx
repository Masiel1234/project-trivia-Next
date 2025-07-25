
interface Props {
  currentPage: number;
  lastPage?: number;
  pageNumbers?: number[];
  basePath: string;
  queryParams?: Record<string, string>;
  useRouterNav?: boolean;
  showNumbers?: boolean;
}

 const Pagination = ({
    currentPage
  lastPage
  pageNumbers
  basePath
  queryParams  useRouterNav
  showNumbers
 })