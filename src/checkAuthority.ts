
type TargetVal = undefined |
  string |
  string[] |
  Promise<boolean>

type TargetFun = (current?: string | string[]) => TargetVal

export type ITarget = undefined | TargetVal | TargetFun

export interface CheckAuthorityParams {
  target?: ITarget
  current?: string | string[]
}

let globalCurrent: string | string[] | undefined

export const setGlobalCurrent = (current: string | string[]) => {
  if (!current) {
    return
  }
  if (typeof current !== 'string' && !Array.isArray(current)) {
    return
  }
  globalCurrent = current
}

export const checkAuthority = async (
  { target, current }: CheckAuthorityParams
): Promise<boolean> => {
  if (!target) {
    return true
  }

  if (target instanceof Promise) {
    return target
  }
  
  const finalCurrent: string | string[] | undefined = current || globalCurrent;

  if (typeof target === 'function') {
    const result = await target(finalCurrent)
    return !!result
  }

  if (Array.isArray(finalCurrent) && finalCurrent.length === 0) {
    return false
  }

  if (typeof target === 'string') {
    if (!finalCurrent) {
      return false
    }
    if (Array.isArray(finalCurrent)) {
      return finalCurrent.some(item => item === target)
    }
    return finalCurrent.includes(target)
  }

  if (Array.isArray(target)) {
    if (!finalCurrent) {
      return false
    }
    if (Array.isArray(finalCurrent)) {
      return finalCurrent.some(item => target.includes(item))
    }
    return target.includes(finalCurrent)
  }

  return false
}