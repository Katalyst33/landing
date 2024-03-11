import PropTypes from 'prop-types';

function ErrorField({ ...props }) {
  return (
    <div className={props.className}>
      {props.error && (
        <div
          className={`text-red-500 text-xs font-semibold inline  rounded-sm`}
        >
          {props.error}
        </div>
      )}
    </div>
  );
}

export default ErrorField;

ErrorField.propTypes = {
  error: PropTypes.string,
  className: PropTypes.string,
};
