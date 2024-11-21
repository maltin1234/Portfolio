
"use client";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import {  getUsers } from '@/app/api/users';
import DashCard from '@/app/components/DashCard'

export default function Page() {
  // Access the client
 
 
  const { data } = useQuery({
    queryKey: ['initial-users'],
    queryFn: () => getUsers(),
   
    staleTime: 5 * 1000,
  });
  // Queries



  return (
    <div className="text-white min-h-screen py-10 bg-gray-900 flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {data?.map((user) => (
            <DashCard key={user.id} user={user} />
          ))}
        </section>
      </div>
    </div>
  );
}
