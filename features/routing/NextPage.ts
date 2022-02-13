import { NextPage } from 'next';

export type NextPageWithRouting = NextPage & {
  route: {
    path: string;
    queryParams?: {
      [key: string]: string;
    };
  }
};
