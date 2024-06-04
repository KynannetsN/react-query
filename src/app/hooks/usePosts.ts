import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchPosts = async ({ queryKey } : any) => {
  const [, page] = queryKey;
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts', {
    params: { _page: page, _limit: 10 },
  });
  return data;
};

export const usePosts = (page: number) => {
  return useQuery({
    queryKey: ['posts', page],
    queryFn: fetchPosts,
  });
};
