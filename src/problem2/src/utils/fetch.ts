export type FetchResult<T> = {
  loading: boolean;
  data: T | null;
  error: Error | null;
};

export const fetchData = async <T>(fn: () => Promise<T>): Promise<FetchResult<T>> => {
  const result: FetchResult<T> = {
    loading: true,
    data: null,
    error: null,
  };

  try {
    const data = await fn();
    result.data = data;
  } catch (err) {
    result.error = err instanceof Error ? err : new Error(String(err));
  } finally {
    result.loading = false;
  }

  return result;
}
