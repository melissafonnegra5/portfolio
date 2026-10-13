/** Rellena "{n}" o "{title}" en un texto del diccionario. */
export const fill = (text, values) =>
  text.replace(/\{(\w+)\}/g, (_, key) => String(values[key] ?? ''));
