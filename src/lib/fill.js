/** Fills "{n}" or "{title}" placeholders in a dictionary string. */
export const fill = (text, values) =>
  text.replace(/\{(\w+)\}/g, (_, key) => String(values[key] ?? ''));
