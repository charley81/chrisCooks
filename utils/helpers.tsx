export function truncateText(text: string, size?: 'sm' | 'md' | 'lg') {
  let maxLength = 15
  if (size === 'md') {
    maxLength = 48
  } else if (size === 'lg') {
    maxLength = 88
  }

  return text.length > maxLength ? text.slice(0, maxLength - 1) + '...' : text
}
