type Props = {
  error?: unknown;
};

export const SimpleError = (props: Props) => {
  const { error } = props;
  const getErrorDetail = () => {
    if (error instanceof Error) {
      return `(${error.message})`;
    }
    return "";
  };

  return (
    <p className={"text-red-600"}>something went wrong ! {getErrorDetail()}</p>
  );
};
