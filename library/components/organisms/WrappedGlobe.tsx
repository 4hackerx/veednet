import Globe from "react-globe.gl";

export default function WrappedGlobe({
  globeRef,
  ...props
}: {
  globeRef: any;
  [key: string]: any;
}) {
  return <Globe {...props} ref={globeRef} />;
}
