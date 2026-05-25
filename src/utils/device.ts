export function deviceFingerprint(): string {
  try {
    const nav = typeof navigator !== 'undefined' ? navigator : { userAgent: 'node' }
    const parts = [nav.userAgent || '', (nav as any).platform || '', String((new Date()).getTimezoneOffset())]
    // simple hash
    let hash = 0
    const s = parts.join('::')
    for (let i = 0; i < s.length; i++) {
      const chr = s.charCodeAt(i)
      hash = ((hash << 5) - hash) + chr
      hash |= 0
    }
    return 'df_' + Math.abs(hash)
  } catch (e) {
    return 'df_unknown'
  }
}
