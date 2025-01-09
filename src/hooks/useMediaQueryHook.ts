import { useMediaQuery } from "@uidotdev/usehooks";

export default function useMediaQueryHook() {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 544px)");

  const isSemiSmallDevice = useMediaQuery(
    "only screen and (min-width : 545px) and (max-width : 640px)",
  );
  const isSemiMediumDevice = useMediaQuery(
    "only screen and (min-width : 641px) and (max-width : 768px)",
  );
  const isMediumDevice = useMediaQuery(
    "only screen and (min-width : 768px) and (max-width : 992px)",
  );
  const isLargeDevice = useMediaQuery(
    "only screen and (min-width : 993px) and (max-width : 1314px)",
  );
  const isExtraLargeDevice = useMediaQuery(
    "only screen and (min-width : 1314px)",
  );

  return {
    isSmallDevice,
    isSemiSmallDevice,
    isSemiMediumDevice,
    isMediumDevice,
    isLargeDevice,
    isExtraLargeDevice,
  };
}
