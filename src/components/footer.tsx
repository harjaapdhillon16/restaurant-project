export const Footer = () => {
  return (
    <div
      style={{ fontFamily: "'Roboto', sans-serif" }}
      className='bg-[#291200] px-20 pb-20 md:flex md:space-x-6'
    >
      <div className='text-center md:w-[40%]'>
        <img
          className='mx-auto h-20 object-contain'
          src='https://seeklogo.com/images/A/apple-logo-52C416BDDD-seeklogo.com.png'
        />
        <p className='mt-3 text-left font-light text-[#ffed8c]'>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
      </div>
      <div className='pt-5 md:w-[60%] md:pt-0'>
        <div className='grid grid-cols-2 rounded-sm bg-[#fff4b8] p-3 px-6 pb-10'>
          <div className='m-2'>
            <input
              className='w-full rounded border bg-transparent'
              placeholder='Name'
            />
          </div>
          <div className='m-2'>
            <input
              className='w-full rounded border bg-transparent'
              placeholder='Email'
            />
          </div>
          <div className='col-span-2 m-2'>
            <textarea
              placeholder='Message'
              className='h-[150px] w-full rounded bg-transparent'
            />
            <div className='ml-auto w-[fit-content]'>
              <button className='rounded border-2 border-black p-2 px-3'>
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
