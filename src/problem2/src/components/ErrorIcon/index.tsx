
type TErrorIconProps = {
  message: string;
};

export const ErrorIcon: React.FC<TErrorIconProps> = ({ message }) => {
  return (
    <div className="flex items-center gap-2 p-3 bg-red-50 text-red-600 border border-red-200 rounded-md">
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M4.93 4.93l14.14 14.14M12 2a10 10 0 100 20 10 10 0 000-20z" />
      </svg>
      <span className="text-sm">Error loading currencies: {message}</span>
    </div>
  )
}