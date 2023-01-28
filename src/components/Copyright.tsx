import * as React from 'react';

interface PaginationButtonsProps {
}

const PaginationButtons: React.FC<PaginationButtonsProps> = () => {
  return (
    <>
      <p className="copyright">
        &copy; Copyright by
        <a
          className="twitter-link"
          target="_blank"
        // href="https://twitter.com/jonasschmedtman"
        >Daniel Robles</a>. Use for learning or your portfolio. Don't use to teach. Don't claim
        as your own.
      </p>
    </>
  );
}

export default PaginationButtons;