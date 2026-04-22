import { useState } from 'react';

export const Menu = () => {
  const [open, setOpen] = useState(false);

  const handleOpenMenu = () => {
    setOpen((prev) => !prev);
  };

  return (
    <button
      className="menu"
      aria-expanded={open}
      aria-controls="main-menu"
      onClick={handleOpenMenu}
    >
      Menu
    </button>
  );
};
