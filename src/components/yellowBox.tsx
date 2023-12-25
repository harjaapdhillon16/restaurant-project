export const YellowBox = () => {
  return (
    <div className='z-50 bg-opacity-0 md:absolute md:bottom-[-150px] md:px-[20px]'>
      <div className='flex w-full items-center'>
        <div className='md:w-[40%]' />
        <div className='w-full md:w-[60%] md:px-12'>
          <div className='rounded-sm bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400 p-10'>
            <p className='w-[80%] text-yellow-950'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
