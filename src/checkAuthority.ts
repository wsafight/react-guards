
type TargetVal = undefined |
  string |
  string[] |
  Promise<boolean>

type TargetFun = (has?: string | string[]) => TargetVal

export type ITarget = undefined | TargetVal | TargetFun

export interface CheckAuthorityParams {
  target?: ITarget
  has?: string | string[]
}

export const checkAuthority = async (
  { target, has }: CheckAuthorityParams
): Promise<boolean> => {
  if (!target) {
    return true
  }

  if (Array.isArray(has) && has.length === 0) {
    return false
  }

  if (typeof target === 'string') {
    if (!has) {
      return false
    }
    if (Array.isArray(has)) {
      return has.some(item => item === target)
    }
    return has.includes(target)
  }

  if (Array.isArray(target)) {
    if (!has) {
      return false
    }
    if (Array.isArray(has)) {
      return has.some(item => target.includes(item))
    }
    return target.includes(has)
  }


  if (target instanceof Promise) {
    return target;
  }

  if (typeof target === 'function') {
    const result = await target(has)
    return !!result
  }
  return false
}