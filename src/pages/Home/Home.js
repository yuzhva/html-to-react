import React from 'react';

import { SignUpModal } from 'components';

const Home = () => {
  const [isOpened, setOpened] = React.useState(false);

  const toggleModal = React.useCallback(() => setOpened(!isOpened), [isOpened]);

  return (
    <div>
      <button type="button" onClick={toggleModal}>
        Sign up
      </button>

      <SignUpModal isOpened={isOpened} onClose={toggleModal} />
    </div>
  );
};

export default Home;
