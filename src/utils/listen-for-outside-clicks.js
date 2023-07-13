/* eslint-disable */
export default function listenForOutsideClicks(
  listening,
  setListening,
  menuRef,
  setIsOpen
) {
  /* eslint-disable */
  return () => {
    <eslint-disable-next-line/>
    if (listening) return;
    if (!menuRef.current) return;
    setListening(true);
    [`click`, `touchstart`].forEach((type) => {
      document.addEventListener(`click`, (evt) => {
        const cur = menuRef.current;
        const node = evt.target;
        <eslint-disable-next-line/>
        /* eslint-disable */
        if (cur.contains(node)) return;
        setIsOpen(false);
      });
    });
  };
}
