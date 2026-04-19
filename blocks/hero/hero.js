export default function decorate(block) {
  block.setAttribute('id', 'brand-concierge-mount');

  const [nav] = performance.getEntriesByType('navigation');
  if (nav?.type !== 'reload') return;

  try { localStorage.clear(); } catch { /* storage may be blocked */ }
}
