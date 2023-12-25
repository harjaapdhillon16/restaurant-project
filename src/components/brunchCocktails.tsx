const images = [
  {
    title: 'BLACK BEERS BLISS',
    subtitle: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`,
    image:
      'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZHJpbmt8ZW58MHwwfDB8fHww'
  },
  {
    title: 'CHAMPAGNE',
    subtitle: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`,
    image:
      'https://images.unsplash.com/photo-1498429152472-9a433d9ddf3b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGNoYW1wYWduZXxlbnwwfDB8MHx8fDA%3D'
  },
  {
    title: 'LEMON THE FLUME',
    subtitle: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`,
    image:
      'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVlciUyMGdsYXNzfGVufDB8MHwwfHx8MA%3D%3D'
  }
];

export const BrunchCocktails = () => {
  return (
    <>
      <div className='mx-auto mt-[120px] w-[80vw] pb-[80px]'>
        <p className='text-[#ffed8c]'> DRINK</p>
        <p className='text-6xl text-[#fffced]'>Brunch Cocktails</p>
        <div className='mt-10 grid space-y-8 md:grid-cols-3 md:space-x-10 md:space-y-0 '>
          {images.map((item) => (
            <div key={item.image}>
              <img src={item.image} className='h-[400px] w-full object-cover' />
              <p className='mt-3 text-lg text-[#ffed8c]'>{item.title}</p>
              <p className='text-[#805100]'>{item.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
