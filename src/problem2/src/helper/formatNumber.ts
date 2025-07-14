// Remove commas and spaces
export const unformatNumber = (value: string) => value.replace(/,/g, '').trim();

// Format again with commas
// export const formatNumber = (value: string) => {
//   const num = parseFloat(unformatNumber(value));
//   if (isNaN(num)) return '';
//   return num.toLocaleString(undefined, { maximumFractionDigits: 10 });
// };

export const formatNumber = (value: string) => {
  if (!value) return '';
  const num = parseFloat(value);
  if (isNaN(num)) return '';
  return num.toLocaleString(undefined, {
    maximumFractionDigits: 10,
  });
};