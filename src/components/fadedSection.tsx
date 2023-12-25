export const FadedSection = () => {
  return (
    <div className="h-[700px] bg-[url('https://images.unsplash.com/photo-1631021967299-59d54f546248?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVzY3VpdHN8ZW58MHwwfDB8fHww')] bg-cover">
      <div
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(255,0,0,0), rgba(41, 18, 0,1))`
        }}
        className='h-[700px] w-full pt-[200px]'
      >
        <div className='mx-auto border-2 border-[#ffed8c] bg-black bg-opacity-20 p-5 md:w-[600px] '>
          <div className='mx-auto text-center md:w-[400px]'>
            <p className='text-[#ffed8c]'>EVENTS</p>
            <p className='text-4xl text-[#fffced]'>
              We Do Private
              <br /> Parties
            </p>
            <p className='text-[#fffced]'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.{' '}
            </p>
            <p className='text-[#fffced]'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.{' '}
            </p>
            <button className='mb-10 mt-6 bg-[#ffed8c] p-2 px-5'>
              GET STARTED
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
