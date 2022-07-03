

export type IAuthority =
  undefined |
  string |
  Promise<boolean> |
  ((authority?: string | string[]) => IAuthority)

export interface CheckAuthorityParams {
  authority?: IAuthority
  allAuthority?: string | string[]
}

export const checkAuthority = async (
  { authority, allAuthority }: CheckAuthorityParams
): Promise<boolean> => {
  if (!authority) {
    return true
  }

  if (Array.isArray(authority) && authority.length === 0) {
    return false
  }

  if (typeof authority === 'string') {
    if (!allAuthority) {
      return true
    }
    if (Array.isArray(allAuthority)) {
      return allAuthority.some(item => item === authority)
    }
    return allAuthority.includes(authority)
  }


  if (authority instanceof Promise) {
    return authority;
  }

  if (typeof authority === 'function') {
    const result = await authority(allAuthority)
    return !!result;
  }
  return false;
}