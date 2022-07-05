
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

export const checkAuthority = (
  { target, current }: CheckAuthorityParams
): Promise<boolean> => new Promise(resolve => {
  if (!target) {
    resolve(true)
    return
  }

  if (target instanceof Promise) {
    resolve(target)
    return
  }

  const finalCurrent: string | string[] | undefined = current || globalCurrent;

  if (typeof target === 'function') {
    const result = target(finalCurrent)

    if (result instanceof Promise) {
      resolve(result.then(Boolean))
      return
    }

    resolve(!!result)
    return
  }

  if (Array.isArray(finalCurrent) && finalCurrent.length === 0) {
    resolve(false)
    return
  }

  if (typeof target === 'string') {
    if (!finalCurrent) {
      resolve(false)
      return
    }
    if (Array.isArray(finalCurrent)) {
      resolve(finalCurrent.some(item => item === target))
      return
    }
    resolve(finalCurrent.includes(target))
    return
  }

  if (Array.isArray(target)) {
    if (!finalCurrent) {
      resolve(false)
      return
    }
    if (Array.isArray(finalCurrent)) {
      resolve(finalCurrent.some(item => target.includes(item)))
      return
    }
    resolve(target.includes(finalCurrent))
    return
  }

  resolve(false)
})