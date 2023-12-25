/* eslint-disable @next/next/no-async-client-component */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
'use client';

import { Dialog, Transition } from '@headlessui/react';
import axios from 'axios';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import Head from 'next/head';
import React, { Fragment, useState } from 'react';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

import { supabase } from '@/lib/supabase';

import { BrunchCocktails } from '@/components/brunchCocktails';
import { FadedSection } from '@/components/fadedSection';
import { Footer } from '@/components/footer';
import { Location } from '@/components/location';
import { YellowBox } from '@/components/yellowBox';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

const headings = [
  {
    heading: 'Lorem Ipsum dolor Amet',
    subtitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
  },
  {
    heading: 'Lacina Eget Consecte',
    subtitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
  },
  {
    heading: 'Nulla Porttitor',
    subtitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
  },
  {
    heading: 'Nulla Porttitor',
    subtitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
  },
  {
    heading: 'Lacina Eget Consecte',
    subtitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
  },
  {
    heading: 'Lorem Ipsum dolor Amet',
    subtitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
  },
  {
    heading: 'Curabitur Arcu Erat',
    subtitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
  },
  {
    heading: 'Curabitur Arcu Erat',
    subtitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
  }
];

const FormSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  numberOfGuests: Yup.number()
    .min(1, 'At least one guest required')
    .required('Number of guests is required'),
  remarks: Yup.string().required('Remarks are required')
});

export default function HomePage() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <main style={{ fontFamily: "'Cormorant', serif" }}>
      <Head>
        <title>Hi</title>
      </Head>

      <>
        <section className='h-screen bg-black'>
          <div className='bg-black'>
            <img
              className='h-[100vh] w-screen object-cover opacity-20'
              src='https://images.unsplash.com/photo-1619108977254-314da85774bd'
            />
          </div>
          <div className='absolute top-0 z-50 h-[90vh] w-full p-[20px]'>
            <div className="flex h-[96vh] w-full items-center border-2 border-[#ffed8c] bg-[url('https://images.unsplash.com/photo-1619108977254-314da85774bd')]	bg-cover bg-center">
              <div className='md:w-[40%]' />
              <div className='flex h-full w-[100%] items-center bg-black bg-opacity-75 px-12 text-left md:w-[60%]'>
                <div>
                  <p className='text-[#ffed8c]'>JOIN US</p>
                  <p className='text-8xl text-[#fffced]'>
                    Join Us For <br /> Brunch!
                  </p>
                  <button
                    onClick={openModal}
                    className='mt-8 border border-[#ffed8c] p-3 px-6 text-sm text-[#ffed8c] transition-all hover:bg-[#ffed8c] hover:text-black'
                  >
                    WE TAKE RESERVATIONS
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <YellowBox />
        <div className='bg-[#291200]'>
          <div className='mx-auto grid w-[80vw] grid-cols-2 pt-[200px] text-center'>
            {headings.map((item, idx) => (
              <div className='p-4 pt-0' key={idx}>
                <p className='mb-5 text-xl font-bold text-[#ffed8c]'>
                  {item.heading}
                </p>
                <p className='text-[#805100]'>{item.subtitle}</p>
                <p className='mt-5 text-yellow-400'>"</p>
              </div>
            ))}
          </div>
          <BrunchCocktails />
        </div>
      </>

      <FadedSection />
      <Location />
      <Footer />
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as='div'
          className='fixed left-0 top-0 z-[1000]  h-screen'
          onClose={closeModal}
        >
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black/25' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel className='h-screen w-screen transform overflow-hidden bg-white p-6 text-left align-middle shadow-xl transition-all'>
                  <div className='flex items-center justify-between'>
                    <Dialog.Title
                      as='h3'
                      className='text-2xl font-medium leading-6 text-gray-900'
                    >
                      Book your table
                    </Dialog.Title>
                    <button
                      onClick={closeModal}
                      className='rounded-full border-2 border-gray-800'
                    >
                      <img
                        className='h-5 w-5 rounded'
                        src='https://img.icons8.com/?size=100&id=6483&format=png'
                      />
                    </button>
                  </div>
                  <Formik
                    initialValues={{
                      name: '',
                      email: '',
                      numberOfGuests: '',
                      remarks: ''
                    }}
                    Schema={FormSchema}
                    onSubmit={async (values) => {
                      await supabase.from('bookings').insert(values);
                      await axios.post('/api/send-email', {
                        ...values
                      });
                      toast.success(
                        'Booking confirmed and confirmation email seng'
                      );
                      closeModal();
                    }}
                  >
                    {({ isSubmitting, errors, touched }) => (
                      <Form className='mt-2 grid grid-cols-3 gap-2'>
                        {/* Name Field */}
                        <div>
                          <Field
                            name='name'
                            placeholder='Name'
                            className='w-full rounded p-2'
                          />
                          {touched.name && errors.name ? (
                            <div className='text-sm text-red-500'>
                              {errors.name}
                            </div>
                          ) : null}
                        </div>

                        {/* Email Field */}
                        <div>
                          <Field
                            name='email'
                            placeholder='Email'
                            className='w-full rounded p-2'
                          />
                          <ErrorMessage
                            name='email'
                            component='div'
                            className='text-sm text-red-500'
                          />
                        </div>

                        {/* Number of Guests Field */}
                        <div>
                          <Field
                            name='numberOfGuests'
                            placeholder='Number of guests'
                            type='number'
                            className='w-full rounded p-2'
                          />
                          <ErrorMessage
                            name='numberOfGuests'
                            component='div'
                            className='text-sm text-red-500'
                          />
                        </div>

                        {/* Remarks Field */}
                        <div className='col-span-3'>
                          <Field
                            name='remarks'
                            as='textarea'
                            placeholder='Enter your remarks'
                            className='w-full rounded p-2'
                          />
                          <ErrorMessage
                            name='remarks'
                            component='div'
                            className='text-sm text-red-500'
                          />
                        </div>

                        {/* Submit Button */}
                        <div className='col-span-3'>
                          <div className='ml-auto w-[fit-content]'>
                            <button
                              type='submit'
                              disabled={isSubmitting}
                              className='rounded bg-blue-500 p-1 px-6 text-white shadow-sm'
                            >
                              Submit
                            </button>
                          </div>
                        </div>
                      </Form>
                    )}
                  </Formik>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </main>
  );
}
