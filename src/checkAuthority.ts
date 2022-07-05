
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

export const checkAuthority = async (
  { target, current }: CheckAuthorityParams
): Promise<boolean> => {
  if (!target) {
    return true
  }

  if (Array.isArray(current) && current.length === 0) {
    return false
  }

  if (typeof target === 'string') {
    if (!current) {
      return false
    }
    if (Array.isArray(current)) {
      return current.some(item => item === target)
    }
    return current.includes(target)
  }

  if (Array.isArray(target)) {
    if (!current) {
      return false
    }
    if (Array.isArray(current)) {
      return current.some(item => target.includes(item))
    }
    return target.includes(current)
  }


  if (target instanceof Promise) {
    return target;
  }

  if (typeof target === 'function') {
    const result = await target(current)
    return !!result
  }
  return false
}