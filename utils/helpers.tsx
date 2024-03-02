export function truncateText(text: string, size?: 'sm' | 'md' | 'lg') {
  let maxLength = 15
  if (size === 'md') {
    maxLength = 88
  } else if (size === 'lg') {
    maxLength = 350
  }

  return text.length > maxLength ? text.slice(0, maxLength - 1) + '...' : text
}
