"use client";

import { Component, ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback ?? (
        <div className="w-full h-[500px] md:h-[600px] rounded-lg bg-paper border border-[0.5px] border-ink/10 flex items-center justify-center">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-ash">
            3D preview unavailable
          </span>
        </div>
      );
    }
    return this.props.children;
  }
}
