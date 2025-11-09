import { useState } from 'react';

interface BannerInputProps {
  banner: string;
  setBanner: React.Dispatch<React.SetStateAction<string>>;
}

const BannerInput = ({ banner, setBanner }: BannerInputProps) => {
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setBanner(value);

    if (value && !/\.(jpg|jpeg|png|gif|webp)$/i.test(value)) {
      setError('El link debe ser una imagen válida (jpg, png, gif, webp)');
    } else {
      setError('');
    }
  };

  return (
    <div className='flex w-full flex-col gap-2 p-2'>
      <label className='font-bold text-white'>Banner</label>
      <input
        type='text'
        placeholder='Pega el link del banner'
        value={banner}
        onChange={handleChange}
        className='rounded bg-gray-700 px-3 py-2 text-white focus:ring-2 focus:ring-green-500 focus:outline-none'
      />
      {error && <p className='text-sm text-red-500'>{error}</p>}

      {banner && !error && (
        <div className='mt-2'>
          <img src={banner} alt='Preview Banner' className='max-h-40 w-full rounded object-cover shadow' />
        </div>
      )}
    </div>
  );
};

export default BannerInput;
