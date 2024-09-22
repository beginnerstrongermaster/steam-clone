interface FetchedResponse<T> {
  count: number;
  next: string;
  previous: string;
  results: T[];
}

export default FetchedResponse;
