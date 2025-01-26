import { ErrorMessage } from "formik";

const ErrorAlert = ({ name }) => {
  return (
    <div className="text-red-500">
      <ErrorMessage name={name} />
    </div>
  );
};

export default ErrorAlert;
