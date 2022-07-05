import React, {
  Component,
  ComponentClass,
  FunctionComponent
} from 'react';
import { checkAuthority, CheckAuthorityParams } from './checkAuthority';

type ReactComponent = ComponentClass | FunctionComponent

interface ReactGuardsProps extends CheckAuthorityParams {
  errComponent?: ReactComponent
  loadingComponent?: ReactComponent
  children?: any
}

interface ReactGuardsState {
  status: 'loading' | 'success' | 'fail'
}

class ReactGuards extends Component<ReactGuardsProps, ReactGuardsState> {
  state: Readonly<ReactGuardsState> = {
    status: 'loading'
  }

  componentDidMount() {
    this.checkThenRender()
  }

  checkThenRender = () => {
    const { target, current } = this.props
    checkAuthority({ target, current }).then((res: boolean) => {
      this.setState({ status: res ? 'success' : 'fail' })
    }).catch(() => {
      this.setState({ status: 'fail' })
    })
  }

  render(): React.ReactNode {
    const { children, loadingComponent: LoadComponent, errComponent: ErrorComponent } = this.props
    const { status } = this.state

    if (status === 'loading') {
      return LoadComponent ? <LoadComponent /> : null
    }

    if (status === 'fail') {
      return ErrorComponent ? <ErrorComponent /> : null
    }

    return children
  }
}

export {
  ReactGuards,
  checkAuthority,
  ReactGuardsProps,
}

export default ReactGuards