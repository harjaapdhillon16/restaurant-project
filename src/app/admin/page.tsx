'use client';
import dayjs from 'dayjs';
import { useCallback, useEffect, useState } from 'react';

import { supabase } from '@/lib/supabase';

function AdminPage() {
  const [bookings, setBookings] = useState([]);

  const fetchBookings = useCallback(async () => {
    const { data, error } = await supabase
      .from('bookings') // Replace 'bookings' with your table name
      .select('*');

    if (error) {
      console.error('Error fetching data', error);
      return;
    }

    setBookings(data as any);
  }, []);

  // Fetch table bookings from Supabase
  useEffect(() => {
    fetchBookings();
  }, [fetchBookings]);

  return (
    <div className='p-2'>
      <h1>Table Bookings</h1>

      <div className='relative m-4 mt-4 overflow-x-auto rounded border'>
        <table className='w-full text-left text-sm text-gray-500 rtl:text-right '>
          <thead className='bg-gray-50 text-xs uppercase text-gray-700 '>
            <tr>
              <th scope='col' className='px-6 py-3'>
                Name
              </th>
              <th scope='col' className='px-6 py-3'>
                Email
              </th>
              <th scope='col' className='px-6 py-3'>
                Number of Guests
              </th>
              <th scope='col' className='px-6 py-3'>
                Remarks
              </th>
              <th scope='col' className='px-6 py-3'>
                Date
              </th>
              <th scope='col' className='px-6 py-3'>
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking: any, index) => (
              <tr key={index} className='border-b bg-white'>
                <th
                  scope='row'
                  className='whitespace-nowrap px-6 py-4 font-medium text-gray-900 '
                >
                  {booking.name}
                </th>
                <td className='px-6 py-4'>{booking.email}</td>
                <td className='px-6 py-4'>{booking.numberOfGuests}</td>
                <td className='px-6 py-4'>{booking.remarks}</td>
                <td className='px-6 py-4'>
                  {dayjs(booking.date).format('DD MMMM YYYY, HH:MM')}
                </td>
                <td>
                  <div className='flex items-center space-x-5'>
                    <button className='font-medium text-blue-600 hover:underline dark:text-blue-500'>
                      Confirm
                    </button>
                    <button className='font-medium text-red-600 hover:underline dark:text-red-500'>
                      Cancel
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminPage;
