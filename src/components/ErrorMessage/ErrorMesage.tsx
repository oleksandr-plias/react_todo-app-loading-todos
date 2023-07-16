import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

type Props = {
  error: string;
};

export const ErrorMesage: React.FC<Props> = ({
  error,
}) => {
  const [isHidden, setIsHidden] = useState(true);

  const removeNotification = () => {
    window.setTimeout(() => {
      setIsHidden(true);
    }, 3000);
  };

  const handleHideNotification = () => {
    setIsHidden(true);
  };

  useEffect(() => {
    setIsHidden(false);
    removeNotification();
  }, []);

  return (
    <div className={classNames(
      'notification',
      'is-danger',
      'is-light',
      'has-text-weight-normal', {
        hidden: isHidden,
      },
    )}
    >
      <button
        type="button"
        className="delete"
        aria-label="saveButton"
        onClick={handleHideNotification}
      />
      {error}
    </div>
  );
};