import React from 'react';

function TitleBar() {
  return (
    <div className="fixed w-full flex justify-between bg-transparent px-5 py-3">
      <img src="./iemsis-logo-removebg.png" alt="iemsis-logo" />
      <div className="text-white w-1/12 flex justify-between px-3 cursor-text underline">
        <a href="/">Help</a>
        <a href="/">About?</a>
      </div>
    </div>
  );
}

export default TitleBar;
