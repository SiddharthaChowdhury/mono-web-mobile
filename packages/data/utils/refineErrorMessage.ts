export const refineErrorMessage = (e: unknown): string => {
  if (e instanceof Error) {
    return e.message;
  }
  return JSON.stringify({ e });
};
