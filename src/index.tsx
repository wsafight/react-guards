import React, {
  Component,
  ComponentClass,
  FunctionComponent
} from 'react';
import { canPassGuard, canPassGuardParams, setGlobalCurrent } from './guard';

type ReactComponent = ComponentClass | FunctionComponent

interface ReactGuardsProps extends canPassGuardParams {
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
    canPassGuard({ target, current }).then((res: boolean) => {
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
  canPassGuard,
  ReactGuardsProps,
  setGlobalCurrent,
}

export default ReactGuards