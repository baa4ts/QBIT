const SuspenseLoading = () => {
  return (
    <div className='flex h-screen w-full items-center justify-center bg-black text-white'>
      <div className='flex flex-col items-center'>
        <div className='mb-4 h-24 w-24 animate-spin rounded-full border-12 border-t-blue-500 border-r-transparent border-b-blue-500 border-l-transparent'></div>
        <p className='animate-pulse text-3xl font-medium'>Cargando</p>
      </div>
    </div>
  );
};

export default SuspenseLoading;
