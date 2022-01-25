import { NextPage } from 'next';

type Page = NextPage & {
  route: {
    path: string;
    queryParams?: {
      [key: string]: string;
    };
  }
};
export default Page;
