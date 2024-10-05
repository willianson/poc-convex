import { ReactNode } from "react";

interface LoadingProps {
  show: boolean;
}

function Loading(props: LoadingProps): ReactNode {
  if (!props.show) return;
  
  return (
    <div className="loading">
      Loading...
    </div>
  );
}

export default Loading;
